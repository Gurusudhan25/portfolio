# Technology Stack Specification

## Objective

The portfolio should be built using a modern, scalable, maintainable, and production-ready technology stack that reflects current frontend engineering best practices.

The codebase should demonstrate clean architecture, modularity, performance, accessibility, and maintainability.

The implementation itself should serve as an example of my engineering standards.

---

# Primary Framework

Framework

Angular

Version

Latest Stable Version

Use standalone APIs.

Do not use NgModules unless absolutely necessary.

Adopt modern Angular architecture.

---

# Language

Primary

TypeScript

Strict Mode

Enabled

Avoid

any

Use proper interfaces, types, enums, generics, and utility types.

Follow strong typing throughout the project.

---

# Styling

Primary

SCSS

Use

CSS Variables

Design Tokens

Fluid Typography

Container Queries where appropriate

Modern CSS features.

Avoid inline styles.

Avoid Tailwind CSS.

Avoid Bootstrap.

The design should be handcrafted.

---

# Component Architecture

Use

Standalone Components

Feature-based organization

Reusable UI library

Composition over inheritance

Small focused components

Reusable directives

Reusable pipes

Keep components single-responsibility.

---

# State Management

Prefer Angular Signals for local reactive state.

Use RxJS where asynchronous streams are required.

Avoid introducing NgRx unless the application genuinely benefits from global state management.

Keep state simple and predictable.

---

# Routing

Use Angular Router.

Implement

Lazy-loaded routes

Standalone routing

Nested routes where appropriate

Animated route transitions

404 page

Redirect handling

SEO-friendly structure.

---

# Animations

Primary

Angular Animations

Optional

GSAP for premium hero interactions only

Use CSS transitions whenever possible.

Avoid animation libraries for simple effects.

Respect prefers-reduced-motion.

---

# Icons

Preferred

Lucide

Fallback

Simple Icons

Use SVG icons.

Avoid heavy icon libraries.

---

# Images

Use

AVIF

WebP

Responsive Images

Lazy Loading

Blur placeholders

Generate multiple resolutions.

---

# Typography

Primary Font

Inter

Secondary Font

JetBrains Mono

Fallback

System Fonts

Load fonts efficiently.

Use variable fonts where possible.

---

# Theme System

Support

Dark Mode

Light Mode

System Preference

Persist user preference.

All colors should use design tokens.

---

# Forms

Angular Reactive Forms

Typed Forms

Validation

Accessible error handling

Minimal dependencies.

---

# Contact Form

Validation

Rate limiting

Spam protection

Loading states

Success states

Error handling

No unnecessary libraries.

---

# API Integration

Prepare for future backend integration.

Use

Angular HttpClient

Typed interfaces

Interceptors

Error handling

Retry strategy

Environment configuration

Currently no backend is required.

---

# Dependency Management

Use npm.

Keep dependencies minimal.

Review package size before installation.

Avoid unnecessary packages.

---

# Build Configuration

Enable

Production optimizations

Tree shaking

Code splitting

Differential loading where applicable

Source maps for development only

Bundle analysis support.

---

# Linting

Use

ESLint

Angular ESLint

Strict lint rules

Consistent formatting

Zero lint errors.

---

# Formatting

Use

Prettier

Consistent formatting rules

Automatic formatting on save.

---

# Testing

Framework

Jasmine

Runner

Karma

Support

Unit Tests

Component Tests

Service Tests

Accessibility checks where practical

Prepare architecture for future E2E testing.

---

# Folder Structure

Recommended

src/

app/

core/

shared/

features/

components/

layouts/

pages/

services/

models/

interfaces/

pipes/

directives/

guards/

interceptors/

assets/

styles/

themes/

utils/

environments/

Keep features isolated.

Avoid deep nesting.

---

# Shared Library

Create reusable components for

Buttons

Cards

Timeline

Skill Chips

Project Cards

Section Headers

Dialogs

Badges

Icons

Dividers

Keep APIs simple and consistent.

---

# Utilities

Reusable helpers for

Formatting

Animation

Scrolling

Theme switching

Viewport detection

Image loading

SEO

Performance

Avoid duplicated logic.

---

# Asset Pipeline

Optimize

Images

SVGs

Fonts

Icons

Use hashing for cache busting.

Support lazy loading.

---

# Performance

Target

Lighthouse Performance

98+

Bundle size

Minimal

Fast initial load

Efficient rendering

No layout shifts

Smooth animations

---

# Browser Support

Latest versions of

Chrome

Edge

Firefox

Safari

Graceful degradation for older browsers where practical.

---

# Deployment

Compatible with

Vercel

Netlify

GitHub Pages

Firebase Hosting

Cloudflare Pages

Build should require minimal configuration.

---

# Code Quality

Follow

SOLID Principles

DRY

KISS

Clean Code

Readable naming

Consistent file structure

Avoid premature optimization.

---

# Documentation

Every major feature should include

Purpose

Usage

Configuration

Comments only where necessary.

Prefer self-documenting code.

---

# Security

Sanitize dynamic content.

Avoid exposing secrets.

Use environment variables.

Validate external URLs.

Prevent common frontend vulnerabilities.

---

# AI Instructions

Build this portfolio as if it were a production-grade SaaS application.

Prioritize maintainability, readability, performance, and scalability.

Do not introduce dependencies unless they provide significant value.

The finished codebase should reflect senior-level frontend engineering practices and serve as a showcase of modern Angular development.