# System Patterns: Syntellite UI Components Library

## Architecture Overview

### Component Library Structure
```
src/
├── components/           # Component implementations
│   ├── ui/              # Basic UI components (Button, Input, etc.)
│   ├── forms/           # Form-specific components
│   ├── layout/          # Layout components (Grid, Container, etc.)
│   └── sections/        # Complex section components
├── types/               # TypeScript type definitions
├── hooks/               # Reusable React hooks
├── utils/               # Utility functions
└── styles/              # Global styles and CSS
```

### Build System Architecture
- **Rollup**: Primary bundler for library packaging
- **TypeScript**: Source language with full type definitions
- **PostCSS**: CSS processing with Tailwind CSS
- **ES Modules**: Primary output format with CommonJS fallback

## Key Technical Decisions

### 1. Component Design Pattern
**Decision**: Compound Component Pattern with Forwardable Refs
```tsx
// Main component with sub-components
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // Implementation
});

// Compound pattern
Button.Group = ButtonGroup;
Button.Icon = IconButton;

export { Button };
```

**Rationale**:
- Provides flexible composition
- Maintains single import for related functionality
- Enables progressive disclosure of complexity
- Supports ref forwarding for form libraries

### 2. Styling Architecture
**Decision**: Tailwind CSS + CSS-in-JS Hybrid Approach
```tsx
// Base classes from Tailwind
const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200";

// Dynamic styles via CSS custom properties
const dynamicStyles = useMemo(() => {
  const styles: React.CSSProperties = {};
  if (primaryColor) styles["--primary-color"] = primaryColor;
  return styles;
}, [primaryColor]);
```

**Rationale**:
- Leverages Tailwind's utility classes for consistency
- Enables runtime customization through props
- Maintains performance with CSS custom properties
- Supports both design system and custom branding

### 3. Animation System
**Decision**: Framer Motion with Predefined Variants
```tsx
const animationVariants = {
  "hover-lift": {
    whileHover: { y: -2, transition: { duration: 0.2 } },
    whileTap: { y: 0 },
  },
  "hover-scale": {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  },
};
```

**Rationale**:
- Provides smooth, performant animations
- Offers declarative animation API
- Enables complex animation sequences
- Maintains consistent animation timing

### 4. Type System Design
**Decision**: Comprehensive TypeScript with Branded Types
```tsx
export type ButtonVariant = 
  | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  | 'gradient' | 'neon' | 'glass' | 'minimal' | 'bold';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // ... other props
}
```

**Rationale**:
- Provides excellent developer experience with autocomplete
- Prevents runtime errors through compile-time checking
- Enables IDE support and refactoring
- Documents component API through types

## Design Patterns in Use

### 1. Prop-Driven Styling Pattern
```tsx
// Color customization through props
<Button 
  variant="primary"
  primaryColor="#FF6B6B"
  textColor="#FFFFFF"
/>

// Gradient customization
<Button 
  variant="gradient"
  gradientFrom="#FF6B6B"
  gradientTo="#4ECDC4"
  gradientDirection="to-br"
/>
```

**Benefits**:
- No CSS overrides required
- Runtime customization capability
- Type-safe styling API
- Consistent customization patterns

### 2. Variant-Based Design System
```tsx
const variantStyles = {
  primary: "bg-syntellite-primary text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border-2 border-syntellite-primary text-syntellite-primary",
  // ... more variants
};
```

**Benefits**:
- Consistent design language
- Easy to extend with new variants
- Predictable styling behavior
- Design system compliance

### 3. Progressive Enhancement Pattern
```tsx
// Basic usage
<Button>Click me</Button>

// Enhanced with animation
<Button animation="hover-scale">Click me</Button>

// Fully customized
<Button 
  variant="gradient"
  animation="glow"
  gradientFrom="#custom"
  gradientTo="#colors"
>
  Advanced Button
</Button>
```

**Benefits**:
- Simple default usage
- Advanced features available when needed
- Gradual learning curve
- Flexible customization

### 4. Utility-First Class Management
```tsx
const cn = (...inputs: (string | undefined)[]) => {
  return twMerge(clsx(inputs));
};

const buttonClasses = cn(
  baseStyles,
  sizeVariants[size],
  variantStyles[variant],
  { "w-full": fullWidth },
  className
);
```

**Benefits**:
- Intelligent class merging
- Conflict resolution
- Custom class override support
- Predictable class application

## Component Relationships

### Core Component Hierarchy
```
Button (Base)
├── ButtonGroup (Composition)
├── IconButton (Specialization)
└── LoadingButton (State Variant)
```

### Shared Dependencies
- **clsx**: Class name utility
- **tailwind-merge**: Tailwind class conflict resolution
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Type Relationships
```tsx
// Base props that extend HTML attributes
interface BaseProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  size?: Size;
}

// Specialized props that extend base
interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: ReactNode;
}
```

## Critical Implementation Paths

### 1. Component Initialization Path
```
Props Validation → Style Computation → Animation Setup → Render
```

### 2. Dynamic Styling Path
```
Prop Changes → useMemo Recalculation → CSS Custom Properties → Style Application
```

### 3. Animation Trigger Path
```
User Interaction → Framer Motion → Animation Variant → Visual Feedback
```

### 4. Build Process Path
```
TypeScript Compilation → Rollup Bundling → CSS Processing → Package Generation
```

## Performance Patterns

### 1. Memoization Strategy
```tsx
const dynamicStyles = useMemo(() => {
  // Expensive style calculations
}, [dependencies]);

const gradientClasses = useMemo(() => {
  // Conditional class generation
}, [variant, gradientFrom, gradientTo]);
```

### 2. Bundle Optimization
- Tree shaking support through ES modules
- Separate CSS bundle for styling
- Peer dependencies for React/ReactDOM
- Minimal runtime dependencies

### 3. Runtime Performance
- CSS custom properties for dynamic styling
- Framer Motion for GPU-accelerated animations
- Conditional rendering for optional features
- Efficient class name computation

## Error Handling Patterns

### 1. Prop Validation
```tsx
// TypeScript compile-time validation
variant?: ButtonVariant; // Limited to specific values

// Runtime validation through defaults
const safeVariant = variant || 'primary';
```

### 2. Graceful Degradation
```tsx
// Animation fallbacks
const motionProps = animation !== 'none' ? animationVariants[animation] : {};

// Style fallbacks
const fallbackStyles = primaryColor ? { backgroundColor: primaryColor } : {};
```

### 3. Development Warnings
- TypeScript errors for invalid props
- Console warnings for deprecated patterns
- Clear error messages for missing dependencies

## Testing Patterns

### 1. Component Testing Strategy
- Unit tests for individual components
- Integration tests for compound components
- Visual regression tests with Storybook
- Accessibility tests with testing-library

### 2. Type Testing
- TypeScript compilation as test
- Type-only imports for type checking
- Generic type constraint validation

### 3. Performance Testing
- Bundle size monitoring
- Runtime performance benchmarks
- Animation performance validation
- Memory leak detection
