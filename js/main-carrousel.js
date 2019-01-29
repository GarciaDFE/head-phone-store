var $bullet = document.querySelectorAll(".bullet")
var $bulletIsActive = document.querySelector(".bullet.-isActive")
var $colorIsActive = document.querySelector(".color.-isActive");

$bullet.forEach((item) => {
    item.addEventListener("click", clickInBullet)
})

function clickInBullet() {
    var $bulletClicked = this
    $bulletIsActive.classList.remove("-isActive");
    $bulletClicked.classList.add("-isActive");
    $bulletIsActive = $bulletClicked;

    $colorIsActive.classList.remove("-isActive");
    var idColor = $bulletClicked.querySelector("a").getAttribute("href");
    var $targetColor = document.querySelector(idColor); 
    $targetColor.classList.add("-isActive");
    $colorIsActive = $targetColor;
}