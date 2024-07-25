const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

const dotsContainer = document.querySelector('.dots');
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


// ***** Counter with loop to add dots *****

for (let i = 0; i < slides.length; i++) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('dot');
	dotsContainer.appendChild(newDiv);

	// Add a click event listener to each dot to make it clickable
	newDiv.addEventListener('click', function() {
		// If the index of the dot (i) is not equal to the current active slide index
		if (i !== currentIndex) {
			// Remove the current active dot class
			document.querySelector('.dot_selected').classList.remove('dot_selected');
			// Add the active class to the selected dot
			newDiv.classList.add('dot_selected');
			// Update the current slide
			currentIndex = i;
			updateCarousel();
		}
	});
}

function setActiveDot(currentIndex) {
	// Remove the active class from all dots
	const dotDiv = document.querySelectorAll('.dot');
	dotDiv.forEach(dot => dot.classList.remove('dot_selected'));
	// Add the active class to the corresponding dot
	if (dotDiv[currentIndex]) {
		dotDiv[currentIndex].classList.add('dot_selected');
	}
}

// update of images and texts in bannerImage according to currentIndex
function updateCarousel() {    
        bannerImage.src = slides[currentIndex].image;        
        bannerText.innerHTML = slides[currentIndex].tagLine;		
        setActiveDot(currentIndex); 	
}	

// update of currentIndex to stay within the limits of the number of slides
// with return to the first slide if click on the right arrow on the last slide and vice-versa
function slideChange(direction) {
	currentIndex = (currentIndex + direction + slides.length) % slides.length;
	setActiveDot(currentIndex);
	updateCarousel();
}

// ***** EventListener for the arrows *****
	
arrowLeft.addEventListener("click", function() {
	slideChange(-1);
});

arrowRight.addEventListener("click", function() {
	slideChange(+1);
});

// Initialize the carousel with the first image and the first active dot
updateCarousel();
setActiveDot(currentIndex);