var sum = [0,0,0,0,0,0,0,0];
var quantity = [0,0,0,0,0,0,0,0];
function plus01(){
    var elm = document.getElementById("product01");
    sum[0]=sum[0]+1;
    elm.innerHTML =  sum[0];
    console.log(sum[0]);
}
function minus01(){
    var elm = document.getElementById("product01");
    sum[0]=sum[0]-1;
    if(sum[0]<0){
        sum[0]=0;
    }
    elm.innerHTML =  sum[0];
    console.log(sum[0]);
}
function plus02(){
    var elm = document.getElementById("product02");
    sum[1]=sum[1]+1;
    elm.innerHTML =  sum[1];
    console.log(sum[1]);
}
function minus02(){
    var elm = document.getElementById("product02");
    sum[1]=sum[1]-1;
    if(sum[1]<0){
        sum[1]=0;
    }
    elm.innerHTML =  sum[1];
    console.log(sum[1]);
}
function plus03(){
    var elm = document.getElementById("product03");
    sum[2]=sum[2]+1;
    elm.innerHTML =  sum[2];
}
function minus03(){
    var elm = document.getElementById("product03");
    sum[2]=sum[2]-1;
    if(sum[2]<0){
        sum[2]=0;
    }
    elm.innerHTML =  sum[2];
}
function plus04(){
    var elm = document.getElementById("product04");
    sum[3]=sum[3]+1;
    elm.innerHTML =  sum[3];
}
function minus04(){
    var elm = document.getElementById("product04");
    sum[3]=sum[3]-1;
    if(sum[3]<0){
        sum[3]=0;
    }
    elm.innerHTML =  sum[3];
}
function plus05(){
    var elm = document.getElementById("product05");
    sum[4]=sum[4]+1;
    elm.innerHTML =  sum[4];
}
function minus05(){
    var elm = document.getElementById("product05");
    sum[4]=sum[4]-1;
    if(sum[4]<0){
        sum[4]=0;
    }
    elm.innerHTML =  sum[4];
}
function plus06(){
    var elm = document.getElementById("product06");
    sum[5]=sum[5]+1;
    elm.innerHTML =  sum[5];
}
function minus06(){
    var elm = document.getElementById("product06");
    sum[5]=sum[5]-1;
    if(sum[5]<0){
        sum[5]=0;
    }
    elm.innerHTML =  sum[5];
}
function plus07(){
    var elm = document.getElementById("product07");
    sum[6]=sum[6]+1;
    elm.innerHTML =  sum[6];
}
function minus07(){
    var elm = document.getElementById("product07");
    sum[6]=sum[6]-1;
    if(sum[6]<0){
        sum[6]=0;
    }
    elm.innerHTML =  sum[6];
}
function plus08(){
    var elm = document.getElementById("product08");
    sum[7]=sum[7]+1;
    elm.innerHTML =  sum[7];
}
function minus08(){
    var elm = document.getElementById("product08");
    sum[7]=sum[7]-1;
    if(sum[7]<0){
        sum[7]=0;
    }
    elm.innerHTML =  sum[7];
}
// ----------------------------------------------------
function addcart01(){
    if(sum[0]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[0]=quantity[0]+sum[0];
    var elm = document.getElementById("product01");
    sum[0] = 0;
    elm.innerHTML = sum[0];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart02(){
    if(sum[1]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[1]=quantity[1]+sum[1];
    var elm = document.getElementById("product02");
    sum[1] = 0;
    elm.innerHTML = sum[1];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart03(){
    if(sum[2]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[2]=quantity[2]+sum[2];
    var elm = document.getElementById("product03");
    sum[2] = 0;
    elm.innerHTML = sum[2];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart04(){
    if(sum[3]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[3]=quantity[3]+sum[3];
    var elm = document.getElementById("product04");
    sum[3] = 0;
    elm.innerHTML = sum[3];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart05(){
    if(sum[4]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[4]=quantity[4]+sum[4];
    var elm = document.getElementById("product05");
    sum[4] = 0;
    elm.innerHTML = sum[4];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart06(){
    if(sum[5]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[5]=quantity[5]+sum[5];
    var elm = document.getElementById("product06");
    sum[5] = 0;
    elm.innerHTML = sum[5];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart07(){
    if(sum[6]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[6]=quantity[6]+sum[6];
    var elm = document.getElementById("product07");
    sum[6] = 0;
    elm.innerHTML = sum[6];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
function addcart08(){
    if(sum[7]==0){
        alert("沒有要加入購物車的品項");
    }else{
    quantity[7]=quantity[7]+sum[7];
    var elm = document.getElementById("product08");
    sum[7] = 0;
    elm.innerHTML = sum[7];
    alert("已加入購物車");
    console.log(sum);
    console.log(quantity);
    localStorage.setItem("quantity",JSON.stringify(quantity));
    }
}
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
