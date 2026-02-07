# Cocktail Recipe Generator 🚀🍹

A vibrant Express.js app that fetches random cocktail recipes from TheCocktailDB API. Features orange gradient design, responsive layout, and smooth hover effects.

## ✨ Features
- Fetches random cocktails with images, ingredients, and instructions
- Beautiful orange gradient theme with glassmorphism effects
- Hover animations on images and buttons
- Full error handling for API failures
- Mobile-responsive design

## 📱 Live Demo
[https://github.com/SafiyaMaryam/Cocktail-App](https://github.com/SafiyaMaryam/Cocktail-App)

## 🛠 Tech Stack
```
Node.js + Express.js (server)
Axios (API requests)
EJS (templating)
TheCocktailDB API (data)
CSS3 (styling with gradients & animations)
```

## 🚀 Quick Start

1. **Clone the repo**
```bash
git clone https://github.com/SafiyaMaryam/Cocktail-App.git
cd Cocktail-App
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure
```
Cocktail-App/
├── views/
│   └── index.ejs      # Main template
├── public/
│   └── style.css      # Orange gradient styles
├── app.js            # Express server + API routes
├── package.json      # Dependencies & scripts
└── .gitignore        # Excludes node_modules
```

## 🎨 Customization
- **Change colors**: Edit CSS variables in `:root` (line 2)
- **Add Google Fonts**: Update `<head>` in index.ejs
- **New API**: Replace CocktailDB URL in app.js routes

## 🐛 Troubleshooting
```
"Failed to fetch cocktail" → Check internet connection
"Port already in use" → Kill process: npx kill-port 3000
"Module not found" → Delete node_modules/ + npm install
```

## 📚 Learning Outcomes
✅ Express.js server setup  
✅ Axios API integration  
✅ EJS templating engine  
✅ Error handling & async/await  
✅ CSS animations & gradients  
✅ Git/GitHub workflow  

