let myIcon = document.getElementById("k-icon");
let myLinks = document.getElementById("links");

myIcon.onclick = function () {
  if ((myLinks.style.display === "none")) {
    myLinks.style.display = "block";
  } else if (myLinks.style.display !== "none") {
    myLinks.style.display = "none"
  }
};
