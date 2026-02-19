import { defineStore } from 'pinia'
import { ref } from 'vue'

// Importar imagens
import profilePic from '@/assets/Photo Profile.png'
import instagramIcon from '@/assets/instagram.png'
import linkedinIcon from '@/assets/linkedin.png'
import youtubeIcon from '@/assets/youtube.png'
import githubIcon from '@/assets/github.png'
import logoIcon from '@/assets/logo.png'

interface SocialLink {
  name: string
  url: string
  icon: string
  title: string
}

interface UserProfile {
  name: string
  role: string
  profilePic: string
  socialLinks: SocialLink[]
}

export const useUserProfileStore = defineStore('userProfile', () => {
  const profile = ref<UserProfile>({
    name: 'Felipe Moreira',
    role: 'Developer',
    profilePic: profilePic,
    socialLinks: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/lipelacross',
        icon: instagramIcon,
        title: 'Instagram'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lipelacross-developer',
        icon: linkedinIcon,
        title: 'LinkedIn'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@DevLipeLacross',
        icon: youtubeIcon,
        title: 'YouTube'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/lipelacross',
        icon: githubIcon,
        title: 'GitHub'
      },
      {
        name: 'LacrossTech',
        url: 'https://lacrosstech.com.br',
        icon: logoIcon,
        title: 'LacrossTech'
      }
    ]
  })

  const isAnimating = ref(false)

  const toggleProfileAnimation = () => {
    isAnimating.value = !isAnimating.value
  }

  return {
    profile,
    isAnimating,
    toggleProfileAnimation
  }
})


