# AI Rules & Guidelines

## Purpose
Guidelines for AI assistants when working on this portfolio project.

## Code Generation Rules

### General Principles
- Write minimal, focused code
- Follow Angular best practices
- Use TypeScript strictly
- Maintain consistent style
- Comment complex logic only
- Keep components small and focused

### Component Guidelines
- One component per file
- Use OnPush change detection
- Implement proper lifecycle hooks
- Clean up subscriptions
- Use Angular signals when appropriate
- Standalone components preferred

### Styling
- Component-scoped styles
- Follow design system
- Mobile-first approach
- Use CSS custom properties
- Avoid deep nesting

### State Management
- Use RxJS for reactive state
- Keep state minimal
- Avoid unnecessary complexity
- Use services for shared state

### Performance
- Lazy load routes
- Optimize change detection
- Use trackBy for lists
- Implement virtual scrolling if needed

## File Organization
```
src/app/
├── core/          # Singleton services
├── shared/        # Reusable components
├── features/      # Feature modules
├── models/        # TypeScript interfaces
└── utils/         # Helper functions
```

## Naming Conventions
- Components: kebab-case
- Classes: PascalCase
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Interfaces: PascalCase with 'I' prefix (optional)

## Testing Requirements
- Write tests only when explicitly requested
- Unit tests for services
- Component tests for logic
- E2E for critical flows

## Documentation
- JSDoc for public APIs
- README updates when needed
- Inline comments for complex logic
- Keep documentation current

## Version Control
- Atomic commits
- Clear commit messages
- Feature branches
- No direct commits to main
