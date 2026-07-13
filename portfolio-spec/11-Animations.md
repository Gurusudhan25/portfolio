# Animations

## Purpose
Enhance user experience with smooth, purposeful animations.

## Animation Principles
- Purposeful, not decorative
- Subtle and smooth
- Performance-optimized
- Accessible (respect prefers-reduced-motion)
- Consistent timing and easing

## Animation Types

### Page Load Animations
- Fade in
- Slide in
- Staggered reveals
- Loading transitions

### Scroll Animations
- Parallax effects
- Fade/slide on scroll
- Progress indicators
- Reveal on enter viewport

### Hover # Motion Design & Animation Specification

## Objective

Motion should communicate quality, hierarchy, and responsiveness.

Animations must never exist solely for decoration.

Every animation should improve usability, guide attention, or reinforce interactions.

The entire portfolio should feel like a premium product experience.

The animation style should be inspired by:

- Apple
- Linear
- Stripe
- Framer
- Vercel
- Arc Browser

Avoid flashy effects.

Avoid gaming aesthetics.

Avoid excessive motion.

Everything should feel refined.

---

# Motion Principles

Motion should be

Smooth

Intentional

Elegant

Natural

Fast

Responsive

Subtle

Professional

---

# Animation Timing

Fast

120ms–180ms

Normal

220ms–300ms

Large transitions

400ms–600ms

Never exceed 700ms.

---

# Easing

Use premium easing curves.

Avoid linear animations.

Animations should accelerate and decelerate naturally.

---

# Initial Page Load

Sequence

Background

↓

Navigation

↓

Hero Text

↓

CTA Buttons

↓

Portrait

↓

Technology Badges

↓

Statistics

↓

Scroll Indicator

Every element should appear progressively.

Never animate everything simultaneously.

---

# Navigation

Navigation should

Fade in

Blur into view

Become sticky smoothly

Highlight active section

Shrink slightly while scrolling

Background gains blur after scrolling

---

# Hero

Headline

Blur reveal

↓

Slide upward

↓

Fade

Portrait

Scale from 95%

↓

Fade

↓

Float slightly

Technology Badges

Reveal sequentially

Buttons

Soft fade

↓

Lift

↓

Hover glow

---

# Section Reveal

Every section enters only once.

Animation

Fade

+

Slide Up

+

Small Blur

Sections should not repeatedly animate.

---

# Cards

Project Cards

Hover

Lift

↓

Shadow increases

↓

Border glows softly

↓

Gradient moves

Experience Cards

Reveal one after another.

Skill Cards

Fade

↓

Scale

↓

Border animation

Achievement Cards

Counter animation

↓

Reveal

---

# Typography Animation

Large headings

Reveal line by line.

Body text

Fade upward.

Quotes

Character spacing animation.

Gradient text

Slow animated gradient movement.

Avoid typing animations.

---

# Buttons

Hover

Scale 1.02

↓

Gradient movement

↓

Soft shadow

↓

Arrow icon slides slightly

Click

Small press animation.

---

# Icons

Hover

Rotate 5°

↓

Scale

↓

Glow

Keep motion subtle.

---

# Images

Fade

↓

Scale

↓

Parallax

Images should never suddenly appear.

---

# Scroll Progress

Add a thin progress indicator at the top.

It should animate as the visitor scrolls.

Minimal design.

---

# Mouse Interaction

Desktop only.

Hero portrait

Slight parallax.

Background gradients

Move subtly.

Cards

Tilt very slightly.

Maximum

3°

Cursor interactions must never become distracting.

---

# Background Motion

Animated gradients

Noise movement

Blurred lighting

Floating abstract shapes

Movement should be extremely subtle.

---

# Project Gallery

Images

Fade

↓

Scale

↓

Lightbox

Navigation

Smooth transition

Keyboard support

---

# Statistics

Numbers

Animate from

0

↓

Target Value

Only once.

No looping.

---

# Timeline

Timeline line

Animates while scrolling.

Timeline nodes

Glow softly.

Cards reveal one after another.

---

# Footer

Footer enters slowly.

Background image

Fades

↓

Gradient reveals

↓

Noise appears

↓

Typography fades

↓

Name expands

↓

"Made with ❤️ by"

Appears last.

The footer should feel cinematic.

---

# Page Transitions

If using routing

Page fades out.

↓

New page fades in.

↓

Content reveals.

No harsh transitions.

---

# Cursor

Optional.

Small premium cursor.

Interactive elements

Slight magnet effect.

Links

Cursor expands.

Buttons

Cursor reacts softly.

Never interfere with usability.

---

# Loading States

Skeleton loaders

Shimmer effect

Image placeholders

Blur-up loading

Lazy loading

Avoid spinners whenever possible.

---

# Micro Interactions

Links

Underline grows.

Buttons

Glow.

Cards

Lift.

Icons

Bounce slightly.

Technology badges

Border animation.

Project screenshots

Scale on hover.

Navigation

Smooth underline.

---

# Accessibility

Respect prefers-reduced-motion.

Disable unnecessary animations.

Maintain keyboard accessibility.

Never rely on animation to communicate important information.

---

# Performance

Animate only

opacity

transform

filter (sparingly)

Avoid animating

width

height

top

left

Avoid layout thrashing.

Maintain 60 FPS.

Lazy-load animation libraries if possible.

---

# AI Instructions

Do not over-animate.

Motion should communicate craftsmanship.

Visitors should notice how polished the website feels without consciously thinking about the animations.

The animation system should reinforce the perception that this is a carefully engineered product.

The final experience should feel closer to Apple, Linear, or Vercel than a typical developer portfolio.
- Button hover states
- Card lifts/shadows
- Icon transformations
- Link underlines

### Click/Interaction
- Button press effects
- Modal open/close
- Menu transitions
- Form feedback

### Micro-interactions
- Success/error states
- Loading spinners
- Tooltips
- Notifications

## Implementation

### Technologies
- CSS transitions
- CSS animations
- JavaScript libraries (e.g., GSAP, Framer Motion)
- Intersection Observer for scroll

### Performance
- Use transform and opacity
- Avoid animating layout properties
- Use will-change sparingly
- GPU acceleration
- Limit simultaneous animations

## Timing & Easing
- Fast: 150-200ms (micro-interactions)
- Medium: 250-400ms (transitions)
- Slow: 500-800ms (page transitions)
- Easing: ease-out, ease-in-out

## Accessibility
- Respect prefers-reduced-motion
- Provide alternatives
- Ensure keyboard navigation works
- Don't rely solely on animation for feedback
