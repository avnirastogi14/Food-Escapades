const tooltip = document.getElementById('tooltip');
const cuisineImage = document.getElementById('cuisine-image');
const cuisineText = document.getElementById('cuisine-text');
const worldMap = document.getElementById('world-map');

function updateTooltipPosition(event) {
    const rect = worldMap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const offsetX = 15; 
    const offsetY = -15; 
    
    tooltip.style.left = `${x + offsetX}px`;
    tooltip.style.top = `${y + offsetY}px`;
}

worldMap.addEventListener('mousemove', updateTooltipPosition);

const countries = document.querySelectorAll('#world-map path');

countries.forEach(country => {
    country.addEventListener('mouseover', (event) => {
        const cuisineType = getCuisineType(event.target.id);
        const cuisineImg = getCuisineImage(event.target.id);
        
        cuisineText.innerText = cuisineType;
        cuisineImage.src = cuisineImg;
        cuisineImage.style.display = 'block';
        tooltip.style.display = 'flex';
        
        updateTooltipPosition(event);
    });

    country.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});

function getCuisineType(countryId) {
    const cuisines = {
        france: 'French Cuisine',
        italy: 'Italian Cuisine',
        usa: 'American Cuisine',
        china: 'Chinese Cuisine',
        japan: 'Japanese Cuisine',
        thailand: 'Thai Cuisine',
        korea: 'Korean Cuisine',
        mexico: 'Mexican Cuisine',
        germany: 'German Cuisine',
        spain: 'Spanish Cuisine',
        india: 'Indian Cuisine',
        brazil: 'Brazilian Cuisine',
        russia: 'Russian Cuisine',
        egypt: 'Egyptian Cuisine'
    };    
    return cuisines[countryId] || 'Unknown Cuisine';
}

function getCuisineImage(countryId) {
    const images = {
        france: 'french.jpg',
        italy: 'italian.jpg',
        usa: 'american.jpg',
        china: 'china.jpg',
        japan: 'japan.jpg',
        thailand: 'thai.jpg',
        korea: 'korea.jpg',
        mexico: 'mexican.jpg',
        germany: 'german.jpg',
        spain: 'spanish.jpg',
        india: 'indian.jpg',
        brazil: 'brazilian.jpg',
        russia: 'russian.jpg',
        egypt: 'egyptian.jpg'
    };    
    return images[countryId] || 'default.jpg'; 
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const landingContainer = document.querySelector('.landing-container');
        const mainContent = document.querySelector('.main-content');
        landingContainer.style.opacity = '0';
        landingContainer.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            landingContainer.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.height = 'auto';
            document.body.style.display = 'block';
        }, 500);
    }, 4000); 
});

const slider = document.querySelector('.street-food-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
