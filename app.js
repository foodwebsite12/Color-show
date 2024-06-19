h1 = document.querySelector("body");

function changeColor (color,delay) {
    return new Promise((resolve, reject) => {
        setInterval( () =>{
            h1.style.color = color;
            resolve ("color changed");
        },delay);
    });
}

async function demo() {
   await changeColor ("red",1000);
   await changeColor ("blue",2000);
   await changeColor ("green",3000);
}

demo();

// another large method below 
// setInterval(() => {
//     h1.style.color = "red";
// }, 1000);

// setInterval(() => {
//     h1.style.color = "blue";
// }, 2000);

// setInterval(() => {
//     h1.style.color = "green";
// }, 3000);

