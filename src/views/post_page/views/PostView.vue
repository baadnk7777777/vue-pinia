<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="">
        <Vue3Lottie v-if="loading" :animationData="AstronautJSON" :height="500" :width="500" />
        <p v-if="postError">{{ postError.message }}</p>
        <p v-if="post">
            <Post :post="post" :author="getPostAuthor"></post>
           
        </p>
    </div>
</template>

<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie';
import AstronautJSON from '../../../assets/loading.json';
import useAuthorStore from '@/views/post_page/stores/author';
import usePostStore from '../stores/post';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import Post from '../../../components/post_component/PostCard.vue';

const route = useRoute();
const {getPostAuthor} = storeToRefs(useAuthorStore());
const {fetchAuthors} = useAuthorStore();
const {post, loading, error: postError} = storeToRefs(usePostStore());
const {fetchPost} = usePostStore();



const postId:number = Number(route.params.id);
fetchAuthors();
fetchPost(postId);
</script>@/views/post_page/stores/author@/views/post_page/stores/post