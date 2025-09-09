# @syntellite/ui-components

A comprehensive React UI component library built by Syntellite Innovations for faster development across all client projects. Features dynamic styling, advanced animations, and complete TypeScript support.

## 🚀 Features

- **Dynamic Styling**: Change colors, gradients, and styles through props
- **Advanced Animations**: 10+ built-in animation variants with Framer Motion
- **TypeScript First**: Full type safety and IntelliSense support
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Accessibility**: ARIA compliant with keyboard navigation support
- **Tree Shaking**: Optimized bundle size with ES modules
- **Compound Components**: Flexible component composition patterns

## 📦 Installation

```bash
npm install @syntellite/ui-components
# or
yarn add @syntellite/ui-components
# or
pnpm add @syntellite/ui-components
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom
```

## 🎨 Setup

### 1. Import Styles

Import the CSS file in your main application file:

```tsx
// In your main App.tsx or index.tsx
import '@syntellite/ui-components/dist/index.css';
```

### 2. Tailwind CSS Configuration (Optional)

If you're using Tailwind CSS in your project, extend your config to include Syntellite's design tokens:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content paths
    './node_modules/@syntellite/ui-components/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        syntellite: {
          primary: '#2E39FF',
          secondary: '#796EFF',
          accent: '#D632FF',
          pink: '#FF81D1',
          purple: '#A42EFF',
        },
      },
    },
  },
};
```

## 🔥 Quick Start

```tsx
import { Button } from '@syntellite/ui-components';

function App() {
  return (
    <div>
      <Button variant="primary" animation="hover-lift">
        Click me!
      </Button>
    </div>
  );
}
```

## 📚 Components

### Button

A highly customizable button component with multiple variants and animations.

#### Basic Usage

```tsx
import { Button } from '@syntellite/ui-components';

// Basic button
<Button>Click me</Button>

// With variant and size
<Button variant="primary" size="lg">
  Large Primary Button
</Button>

// With animation
<Button variant="gradient" animation="hover-scale">
  Animated Gradient Button
</Button>
```

#### Variants

- `primary` - Main action button
- `secondary` - Secondary action button
- `outline` - Outlined button
- `ghost` - Transparent button
- `link` - Link-style button
- `gradient` - Gradient background
- `neon` - Neon glow effect
- `glass` - Glass morphism effect
- `minimal` - Minimal styling
- `bold` - Bold black button

#### Sizes

- `xs` - Extra small (24px height)
- `sm` - Small (32px height)
- `md` - Medium (40px height) - Default
- `lg` - Large (48px height)
- `xl` - Extra large (56px height)

#### Animations

- `none` - No animation
- `hover-lift` - Lifts on hover (Default)
- `hover-scale` - Scales on hover
- `pulse` - Continuous pulse effect
- `ripple` - Ripple effect on click
- `slide` - Slides on hover
- `glow` - Glow effect on hover
- `bounce` - Bounce animation
- `rotate` - Rotation on hover
- `shake` - Shake animation
- `float` - Floating animation

#### Custom Colors

```tsx
// Custom colors
<Button 
  variant="primary"
  primaryColor="#FF6B6B"
  textColor="#FFFFFF"
>
  Custom Colored Button
</Button>

// Custom gradient
<Button 
  variant="gradient"
  gradientFrom="#FF6B6B"
  gradientTo="#4ECDC4"
  gradientDirection="to-br"
>
  Custom Gradient
</Button>
```

#### With Icons

```tsx
import { Heart, Download } from 'lucide-react';

// Icon on the left
<Button icon={<Heart />} iconPosition="left">
  Like
</Button>

// Icon on the right
<Button icon={<Download />} iconPosition="right">
  Download
</Button>

// Icon only
<Button.Icon icon={<Heart />} aria-label="Like" />
```

#### Loading State

```tsx
<Button loading={isLoading} variant="primary">
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

#### Button Groups

```tsx
import { Button } from '@syntellite/ui-components';

<Button.Group spacing="md">
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</Button.Group>

// Vertical group
<Button.Group orientation="vertical" spacing="sm">
  <Button variant="ghost">Option 1</Button>
  <Button variant="ghost">Option 2</Button>
  <Button variant="ghost">Option 3</Button>
</Button.Group>
```

#### Full Width

```tsx
<Button fullWidth variant="primary">
  Full Width Button
</Button>
```

#### Advanced Examples

```tsx
// E-commerce Add to Cart
<Button 
  variant="gradient"
  gradientFrom="#FF6B6B"
  gradientTo="#FF8E53"
  animation="hover-scale"
  size="lg"
  icon={<ShoppingCart />}
  iconPosition="left"
>
  Add to Cart
</Button>

// NGO Donation Button
<Button 
  variant="neon"
  animation="glow"
  primaryColor="#00D4AA"
  size="xl"
  fullWidth
>
  Donate Now
</Button>

// Corporate CTA
<Button 
  variant="glass"
  animation="float"
  size="lg"
  className="backdrop-blur-lg"
>
  Get Started
</Button>
```

## 🎯 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { ButtonProps, ButtonVariant, ButtonSize } from '@syntellite/ui-components';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};
```

## 🎨 Theming

### CSS Custom Properties

You can override the default theme using CSS custom properties:

```css
:root {
  --primary-color: #your-primary-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
}
```

### Runtime Theming

```tsx
// Theme provider pattern (coming soon)
<SyntelliteThemeProvider theme={customTheme}>
  <Button variant="primary">Themed Button</Button>
</SyntelliteThemeProvider>
```

## 🔧 Development

### Building the Package

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## 📖 Storybook

View all components in Storybook:

```bash
npm run storybook
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## 📄 License

MIT License - see LICENSE file for details.

## 🏢 About Syntellite

Built with ❤️ by [Syntellite Innovations Private Limited](https://syntellite.com) - Transforming ideas into profitable businesses.

---

## 🚀 Roadmap

### Coming Soon

- [ ] Input Components (Text, Email, Password, etc.)
- [ ] Card Components
- [ ] Modal & Dialog Components
- [ ] Navigation Components
- [ ] Form Components
- [ ] Layout Components
- [ ] Data Display Components
- [ ] Feedback Components
- [ ] Theme Provider
- [ ] Dark Mode Support
- [ ] More Animation Presets

### Future Releases

- [ ] Advanced Form Validation
- [ ] Data Table Components
- [ ] Chart Components
- [ ] Calendar Components
- [ ] File Upload Components
- [ ] Rich Text Editor
- [ ] Drag & Drop Components

## 📞 Support

For support, email support@syntellite.com or create an issue on GitHub.
