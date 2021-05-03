let draw_div = document.querySelector(".draw");
let color = document.querySelector("#color");
let button = document.querySelector("button");
let div = "";

for(let i=1; i<1600; i++){
    div += "<div class='paint'></div>";
}
//console.log(div);
draw_div.innerHTML = div;
let color_choice = "black";
let click = false;


color.onchange = function(){
    color_choice = color.value;
} 

let all_paint = document.querySelectorAll(".paint");

window.onmousedown = function(){
    click = true;
}
window.onmouseup = function(){
    click = false;
}

for(let i = 0; i < all_paint.length; i++){
    all_paint[i].onmouseover = function(){
        if(click == true){
            all_paint[i].style.background = color_choice;
        }
    }
}

button.onclick = function(){
    for(let i = 0; i < all_paint.length; i++){
        all_paint[i].style.background = 'white';
    }
}

