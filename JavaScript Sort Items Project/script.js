const items=[
    {
        name:"iPad",
        price:1300
    },
    {
        name:"Laptop",
        price:300
    },
    {
        name:"Headphone",
        price:100
    },
    {
        name:"Desktop",
        price:500
    },
   
];

//  <li class="list-group-item">
//      Mobile <span class="float-right">$200</span>
//  </li>  
//The below fn changes the HTML elements like above using Js
function generateList(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML="";//resets initials

    items.forEach(item =>{
    const li=document.createElement("li");// creates <p></p>
    li.classList.add("list-group-item");//<li class="list-group-item">    

    const name=document.createTextNode(item.name);
    li.appendChild(name);

    const span=document.createElement("span");
    span.classList.add("float-right"); //<span class="float-right"> </span>

    const price=document.createTextNode("$ "+ item.price); 
    span.appendChild(price); //<span class="float-right">$ price</span>
    
    li.appendChild(span); //inject values in HTML
    ul.appendChild(li);//inject values
});

}
// generateList();

window.addEventListener("load",generateList);

const button=document.querySelector(".sort-btn");

//Inbuilt sort function
button.addEventListener("click",() =>{
     items.sort((a , b) =>a.price - b.price);
     generateList();
});


