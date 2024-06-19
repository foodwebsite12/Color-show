let body=document.querySelector("body");
// let red=document.querySelector("#red");

red.addEventListener("click",()=>{
    body.style.backgroundColor ="red";
});

// नीचे हम ब्लू सिलेक्ट किए भी नहीं फिर भी एक्सक्यूट कैसे हो रहा है ?
blue.addEventListener("click",()=>{
    body.style.backgroundColor ="blue";
});

gr.addEventListener("click",()=>{
    body.style.backgroundColor ="green";
});

or.addEventListener("click",()=>{
    body.style.backgroundColor ="orange";
});

yellow.addEventListener("click",()=>{
    body.style.backgroundColor ="yellow";
});