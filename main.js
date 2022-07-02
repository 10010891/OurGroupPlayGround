function toggleSideMenu(){
    var sideNav = document.getElementById("nav")
    if (sideNav.style.display == "none"){
        sideNav.style.display = "block"
    }else{
        sideNav.style.display = "none"
    }
    alert('Side menu on')
}