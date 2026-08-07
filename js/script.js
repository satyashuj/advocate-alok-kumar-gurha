const text = "Advocate\nAlok Kumar\nGurha";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(i) === "\n" ? "<br>" : text.charAt(i);

        i++;

        setTimeout(typingEffect,120);

    }

}

window.onload = typingEffect;


const faqContainer = document.getElementById("faqContainer");

if (faqContainer) {

const faqData = [

{
question:"Who can file a Consumer Complaint?",
answer:"Any consumer who has suffered due to defective goods, poor services or unfair trade practices can file a complaint."
},

{
question:"Can I claim compensation?",
answer:"Yes. Compensation may be claimed depending on the facts and loss suffered by the consumer."
},

{
question:"How long does a consumer case take?",
answer:"The duration depends on the nature of the dispute and the Consumer Commission's proceedings."
},

{
question:"Do I need all purchase documents?",
answer:"Yes. Bills, invoices, warranty cards and communication records help strengthen your case."
}

];

faqData.forEach(faq=>{

faqContainer.innerHTML += `

<div class="faq-item">

<button class="faq-question">

${faq.question}

<span>+</span>

</button>

<div class="faq-answer">

<p>${faq.answer}</p>

</div>

</div>

`;

});

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const answer=button.nextElementSibling;

const icon=button.querySelector("span");

document.querySelectorAll(".faq-answer").forEach(item=>{

if(item!==answer){

item.style.display="none";
item.previousElementSibling.querySelector("span").innerHTML="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";
icon.innerHTML="+";

}else{

answer.style.display="block";
icon.innerHTML="−";

}

});

});

}


