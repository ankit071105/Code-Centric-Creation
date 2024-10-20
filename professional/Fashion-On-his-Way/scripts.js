
const recommendationDiv = document.getElementById('recommendations');
const apiKey = 'glAWDPbwsXE6kA5eN1xcYrNybjVeIkf8fRaz2oyuWmg'; // Replace with your Unsplash Access Key
const baseUrl = 'https://api.unsplash.com/photos/random';
const query = 'dress'; // Search for dress images
const imageCount = 3; // Number of images to fetch

async function fetchImages() {
    try {
        const response = await fetch(`${baseUrl}?query=${query}&count=${imageCount}&client_id=${apiKey}`);
        
        if (response.ok) {
            const data = await response.json();
            recommendationDiv.innerHTML = ''; // Clear previous images

            // Display new images
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = 'Dress';
                img.style.margin = '10px';
                img.style.border = '1px solid #ddd';
                img.style.borderRadius = '5px';
                img.style.maxWidth = '300px';
                recommendationDiv.appendChild(img);
            });
        } else {
            const errorText = await response.text();
            console.error('Error fetching images:', errorText);
            recommendationDiv.innerHTML = '<p>Sorry, there was an error fetching the images.</p>';
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        recommendationDiv.innerHTML = '<p>Sorry, there was an error fetching the images.</p>';
    }
}

// Initial display of images
fetchImages();

// Refresh images every 10 seconds
setInterval(fetchImages, 10000);
