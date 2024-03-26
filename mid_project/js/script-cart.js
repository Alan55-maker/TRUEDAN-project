// var quantity = localStorage.getItem("quantity")
// var quantity = [0, 0, 0, 0, 0, 0, 0, 0];
// var quantity = JSON.parse(localStorage.getItem("quantity"));
// console.log(quantity);
// console.log(typeof (quantity));
if(localStorage.getItem("cart") !== null){
    var cart = JSON.parse(localStorage.getItem("cart"));
    console.log("defined");
}else{
    var cart = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("undefined");
}
console.log(cart);
if(localStorage.getItem("quantity") == undefined || localStorage.getItem("quantity")== null){
    var quantity = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem("quantity", JSON.stringify(quantity));
    console.log("undefined");
}else{
    var quantity = JSON.parse(localStorage.getItem("quantity"));
    console.log("defined");
}
console.log(quantity);
// var cart = JSON.parse(localStorage.getItem("cart"));
// localStorage.setItem("cart", JSON.stringify(cart));
for (var i = 0; i < 8; i++) {
    cart[i] = cart[i] + quantity[i];
    quantity[i] = 0;
}
localStorage.setItem("quantity",JSON.stringify(quantity));
localStorage.setItem("cart", JSON.stringify(cart));
// ----------------------------------------------------
window.addEventListener('scroll', () => {
    var scrollheight = window.scrollY;
    console.log(scrollheight);
    if (scrollheight > 60) {
        document.getElementsByClassName("fade-move")[0].style.height = 0;
        var locationdisplay_elm = document.querySelector(".drinksarea");
        locationdisplay_elm.style.opacity = 1;
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
    var locationdisplay_elm = document.querySelector(".drinksarea");
    locationdisplay_elm.style.opacity = 1;
}, 2000);
// console.log(cart);
for (var i = 0; i < 8; i++) {
    if (cart[i] != 0) {
        if (i == 0) {
            var elm = document.getElementById("product01");
            elm.innerHTML = cart[i];
        }
        if (i == 1) {
            var elm = document.getElementById("product02");
            elm.innerHTML = cart[i];
        }
        if (i == 2) {
            var elm = document.getElementById("product03");
            elm.innerHTML = cart[i];
        }
        if (i == 3) {
            var elm = document.getElementById("product04");
            elm.innerHTML = cart[i];
        }
        if (i == 4) {
            var elm = document.getElementById("product05");
            elm.innerHTML = cart[i];
        }
        if (i == 5) {
            var elm = document.getElementById("product06");
            elm.innerHTML = cart[i];
        }
        if (i == 6) {
            var elm = document.getElementById("product07");
            elm.innerHTML = cart[i];
        }
        if (i == 7) {
            var elm = document.getElementById("product08");
            elm.innerHTML = cart[i];
        }
    } else {
        var elm = document.querySelectorAll(".drinksform");
        elm[i].style.opacity = 0;
        elm[i].style.height = "0px";
        elm[i].style.display = "none";
    }
}
// console.log(cart);
// ----------------------------------------------------
function plus01() {
    var elm = document.getElementById("product01");
    cart[0] = cart[0] + 1;
    elm.innerHTML = cart[0];
    console.log(cart[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus01() {
    var elm = document.getElementById("product01");
    cart[0] = cart[0] - 1;
    if (cart[0] < 1) {
        cart[0] = 1;
    }
    elm.innerHTML = cart[0];
    console.log(cart[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus02() {
    var elm = document.getElementById("product02");
    cart[1] = cart[1] + 1;
    elm.innerHTML = cart[1];
    console.log(cart[1]);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus02() {
    var elm = document.getElementById("product02");
    cart[1] = cart[1] - 1;
    if (cart[1] < 1) {
        cart[1] = 1;
    }
    elm.innerHTML = cart[1];
    console.log(cart[1]);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus03() {
    var elm = document.getElementById("product03");
    cart[2] = cart[2] + 1;
    elm.innerHTML = cart[2];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus03() {
    var elm = document.getElementById("product03");
    cart[2] = cart[2] - 1;
    if (cart[2] < 1) {
        cart[2] = 1;
    }
    elm.innerHTML = cart[2];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus04() {
    var elm = document.getElementById("product04");
    cart[3] = cart[3] + 1;
    elm.innerHTML = cart[3];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus04() {
    var elm = document.getElementById("product04");
    cart[3] = cart[3] - 1;
    if (cart[3] < 1) {
        cart[3] = 1;
    }
    elm.innerHTML = cart[3];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus05() {
    var elm = document.getElementById("product05");
    cart[4] = cart[4] + 1;
    elm.innerHTML = cart[4];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus05() {
    var elm = document.getElementById("product05");
    cart[4] = cart[4] - 1;
    if (cart[4] < 1) {
        cart[4] = 1;
    }
    elm.innerHTML = cart[4];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus06() {
    var elm = document.getElementById("product06");
    cart[5] = cart[5] + 1;
    elm.innerHTML = cart[5];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus06() {
    var elm = document.getElementById("product06");
    cart[5] = cart[5] - 1;
    if (cart[5] < 1) {
        cart[5] = 1;
    }
    elm.innerHTML = cart[5];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus07() {
    var elm = document.getElementById("product07");
    cart[6] = cart[6] + 1;
    elm.innerHTML = cart[6];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus07() {
    var elm = document.getElementById("product07");
    cart[6] = cart[6] - 1;
    if (cart[6] < 1) {
        cart[6] = 1;
    }
    elm.innerHTML = cart[6];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function plus08() {
    var elm = document.getElementById("product08");
    cart[7] = cart[7] + 1;
    elm.innerHTML = cart[7];
    localStorage.setItem("cart", JSON.stringify(cart));
}
function minus08() {
    var elm = document.getElementById("product08");
    cart[7] = cart[7] - 1;
    if (cart[7] < 1) {
        cart[7] = 1;
    }
    elm.innerHTML = cart[7];
    localStorage.setItem("cart", JSON.stringify(cart));
}
// ----------------------------------------------------------------
function delete01() {
    cart[0] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[0].style.opacity = 0;
    elm[0].style.height = "0px";
    elm[0].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete02() {
    cart[1] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[1].style.opacity = 0;
    elm[1].style.height = "0px";
    elm[1].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete03() {
    cart[2] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[2].style.opacity = 0;
    elm[2].style.height = "0px";
    elm[2].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete04() {
    cart[3] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[3].style.opacity = 0;
    elm[3].style.height = "0px";
    elm[3].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete05() {
    cart[4] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[4].style.opacity = 0;
    elm[4].style.height = "0px";
    elm[4].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete06() {
    cart[5] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[5].style.opacity = 0;
    elm[5].style.height = "0px";
    elm[5].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete07() {
    cart[6] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[6].style.opacity = 0;
    elm[6].style.height = "0px";
    elm[6].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
function delete08() {
    cart[7] = 0;
    var elm = document.querySelectorAll(".drinksform");
    elm[7].style.opacity = 0;
    elm[7].style.height = "0px";
    elm[7].style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已刪除訂單");
}
// ----------------------------------------------------
