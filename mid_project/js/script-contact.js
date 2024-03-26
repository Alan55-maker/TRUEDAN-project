window.addEventListener('scroll', () => {
    var scrollheight = window.scrollY;
    console.log(scrollheight);
    if (scrollheight > 20) {
        document.getElementsByClassName("fade-move")[0].style.height = 0;
        var locationdisplay_elm = document.querySelector(".contact");
        locationdisplay_elm.style.opacity = 1;
        console.log(locationdisplay_elm);
    }
});
function changemenu(x) {
    x.classList.toggle("change");
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
setTimeout(() => {
    document.getElementById("myNav").style.width = "0%";
}, 1000);
setTimeout(() => {
    document.getElementsByClassName("fade-move")[0].style.height = 0;
    var locationdisplay_elm = document.querySelector(".contact");
    locationdisplay_elm.style.opacity = 1;
}, 2000);
function confirm(){
    alert("已確認送出");
}