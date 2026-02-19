<template>
  <div id="app">
    <LoadingScreen />
    <SocialLinks />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SocialLinks from './components/SocialLinks.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import { useLoadingStore } from './modules/loading'

const loadingStore = useLoadingStore()

onMounted(() => {
  // Inicia o loading simulado (2 segundos)
  setTimeout(() => {
    loadingStore.stopLoading()
  }, 2000)
})
</script>

<style src="./assets/main.css"></style>
