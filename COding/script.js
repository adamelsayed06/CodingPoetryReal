function createParagraph(){
    const para1 = document.createElement("p");
    para1.textContent = "I thought I loved the rain" ;
    document.body.appendChild(para1);
}

const button = document.querySelectorAll('button');
button.addEventListener("click", createParagraph());
