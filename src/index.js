import './sass/main.scss';
import './apiService';
import cardTemplate from './templates/card.hbs';
import formTemplate from './templates/form.hbs';
import galleryTemplate from './templates/gallery.hbs';

const input = document.querySelector('#search-form');
input.addEventListener('submit', onSearch);