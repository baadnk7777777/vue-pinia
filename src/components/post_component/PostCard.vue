<template>
    <div class="">
        <div class="">
            <h2>{{ post.title }}</h2>
            <p v-if="author">Written by: <RouterLink :to="`/author/${author.username}`">
            {{ author.name }}
            </RouterLink> 
            <span>Commnets: {{ getPostComments.length }}</span>
            </p>
            <p>{{ post.body }}</p>
        </div>
        <hr>
        <h3>Comments:</h3>
        <Commnet :comments="getPostComments"></Commnet>
    </div>
</template>

<script setup lang="ts">
import useCommnetStore from '@/stores/comments';
import { storeToRefs } from 'pinia';
import Commnet from '../post_component/CommentCard.vue';
    defineProps(['post', 'author']);
    const {getPostComments} = storeToRefs(useCommnetStore());
    const {fetchComments} = useCommnetStore();

    fetchComments();
</script>@/module/post_page/stores/comments