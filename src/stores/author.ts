import { defineStore } from "pinia"
import { computed, ref } from "vue";
import usePostStore from "./post";

export const useAuthorStore = defineStore('author', () => {
    const authors = ref([]);

    const getPostAuthor = computed(() => {
        const postStore = usePostStore();
        return authors.value.find((author: any) => author.id === postStore.post?.userId);
    });

    const fetchAuthors = async () => {
        authors.value = [];
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            authors.value = await response.json();
        } catch (e: any) {
            console.error(e);
        }
    }
    return {authors, getPostAuthor, fetchAuthors};
});

export default useAuthorStore;