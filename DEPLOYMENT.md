# Deployment Guide for Coolify

This guide explains how to deploy this Next.js application using Coolify with Nixpacks.

## Prerequisites

- A Coolify instance running
- Access to your Coolify dashboard
- This repository connected to your Coolify instance

## Deployment Methods

Coolify supports two deployment methods for this application:

### Method 1: Nixpacks (Recommended)

Coolify will automatically detect the `nixpacks.toml` file and use it to build and deploy your application.

**Configuration:**
- Build Method: Nixpacks
- Port: 3000
- The `nixpacks.toml` file configures:
  - Node.js 20
  - npm for package installation
  - Production build
  - Start command

### Method 2: Dockerfile

Alternatively, Coolify can use the provided `Dockerfile` for deployment.

**Configuration:**
- Build Method: Dockerfile
- Port: 3000
- The Dockerfile creates an optimized production build with:
  - Multi-stage build for smaller image size
  - Standalone Next.js output
  - Non-root user for security

## Environment Variables

The following environment variables are pre-configured:

- `NODE_ENV=production` - Sets Node environment to production
- `PORT=3000` - Application port (can be overridden in Coolify)

Add any additional environment variables in the Coolify dashboard under your application's Environment Variables section.

## Steps to Deploy

1. **Connect Repository:**
   - In Coolify, create a new application
   - Connect this GitHub repository

2. **Configure Build:**
   - Coolify will auto-detect the build method (Nixpacks or Dockerfile)
   - Verify the port is set to 3000

3. **Set Environment Variables:**
   - Add any custom environment variables needed
   - The default variables are already configured

4. **Deploy:**
   - Click "Deploy" in Coolify
   - Monitor the build and deployment logs
   - Once deployed, access your application via the provided URL

## Troubleshooting

- **Build Fails:** Check the Coolify logs for specific error messages
- **Application Won't Start:** Verify the PORT environment variable is set correctly
- **Missing Dependencies:** Ensure `package.json` is up to date and all dependencies are listed

## Next.js Standalone Output

This application is configured with `output: "standalone"` in `next.config.ts`, which creates an optimized production build that includes only the necessary files for deployment.

## Additional Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Nixpacks Documentation](https://nixpacks.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
