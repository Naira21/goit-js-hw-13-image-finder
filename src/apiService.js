export const newApiSearch = {
    // searchQuery = '',
    page: 1,
    async fetchImages(searchQuery) {
        try {
            const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=23235889-ad2e782c3a775466fc04cd861`,);
            const data = await response.json();
            const hits = await data.hits;
            return hits;
        } catch (er) {
            console.log(er);
        }
    },

    increment() {
        this.page += 1;
    },

    resetPage() {
        this.page = 1;
    },
};


// export default class NewApiSearch {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }
//     fetchImages() {
//        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23235889-ad2e782c3a775466fc04cd861`;

//         return fetch(url)
//             .then(response => response.json())
//             .then(({ data }) => {
//                 this.page += 1;
//                 return data;
//                 // if (images.length < 13) {
//                 //     return images;
//                 // } else if (images.length > 12) {
//                 //     const element = document.getElementById('.my-element-selector');
//                 //     element.scrollIntoView({
//                 //         behavior: 'smooth',
//                 //         block: 'end',
//                 //     });

//                 // }
//             })
            
//     }

//     get query() {
//         return this.searchQuery;
//     }
    
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
//     resetPage() {
//         this.page = 1;
//     }
// }

