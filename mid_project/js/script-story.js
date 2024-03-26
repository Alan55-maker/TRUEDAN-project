window.addEventListener('scroll', () => {
    var scrollheight = window.scrollY;
    console.log(scrollheight);
    if (scrollheight > 20) {
        document.getElementsByClassName("fade-move")[0].style.height = 0;
        document.getElementsByClassName("fade-move")[1].style.height = 0;
        var locationdisplay_elm = document.querySelector(".story");
        locationdisplay_elm.style.opacity = 1;
        var locationdisplay_elm = document.querySelector(".story-text");
        locationdisplay_elm.style.opacity = 1;
        var locationdisplay_elm = document.querySelector(".story-text1");
        locationdisplay_elm.style.opacity = 1;
        var locationdisplay_elm = document.querySelector(".story-text2");
        locationdisplay_elm.style.opacity = 1;
        console.log(locationdisplay_elm);
    }
    if(scrollheight > 400)
    document.getElementsByClassName("fade-move")[2].style.height = 0;
    var locationdisplay_elm = document.querySelector(".story-receipe");
    locationdisplay_elm.style.opacity = 1;
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
    var locationdisplay_elm = document.querySelector(".story");
    locationdisplay_elm.style.opacity = 1;
}, 2000);
setTimeout(() => {
    document.getElementsByClassName("fade-move")[1].style.height = 0;
    var locationdisplay_elm = document.querySelector(".story-text");
    locationdisplay_elm.style.opacity = 1;
    var locationdisplay_elm = document.querySelector(".story-text1");
    locationdisplay_elm.style.opacity = 1;
}, 3000);
setTimeout(() => {
    var locationdisplay_elm = document.querySelector(".story-text2");
    locationdisplay_elm.style.opacity = 1;
    document.getElementsByClassName("fade-move")[2].style.height = 0;
    var locationdisplay_elm = document.querySelector(".story-receipe");
    locationdisplay_elm.style.opacity = 1;
}, 4000);
setTimeout(() => {
    document.getElementsByClassName("fade-move")[1].style.height = 0;
}, 5000);