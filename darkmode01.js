/* function toggleDarklight(){
    let body=Document.getElementById("body");
    let currentclass = body.classname;
    body.classname = currentclass == "dark-mode"? "light-mode":"dark-mode";
} */
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }