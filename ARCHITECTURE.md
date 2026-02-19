# Arquitetura do Projeto

## 📁 Estrutura do Projeto

```
Lipelacross-Links/
├── public/                          # Arquivos estáticos
│   └── favicon.ico
│
├── src/
│   ├── assets/                      # Imagens, ícones e estilos globais
│   │   ├── *.css                    # Estilos (base.css, main.css)
│   │   ├── *.png / *.svg            # Imagens e ícones
│   │
│   ├── components/                  # Componentes Vue
│   │   ├── LoadingScreen.vue        # Tela de carregamento
│   │   └── SocialLinks.vue          # Perfil e links sociais
│   │
│   ├── modules/                     # Stores Pinia (TypeScript)
│   │   ├── loading.ts               # Estado do loading
│   │   └── userProfile.ts           # Dados do perfil
│   │
│   ├── store/                       # Configuração do Pinia
│   │   └── index.ts
│   │
│   ├── App.vue                      # Componente raiz
│   ├── main.js                      # Entry point
│   └── vue-shim.d.ts                # Type declarations
│
├── tsconfig.json                    # Config TypeScript
├── vite.config.js                   # Config Vite
├── jsconfig.json                    # Config paths
├── package.json                     # Dependências
└── index.html                       # HTML principal
```


## 🎯 Princípios da Arquitetura

### Separação de Responsabilidades
- **Components**: Apenas UI e interação
- **Modules (Stores)**: Lógica e estado
- **Assets**: Recursos estáticos

### Escalabilidade
- Adicionar store: criar arquivo em `src/modules/`
- Adicionar componente: criar arquivo em `src/components/`
- TypeScript garante propagação de mudanças

### Reusabilidade
- Componentes são independentes e reutilizáveis
- Stores Pinia podem ser usadas em qualquer componente
- CSS scoped evita conflitos

### Manutenibilidade
- TypeScript previne bugs em tempo de desenvolvimento
- Estado centralizado facilita debug
- Estrutura previsível facilita localização de código


## 📝 Convenções

### Nomenclatura
- **Componentes Vue**: `PascalCase.vue` (ex: `LoadingScreen.vue`)
- **Stores TypeScript**: `camelCase.ts` (ex: `userProfile.ts`)
- **Pastas**: `camelCase` (ex: `components/`, `modules/`)
- **Estilos**: `lowercase.css` (ex: `main.css`)

### Codificação

**Componentes Vue**:
```vue
<template>
  <div class="component-name">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => count.value++
</script>

<style scoped>
.component-name { /* ... */ }
</style>
```

**Stores Pinia**:
```typescript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('myStore', () => {
  const state = ref(initialValue)
  
  const action = () => {
    state.value = newValue
  }
  
  return { state, action }
})
```

### Boas Práticas
- **SOLID**: Single Responsibility, Open/Closed, Dependency Inversion
- **Clean Code**: Nomes descritivos, funções pequenas, DRY, KISS
- **Vue 3**: `<script setup>`, Composition API, CSS scoped


## 🛠️ Manutenção e Expansão

### Manutenção

**Atualizar dependências**:
```bash
npm outdated          # Ver atualizações disponíveis
npm update            # Atualizar (minor/patch)
npm install pkg@latest # Atualizar pacote específico
```

Após atualizar: `npm run dev` → `npm run build` → `npm run preview`

**Corrigir bugs**:
1. Reproduzir o bug
2. Localizar causa (console, DevTools)
3. Implementar fix
4. Validar fix
5. Documentar se necessário

**Melhorar código**:
- Remover código não utilizado
- Extrair lógica duplicada
- Usar nomes descritivos
- Simplificar expressões complexas

### Adicionando Novas Funcionalidades

**1. Criar Store (se precisar estado)**:
```typescript
// src/modules/myFeature.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyFeatureStore = defineStore('myFeature', () => {
  const data = ref({ /* ... */ })
  const action = () => { /* ... */ }
  return { data, action }
})
```

**2. Criar Componente (se precisar UI)**:
```vue
<!-- src/components/MyFeature.vue -->
<template>
  <div class="my-feature">
    <!-- UI aqui -->
  </div>
</template>

<script setup>
import { useMyFeatureStore } from '@/modules/myFeature'
const store = useMyFeatureStore()
</script>

<style scoped>
.my-feature { /* estilos */ }
</style>
```

**3. Integrar no App**:
```vue
<!-- src/App.vue -->
<template>
  <div id="app">
    <LoadingScreen />
    <SocialLinks />
    <MyFeature /> <!-- Novo -->
  </div>
</template>

<script setup>
import MyFeature from './components/MyFeature.vue'
// ...
</script>
```

**4. Testar e Documentar**:
```bash
npm run dev     # Testar localmente
npm run build   # Build de produção
npm run preview # Preview do build
```

Atualizar README.md se for feature importante.

---

**Última atualização**: Fevereiro 2026  
**Versão do projeto**: 2.0 (Pinia + TypeScript)  
**Manutenedor**: Felipe Moreira





