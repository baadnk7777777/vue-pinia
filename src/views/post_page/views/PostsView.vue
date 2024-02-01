<!-- eslint-disable vue/no-parsing-error -->
<template>
    <main>
        <Vue3Lottie v-if="loading" :animationData="AstronautJSON" :height="500" :width="500" />
       
        <p v-if="error">{{ error }}</p>
        
        <div v-if="posts">
            <p v-for="post in posts" :key="post.id">
                <RouterLink class="text-lg font-bold" :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
                <p>{{ post.body }}</p>
            </p>
        </div>
        

    
       
    </main>
</template>


<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { usePostStore } from '../stores/post';
    import {Vue3Lottie} from 'vue3-lottie';
    import AstronautJSON from '../../../assets/loading.json';
   
    const {posts, loading, error} = storeToRefs(usePostStore());
    const { fetchPosts } = usePostStore();
    console.log("fetchPosts");
    fetchPosts();
    console.log(posts.value);
    
</script>../stores/post