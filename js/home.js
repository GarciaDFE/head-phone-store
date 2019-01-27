let vlrCar = 10;
const $buttonCar = document.querySelector(".-second");

$buttonCar.addEventListener("click", handleClick);

function handleClick() {
  const $navCar = document.querySelector(".-last");
  $navCar.textContent = `Carrinho (${++vlrCar})`;
}