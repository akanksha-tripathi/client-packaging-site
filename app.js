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
  if(slidePosiiton === totalSlides-2){
    prevSlidePosition=totalSlides-1;
    slides[slidePosiiton].classList.remove('mySlides-visible');
    slidePosiiton=0;
  }
  else{
    prevSlidePosition=slidePosiiton;
    slidePosiiton++;
  }
  console.log(slidePosiiton)
  updateSlidePosition(1);
}
function moveToPreviousSlide(){
  if(slidePosiiton === 0){
    prevSlidePosition=0;
    slides[slidePosiiton+1].classList.remove('mySlides-visible');
    slidePosiiton=totalSlides-2;
  }
  else{
    prevSlidePosition=slidePosiiton+1;
    slidePosiiton--;
  }
  console.log(slidePosiiton)
  updateSlidePosition(-1);
}
slides[slidePosiiton].classList.add('mySlides-visible');
slides[slidePosiiton+1].classList.add('mySlides-visible');


function updateSlidePosition(index){

  slides[slidePosiiton].classList.add('mySlides-visible');
  slides[slidePosiiton+1].classList.add('mySlides-visible');

  slides[prevSlidePosition].classList.remove('mySlides-visible');
  console.log(prevSlidePosition,slidePosiiton)
}



