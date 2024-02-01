import type { Post } from "@/models/post";
import { delay } from "@/utils/delay";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export const usePostStore =  defineStore('post', () => {
    //Define the state.
    const posts = ref<Post[]>([]);
    const post = ref<Post | null>(null);
    //Define the state statuses.

    const loading = ref(false);
    const error = ref(null);

    //Define the getters.
    const getPostsPerAuthor = computed((authorId) => posts.value.filter((post: Post) => post.userId === authorId));
    
    //Define the actions.
    const fetchPosts = async () => {
        posts.value = [];
        loading.value = true;
        await delay(1000);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            posts.value = await response.json();
            loading.value = false;
        } catch (e: any) {
            error.value = e;
            loading.value = false;
        } finally {
            loading.value = false;
        }
    }

    const fetchPost = async (id: number) => {
        post.value = null;
        loading.value = true;
        await delay(1000);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const payload:Post = await response.json();
            post.value = payload;
            console.log(post.value);
            loading.value = false;
        } catch (e: any) {
            error.value = e;
        } finally {
            loading.value = false;
        }
    }

    return {posts, post, loading, error, getPostsPerAuthor, fetchPosts, fetchPost};
});

export default usePostStore;