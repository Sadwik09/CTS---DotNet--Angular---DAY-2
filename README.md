# Student Course Portal - Angular Application

A modern Angular 21 application for managing student courses using the latest standalone API and routing features.

## Project Overview

This project is part of the **CTS (Course Training System)** - DotNet + Angular course series. It demonstrates Angular CLI workspace setup, project structure, component creation, and routing configuration.

**Live Demo**: http://localhost:4200

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (v10 or higher) - comes with Node.js
- **Angular CLI** (v21 or higher)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Sadwik09/CTS---DotNet--Angular-.git
cd student-course-portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Angular CLI Globally (if not already installed)
```bash
npm install -g @angular/cli
```

## Running the Application

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload when you modify any source files.

### Production Build
```bash
ng build
```
The build artifacts will be stored in the `dist/student-course-portal/browser` directory.

## Project Structure

### Key Files and Directories

```
student-course-portal/
├── src/
│   ├── app/
│   │   ├── app.ts                    # Root standalone component
│   │   ├── app.config.ts             # App configuration (providers & routing)
│   │   ├── app.routes.ts             # Routing definitions
│   │   ├── app.css                   # Component styles
│   │   └── app.html                  # Component template
│   ├── index.html                    # Main HTML file
│   ├── main.ts                       # Application entry point
│   └── styles.css                    # Global styles
├── dist/                             # Production build output
├── angular.json                      # Angular workspace configuration
├── tsconfig.json                     # Base TypeScript configuration
├── tsconfig.app.json                 # App-specific TypeScript config
├── package.json                      # Project dependencies
└── notes.txt                         # File explanations (learning reference)
```

### Important Files Explained

| File | Purpose |
|------|---------|
| **angular.json** | Angular workspace configuration defining build, serve, test settings, assets, and production budget thresholds |
| **tsconfig.json** | Base TypeScript configuration shared by app and tests with strict compiler options |
| **tsconfig.app.json** | App-specific TypeScript config that compiles source files into out-tsc/app |
| **package.json** | Project metadata, npm scripts, and dependencies for building and running the app |
| **src/main.ts** | Application entry point that bootstraps the root component with app configuration |
| **src/app/app.config.ts** | Standalone app configuration providing router and other app-wide providers (modern approach without NgModules) |
| **src/app/app.ts** | Root standalone component defining the app shell and exposing signals |
| **src/index.html** | Host HTML page containing the `<app-root>` element where Angular renders the application |

## Angular Architecture

### Standalone Components (Angular 17+)

This project uses the **modern standalone API**, meaning:
- No NgModules are required
- Components are self-contained with their own imports
- Routing and configuration use `app.config.ts` instead of `AppModule`
- Cleaner, more modular code structure

### Key Technologies

- **Angular 21.2.0** - Latest frontend framework
- **TypeScript 5.9** - Type-safe JavaScript
- **RxJS 7.8** - Reactive programming library
- **Angular Router** - Client-side routing for SPAs

## Build Configuration

### Production Budgets

The project enforces size limits for production builds:
- **Initial Bundle**: Warning at 500kB, Error at 1MB
- **Component Styles**: Warning at 4kB, Error at 8kB

These budgets ensure optimal performance and efficient bundle sizes.

## Development Workflow

### Creating Components
```bash
ng generate component component-name
```

### Creating Services
```bash
ng generate service service-name
```

### Running Tests
```bash
ng test
```

### Linting
```bash
ng lint
```

## Hands-On Learning Objectives

This project covers:
✓ Angular CLI & Workspace Setup
✓ Angular Project Structure & Generated Files
✓ Running Angular Apps with `ng serve`
✓ Building Angular Apps with `ng build`
✓ Creating Standalone Components
✓ Angular Routing Configuration
✓ Understanding TypeScript Configurations
✓ Bundle Analysis and Performance Optimization

## Next Steps

1. Explore the `src/app/` directory to understand component structure
2. Modify `app.html` to customize the welcome page
3. Create your first custom component using `ng generate`
4. Add routes in `app.routes.ts` for navigation
5. Build features for course management and student portals

## Git Workflow

### Commit Changes
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Troubleshooting

### Port Already in Use
If port 4200 is already in use:
```bash
ng serve --port 4300
```

### Clear Node Modules
```bash
rm -r node_modules
npm install
```

### Clear Build Cache
```bash
rm -r dist
ng build
```

## Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Angular Best Practices](https://angular.dev/guide/styleguide)

## License

This project is part of the CTS training series. Refer to your course materials for licensing information.

## Author

Created for the CTS - DotNet + Angular training program.

---

**Happy Coding!** 🚀

For questions or issues, please refer to the course materials or create an issue in the repository.
