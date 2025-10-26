# GitHub Pages Deployment Guide

This guide will help you deploy the TipJar application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Projecttipjar-02` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### 2. Push Your Code

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: TipJar application"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/Projecttipjar-02.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### 4. Access Your Site

Once deployed, your site will be available at:
```
https://yourusername.github.io/Projecttipjar-02/
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify TypeScript compilation: `npm run check`
- Check for linting errors

### Site Not Loading
- Ensure the repository is public
- Check GitHub Pages settings
- Verify the base path in `vite.config.ts` matches your repository name

### 404 Errors
- Make sure the base path in `vite.config.ts` is correct
- Check that the build output is in the `dist` folder
- Verify the GitHub Actions workflow completed successfully

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the domain in GitHub Pages settings

## Environment Variables

For production builds, you can set environment variables in the GitHub Actions workflow or use GitHub Secrets for sensitive data.

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all configuration files
3. Ensure all dependencies are properly installed
4. Test the build locally first

---

**Note**: The application is optimized for GitHub Pages with proper base paths and routing configuration.
