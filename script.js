const images = [
    "url(640px-LOC_Main_Reading_Room_Highsmith.jpg)",
    "url(Bodleian-Library-1024x683.jpg)",
    "url(0_zHJya_cFQMtBXFvn.jpg)",
    "url(13-captivating-facts-about-beinecke-library-1695483441.jpg)"
];
const backImageElement = document.querySelector('.backimage');
const libraryElements = document.querySelectorAll('.library img');

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    backImageElement.style.backgroundImage = images[currentImageIndex];
}

setInterval(changeBackgroundImage, 3000);

libraryElements.forEach((img, index) => {
    img.addEventListener('click', () => {
        backImageElement.style.backgroundImage = images[index];
    });
});