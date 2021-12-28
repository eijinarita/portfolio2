   const table = document.querySelector('.table');

   document.getElementById("humburger").addEventListener("click" , function(){
       table.classList.toggle("active");
   })

   document.getElementById("modalOpen").addEventListener("click" , function(){
       document.getElementById("modal").classList.add("active");
       document.getElementById("mask").classList.add("active");
   })
   document.getElementById("modalClose").addEventListener("click" , function(){
       document.getElementById("modal").classList.remove("active");
       document.getElementById("mask").classList.remove("active");
   })
   
   const slider3 = document.getElementById("slider3");

   const imageTotalNumber = 6,
         mainImageElement = document.getElementById('mainImage'),
         imageListElement = document.getElementById('imagelist'),
         prevImageElement = document.getElementById('prevImage'),
         nextImageElement = document.getElementById('nextImage')

    let currentSlideNumber = 1;

    mainImageElement.setAttribute('src' , 'img/YKK/ykk1.jpg');

    function changeSlideStatus() {
            if (currentSlideNumber === 1) {
            prevImageElement.classList.add('inActive');
        }else{
            prevImageElement.classList.remove('inActive');
        }

        if (currentSlideNumber === imageTotalNumber) {
            nextImageElement.classList.add('inActive');
        }else{
            nextImageElement.classList.remove('inActive');
        }

        document.getElementById('currentSlideNumber').textContent = `${currentSlideNumber} / ${imageTotalNumber}`;
    }

    changeSlideStatus();

    for(let i = 0; i < imageListElement; i++) {
        const liElement =document.createElement("li");

        liElement.addEventListener('click', () => {
            currentSlideNumber = i + 1;
            changeSlideStatus();
        })
    }

    prevImageElement.addEventListener('click' , () => {
        if (currentSlideNumber !== 1) {
            currentSlideNumber--
            mainImageElement.setAttribute('src', `img/YKK/ykk${currentSlideNumber}.jpg`);
            changeSlideStatus();
        }
    })

    nextImageElement.addEventListener('click' , () => {
        if (currentSlideNumber !== imageTotalNumber) {
            currentSlideNumber++
            mainImageElement.setAttribute('src', `img/YKK/ykk${currentSlideNumber}.jpg`);
            changeSlideStatus();
        }
    })

    window.addEventListener("scroll" , () => {
        let scroll = document.documentElement.scrollTop;
        
    })

    const targetElement = document.querySelectorAll(".animationTarget");
    console.log("画面の高さ" , window.innerHeight);
    document.addEventListener("scroll" , ()=>{
            for(let i = 0; i < targetElement.length;i++){
            const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .2;
            if(window.innerHeight > getElementDistance){
                targetElement[i].classList.add("show");
            }
        }
    })
    