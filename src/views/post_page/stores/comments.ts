import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { usePostStore } from "./post";
import type { Post } from "@/models/post";

export const useCommnetStore = defineStore('comment', () => {
    const comments = ref([]);

    const getPostComments = computed(() => {
        const postStore = usePostStore();
        return comments.value.filter((post: Post) => post.id === postStore.post?.id)
    });

    const fetchComments = async () => {
        comments.value = [];
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            comments.value = await response.json();
        } catch (e: any) {
            console.error(e);
        }
    }

    return {comments, getPostComments, fetchComments};
});

export default useCommnetStore;