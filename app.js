const newsSection=document.getElementById("news-section");
fetch('http://localhost:3000/news')
  .then((response) =>response.json()).then((data) => {
    displayNews(data);
  });
const displayNews=(data)=>{
  data.forEach(element => {
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute('class','img');
    let h3=document.createElement("h3");
    let description=document.createElement("p");
    let anchorLink=document.createElement("a");
    image.src+=element.picture+``
    h3.innerHTML+=element.title;
    description.innerHTML+=element.description;
    anchorLink.innerHTML+=element.link;
    div.appendChild(image);
    div.appendChild(h3);
    div.appendChild(description);
    div.appendChild(anchorLink);
    newsSection.appendChild(div);
    
  });

}


console.log(document.getElementsByClassName("slideshow-container")[0])
let slidePosiiton=0;
let prevSlidePosition;
const slides=document.getElementsByClassName('mySlides');
const totalSlides=slides.length;

document
.getElementById("btn-next")
.addEventListener("click", function(){
  moveToNextSlide();
});
document
.getElementById("btn-prev")
.addEventListener("click", function(){
  moveToPreviousSlide();
});

function moveToNextSlide(){
  if(slidePosiiton === totalSlides-1){
    prevSlidePosition=totalSlides-1;
    slidePosiiton=0;
  }
  else{
    prevSlidePosition=slidePosiiton;
    slidePosiiton++;
  }
  console.log(slidePosiiton)
  updateSlidePosition();
}
function moveToPreviousSlide(){
  if(slidePosiiton === 0){
    prevSlidePosition=0;
    slidePosiiton=totalSlides-1;
  }
  else{
    prevSlidePosition=slidePosiiton;
    slidePosiiton--;
  }
  console.log(slidePosiiton)
  updateSlidePosition();
}
slides[slidePosiiton].classList.add('mySlides-visible');
function updateSlidePosition(){

  // console.log(slides)

  // for(let i=0;i<slides.length;i++){
  //   console.log(i,slidePosiiton)
  //   if(i!==slidePosiiton){
  //     slides[i].classList.remove('mySlides-visible')
  //     slides[i].classList.add('mySlides-hidden')
  //   }
  // slides[slidePosiiton].classList.remove('mySlides-visible')
  slides[slidePosiiton].classList.add('mySlides-visible');
  slides[prevSlidePosition].classList.remove('mySlides-visible')
  
  console.log(slidePosiiton, prevSlidePosition)
}



