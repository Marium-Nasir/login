let selectclr = (e) => {
    let btn = document.getElementById("opencolor");
    btn.setAttribute('hidden' , "true");
    
}

let fun2 = (e) => {
    let btn21 = document.getElementById("btn1");
    btn21.removeAttribute('hidden');
    let btn22 = document.getElementById("btn2");
    btn22.removeAttribute('hidden');
    let btn23 = document.getElementById("btn3");
    btn23.removeAttribute('hidden');
    let btn24 = document.getElementById("btn4");
    btn24.removeAttribute('hidden');
    let btn25 = document.getElementById("btn5");
    btn25.removeAttribute('hidden');
}
// let changetheme1 = (e) => {
//     let bground = document.getElementById("bcontainer");
//     bground.style.backgroundImage = "url('/images/bgred.jpg')";
//     document.getElementById("fullcontainer").style.borderColor = "White";
//     document.getElementById("fullcontainer").style.boxShadow = "2px 2px 2px 2px red";
//     e.preventDefault();
// }
let changetheme11 = (e) => {
    let bground = document.getElementById("bcontainer");
    bground.style.backgroundImage = "url('/images/bgred.jpg')";
    e.preventDefault();
    document.getElementById("fullcontainer").style.borderColor = "White";
    document.getElementById("fullcontainer").style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByName("email")[0].style.borderColor = "White";
    document.getElementsByName("pass")[0].style.borderColor = "White";
    document.getElementsByName("email")[0].style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByName("pass")[0].style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByTagName("button")[0].style.borderColor = "White";
    document.getElementsByTagName("button")[1].style.borderColor = "White";
    document.getElementsByTagName("button")[2].style.borderColor = "White";
    document.getElementsByTagName("button")[0].style.color = "White";
    document.getElementsByTagName("button")[1].style.color = "White";
    document.getElementsByTagName("button")[2].style.color = "White";
    document.getElementsByTagName("button")[0].style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByTagName("button")[1].style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByTagName("button")[2].style.boxShadow = "2px 2px 2px 2px red";
    document.getElementsByTagName("h1")[0].style.color = "white";
    e.preventDefault();
}
let changetheme2 = (e) => {
    let bground = document.getElementById("bcontainer");
    bground.style.backgroundImage = "url('/images/bgyellow.jpg')";
    document.getElementById("fullcontainer").style.borderColor = "green";
    document.getElementById("fullcontainer").style.boxShadow = "2px 2px 2px 2px white";
    e.preventDefault();
    document.getElementsByName("email")[0].style.borderColor = "green";
    document.getElementsByName("pass")[0].style.borderColor = "green";
    document.getElementsByName("email")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByName("pass")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[0].style.borderColor = "green";
    document.getElementsByTagName("button")[1].style.borderColor = "green";
    document.getElementsByTagName("button")[2].style.borderColor = "green";
    document.getElementsByTagName("button")[0].style.color = "White";
    document.getElementsByTagName("button")[1].style.color = "White";
    document.getElementsByTagName("button")[2].style.color = "White";

    document.getElementsByTagName("button")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[1].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[2].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("h1")[0].style.color = "black";
    e.preventDefault();
}
let changetheme3 = (e) => {
    let bground = document.getElementById("bcontainer");
    bground.style.backgroundImage = "url('/images/bgblue.jpg')";
    document.getElementById("fullcontainer").style.borderColor = "White";
    document.getElementById("fullcontainer").style.boxShadow = "2px 2px 2px 2px blue";
    e.preventDefault();
    document.getElementsByName("email")[0].style.borderColor = "white";
    document.getElementsByName("pass")[0].style.borderColor = "white";
    document.getElementsByName("email")[0].style.boxShadow = "2px 2px 2px 2px blue";
    document.getElementsByName("pass")[0].style.boxShadow = "2px 2px 2px 2px blue";
    document.getElementsByTagName("button")[0].style.borderColor = "white";
    document.getElementsByTagName("button")[1].style.borderColor = "white";
    document.getElementsByTagName("button")[2].style.borderColor = "white";
    document.getElementsByTagName("button")[0].style.color = "white";
    document.getElementsByTagName("button")[1].style.color = "white";
    document.getElementsByTagName("button")[2].style.color = "white";

    document.getElementsByTagName("button")[0].style.boxShadow = "2px 2px 2px 2px blue";
    document.getElementsByTagName("button")[1].style.boxShadow = "2px 2px 2px 2px blue";
    document.getElementsByTagName("button")[2].style.boxShadow = "2px 2px 2px 2px blue";
    document.getElementsByTagName("h1")[0].style.color = "white";
    e.preventDefault();
}
let changetheme4 = (e) => {
    let bground = document.getElementById("bcontainer");
    bground.style.backgroundImage = "url('/images/bggreen.jpg')";
    document.getElementById("fullcontainer").style.borderColor = "green";
    document.getElementById("fullcontainer").style.boxShadow = "2px 2px 2px 2px white";
    e.preventDefault();
    document.getElementsByName("email")[0].style.borderColor = "green";
    document.getElementsByName("pass")[0].style.borderColor = "green";
    document.getElementsByName("email")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByName("pass")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[0].style.borderColor = "green";
    document.getElementsByTagName("button")[1].style.borderColor = "green";
    document.getElementsByTagName("button")[2].style.borderColor = "green";
    document.getElementsByTagName("button")[0].style.color = "black";
    document.getElementsByTagName("button")[1].style.color = "black";
    document.getElementsByTagName("button")[2].style.color = "black";

    document.getElementsByTagName("button")[0].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[1].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("button")[2].style.boxShadow = "2px 2px 2px 2px white";
    document.getElementsByTagName("h1")[0].style.color = "green";
    e.preventDefault();
}

opencolor.addEventListener('click',selectclr);
opencolor.addEventListener('click',fun2);
// btn1.addEventListener('click' , changetheme1);
btn1.addEventListener('click' , changetheme11);
btn2.addEventListener('click' , changetheme2);
btn3.addEventListener('click' , changetheme3);
btn4.addEventListener('click' , changetheme4);
