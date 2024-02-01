<template>
    <div class="">
        <div v-for="comment in comments" :key="comment.id">
            <h3>{{ comment.name }}</h3>
            <p>{{ comment.body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps(['comments']);
</script>