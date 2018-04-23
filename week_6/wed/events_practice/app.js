window.onload = function() {
  const h1 = document.querySelector("#random-div");
  console.log(h1);
  h1.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
  });
}
