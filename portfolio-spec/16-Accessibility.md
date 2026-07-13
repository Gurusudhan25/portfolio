# Accessibility

## Goal
Ensure the portfolio is usable by everyone, including people with disabilities.

## WCAG Guidelines
Target: WCAG 2.1 Level AA compliance

## Key Principles

### 1. Perceivable
- Text alternatives for images
- Captions for videos
- Adaptable content
- Distinguishable (color contrast)

### 2. Operable
- Keyboard accessible
- Sufficient time
- Seizure prevention
- Navigable

### 3. Understandable
- Readable text
- Predictable behavior
- Input assistance

### 4. Robust
- Compatible with assistive technologies
- Valid HTML

## Implementation

### Semantic HTML
- Use proper heading levels
- Semantic elements (nav, main, article, etc.)
- Lists for list content
- Buttons for actions, links for navigation

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Visible focus indicators
- Skip to main content link
- Keyboard shortcuts documented

### ARIA
- Use ARIA labels when needed
- ARIA landmarks
- Live regions for dynamic content
- Expanded/collapsed states
- Current page in navigation

### Color & Contrast
- Minimum contrast ratio 4.5:1 (text)
- Minimum contrast ratio 3:1 (large text)
- Don't rely on color alone
- Link underlines or clear distinction
- Focus indicators with sufficient contrast

### Forms
- Labels for all inputs
- Error messages
- Clear instructions
- Accessible validation
- Group related fields

### Images & Media
- Descriptive alt text
- Empty alt for decorative images
- Transcripts for audio
- Captions for video
- No autoplay with sound

### Navigation
- Consistent navigation
- Multiple ways to find content
- Clear link text
- Breadcrumbs (if applicable)
- Skip navigation link

### Responsive & Zoom
- Support 200% zoom
- No horizontal scrolling
- Readable at various sizes
- Touch targets minimum 44x44px

### Motion & Animation
- Respect prefers-reduced-motion
- No flashing content
- Pause/stop controls for animations
- No motion required for functionality

## Testing

### Automated Testing
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension
- Pa11y

### Manual Testing
- Keyboard-only navigation
- Screen reader (NVDA, JAWS, VoiceOver)
- Zoom to 200%
- Check color contrast
- Test with various viewport sizes

### User Testing
- Test with real users with disabilities
- Gather feedback
- Iterate on improvements

## Accessibility Checklist
- [ ] Semantic HTML structure
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient
- [ ] Form labels present
- [ ] ARIA used appropriately
- [ ] Heading hierarchy correct
- [ ] Links have descriptive text
- [ ] Animations respect preferences
- [ ] Screen reader tested
- [ ] No keyboard traps
- [ ] Skip to main content link
