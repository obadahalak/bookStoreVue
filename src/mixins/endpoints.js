import axios from "axios";


const host = axios.create({
    baseURL: 'https://aurora-team.com/bookStore/public/api',
    Headers: { 'Accept': 'application/json' },
});




////home Page ////
const bestRatingApi = '/bestRating';
const newBooksApi = '/newBooks';
const authorsApi = '/authors';
//////

const tagsApi = '/tags';
const categoriesApi = '/categories';
const categoriesByTagApi = '/categoriesByTag/';

const bookApi = '/book/';
const booksApi = '/books';

export default {
    methods: {

        async getBook(bookId) {
            const response = await host.get(bookApi + bookId);
            return response.data.data;
        },

        async getBooks() {
            const response = await host.get(bookApi);
            return response.data.data;
        },

        async getTags() {
            const response = await host.get(tagsApi);
            return response.data.data;
        },

        async getcategories() {
            const response = await host.get(categoriesApi);
            return response.data.data;
        },

        async getcategoriesByTag(tagId) {
            const response = await host.get(booksApi + tagId);
            return response.data.data;
        },


        async getNewBooksApi() {
            const response = await host.get(newBooksApi);
            return response.data.data;
        },


    }
};