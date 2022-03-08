const container = document.getElementById('image-container');

for (let i=1; i <= 151; i++) {
  let image = document.createElement('img');
  image.src = `images/izumijoshreception${i}.jpg`;
  image.loading = 'lazy';
  container.appendChild(image);
}

