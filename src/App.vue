<template>
  <header class="bg-red-500">
    <div>
      <nav class=" px-5 py-5">
        <router-link to="/">Posts</router-link>
        <router-link to="/authors">Authors</router-link>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script setup lang="ts">

</script>