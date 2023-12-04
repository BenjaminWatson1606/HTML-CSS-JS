const topNav = document.createElement("div");
topNav.classList.add('topnav');
document.body.appendChild(topNav);

const links = document.createElement("div");
links.classList.add('links');
topNav.appendChild(links);

const ex1 = document.createElement("a");
ex1.classList.add("search-link");
ex1.href = "ex1.html";
ex1.innerHTML = "Exercice 1"
links.appendChild(ex1);

const ex2 = document.createElement("a");
ex2.classList.add("search-link");
ex2.href = "ex2.html";
ex2.innerHTML = "Exercice 2"
links.appendChild(ex2);

const ex3 = document.createElement("a");
ex3.classList.add("search-link");
ex3.href = "ex3.html";
ex3.innerHTML = "Exercice 3"
links.appendChild(ex3);

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

const card1 = document.createElement("div");
card1.classList.add("card");
card1.addEventListener("click", card1Click);
content.appendChild(card1);

function card1Click(){
    window.location.href="http://127.0.0.1:5500/HTML-CSS-JS/JS/DOM/TP/HTML/ex1.html"
}

const img1 = document.createElement("img");
img1.src = "../assets/ax679elutu371.png"
img1.classList.add("img");
card1.appendChild(img1);

const cardContainer1 = document.createElement("div");
cardContainer1.classList.add("container");
card1.appendChild(cardContainer1);

const text1 = document.createElement("p");
text1.classList.add("text");
text1.innerHTML = "Exercice 1";
cardContainer1.appendChild(text1);




const card2 = document.createElement("div");
card2.classList.add("card");
card2.addEventListener("click", card2Click);
content.appendChild(card2);

function card2Click(){
    window.location.href="http://127.0.0.1:5500/HTML-CSS-JS/JS/DOM/TP/HTML/ex2.html"
}

const img2 = document.createElement("img");
img2.src = "../assets/ax679elutu371.png"
img2.classList.add("img");
card2.appendChild(img2);

const cardContainer2 = document.createElement("div");
cardContainer2.classList.add("container");
card2.appendChild(cardContainer2);

const text2 = document.createElement("p");
text2.classList.add("text");
text2.innerHTML = "Exercice 2";
cardContainer2.appendChild(text2);




const card3 = document.createElement("div");
card3.classList.add("card");
card3.addEventListener("click", card3Click);
content.appendChild(card3);

function card3Click(){
    window.location.href="http://127.0.0.1:5500/HTML-CSS-JS/JS/DOM/TP/HTML/ex3.html"
}

const img3 = document.createElement("img");
img3.src = "../assets/ax679elutu371.png"
img3.classList.add("img");
card3.appendChild(img3);

const cardContainer3 = document.createElement("div");
cardContainer3.classList.add("container");
card3.appendChild(cardContainer3);

const text3 = document.createElement("p");
text3.classList.add("text");
text3.innerHTML = "Exercice 3";
cardContainer3.appendChild(text3);






