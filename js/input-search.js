const $search = document.querySelector(".input-search")
const $open = $search.querySelector(".-open")
const $close = $search.querySelector(".-close")

$open.addEventListener("click", event => {
    event.preventDefault();
    $search.classList.toggle("-active");
    $open.classList.remove("-active");
    $close.classList.add("-active");
})

$close.addEventListener("click", event => {
  event.preventDefault();
  $search.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
});