let count=0;
let cards=document.querySelectorAll(".content")
function toggletheme(){
     count++;
     if(count%2!==0){
        document.querySelector("#home").classList.remove("bg-black");
        document.querySelector("body").classList.add("bg-dark","text-white")
        document.querySelector("#hero").classList.add("bg-dark","text-white")
     }else{
       
        for(let i=0;i<cards.length;i++){
            let card=cards[i]
            card.classList.remove("bg-white","text-black")
            card.classList.add("bg-dark","text-white")
        }
        document.querySelector("#acatable").classList.add("border-white","table-dark")
     }
}