let b1 = document.getElementById("b1");

let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
b1.addEventListener("mouseover", () => {
    //navbar
    let bd4 = document.getElementById("b4div");
    let bd2 = document.getElementById("b2div");
    let bd1 = document.getElementById("b1div");
    let bd3 = document.getElementById("b3div");
    bd4.classList.remove("bhover");
    bd2.classList.remove("bhover");

    bd3.classList.remove("bhover");
    bd1.classList.add("bhover");
})

b2.addEventListener("mouseover", () => {

    let pic = document.getElementById("pic");
    let top = document.getElementById("top");
    let topd = document.getElementById("topd");
    let myname = document.getElementById("name");
    //navbar
    let bd2 = document.getElementById("b2div");
    let bd4 = document.getElementById("b4div");
    let bd1 = document.getElementById("b1div");
    let bd3 = document.getElementById("b3div");
    bd2.classList.add("bhover");
    bd4.classList.remove("bhover");
    bd3.classList.remove("bhover");
    bd1.classList.remove("bhover");

    topd.classList.add("shrinkh");
    topd.classList.add("topcolor");
    top.classList.add("noback");
    top.classList.add("shrinkh");

    pic.classList.add("topslide");
    myname.classList.add("topslide");
    myname.classList.add("namesize");
    myname.classList.add("text");
})

b3.addEventListener("mouseover", () => {
    let bd4 = document.getElementById("b4div");
    let bd2 = document.getElementById("b2div");
    let bd1 = document.getElementById("b1div");
    let bd3 = document.getElementById("b3div");

    bd2.classList.remove("bhover");
    bd4.classList.remove("bhover");
    bd3.classList.add("bhover");
    bd1.classList.remove("bhover");
})

b4.addEventListener("mouseover", () => {

    let bd4 = document.getElementById("b4div");
    let bd2 = document.getElementById("b2div");
    let bd1 = document.getElementById("b1div");
    let bd3 = document.getElementById("b3div");


    let pic = document.getElementById("pic");
    let top = document.getElementById("top");
    let topd = document.getElementById("topd");
    let myname = document.getElementById("name");
    //navbar 
    bd4.classList.add("bhover");
    bd2.classList.remove("bhover");

    bd3.classList.remove("bhover");
    bd1.classList.remove("bhover");
    topd.classList.add("shrinkh");
    topd.classList.add("topcolor");
    top.classList.add("noback");
    top.classList.add("shrinkh");
    //pic and name sliding
    pic.classList.add("topslide");
    myname.classList.add("topslide");
    myname.classList.add("namesize");
    myname.classList.add("text");

})

b1.addEventListener("click", () => {


    let pic = document.getElementById("pic");
    let top = document.getElementById("top");
    let topd = document.getElementById("topd");
    let myname = document.getElementById("name");
    topd.classList.remove("shrinkh");
    topd.classList.remove("topcolor");
    top.classList.remove("noback");
    top.classList.remove("shrinkh");

    pic.classList.remove("topslide");
    myname.classList.remove("topslide");
    myname.classList.remove("namesize");
    myname.classList.remove("text");


})
