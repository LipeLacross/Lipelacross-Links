<template>
  <transition name="fade">
    <div v-if="loadingStore.isLoading" class="loading-overlay">
      <div class="logo-container">
        <img :src="logoSvg" alt="Logo" class="logo" />
      </div>
      <div class="loader">
        <div class="orbit">
          <div class="planet"></div>
        </div>
        <div class="orbit orbit2">
          <div class="planet planet2"></div>
        </div>
        <div class="orbit orbit3">
          <div class="planet planet3"></div>
        </div>
      </div>
      <div class="loading-content">
        <span class="loading-title">Preparando sua experiência...</span>
        <span class="loading-text">{{ loadingStore.randomMessage }}</span>
        <div class="progress-bar">
          <div class="progress" :style="{ width: loadingStore.progress + '%' }"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLoadingStore } from '../modules/loading'
import logoSvg from '@/assets/logo.svg'

const loadingStore = useLoadingStore()

onMounted(() => {
  loadingStore.simulateProgress()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

.loading-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(120deg, #fffbe6 0%, #ffdd48 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: overlayFadeIn 0.7s cubic-bezier(.4,0,.2,1);
}

@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.logo-container {
  margin-bottom: 26px;
  animation: fadeInDown 1s cubic-bezier(.4,0,.2,1);
}
.logo {
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 6px 24px rgba(255,221,72,0.18));
  animation: logoPulse 2.2s infinite;
}
@keyframes logoPulse {
  0%, 100% { transform: scale(1);}
  50% { transform: scale(1.08);}
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-24px);}
  to   { opacity: 1; transform: translateY(0);}
}

.loader {
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 32px;
  margin-top: 8px;
}

.orbit {
  position: absolute;
  top: 50%; left: 50%;
  width: 90px; height: 90px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  border: 2.5px dashed #ffdd48;
  animation: orbitSpin 2.5s linear infinite;
}
.orbit2 {
  width: 70px; height: 70px;
  margin: -35px 0 0 -35px;
  border-color: #fffbe6;
  animation-duration: 1.7s;
  animation-direction: reverse;
}
.orbit3 {
  width: 50px; height: 50px;
  margin: -25px 0 0 -25px;
  border-color: #ffe066;
  animation-duration: 1.2s;
}
@keyframes orbitSpin {
  100% { transform: rotate(360deg);}
}

.planet, .planet2, .planet3 {
  position: absolute;
  top: -10px; left: 50%;
  width: 20px; height: 20px;
  margin-left: -10px;
  background: #ffdd48;
  border-radius: 50%;
  box-shadow: 0 2px 12px #ffdd4880;
  animation: planetBounce 1.2s infinite alternate;
}
.planet2 {
  width: 14px; height: 14px;
  background: #ffe066;
  animation-delay: .6s;
}
.planet3 {
  width: 10px; height: 10px;
  background: #fffbe6;
  animation-delay: .3s;
}
@keyframes planetBounce {
  to { top: -20px; }
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  gap: 8px;
  animation: fadeInUp 1.1s cubic-bezier(.4,0,.2,1) 0.3s both;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px);}
  to   { opacity: 1; transform: translateY(0);}
}

.loading-title {
  font-size: 1.38rem;
  font-weight: 900;
  color: #222;
  letter-spacing: 0.01em;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  text-shadow: 0 2px 8px #fffbe6cc;
  margin-bottom: 2px;
}

.loading-text {
  font-size: 1.08rem;
  color: #7a6f18;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  opacity: 0.92;
  margin-bottom: 12px;
  text-align: center;
  min-height: 22px;
  animation: textFade 2.5s infinite alternate;
}
@keyframes textFade {
  0% { opacity: 0.75;}
  100% { opacity: 1;}
}

.progress-bar {
  width: 220px;
  height: 7px;
  background: #fffbe6;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 6px;
  box-shadow: 0 2px 12px #ffdd4840;
  border: 1.5px solid #ffe066;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #ffdd48 0%, #ffe066 100%);
  border-radius: 5px;
  transition: width 0.25s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 2px 8px #ffdd4840;
}

/* Fade transition for the overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
