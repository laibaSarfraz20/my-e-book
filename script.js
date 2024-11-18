const track = document.querySelector('.carousel-track');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= track.children.length) {
        index = 0;
    }
    const width = track.children[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * width}px)`;
}

setInterval(moveCarousel, 3000);

// Counter

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
  
    counters.forEach((counter) => {
      const updateCount = (target) => {
        let count = 0;
        const duration = 4000;
        const increment = target / (duration / 30);
        const step = () => {
          count = Math.ceil(count + increment);
          counter.textContent = count;
  
          if (count < target) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = target + "+"; 
          }
        };
  
        requestAnimationFrame(step);
      };
  
      const targetValue = parseInt(counter.textContent, 10 );
      updateCount( targetValue);
    });
  });
