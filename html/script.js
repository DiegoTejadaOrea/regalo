document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.getElementById('imageContainer');
  const firstImage = imageContainer.querySelector('img');

  firstImage.addEventListener('click', function() {
    // Reemplaza la imagen actual por la segunda imagen
    firstImage.src = '../imgs/BONO.jpg';
  });
});
