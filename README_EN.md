## 🌐 [English Version of README](README_EN.md)

# Social Media Links

A centralized hub for social media links with a modern look, smooth animations, and a custom loading screen. Built with **Vue 3** and **Vite**, this project serves as a fast and responsive platform to showcase all your professional and social contacts in one place.

## 🔨 Project Features

- **Profile View:** Animated profile picture, name, and profession.
- **Social Links:** Direct access to Instagram, LinkedIn, YouTube, GitHub, and portfolio, each with customized icons and colors.
- **Modern Animations:** Animated elements on hover, entry animations for components, and interactive profile picture click effects.
- **Loading Screen:** Splash screen with loading animation, motivational messages, and a progress bar.

### 📸 Visual Example of the Project

![chrome-capture-2024-9-14](https://github.com/user-attachments/assets/7da67b9d-cb01-46e8-be42-8c2793d31adb)

## ✔️ Technologies and Tools Used

- **Vue.js 3:** For building the user interface and experience.
- **TypeScript:** Static typing for improved reliability and code quality.
- **Pinia:** Centralized state management.
- **JavaScript (ES6+):** For interactivity, animation logic, and component behavior.
- **HTML5:** Project structure.
- **CSS3:** Modern styles, responsiveness, and advanced animations.
- **Vite:** Fast development and build tool.
- **Vercel:** Continuous deployment and static hosting platform.

## 📁 Project Structure

```
src/
├── assets/                    # Images and icons
│   ├── Photo Profile.png      # Profile picture
│   ├── instagram.png          # Instagram icon
│   ├── linkedin.png           # LinkedIn icon
│   ├── youtube.png            # YouTube icon
│   ├── github.png             # GitHub icon
│   ├── logo.png               # Logo
│   ├── logo.svg               # Logo SVG
│   └── *.css                  # Global styles
│
├── components/                # Vue components
│   ├── LoadingScreen.vue      # Loading screen with animations
│   └── SocialLinks.vue        # Profile and social links
│
├── modules/                   # Logic and state with TypeScript
│   ├── loading.ts             # Pinia store for loading control
│   └── userProfile.ts         # Pinia store for profile data
│
├── store/                     # Global stores configuration
│   └── index.ts               # Pinia initialization
│
├── App.vue                    # Root component
├── main.js                    # Application entry point
└── vue-shim.d.ts              # Vue type declarations
```

## 🏗️ Modular Architecture

The project uses a modular architecture with **Pinia** for state management:

### **Stores (modules/)**

- **`loading.ts`** - Manages loading state
  - `isLoading`: Loading screen state
  - `progress`: Progress bar value (0-100)
  - `randomMessage`: Random motivational message
  - `startLoading()`: Start loading
  - `stopLoading()`: Stop loading
  - `simulateProgress()`: Simulate progress bar

- **`userProfile.ts`** - Manages profile data
  - `profile`: Profile data (name, role, photo, social links)
  - `isAnimating`: Photo animation state
  - `toggleProfileAnimation()`: Toggle photo animation
  - Directly imports images for better performance with Vite

### **Components (components/)**

- **`LoadingScreen.vue`** - Splash screen with animations
- **`SocialLinks.vue`** - Displays profile and dynamic links from store

## 🛠️ How to Run the Project

Follow the steps below to run the project locally:

1. **Ensure Node.js is installed**:
   - You can verify installation by running:
     ```bash
     node -v
     ```
   - If not installed, download the recommended version from [nodejs.org](https://nodejs.org/).

2. **Clone the repository**:
   ```bash
   git clone https://github.com/LipeLacross/Links-Social-Media.git
   cd Links-Social-Media
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   - Open your browser at [http://localhost:5173](http://localhost:5173), or the port displayed in your terminal.

## 🔄 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🌐 Deployment

- The project can be deployed easily using **Netlify**, **Vercel**, or any static hosting service that supports Node.js/Vite.
- To deploy on Netlify:
  1. Log in to [netlify.com](https://www.netlify.com/).
  2. Click on "New Site from Git," connect your GitHub account, and select the repository.
  3. Set the build command to:
     ```bash
     npm run build
     ```
  4. Set the publish directory to:
     ```bash
     dist
     ```
  5. Complete the process and your site will be live!

## 📝 Development Notes

- Images are imported directly in TypeScript modules for better optimization with Vite.
- Global state is managed via Pinia for easier maintenance and scalability.
- TypeScript ensures type-safety throughout the application.
- Scoped CSS in components prevents style conflicts.

