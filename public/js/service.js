// Display Content
let localcontent = document.getElementById("local-content");
let tourcontent = document.getElementById("tour-content");
let btnlocal = document.getElementById("btn-local");
let btntour = document.getElementById("btn-tour");

btnlocal.addEventListener("click", () => {
  localcontent.style.display = "block";
  btnlocal.classList.add("active");
  btntour.classList.remove("active");
  tourcontent.style.display = "none";
});

btntour.addEventListener("click", () => {
  localcontent.style.display = "none";
  btntour.classList.add("active");
  btnlocal.classList.remove("active");
  tourcontent.style.display = "block";
});
