import './sass/main.scss'
import NewApiSearch from './apiService'
// import cardTemplate from './templates/card.hbs';
import formTemplate from './templates/form.hbs';
import galleryTemplate from './templates/gallery.hbs';

const input = document.querySelector('#search-form');
const loadButton = document.querySelector('[data-action="load-more"]');
const bodyRef = document.querySelector('body');

input.addEventListener('submit', onSearch);
loadButton.addEventListener('click', clickLoadBtn);
bodyRef.addEventListener('DOMContentLoaded', renderMarkup(formTemplate, images));

const newApiSearch = new NewApiSearch();
console.log(newApiSearch);

function onSearch(e) {
    e.preventDefault();
    newApiSearch.query = e.currentTarget.elements.query.value;
    newApiSearch.resetPage();
    clearGalleryResult();
    newApiSearch.fetchImages().then(renderCardMarkup);

    if (newApiSearch.query = '') {
        return alert('Error! Incorrect word. Please, check the query ')
    }
}

function clickLoadBtn() {
  newApiSearch.fetchImages().then(renderCardMarkup);  
}

// function renderMarkup(template, images) {
//     bodyRef.insertAdjacentHTML('beforeend', template(images))
// }

function renderCardMarkup(images) {
    bodyRef.insertAdjacentHTML('beforeend', galleryTemplate(images))
}

function clearGalleryResult() {
    bodyRef.innerHTML = '';
}


//Страница автоматически плавно проскроливается после рендера изображений
const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});