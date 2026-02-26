const $ = (sel) => document.querySelector(sel);

const TREE = $("#tree");
const DOC_TITLE = $("#docTitle");
// const Q = $("#q");
// const HINT = $("#hint");

let DOC = null;
let CURRENT_QUERY = "";

// mapping for deep links (tåler duplicate ids)
const DOM_ID_TO_DETAILS = new Map();
const NODEKEY_TO_DETAILS = new Map();

function setHint(msg){ /*HINT.textContent = msg || ""; */}

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function highlight(text, query){
  if (!query) return escapeHtml(text);
  const q = query.trim();
  if (!q) return escapeHtml(text);

  const lower = text.toLowerCase();
  const needle = q.toLowerCase();
  let out = "";
  let i = 0;

  while (i < text.length){
    const idx = lower.indexOf(needle, i);
    if (idx === -1){
      out += escapeHtml(text.slice(i));
      break;
    }
    out += escapeHtml(text.slice(i, idx));
    out += `<mark>${escapeHtml(text.slice(idx, idx + q.length))}</mark>`;
    i = idx + q.length;
  }
  return out;
}

function isGarbageLine(t){
  const s = (t || "").trim();

  // PDF/Extract støy
  if (!s) return true;
  if (s === "|" || s === "| elev.no") return true;
  if (s.toLowerCase() === "elevorganisasjonen | elev.no") return true;

  // “Side X av Y”
  if (/^side\s+\d+\s+av\s+\d+$/i.test(s)) return true;

  // “e/o” som egne linjer (knekte bullet glyphs)
  if (s === "e" || s === "o" || s === "e." || s === "o.") return true;

  return false;
}

// Hvis en ul-item kommer som "- foo", så stripper vi "- "
function normalizeListItem(s){
  const t = (s || "").trim();
  return t.replace(/^\-\s+/, "").trim();
}

/**
 * Normaliser content:
 * - Fjerner garbage (| elev.no, side x av y, enslig e/o)
 * - Konverterer p-linjer som starter med "-" til ul
 * - Hvis vi ser label "Elevorganisasjonen mener at:" og så mange p-linjer, forsøker vi å samle dem til ul
 */
function normalizeContent(blocks){
  const out = [];
  let i = 0;

  while (i < blocks.length){
    const b = blocks[i];

    // Filter garbage p-linjer
    if (b.type === "p"){
      const t = (b.text || "");
      if (isGarbageLine(t)){ i++; continue; }

      // P som egentlig er listepunkt
      if (/^\-\s+/.test(t.trim())){
        // start en ul
        const items = [ normalizeListItem(t) ];
        i++;
        while (i < blocks.length && blocks[i].type === "p" && /^\-\s+/.test((blocks[i].text||"").trim())){
          const nt = (blocks[i].text||"");
          if (!isGarbageLine(nt)) items.push(normalizeListItem(nt));
          i++;
        }
        out.push({ type:"ul", items });
        continue;
      }

      out.push({ type:"p", text: t });
      i++;
      continue;
    }

    if (b.type === "label"){
      out.push({ type:"label", text: b.text || "" });

      // etter label: forsøk å samle påfølgende p-linjer som bullets
      // vi stopper hvis vi møter ny label/ul eller hvis vi møter et tydelig avsnitt (lang setning) etter at vi allerede har startet liste
      i++;
      const items = [];
      while (i < blocks.length){
        const nb = blocks[i];

        if (nb.type === "label" || nb.type === "ul") break;
        if (nb.type !== "p"){ i++; continue; }

        const t = (nb.text || "");
        if (isGarbageLine(t)){ i++; continue; }

        // hvis linjen starter med "- ", ta den som item
        if (/^\-\s+/.test(t.trim())){
          items.push(normalizeListItem(t));
          i++;
          continue;
        }

        // heuristikk: etter label tolker vi korte/enkle setninger som bullets
        // (det er ofte slik “Elevorganisasjonen mener at:” er strukturert i dokumentet)
        items.push(t.trim());
        i++;
      }

      if (items.length){
        out.push({ type:"ul", items });
      }
      continue;
    }

    if (b.type === "ul"){
      const items = (b.items || [])
        .map(normalizeListItem)
        .filter(x => x && !isGarbageLine(x));
      if (items.length) out.push({ type:"ul", items });
      i++;
      continue;
    }

    // ukjent type -> hopp over
    i++;
  }

  return out;
}

function nodeKey(parentKey, node, idx){
  // idx gjør at vi får unike nøkler selv ved duplicate id
  return `${parentKey}/${node.id}__${idx}`;
}

function renderContent(node){
  const wrap = document.createElement("div");
  wrap.className = "content";

  const normalized = normalizeContent(node.content || []);

  for (const b of normalized){
    if (b.type === "p"){
      const p = document.createElement("p");
      p.innerHTML = highlight(b.text || "", CURRENT_QUERY);
      wrap.appendChild(p);
    } else if (b.type === "label"){
      const p = document.createElement("p");
      p.className = "label";
      p.innerHTML = highlight(b.text || "", CURRENT_QUERY);
      wrap.appendChild(p);
    } else if (b.type === "ul"){
      const ul = document.createElement("ul");
      for (const it of (b.items || [])){
        const li = document.createElement("li");
        li.innerHTML = highlight(it || "", CURRENT_QUERY);
        ul.appendChild(li);
      }
      wrap.appendChild(ul);
    }
  }

  return wrap;
}

function renderNode(node, parentKey, idxInParent){
  const level = node.level || 3;
  const d = document.createElement("details");
  d.className = `l${level}`;

  const s = document.createElement("summary");
  s.textContent = node.title || node.id || "Uten tittel";
  d.appendChild(s);

  const inner = document.createElement("div");
  inner.className = "lvl";

  const key = nodeKey(parentKey, node, idxInParent);
  NODEKEY_TO_DETAILS.set(key, d);

  // Deep link: prøv å gi alle noder en DOM-id, men siden id-er kan være duplikate,
  // bruker vi en stabil unik dom-id basert på key:
  const domId = `n_${btoa(unescape(encodeURIComponent(key))).replaceAll("=", "").slice(0, 40)}`;
  d.dataset.nodeKey = key;
  d.id = domId;
  DOM_ID_TO_DETAILS.set(domId, d);

  if (node.children && node.children.length){
    node.children.forEach((ch, i) => inner.appendChild(renderNode(ch, key, i)));
  } else {
    inner.appendChild(renderContent(node));
  }

  d.appendChild(inner);

  // Oppdater hash til DOM-id (ikke node.id) for å unngå duplikat-problemer
  d.addEventListener("toggle", () => {
    if (d.open){
      history.replaceState(null, "", `#${encodeURIComponent(domId)}`);
    }
  });

  return d;
}

function closeAll(){
  for (const d of DOM_ID_TO_DETAILS.values()) d.open = false;
}

function openToDomId(domId){
  const d = DOM_ID_TO_DETAILS.get(domId);
  if (!d) return false;

  // open ancestors
  let cur = d;
  while (cur){
    if (cur.tagName === "DETAILS") cur.open = true;
    cur = cur.parentElement;
    // åpne nærmeste details-ancestor
    while (cur && cur.tagName !== "DETAILS") cur = cur.parentElement;
  }

  d.scrollIntoView({ behavior:"smooth", block:"start" });
  return true;
}

function applySearch(){
  CURRENT_QUERY = (Q.value || "").trim();

  // rerender (enklest & robust)
  const openDomIds = [];
  for (const [domId, d] of DOM_ID_TO_DETAILS.entries()){
    if (d.open) openDomIds.push(domId);
  }

  TREE.innerHTML = "";
  DOM_ID_TO_DETAILS.clear();
  NODEKEY_TO_DETAILS.clear();

  DOC.nodes.forEach((n, i) => TREE.appendChild(renderNode(n, "root", i)));

  // restore open state
  for (const id of openDomIds){
    const d = DOM_ID_TO_DETAILS.get(id);
    if (d) d.open = true;
  }

  setHint(CURRENT_QUERY ? `Søk: "${CURRENT_QUERY}"` : `${countLeaves(DOC.nodes)} punkter.`);
}

function countLeaves(nodes){
  let c = 0;
  for (const n of nodes){
    if (n.children && n.children.length) c += countLeaves(n.children);
    else c++;
  }
  return c;
}

async function load(){
  setHint("Laster dokument…");
  const res = await fetch("./doc.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Kunne ikke laste doc.json (${res.status})`);
  DOC = await res.json();

  DOC_TITLE.textContent = DOC.title || "Dokument";

  TREE.innerHTML = "";
  DOM_ID_TO_DETAILS.clear();
  NODEKEY_TO_DETAILS.clear();

  DOC.nodes.forEach((n, i) => TREE.appendChild(renderNode(n, "root", i)));

  // Default: collapsed (B)
  closeAll();

  setHint(`${countLeaves(DOC.nodes)} punkter.`);

  // Deep link
  const hash = decodeURIComponent((location.hash || "").replace(/^#/, ""));
  if (hash) openToDomId(hash);
}

/*Q.addEventListener("input", () => {
  clearTimeout(window.__t);
  window.__t = setTimeout(applySearch, 120);
});*/

window.addEventListener("hashchange", () => {
  const hash = decodeURIComponent((location.hash || "").replace(/^#/, ""));
  if (hash) openToDomId(hash);
});

load().catch(err => {
  console.error(err);
  setHint("Feil ved lasting av dokument. Sjekk at doc.json ligger ved siden av index.html.");
  TREE.textContent = String(err.message || err);
});