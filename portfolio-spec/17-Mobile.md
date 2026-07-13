# Mobile Responsiveness

## Goal
Deliver an excellent experience on all device sizes.

## Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized for performance

## Mobile Optimizations

### Layout
- Single column layout
- Stack elements vertically
- Collapsible sections
- Simplified navigation (hamburger menu)
- Adequate white space
- Avoid horizontal scrolling

### Typography
- Minimum 16px font size (body)
- Line height 1.5+
- Shorter line lengths
- Larger tap targets (44x44px)
- Readable without zoom

### Navigation
- Sticky header (optional)
- Hamburger/mobile menu
- Clear close button
- Full-screen or slide-in menu
- Easy access to main sections
- Back to top button

### Images
- Responsive images (srcset)
- Appropriate sizes for viewport
- Lazy loading
- Optimized file sizes
- Consider vertical crops for mobile

### Touch Interactions
- Large touch targets (min 44x44px)
- Adequate spacing between targets
- No hover-dependent functionality
- Swipe gestures (optional)
- Pull to refresh (if applicable)

### Forms
- Large input fields
- Appropriate input types
- Auto-focus carefully
- Inline validation
- Clear error messages
- Submit button always visible

### Performance
- Smaller images
- Reduce animations
- Limit third-party scripts
- Critical CSS inline
- Fast loading essential

## Tablet Considerations
- 2-column layouts
- Expanded navigation
- Larger images
- Hover states may work
- Landscape orientation

## Testing Devices
- iOS: iPhone (multiple sizes)
- Android: Various screen sizes
- Tablets: iPad, Android tablets
- Different orientations
- Various browsers

## Testing Tools
- Browser DevTools device mode
- Real device testing
- BrowserStack
- Responsive design mode
- Touch simulation

## Common Issues to Avoid
- Text too small
- Tap targets too close
- Horizontal scrolling
- Content cut off
- Hover-only interactions
- Slow loading
- Unreadable fonts
- Fixed widths
- Flash of unstyled content

## Mobile Checklist
- [ ] Mobile-first CSS
- [ ] All breakpoints tested
- [ ] Touch targets 44x44px+
- [ ] Readable text (16px+)
- [ ] Mobile menu works
- [ ] Forms usable
- [ ] Images responsive
- [ ] Fast loading (<3s)
- [ ] No horizontal scroll
- [ ] Tested on real devices
- [ ] Both orientations work
- [ ] Input types appropriate
