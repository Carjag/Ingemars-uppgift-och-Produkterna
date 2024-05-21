window.onscroll = function () { // Funktioner som körs vid skrollning på hemsidan.
  navscroll ();
  scrollFunction();
}

var prevScrollpos = window.scrollY; // Js kollar currentScrollPos och offset och ändrar positionen beroende på detta. 
function navscroll () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-91px";
  }
  prevScrollpos = currentScrollPos;
}

let mybutton = document.getElementById("topbtn");

// visar knappen när man skrollar på sidan.
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { //Beroende på skrollposition ändras klasserna och visibiliteten hos knappen top.

      mybutton.style.visibility = "visible";
      mybutton.style.opacity = "1";
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("header").style.marginTop = "91px";

  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) { // Dessutom ändras klassen hos navbaren för att den skall vara sticky längst upp och inte försvinna, samt för att den inte ska stoppas av element längre ner på hemsidan (fixed)

      mybutton.style.opacity = "0";
      document.getElementById("navbar").style.position = "sticky";
      document.getElementById("header").style.marginTop = "10px";
      mybutton.style.visibility = "hidden";
  }
}

// skrollar till toppen av dokumentet när man klickar på knappen.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 