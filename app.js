const targetImage = document.querySelector('.profile-img');
const images = ['Images/1.jpg', 'Images/2.jpg'];
let currentImageIndex = 0;

targetImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    targetImage.src = images[currentImageIndex];
});