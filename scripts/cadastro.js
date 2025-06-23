var click = false;
var click2 = false;


function apareceSectionDois() {
    click = !click;
    let section1 = document.getElementById("section-principal-tela-1");
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    let section4 = document.getElementById("section-principal-tela-4");
    let section5 = document.getElementById("section-principal-tela-5");
    if (click === true) {
        section1.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section2.style.display = "block";
        click = !click;
    }
}

function apareceSectionTres() {
    click = !click;
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    let section1 = document.getElementById("section-principal-tela-1");
    let section4 = document.getElementById("section-principal-tela-4");
    let section5 = document.getElementById("section-principal-tela-5");
    if (click === true) {
        section2.style.display = "none";
        section3.style.display = "block";
        section1.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        click = !click;
    }
}

function apareceSectionQuatro() {
    click = !click;
    let section3 = document.getElementById("section-principal-tela-3");
    let section4 = document.getElementById("section-principal-tela-4");
    let section1 = document.getElementById("section-principal-tela-1");
    let section5 = document.getElementById("section-principal-tela-5");
    let section2 = document.getElementById("section-principal-tela-2");
    if (click === true) {
        section3.style.display = "none";
        section2.style.display = "none";
        section1.style.display = "none";
        section5.style.display = "none";
        section4.style.display = "block";
        click = !click;
    }
}

function apareceSectionCinco() {
    click = !click;
    let section4 = document.getElementById("section-principal-tela-4");
    let section5 = document.getElementById("section-principal-tela-5");
    let section1 = document.getElementById("section-principal-tela-1");
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    if (click === true) {
        section4.style.display = "none";
        section5.style.display = "block";
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        click = !click;
    }
}
function voltarSectionUm() {
   click2 = !click2;
   let section1 = document.getElementById("section-principal-tela-1");
   let section2 = document.getElementById("section-principal-tela-2");
   let section3 = document.getElementById("section-principal-tela-3");
   let section4 = document.getElementById("section-principal-tela-4");
   let section5 = document.getElementById("section-principal-tela-5");
   if (!click === true){
        section2.style.display = "none";
        section1.style.display = "block";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        click2 = !click2;
   }
}
function voltarSectionDois() {
    click2 = !click2;
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    let section1 = document.getElementById("section-principal-tela-1");
    let section4 = document.getElementById("section-principal-tela-4");
    let section5 = document.getElementById("section-principal-tela-5");
    if (!click === true){
         section3.style.display = "none";
         section1.style.display = "none";
         section4.style.display = "none";
         section5.style.display = "none";
         section2.style.display = "block";
         click2 = !click2;
    }
 }
 function voltarSectionTres() {
    click2 = !click2;
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    let section5 = document.getElementById("section-principal-tela-5");
    let section4 = document.getElementById("section-principal-tela-4");
    let section1 = document.getElementById("section-principal-tela-1");
    if (!click === true){
         section3.style.display = "block";
         section2.style.display = "none";
         section1.style.display = "none";
         section5.style.display = "none";
         section4.style.display = "none";
         click2 = !click2;
    }
 }

 function voltarSectionQuatro() {
    click2 = !click2;
    let section4 = document.getElementById("section-principal-tela-4");
    let section5 = document.getElementById("section-principal-tela-5");
    let section2 = document.getElementById("section-principal-tela-2");
    let section3 = document.getElementById("section-principal-tela-3");
    let section1 = document.getElementById("section-principal-tela-1");
    if (!click === true){
         section5.style.display = "none";
         section1.style.display = "none";
         section2.style.display = "none";
         section3.style.display = "none";
         section4.style.display = "block";
         click2 = !click2;
    }
 }

