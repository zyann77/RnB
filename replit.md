# RnBNET Internet Service Provider Landing Page

## Overview

This is a marketing landing page for RnBNET, an internet service provider offering fiber optic home internet packages in Indonesia. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase internet packages, premium TV add-ons, and facilitate customer contact via WhatsApp.

The project serves as a customer acquisition tool with responsive design, pricing information display, and direct customer engagement capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript as the primary UI framework
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- Single Page Application (SPA) architecture

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- CSS variables for theming (supports light/dark modes)
- New York style variant for Shadcn components
- Font Awesome for icons

**State Management**
- TanStack Query (React Query) v5 for server state management
- React hooks for local component state
- Custom query client configuration with credential handling

**Styling Approach**
- Utility-first CSS with Tailwind
- CSS-in-JS approach using CSS variables for theme tokens
- Custom gradient backgrounds and animations
- Responsive design with mobile-first breakpoints
- Custom fonts: Inter (primary) and Roboto (secondary)

### Backend Architecture

**Server Framework**
- Express.js as the web server
- Node.js runtime environment
- TypeScript for type safety
- ESM module system

**Server Structure**
- Vite middleware integration for development
- Custom logging middleware for API requests
- Static file serving for production builds
- Request body parsing with JSON verification support

**Storage Layer**
- In-memory storage implementation (MemStorage class)
- Interface-based storage design (IStorage) for future database integration
- User management with CRUD operations
- UUID-based entity identification

**Session Management**
- Express session with connect-pg-simple for PostgreSQL session storage
- Prepared for database-backed sessions

### Database Architecture

**ORM & Schema**
- Drizzle ORM for type-safe database queries
- PostgreSQL dialect configuration
- Neon Database serverless driver for PostgreSQL connectivity
- Schema-first approach with TypeScript type inference

**Database Schema**
- Users table with UUID primary keys
- Username/password authentication structure
- Zod schema validation for data integrity
- Migration support via drizzle-kit

**Migration Strategy**
- Migrations stored in `/migrations` directory
- Schema definitions in `/shared/schema.ts`
- Push-based deployment with `db:push` command

### External Dependencies

**Third-Party UI Libraries**
- Radix UI - Accessible component primitives (accordion, dialog, dropdown, etc.)
- Embla Carousel - Carousel/slider functionality
- cmdk - Command palette component
- React Day Picker - Date selection
- React Hook Form with Zod resolvers - Form validation
- Class Variance Authority - Component variant management
- Lucide React - Icon system

**Development Tools**
- Replit-specific plugins for development experience:
  - Runtime error modal overlay
  - Cartographer for code navigation
  - Dev banner for development mode indication

**Database & Backend Services**
- @neondatabase/serverless - Serverless PostgreSQL driver
- connect-pg-simple - PostgreSQL session store
- date-fns - Date manipulation utilities

**Communication Integration**
- WhatsApp Business integration via direct links (wa.me)
- Phone number: 6287842861656
- Multiple call-to-action buttons throughout the UI

### Build & Deployment

**Development Workflow**
- TSX for running TypeScript in development
- Hot Module Replacement (HMR) via Vite
- Source maps for debugging

**Production Build**
- Vite builds frontend to `dist/public`
- esbuild bundles backend to `dist` 
- ESM format for Node.js execution
- Platform-specific targeting for server code

**Environment Configuration**
- DATABASE_URL environment variable required
- NODE_ENV for environment detection
- REPL_ID for Replit-specific features

### Application Features

**Landing Page Components**
- Hero section with background imagery
- Pricing packages display (10, 20, 30, 50 Mbps tiers)
- Premium TV add-on section with channel listings
- "Why Choose Us" feature highlights
- Contact CTA section
- Footer with company information
- Floating WhatsApp button for easy contact

**Design System**
- Gradient-based brand identity (cyan/blue primary colors)
- Card-based layout system
- Animation effects on scroll
- Mobile-responsive navigation
- Test ID attributes for component testing