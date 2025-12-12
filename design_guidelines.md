# Design Guidelines: Solar Cancellation Hub

## Design Approach
**Reference-Based**: Replicating the existing Solar Cancellation Hub website, which follows a high-conversion landing page pattern common in legal/consumer services. Drawing inspiration from established trust-focused conversion sites like LegalZoom and Rocket Lawyer.

## Typography Hierarchy

**Primary Headline**: Bold, large display font (4xl-6xl on desktop, 3xl-4xl mobile) - impactful and attention-grabbing
**Secondary Headlines**: Semi-bold, medium-large (2xl-3xl) for section headers
**Body Text**: Regular weight, comfortable reading size (base-lg) with generous line-height (1.6-1.7)
**Form Labels**: Medium weight, slightly smaller (sm) for clarity
**Testimonial Names**: Semi-bold with location in lighter weight
**CTAs**: Bold, uppercase or semi-bold for button text

Use 2 font families: A modern sans-serif (like Inter or Source Sans Pro) for body and a slightly bolder sans-serif for headlines.

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, space-y-6 for vertical stacks
- Container max-width: max-w-6xl for content sections, max-w-7xl for full-width sections
- Form field spacing: space-y-4

**Grid Strategy**:
- Hero: Single column, centered content
- Media logos: 6-column grid on desktop (grid-cols-2 md:grid-cols-4 lg:grid-cols-6)
- Process steps: 5-column horizontal flow on desktop, stacked on mobile
- Testimonials: Horizontal scroll carousel (3 visible at once on desktop, 1 on mobile)
- Features/benefits: 3-column grid (grid-cols-1 md:grid-cols-3)

## Component Library

### Hero Section
- Full-width with large hero image background
- Centered headline and 3 bullet points with checkmarks/icons
- Embedded quick lead capture form (4 fields: First Name, Last Name, Email, Phone, 2 radio buttons)
- Primary CTA button within form with blurred background overlay
- Secondary "Do I qualify?" link below

### Media Logos Showcase
- Grid of 12-16 major media outlet logos (NBC, CBS, CNN, Forbes, etc.)
- Grayscale treatment for unified look
- Equal-sized containers with centered logos
- Section headline: "Featured on Major Media for Fighting Solar Fraud"

### Multi-Step Quiz
- 6-page qualification form with progress indicator at top
- Question types: radio buttons, text inputs, dropdowns
- "Previous" and "Next" navigation buttons
- Final page shows "LOOKS LIKE YOU QUALIFY!" with callback time selection
- Clean, spacious form layouts with clear labels

### Process Steps Section
- Numbered 5-step horizontal timeline
- Each step: Large number, icon, title, brief description
- Connected with line or arrow indicators between steps
- Section headline: "Steps to Solar Freedom"

### Testimonials Carousel
- Card-based design with circular profile photos
- Client name and location prominently displayed
- Quote text in comfortable reading size
- Auto-scroll with manual navigation dots
- 5-6 testimonials total with realistic names and locations

### Attorney Profile
- Two-column layout (image left, content right on desktop)
- Professional headshot photo
- Name, title "General Counsel" prominently displayed
- Education and Practice Areas in structured list format
- Call-to-action button below

### Trust Signals Section
- BBB A+ rating badge
- Satisfaction guarantee seal
- Legal credentials and certifications
- Centered layout with badges displayed prominently

### Footer
- Multi-column layout with sections:
  - Company info and phone number (877-511-8931)
  - Quick links (Terms & Conditions, Privacy Policy)
  - Consent and disclaimer text (SMS/marketing consent language)
  - Copyright notice
- Must include comprehensive legal disclaimers matching the original site's footer text

### Call-to-Action Sections (Multiple)
- Appears between major sections
- Strong headline + subtext
- Primary button "Get Your Free Case Review"
- Secondary link "Prefer to talk? Call us Now" with phone number
- Centered layout with generous padding

## Images

**Hero Section**: Large background image showing distressed homeowner or solar panels on house with concerned family - establishes emotional connection. Overlay with semi-transparent gradient for text readability. Buttons on hero must have blurred/frosted glass backgrounds.

**Media Logos**: 16 media outlet logos - NBC, CBS, CNN, Forbes, Money, ABC, HuffPost, LA Times, MSNBC, Wall Street Journal, The Economist, USA Today, Fox News, Bloomberg, US News, NY Times

**Attorney Profile**: Professional headshot of female attorney in business attire, office background

**Testimonial Photos**: 5 circular headshots of diverse individuals (seniors, middle-aged adults) - realistic stock photos representing homeowners

**Trust Badges**: BBB A+ rating logo, guarantee seal/badge graphic

**Process Icons**: Simple icons for each of 5 steps (consultation, document, review, process, freedom)

## Form Interaction Patterns

- Real-time validation with error messages below fields
- Required field indicators (asterisks)
- Phone number formatting with country code dropdown
- Checkbox for consent with link to terms
- Submit button disabled until form valid
- Success state showing "LOOKS LIKE YOU QUALIFY!"
- Multi-step progress bar showing current page (e.g., "Page 3 of 6")

## Tracking & Analytics Integration

- Google Analytics 4 tracking code in <head>
- Meta Pixel code for Facebook/Instagram conversion tracking
- Event tracking on: Form submissions, CTA clicks, Phone number clicks, Quiz completion
- UTM parameter preservation for ad campaign attribution

## Animations

Minimal and purposeful:
- Smooth scroll to quiz section when clicking "Do I qualify?"
- Testimonial carousel auto-advance every 5 seconds
- Subtle fade-in for sections on scroll (optional enhancement)
- Form validation feedback (shake on error)