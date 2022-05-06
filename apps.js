//

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// EXPANDING CARDS

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

// selecting all sections with class of section
const sections = document.querySelectorAll(".section");

// Foreach section when clicked
sections.forEach((section) => {
  section.addEventListener("click", () => {
    // remove active class from all another section and
    // add it to the selected section
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    section.classList.add("active");
  });
});

// animated side navigation

function openFunction() {
  document.getElementById("nav").style.left = "0";
  document.getElementById("close").style.left = "260px";
  document.getElementById("open").style.opacity = "0";
  document.getElementById("open").style.pointerEvents = "none";
}

function closeFunction() {
  document.getElementById("nav").style.left = "-300px";
  document.getElementById("open").style.opacity = "1";
  document.getElementById("close").style.left = "-30px";
  document.getElementById("open").style.pointerEvents = "all";
}
