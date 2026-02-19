## 🌐 [English Version of README](README_EN.md)

# Links de Redes Sociais

Centralizador de links de redes sociais com visual moderno, animações e tela de carregamento personalizada. Desenvolvido em **Vue 3** juntamente com **Vite**, este projeto serve como um hub rápido e responsivo para você divulgar todos os seus contatos profissionais e sociais em um só lugar.

## 🔨 Funcionalidades do Projeto

- **Visualização do Perfil:** Foto de perfil animada, nome e profissão.
- **Links Sociais:** Acesso direto para Instagram, LinkedIn, YouTube, GitHub e portfólio, cada um com ícone e cor personalizados.
- **Animações Modernas:** Elementos animados ao passar o mouse, durante a entrada de componentes e interatividade ao clicar na foto.
- **Tela de Carregamento:** Splash screen com loading, mensagens motivacionais e barra de progresso.

### 📸 Exemplo Visual do Projeto

![chrome-capture-2024-9-14](https://github.com/user-attachments/assets/7da67b9d-cb01-46e8-be42-8c2793d31adb)

## ✔️ Técnicas e Tecnologias Utilizadas

- **Vue.js 3:** Construção de interface/user experience.
- **TypeScript:** Tipagem estática para melhor confiabilidade.
- **Pinia:** Gerenciamento centralizado de estado.
- **JavaScript ES6+:** Interatividade, lógica de animação e componentes.
- **HTML5:** Estrutura.
- **CSS3:** Estilos modernos, responsividade e animações avançadas.
- **Vite:** Desenvolvimento e build ultra rápido.
- **Vercel:** Deploy contínuo e hospedagem estática.

## 📁 Estrutura do Projeto

```
src/
├── assets/                    # Imagens e ícones
│   ├── Photo Profile.png      # Foto de perfil
│   ├── instagram.png          # Ícone Instagram
│   ├── linkedin.png           # Ícone LinkedIn
│   ├── youtube.png            # Ícone YouTube
│   ├── github.png             # Ícone GitHub
│   ├── logo.png               # Logo
│   ├── logo.svg               # Logo SVG
│   └── *.css                  # Estilos globais
│
├── components/                # Componentes Vue
│   ├── LoadingScreen.vue      # Tela de loading com animações
│   └── SocialLinks.vue        # Perfil e links sociais
│
├── modules/                   # Lógica e estado com TypeScript
│   ├── loading.ts             # Store Pinia para controle de loading
│   └── userProfile.ts         # Store Pinia para dados do perfil
│
├── store/                     # Configuração global de stores
│   └── index.ts               # Inicialização do Pinia
│
├── App.vue                    # Componente raiz
├── main.js                    # Ponto de entrada da aplicação
└── vue-shim.d.ts              # Declarações de tipos Vue
```

## 🏗️ Arquitetura Modular

O projeto utiliza uma arquitetura modular com **Pinia** para gerenciamento de estado:

### **Stores (módulos/)**

- **`loading.ts`** - Gerencia estado do carregamento
  - `isLoading`: Estado da tela de loading
  - `progress`: Progresso da barra (0-100)
  - `randomMessage`: Mensagem motivacional aleatória
  - `startLoading()`: Inicia o loading
  - `stopLoading()`: Encerra o loading
  - `simulateProgress()`: Simula progresso da barra

- **`userProfile.ts`** - Gerencia dados do perfil
  - `profile`: Dados do perfil (nome, role, foto, links sociais)
  - `isAnimating`: Estado da animação da foto
  - `toggleProfileAnimation()`: Alterna animação da foto
  - Importa imagens diretamente para melhor performance com Vite

### **Componentes (components/)**

- **`LoadingScreen.vue`** - Tela de splash com animação
- **`SocialLinks.vue`** - Exibe perfil e links dinâmicos da store

## 🛠️ Abrir e Rodar o Projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
   - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar com:
     ```bash
     node -v
     ```
   - Se não estiver instalado, baixe a versão recomendada no site.

2. **Clone o Repositório**:
   - Execute no terminal:
     ```bash
     git clone https://github.com/LipeLacross/Links-Social-Media.git
     cd Links-Social-Media
     ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   - Abra o navegador em [http://localhost:5173](http://localhost:5173) ou na porta mostrada pelo terminal.

## 🔄 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Faz build para produção
npm run preview  # Visualiza build de produção localmente
```

## 🌐 Deploy

- O projeto pode ser publicado rapidamente no **Netlify**, **Vercel** ou qualquer host de páginas estáticas que rode Node.js/Vite.
- Para deploy no Netlify:
  1. Faça login em [netlify.com](https://www.netlify.com/).
  2. Clique em "New Site from Git", conecte sua conta do GitHub e escolha o repositório.
  3. Em **build command**, use: `npm run build`
  4. Em **publish directory**, use: `dist`
  5. Complete o processo e seu site estará online!

## 📝 Notas de Desenvolvimento

- As imagens são importadas diretamente nos modules TypeScript para melhor otimização com Vite.
- O estado global é gerenciado via Pinia para facilitar manutenção e escalabilidade.
- TypeScript garante type-safety em toda a aplicação.
- CSS scoped em componentes evita conflitos de estilos.

