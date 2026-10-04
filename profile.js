const targetImage = document.querySelector('.profile-img');

const images = ['Images/1.jpg', 'Images/2.jpg'];

let currentImageIndex = 0;

targetImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    targetImage.src = images[currentImageIndex];
});

fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('nimi').textContent = data.nimi;
        document.getElementById('perekonnanimi').textContent = data.perekonnanimi;
        document.getElementById('vanus').textContent = data.vanus;
        document.getElementById('email').textContent = data.email;
    })
    .catch(error => {
        console.error('Profile JSON laadimine ebaõnnestus:', error);
    });