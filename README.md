# TipJar - Tip Distribution Calculator

A modern, responsive web application for calculating fair tip distribution among team members based on hours worked. Built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment.

## Features

- **Simple File Upload**: Upload CSV files with partner names and hours
- **Manual Entry**: Add partners manually for quick calculations
- **Fair Distribution**: Calculate tips based on hours worked
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **GitHub Pages Ready**: Optimized for easy deployment

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/itswalshy/Projecttipjar-02.git
   cd Projecttipjar-02
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

### Automatic Deployment

1. Push your code to the `main` branch
2. Go to your repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The site will be available at `https://itswalshy.github.io/Projecttipjar-02/`

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Usage

### CSV File Format

Create a CSV file with the following format:
```csv
Name,Hours
John Doe,8.5
Jane Smith,7.0
Mike Johnson,6.5
```

### Manual Entry

1. Click "Manual Entry" button
2. Enter partner name and hours worked
3. Repeat for additional partners

### Calculate Distribution

1. Upload your CSV file or add partners manually
2. Enter the total tip amount
3. Click "Calculate Distribution"
4. View the fair distribution results

## File Structure

```
Projecttipjar-02/
├── public/
├── src/
│   ├── components/          # React components
│   ├── context/            # React context for state management
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing
- **Framer Motion** - Smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Author

**William Walsh**  
Starbucks Store# 69600

---

Made with ❤️ for fair tip distribution