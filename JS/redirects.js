
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function bilde1() {
    location.href = "https://www.flickr.com/photos/devdsp/6999839463"
}

function bilde2() {
    location.href = "https://commons.wikimedia.org/wiki/File:World_topic_image_Satellite_image.jpg"
}

function bilde3() {
    location.href = "https://www.flickr.com/photos/vintage_illustration/45438980885"
}

function bilde4() {
    location.href = "https://commons.wikimedia.org/wiki/File:Webb%27s_New_View_of_the_Pillars_of_Creation_%282022%29_%28weic2216e%29.jpeg"
}

function bilde5() {
    location.href = "https://www.flickr.com/photos/gsfc/8804537584"
}
    
function redirect(link){
    location.href = link;
}