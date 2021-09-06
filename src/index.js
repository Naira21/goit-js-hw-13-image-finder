import './sass/main.scss'
import { newApiSearch } from './apiService'
import galleryTemplate from './templates/gallery.hbs';

const form = document.querySelector('#search-form');
const loadButton = document.querySelector('[data-action="load-more"]');
const galleryList = document.querySelector('.gallery');
// const searchButton = document.querySelector('#submit');
// console.log(searchButton);

form.addEventListener('submit', onSearch);
// searchButton.addEventListener('click', clickLoadBtn);
loadButton.addEventListener('click', clickLoadBtn);


const searchProps = {
  searchQuery: undefined,
};

async function onSearch(e) {
  e.preventDefault();
  newApiSearch.resetPage();
  clearGalleryResult();

  searchProps.searchQuery = e.target.query.value;
  const data = await newApiSearch.fetchImages(searchProps.searchQuery);

  if (data.length === 0) {
    onError();
  }
  renderCardMarkup(data);

  const element = document.getElementById('.my-element-selector');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });


}


// async function onSearch(e) {
//   e.preventDefault();
//   newApiSearch.resetPage();
//   clearGalleryResult();


//   searchProps.searchQuery = e.target.query.value;
//   const data = await newApiSearch.fetchImages(searchProps.searchQuery);

//   if (data.length === 0) {
//     onError();
//   }
//   renderCardMarkup(data);
// }

async function clickLoadBtn() {
//  newApiSearch.fetchImages().then(renderCardMarkup());  
  newApiSearch.increment();
  const data = await newApiSearch.fetchImages(searchProps.searchQuery);
  renderCardMarkup(data);
};


function renderCardMarkup(data) {
    galleryList.insertAdjacentHTML('beforeend', galleryTemplate(data))
}

function clearGalleryResult() {
  galleryList.innerHTML = '';
  
}

function onError() {
  error({
    text: 'Incorrect query! Try again'
  })
}
