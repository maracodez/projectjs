const nav = document.createElement("nav");
nav.style.backgroundColor = "navy";
nav.style.height = "80px";

const navLink = document.createElement("div");
navLink.style.display = "flex";
navLink.style.alignItems = "center"
navLink.style.gap = "10px";
navLink.style.float = "right"


const link = ["Home", "About", "Contact", "Services"];
link.forEach(linkText => {
    const anchor = document.createElement("a");
    anchor.innerHTML = linkText;
    anchor.herf = `#${linkText.toLowerCase()}`;
    anchor.style.color = "white";
    anchor.style.fontSize = "16px";
    anchor.style.margin = "30px";
    anchor.style.cursor = "pointer"
    
    navLink.appendChild(anchor);
});

const logo = document.createElement("img");
logo.src = "./image/6.png";
logo.style.width = "5%";
logo.style.height = "10vh";
logo.style.margin = "10px";

//for it to display on browser
nav.appendChild(logo)


const imageDiv = document.createElement("div");
imageDiv.style.backgroundColor = "#ccc"
imageDiv.style.height = "80vh";
imageDiv.style.display = "flex";
imageDiv.style.flexDirection = "row"


const image = document.createElement("img");
image.src = "./image/nature.jpg";
image.style.width = "30%";
image.style.height = "60vh";
image.style.margin = "60px";

//for it to display on browse
imageDiv.appendChild(image)

const text = document.createElement("div");
const paragraph = "Nature is the diverse world of plants, animals, and landscapes that supports life on earth. It provides essential resources like air and water, while offering beauty, peace and inspiration";
const p = document.createElement("p");
p.innerHTML = paragraph;
p.style.textAlign = "center";
p.style.margin = "60px";
p.style.marginTop = "25%";

//for it to display on browse
text.appendChild(p)
imageDiv.appendChild(text)


//footer
const footer = document.createElement("nav");
footer.style.backgroundColor = "navy";
footer.style.height = "80px";

const navLinks = document.createElement("div");
navLinks.style.display = "flex";
navLinks.style.alignItems = "center"
navLinks.style.gap = "10px";
navLinks.style.float = "right"


const links = ["Home", "About", "Contact", "Services"];
links.forEach(linkTexts => {
    const ancho = document.createElement("a");
    ancho.innerHTML = linkTexts;
    ancho.herf = `#${linkTexts.toLowerCase()}`;
    ancho.style.color = "white";
    ancho.style.fontSize = "15px";
    ancho.style.margin = "30px";
    ancho.style.cursor = "pointer"
    
    navLinks.appendChild(ancho);
});

const logoFooter = document.createElement("img");
logoFooter.src = "./image/6.png";
logoFooter.style.width = "5%";
logoFooter.style.height = "10vh";
logoFooter.style.margin = "10px";



footer.appendChild(logoFooter)
footer.appendChild(navLinks)
document.body.prepend(footer)
document.body.prepend(imageDiv)
nav.appendChild(navLink)
document.body.prepend(nav);
document.body.style.margin = "0";