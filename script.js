

/* swiper js */

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// swiper js close //



const links = document.querySelector('.links')
links.style.maxHeight = "0px"

function togglemenu(){

    if(links.style.maxHeight == "0px"){
        links.style.maxHeight = "300px"
        links.style.transition = "all 0.5s"
       
    } else{
        links.style.maxHeight = "0px"
        swiper.style.marginTop = "0px"
    }
}






const appendcards = document.querySelector('.products')
const addCart = document.getElementById("addcart")


 async function getdata(){
    try{

        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        console.log(data)
    
    
    
         data.forEach(element => {
            const newdiv = document.createElement("div")
             newdiv.classList.add("Cards")
            newdiv.innerHTML = `
    
              <img src="${element.image}" alt=""> 
              <h1>${element.title}</h1>
              <p id="price">price:$${element.price}</p>
              <p id=description>${element.description}</p>
              <button id="btncart"> Add to cart</button>  `
             appendcards.append(newdiv)
            
            
         }); 
    

    } catch(error){
        console.error("failed to load api")
    }
  
       
}

getdata();

addCart.addEventListener("click",()=>{

  document.querySelector('.container').innerHTML ="";
  let Alertbox = document.createElement("div")
  Alertbox.classList.add("alertbox")
  Alertbox.innerHTML = `
  <h1 id= "emptycart">Your cart is empty !</h1>
  <img src ="empty_cart-512.webp"></img>
  ` 
  document.querySelector('.container').append(Alertbox);
})



