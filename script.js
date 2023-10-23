const imageUrls = [
    'img/p1.jpeg',
    'img/p2.jpeg',
    'img/p3.jpeg',
    'img/p4.jpeg',
    'img/p5.jpeg',
    'img/p6.jpeg',
    'img/p7.jpeg',
    'img/p8.jpeg',
    'img/p9.jpeg',
    'img/p10.jpeg',
    'img/p11.jpeg',
    'img/a1.jpeg',
    'img/a2.jpeg',
    'img/a3.jpeg',
    'img/a4.jpeg',
    'img/a5.jpeg',
    'img/a6.jpeg',
    'img/a7.jpeg',
    'img/a8.jpeg',
    'img/a9.jpeg',
    'img/a10.jpeg',
    'img/q1.jpeg',
    'img/q2.jpeg',
    'img/q3.jpeg',
    'img/q4.jpeg',
    'img/q5.jpeg',
    'img/q6.jpeg',
    'img/q7.jpeg',
    'img/q8.jpeg',
    'img/q9.jpeg',
    'img/q10.jpeg',
    'img/w1.jpeg',
    'img/w2.jpeg',
    'img/w3.jpeg',
    'img/w4.jpeg',
    'img/w5.jpeg',
    'img/w6.jpeg',
    'img/w7.jpeg',
    'img/w8.jpeg',
    'img/w9.jpeg',
    'img/w10.jpeg',
    'img/d1.jpeg',
    'img/d2.jpeg',
    'img/d3.jpeg',
    'img/d4.jpeg',
    'img/d5.jpeg',
    'img/d6.jpeg',
    'img/d7.jpeg',
    'img/d8.jpeg',
    'img/d9.jpeg',
    'img/d10.jpeg',
    'img/e1.jpeg',
    'img/e2.jpeg',
    'img/e3.jpeg',
    'img/e4.jpeg',
    'img/e5.jpeg',
    'img/e6.jpeg',
    'img/e7.jpeg',
    'img/e8.jpeg',
    'img/e9.jpeg',
    'img/e10.jpeg',
    'img/s1.jpeg',
    'img/s2.jpeg',
    'img/s3.jpeg',
    'img/s4.jpeg',
    'img/s5.jpeg',
    'img/s6.jpeg',
    'img/s7.jpeg',
    'img/s8.jpeg',
    'img/s9.jpeg',
    'img/s10.jpeg',
    'img/f1.jpeg',
    'img/f2.jpeg',
    'img/f3.jpeg',
    'img/f4.jpeg',
    'img/f5.jpeg',
    'img/f6.jpeg',
    'img/f7.jpeg',
    'img/f8.jpeg',
    'img/f9.jpeg',
    'img/f10.jpeg',
    'img/g1.jpeg',
    'img/g2.jpeg',
    'img/g3.jpeg',
    'img/g4.jpeg',
    'img/g5.jpeg',
    'img/g6.jpeg',
    'img/g7.jpeg',
    'img/g8.jpeg',
    'img/g9.jpeg',
    'img/g10.jpeg',

    
];

const gallery = document.getElementById('imageGallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeFullscreenBtn = document.getElementById('closeFullscreenBtn');
const themeToggleBtn = document.querySelector('.theme-toggle');
const prevImageBtn = document.getElementById('prevImage');
const nextImageBtn = document.getElementById('nextImage');
let currentIndex = 0;

let currentTheme = 'light';

function addImagesToGallery() {
    for (const imageUrl of imageUrls) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.addEventListener('click', () => openFullscreen(imageUrl));
        gallery.appendChild(img);
    }
}

function openFullscreen(imageUrl) {
    currentIndex = imageUrls.indexOf(imageUrl);
    fullscreenImage.src = imageUrl;
    fullscreen.style.display = 'flex';
    prevImageBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextImageBtn.style.display = currentIndex === imageUrls.length - 1 ? 'none' : 'block';

    prevImageBtn.addEventListener('click', showPreviousImage);
    nextImageBtn.addEventListener('click', showNextImage);
}

function closeFullscreen() {
    fullscreen.style.display = 'none';
    prevImageBtn.removeEventListener('click', showPreviousImage);
    nextImageBtn.removeEventListener('click', showNextImage);
}

function toggleTheme() {
    if (currentTheme === 'light') {
        document.body.style.setProperty('--background-color', '#000');
        themeToggleBtn.innerText = '☀️';
        currentTheme = 'dark';
    } else {
        document.body.style.setProperty('--background-color', '#f2f2f2');
        themeToggleBtn.innerText = '🌙';
        currentTheme = 'light';
    }
}

closeFullscreenBtn.addEventListener('click', closeFullscreen);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeFullscreen();
    }
    if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
    if (event.key === 'ArrowRight') {
        showNextImage();
    }
});

themeToggleBtn.addEventListener('click', toggleTheme);

function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        openFullscreen(imageUrls[currentIndex]);
    }
}

function showNextImage() {
    if (currentIndex < imageUrls.length - 1) {
        currentIndex++;
        openFullscreen(imageUrls[currentIndex]);
    }
}

window.addEventListener('load', addImagesToGallery);
