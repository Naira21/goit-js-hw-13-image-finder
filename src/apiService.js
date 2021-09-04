export default function onSearch(e) {
   const searchQuery = e.currentTarget.elements.query.value;

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=номер_страницы&per_page=12&key=23235889-ad2e782c3a775466fc04cd861`;

    fetch(url)
    .then(array => array.json())
    .catch(er => onError);
 
}

