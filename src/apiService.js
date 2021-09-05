export default class NewApiSearch {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {
       const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23235889-ad2e782c3a775466fc04cd861`;

        return fetch(url)
            .then(response => response.json())
            .then(({images})=> {
                this.page += 1;
                return images;
            });
    }

    get query() {
        return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    resetPage() {
        this.page = 1;
    }
}

