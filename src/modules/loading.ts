import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(true)

  const messages = [
    'Dica: Clique na foto de perfil para uma surpresa!',
    'Sabia? A criatividade é o combustível da inovação.',
    'Seu networking começa aqui. Aproveite!',
    'Carregando conexões poderosas...',
    'Inspirando novas ideias para você.'
  ]

  const randomMessage = ref(messages[Math.floor(Math.random() * messages.length)])
  const progress = ref(0)

  const startLoading = () => {
    isLoading.value = true
    progress.value = 0
    randomMessage.value = messages[Math.floor(Math.random() * messages.length)]
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  const simulateProgress = () => {
    let val = 0
    const interval = setInterval(() => {
      val += Math.random() * 7
      if (val >= 100) {
        val = 100
        clearInterval(interval)
      }
      progress.value = Math.floor(val)
    }, 180)
  }

  return {
    isLoading,
    progress,
    randomMessage,
    startLoading,
    stopLoading,
    simulateProgress
  }
})

