var sidenavbar = document.querySelector(".sidenavbar")
var close = document.querySelector(".main2")
var closeone = document.querySelector(".main1-1")


function opensidenavbar(){
    sidenavbar.style.display = "block"
    close.style.display = "none"
    closeone.style.display = "none"
}

function closesidenavbar(){
    sidenavbar.style.display = "none"
    close.style.display = "block"
    closeone.style.display = "block"
}