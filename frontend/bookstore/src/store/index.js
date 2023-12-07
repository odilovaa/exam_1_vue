import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
    state: {
        user: {},
        books: [],
        loading: false,
    },

    getters: {
        books: (state) => state.books,
    },

    actions: { 
        async fetchBooks({ commit }) {
            commit("SET_LOADING", true);
            try {
                const res = await axios.get(url + "products");
                if (!res.data?.books && res.status !== 200) {
                    console.log("noo");
                    return;
                }
                commit("SET_LOADING", false);
                commit("SET_BOOKS", res.data.books);
            } catch (error) {
                
            }
        },

        async searchBooks({ commit }, title) {
            try {
                const res = await axios.get(url + `books/search?q=${title}`);
                if (!res.data?.books && res.status !== 200) {
                    return;
                }
                commit("SET_BOOKS", res.data.books);
            } catch (error) {
                
            }
        }
    },

    mutations: {
        SET_LOADING: (state, payload) => (state.loading = payload),

        SET_TOKEN: (_, payload) => {
            localStorage.setItem("token", payload);
        },

        SET_BOOKS: (state, payload) => (state.books = payload),

        LOGOUT: (state) => {
            state.user = {};
            localStorage.removeItem("token");
            router.push({ name: 'login'})
        },
    }
});

export default store;