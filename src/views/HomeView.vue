<script setup lang="ts">
 import { storeToRefs } from 'pinia'
    import { usePostStore } from '../stores/post'
    const {posts, loading, error} = storeToRefs(usePostStore());
  const {fetchPosts} = usePostStore();
  fetchPosts();
</script>

<template>
  <main>
    <div class="bg-red-500">Hello</div>
    <p>{{ posts.length }}</p>
  </main>
</template>./post_page/stores/post