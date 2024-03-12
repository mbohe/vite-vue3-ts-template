<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}

a:link {
  text-decoration: none;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
