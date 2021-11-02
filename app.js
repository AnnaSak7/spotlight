const spotlight = document.querySelector('.spotlight');
let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 1) 200px';

window.addEventListener('mousemove', (e) => {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(e.pageX);
  console.log(e.pageY);
  spotlight.style.backgroundImage = `radial-gradient(circle at ${
    (e.pageX / window.innerWidth) * 100
  }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize})`;
});
