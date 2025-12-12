# Solar Cancellation Hub

## Overview

This is a high-conversion landing page application designed to help homeowners cancel unfair solar contracts. The application is built as a full-stack TypeScript application with React frontend and Express backend, focusing on lead generation and conversion optimization through click-to-call campaigns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application has four main routes: 
- Home (`/`): Main landing page with hero section, testimonials, attorney profile, trust badges, CTA section, and contact form
- How It Works (`/how-it-works`): Detailed explanation of the cancellation process, consumer rights, and program benefits
- Terms (`/terms`): Terms and Conditions
- Privacy (`/privacy`): Privacy Policy

**UI Component Library**: Radix UI primitives with shadcn/ui styling system. The design follows the "new-york" style variant with Tailwind CSS for utility-first styling. Components are built with accessibility in mind using Radix UI's unstyled primitives.

**Form Management**: React Hook Form with Zod validation for type-safe form handling. The main form is:
- Contact Form: Located at bottom of homepage with fields for contact info (firstName, lastName, email, phone) and qualification questions (leaseOrFinance, misledOrPressured)

**State Management**: TanStack Query (React Query) for server state management. No global client state management library is used; component-local state with hooks suffices for this application's needs.

**Styling System**: Tailwind CSS with custom design tokens defined in CSS variables. The application uses a neutral color scheme with primary blue accent color. Custom utility classes (`hover-elevate`, `active-elevate-2`) provide subtle elevation effects on interactive elements.

**Analytics Integration**: Google Analytics 4 and Meta Pixel tracking are conditionally initialized based on environment variables. Page view tracking happens automatically on route changes via custom `useAnalytics` hook.

**Click-to-Call Campaign Optimizations**: The site is optimized for US click-to-call advertising campaigns with the following features:
- **Sticky Header**: Always-visible header with phone number (877-511-8931), urgency banner, and "Do I Qualify?" CTA button
- **Floating Call Button**: Persistent green call button fixed to bottom-right corner with pulsing animation for attention
- **Hero Section Phone CTAs**: Large, prominent "Call Now" button in hero section with green styling for high visibility
- **Mid-Page Phone CTAs**: Phone call buttons integrated into empowerment sections
- **Enhanced Bottom CTA**: Redesigned CTA section with large phone number display and trust indicators
- **Contact Form**: Bottom-of-page lead capture form with phone alternative prominently displayed
- **Consistent phone number**: 877-511-8931 used throughout all touchpoints

### Backend Architecture

**Framework**: Express.js server with TypeScript, running in Node.js ESM mode.

**Development vs Production**: Two separate entry points:
- `server/index-dev.ts`: Development server with Vite middleware for HMR
- `server/index-prod.ts`: Production server serving pre-built static assets

**API Structure**: RESTful API with two endpoints:
- `POST /api/leads`: Submit new lead data
- `GET /api/leads`: Retrieve all leads (for future admin dashboard)

**Request Validation**: Zod schemas validate incoming API requests, with error messages formatted using `zod-validation-error` for user-friendly responses.

**Storage Abstraction**: `IStorage` interface defines data operations, currently implemented by `MemStorage` (in-memory Map-based storage). This abstraction allows easy swapping to database-backed storage without changing application logic.

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Maps. Data persists only for the lifetime of the server process. This is suitable for development but not production.

**Planned Database**: PostgreSQL via Neon serverless driver. Drizzle ORM is configured and ready:
- Schema defined in `shared/schema.ts` with two tables: `leads` and `users`
- Migration directory configured at `./migrations`
- Database connection configured via `DATABASE_URL` environment variable

**Schema Design**:
- **Leads table**: Stores form submissions with fields for contact info (firstName, lastName, email, phone), qualification data (state, leaseOrFinance, misledOrPressured, etc.), and metadata (formType to distinguish contact vs other form submissions, createdAt timestamp)
- **Users table**: Prepared for future authentication needs with username/password fields

**Data Validation**: Drizzle-Zod integration generates Zod schemas from database schema, ensuring type safety from database to API to frontend.

### Authentication and Authorization

**Current State**: No authentication implemented. The leads endpoint is publicly accessible.

**Planned Implementation**: User table exists in schema for future admin authentication to view submitted leads. No specific auth strategy is configured yet, but the session management setup (connect-pg-simple) suggests cookie-based sessions will be used.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Complete set of accessible, unstyled component primitives including dialogs, dropdowns, radio groups, accordions, tooltips, and more
- **shadcn/ui**: Pre-styled component implementations built on Radix UI primitives
- **Embla Carousel**: Testimonial carousel implementation
- **Lucide React**: Icon library for UI elements

### Database & ORM

- **Drizzle ORM**: TypeScript-first ORM for PostgreSQL
- **@neondatabase/serverless**: Neon's serverless PostgreSQL driver for edge/serverless environments
- **drizzle-zod**: Generates Zod schemas from Drizzle table definitions

### Development Tools

- **Vite**: Frontend build tool and dev server with HMR
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tool integration (Replit-specific)
- **@replit/vite-plugin-dev-banner**: Development environment indicator

### Styling & CSS

- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant management for component styling
- **tailwind-merge**: Intelligent Tailwind class merging utility

### Analytics & Tracking

- **Google Analytics 4**: Page view and event tracking (via `VITE_GA_MEASUREMENT_ID`)
- **Meta Pixel**: Facebook conversion tracking (via `VITE_META_PIXEL_ID`, optional)

Both analytics services are initialized client-side with environment-variable-based configuration. Missing credentials disable tracking gracefully with console warnings.

### Form Management

- **React Hook Form**: Performant form state management with uncontrolled inputs
- **@hookform/resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation for forms and API data

### Assets

Generated images stored in `attached_assets/generated_images/` directory include:
- Attorney professional headshot
- Testimonial photos (5 different personas)
- Trust badges (BBB A+ rating, satisfaction guarantee)
- Hero background image

These are imported directly into components via Vite's asset handling system using path aliases.

## Recent Changes (November 2025)

- Rebranded from "Solar Cancellation Resource Center" to "Solar Cancellation Hub"
- Removed Spanish version (/es routes and all Spanish components)
- Updated phone number site-wide from 888-918-2083 to 877-511-8931
- Changed email from info@solarcancellationrc.com to info@getsolarcancelation.com
- Moved contact form from hero section to bottom of page
- Hidden quiz section, redirected all quiz CTAs to contact form
- Randomized client success stories with new names and locations
- Made phone CTAs more visually prominent throughout the site
- Updated footer to reflect new branding
- Updated analytics to support 'contact' form type for tracking
