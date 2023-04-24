const button = document.querySelector(".btn");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

button.addEventListener("click", () => {
   if (box1.getAttribute("class") === "box box1") {
      box1.setAttribute("class", "box box2");
      box2.setAttribute("class", "box box1");
   } else {
      box2.setAttribute("class", "box box2");
      box1.setAttribute("class", "box box1");
   }
});
