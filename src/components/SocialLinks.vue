<template>
  <div class="social-links">
    <img
        :src="userProfileStore.profile.profilePic"
        :alt="`Foto de ${userProfileStore.profile.name}`"
        class="profile-pic"
        @click="userProfileStore.toggleProfileAnimation"
        :class="{ animate: userProfileStore.isAnimating }"
    />
    <div class="content-container">
      <div class="info-container">
        <p class="name">{{ userProfileStore.profile.name }}</p>
        <p class="role">{{ userProfileStore.profile.role }}</p>
      </div>
      <div class="links-container">
        <a
          v-for="link in userProfileStore.profile.socialLinks"
          :key="link.name"
          :href="link.url"
          class="social-link"
          :class="link.name.toLowerCase()"
          :title="link.title"
        >
          <img :src="link.icon" :alt="link.name" class="social-icon" />
          <span>{{ link.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserProfileStore } from '../modules/userProfile'

const userProfileStore = useUserProfileStore()
</script>

<style scoped>
/* Estilo do componente principal */
.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: box-shadow 0.3s, filter 0.3s;
  animation: fadeIn 2s forwards;
  margin-bottom: 20px;
  box-shadow: 0 4px 24px #ffdd4880, 0 1.5px 6px #0001;
  background: linear-gradient(135deg, #fffbe6 0%, #ffdd48 100%);
  position: relative;
  z-index: 2;
}

/* Animação ao clicar */
.profile-pic.animate {
  animation: profileBounce 0.9s cubic-bezier(.36,1.56,.64,1) both, profileFlash 0.5s linear;
  box-shadow: 0 0 0 8px #ffdd4840, 0 8px 32px #ffdd4880;
  filter: brightness(1.15) drop-shadow(0 0 18px #ffdd48aa);
}

@keyframes profileBounce {
  0%   { transform: scale(1) rotateZ(0deg);}
  10%  { transform: scale(1.08, 0.92) rotateZ(-6deg);}
  30%  { transform: scale(0.95, 1.1) rotateZ(3deg);}
  50%  { transform: scale(1.04, 0.96) rotateZ(-3deg);}
  70%  { transform: scale(0.98, 1.02) rotateZ(2deg);}
  90%  { transform: scale(1.02, 0.98) rotateZ(-1deg);}
  100% { transform: scale(1) rotateZ(0deg);}
}

/* Flash de luz circular */
@keyframes profileFlash {
  0% {
    box-shadow: 0 0 0 0 #ffdd48cc, 0 4px 24px #ffdd4880;
  }
  70% {
    box-shadow: 0 0 0 32px #ffdd4800, 0 4px 24px #ffdd4880;
  }
  100% {
    box-shadow: 0 0 0 0 #ffdd4800, 0 4px 24px #ffdd4880;
  }
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 20px;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 300px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: fadeInSlideUp 1s forwards;
}

/* Informações do perfil */
.info-container {
  margin-bottom: 20px;
}

.name {
  font-weight: 800;
  font-size: 1.8rem;
  margin: 0;
  color: #333;
  opacity: 0;
  animation: fadeInText 1s forwards 1s;
}

.role {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
  color: #333;
  opacity: 0;
  animation: fadeInText 1s forwards 1.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animação de fade-in e slide-up para o bloco branco */
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animação de zoom para os links */
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Animação de flash para a página */
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/* Estilos dos links sociais */
.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.social-link {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  opacity: 0;
  animation: fadeInSlideUp 1s forwards, zoomIn 2s infinite;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Atraso para a animação de cada link */
.social-link:nth-child(1) {
  animation-delay: 1s;
}

.social-link:nth-child(2) {
  animation-delay: 1.2s;
}

.social-link:nth-child(3) {
  animation-delay: 1.4s;
}

.social-link:nth-child(4) {
  animation-delay: 1.6s;
}

.social-link:nth-child(5) {
  animation-delay: 1.8s;
}

.social-icon {
  width: 30px;
  height: auto;
  margin-right: 14px;
}

.social-link:hover {
  background-color: rgba(255, 222, 89, 0.9);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.lacrosstech:hover {
  background-color: #e6b800;
  color: #000 !important;
}
.social-link:active {
  filter: brightness(0.92);
  transform: scale(0.97);
}
.social-link:focus {
  outline: 2px solid #FFDE59;
  outline-offset: 2px;
}


.instagram {
  background-color: #833ab4;
}

.linkedin {
  background-color: #0a66c2;
}

.youtube {
  background-color: #c4302b;
}

.github {
  background-color: #333;
}

.portfolio {
  background-color: #ffcf00;
  color: #222 !important;
}

.lacrosstech {
  background-color: #ffcf00;
  color: #222 !important;
}


/* Animação de flash removida do body para melhor performance */



</style>
