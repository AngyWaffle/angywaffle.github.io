const jsonExample = '{"Laerere":{"Naturfag":"Pratima Mundhe", "Medieproduksjon":"Marthe Ødegaard", "Informasjonsteknologi":"Joakim Husefest", "Helse_og_matfag":"Ida Wolden", "Engelsk":"Walter Johnsen"}}';
const obj = JSON.parse(jsonExample);
console.log(obj.Laerere.Helse_og_matfag);