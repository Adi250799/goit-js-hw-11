import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Klucz API Pixabay
const API_KEY = 'g';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');
let lightbox;

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.target.querySelector('#query').value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  toggleLoader();

  try {
    const { data } = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits);
      lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    toggleLoader();
  }
}

function renderGallery(images) {
  const markup = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery__item">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>
  `).join('');
  gallery.innerHTML = markup;
}

function clearGallery() {
  gallery.innerHTML = '';
}

function toggleLoader() {
  loader.classList.toggle('hidden');
}
