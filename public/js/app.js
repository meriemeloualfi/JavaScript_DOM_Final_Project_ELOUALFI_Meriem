//* create modal login
var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//* add glightbox for videos and photos
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
  });

  let nextBtns = document.querySelectorAll(".next")
  let previousBtns = document.querySelectorAll(".previous")
  let containers = document.querySelectorAll(".carousel-container")
  
  
  
  //* caroussel1
  let currentIndex = 0
  const slideImage = (index, myBtn) => {
      let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")
      containers.forEach(container => {
          if (container.id == carouselBtnAttribute) {
                let slides = container.querySelectorAll(".slide")
              let camera = container.querySelector(".carousel")
              let slideWidth = slides[0].clientWidth
              let indicators = container.querySelectorAll('.indicator')
  
                if (index < 0) {
                  index = slides.length - 1
              } else if (index >= slides.length) {
                  index = 0
              }
  
              indicators.forEach(indicator => {
                  indicator.classList.remove('activeIndicator')
              });
              indicators[index].classList.add("activeIndicator")
  
              camera.style.transform = `translateX(-${slideWidth * index}px)`
              currentIndex = index
          }
      });
  }
  
      nextBtns.forEach(next => {
      next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
  });
  
      previousBtns.forEach(previous => {
      previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
  });
  
    containers.forEach(container => {
      if (container.getAttribute("autoslide")) {
          let nextBtn = container.querySelector(".next")
  
          setInterval(() => {
              nextBtn.click()
          }, 3000);
      }
  });
  

  containers.forEach(container => {
      let slides = container.querySelectorAll(".slide")
      let indicatorsGrp = document.createElement("div")
      indicatorsGrp.classList.add("indicators-grp")
      container.appendChild(indicatorsGrp)
  
      slides.forEach(slide => {
          let indicator = document.createElement("div")
          indicator.classList.add("indicator")
          indicatorsGrp.appendChild(indicator)
      });
      indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
  });


//*menu
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")
starters.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Starters"
})
breakfast.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Breakfast"
})
dinner.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Dinner"
})
lunch.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Lunch"
})