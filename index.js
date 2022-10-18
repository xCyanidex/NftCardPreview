// var viewicon = document.querySelector(".viewiconn");

// viewicon.addEventListener("onmouseover", function () {
//   viewicon.classList.remove("hidden");
// });
// viewicon.addEventListener("onmouseout", function () {
//   viewicon.classList.add("block");
// });
document.querySelector(".img-div").addEventListener("mouseover", function () {
  document.querySelector(".viewicon").classList.remove("hidden");
});
document.querySelector(".img-div").addEventListener("mouseout", function () {
  document.querySelector(".viewicon").classList.add("hidden");
});

document.querySelector(".img-div").addEventListener("mouseover", function () {
  document.querySelector(".overlaydiv").classList.remove("hidden");
});
document.querySelector(".img-div").addEventListener("mouseout", function () {
  document.querySelector(".overlaydiv").classList.add("hidden");
});

document.querySelector(".img-div").addEventListener("mouseover", function () {
  document.querySelector(".img-div").classList.add("cursor-pointer");
});
document.querySelector(".img-div").addEventListener("mouseout", function () {
  document.querySelector(".overlaydiv").classList.remove("cursor-pointer");
});
