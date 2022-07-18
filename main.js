function toggleElement(elementSelector,method) {
    var sideNav = document.getElementById(elementSelector)
    if (sideNav.style.display == "none") {
        sideNav.style.display = method
    } else {
        sideNav.style.display = "none"
    }
}

function closeSideMenu() {
    var sideNav = document.getElementById("nav")
    if (sideNav.style.display == "none") {
        sideNav.style.display = "block"
    } else {
        sideNav.style.display = "none"
    }
}

var amountBox = document.getElementById("amount")
function increaseAmount(){
    var temp = Number(amountBox.value)
    temp += 1
    amountBox.value = temp 
    console.log(amountBox.value)
}
function decreaseAmount() {
    if (amountBox.value > 0){
        var temp = Number(amountBox.value)
        temp -= 1
        amountBox.value = temp
        console.log(amountBox.value)
    }else{
        alert("You cannot select less than 0 amount of Product...")
    }
}

function addToCart(){
    alert("Check your cart to see your total bill ")
    var count = amountBox.value
    var showOnCart = document.getElementById('selectedAmount')
    var cost = document.getElementById('totalCost')
    showOnCart.innerText = count
    cost.innerText = '$'+ (count*125)
}

var getImage = document.getElementById('myImage')


function showImage(sorc){ 
    var source = 'https://ibrahim0891.github.io/simple-e-commerce-site-design/images/'+sorc 
    getImage.src = source
    console.log(source)
    console.log(getImage)
}


var fatchImage = document.getElementById('myImage')
var srcString = fatchImage.src
var findNumber = srcString.search(2)
var detectNumber = fatchImage.src[findNumber]

console.log(detectNumber)

function prev() {
    detectNumber = Number(detectNumber)
    detectNumber -= 1
    console.log(detectNumber)
    if (detectNumber < 1) {
        detectNumber = 4
    }
    fatchImage.src = 'images/image-product-' + detectNumber + '.jpg'
}

function next() {
    detectNumber = Number(detectNumber)
    detectNumber += 1
    
    if (detectNumber > 4) {
        detectNumber = 1
    }
    fatchImage.src = "images/image-product-" + detectNumber + '.jpg'
    console.log(detectNumber)
}
