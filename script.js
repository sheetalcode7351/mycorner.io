const slideshowPhoto = document.getElementById("slideshow-photo");

const photos = [
  "Image/ME1.png",
  "Image/ME2.png",
  "Image/ME3.png",
  "Image/ME4.png"
];

let currentIndex = 0;

setInterval(() => {
  slideshowPhoto.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    slideshowPhoto.src = photos[currentIndex];
    slideshowPhoto.style.opacity = "1";
  }, 350);

}, 3000);
