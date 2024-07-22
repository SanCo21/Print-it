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

// Vérifiez que les éléments HTML existent

// if (!bannerImage) {
// 	console.error("Élément image non trouvé");
// } else {
// 	console.log("Élément image trouvé");
// }

// if (!bannerText) {
// 	console.error("Élément texte non trouvé");
// } else {
// 	console.log("Élément texte trouvé");
// }

// if (!dotsContainer) {
// 	console.error("Conteneur de points non trouvé");
// } else {
// 	console.log("Conteneur de points trouvé");
// }

// ***** Counter for the elements in the slides array *****

// let countSlides = slides.length;
// console.log(countSlides);


// ****** Loop with counter *****

// let countSlides = 0
// for (let i = 0; i < slides.length; i++) {
// 	countSlides++;
// 	console.log('Images: ${slides[i]}, Compteur: ${countSlides}');}


// ***** Counter with loop to add dots *****

for (let i = 0; i < slides.length; i++) {
	// countSlides++;
	const nouvelleDiv = document.createElement('div');
	nouvelleDiv.classList.add('dot');
	dotsContainer.appendChild(nouvelleDiv);
}

function setActiveDot(index) {
	// retirer la classe active de tous les dots
	const dotDiv = document.querySelectorAll('.dot');
	dotDiv.forEach(dot => dot.classList.remove('dot_selected'));
	// ajouter la classe active au dot correspondant
	if (dotDiv[index]) {
		dotDiv[index].classList.add('dot_selected');
	}
}

function updateCarousel() {
    if (bannerImage && bannerText) {
        bannerImage.src = slides[currentIndex].image;
        // console.log("Image source:", slides[currentIndex].image);
        bannerText.innerHTML = slides[currentIndex].tagLine;
		// console.log("Texte changé à:", slides[currentIndex].tagLine);
        setActiveDot(currentIndex); 
	} 
	else {
		console.error("Élément image ou texte non trouvé")
	}	
}	


// màj de currentIndex pour rester dans les limites du nombre de diapos.
// avec retour première diapo si clic flèche droite sur dernière diapo et vice-versa

function slideChange(direction) {
	currentIndex = (currentIndex + direction + slides.length) % slides.length;
	console.log("Index actuel:", currentIndex);
	setActiveDot(currentIndex);
	updateCarousel();
}

// ***** EventListener for the arrows *****
	
let arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", function() {
	console.log("Clic sur la flèche gauche")
	slideChange(-1);
});

let arrowRight = document.getElementById("arrowRight");
arrowRight.addEventListener("click", function() {
	console.log("Clic sur la flèche droite")
	slideChange(+1);
});


// Initialiser le carrousel avec la première image et le premier point actif
updateCarousel();
setActiveDot(currentIndex);