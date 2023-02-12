let ul = document.getElementById("ul");
let i = document.getElementById("i");
let wrapper = document.getElementById("wrapper-link");
let x = document.getElementById("x");
i.addEventListener("click", () => {
  wrapper.classList.add("flex");
});
x.addEventListener("click", () => {
  wrapper.classList.remove("flex");
});
