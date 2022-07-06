function toggleSideMenu() {
    var sideNav = document.getElementById("nav")
    if (sideNav.style.display == "none") {
        sideNav.style.display = "block"
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
    alert("This Page is readOnly.It's not connected with server yet.")
}

var getImage = document.getElementById('myImage')
console.log(getImage)

function showImage(sorc){ 
    var source = 'https://ibrahim0891.github.io/simple-e-commerce-site-design/images/'+sorc +src 
    getImage.src = source
    console.log(source)
    console.log(getImage)
}
