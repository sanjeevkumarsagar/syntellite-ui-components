# Syntellite UI Components - Examples

This document provides practical examples of how to use Syntellite UI components in real-world scenarios.

## Button Examples

### E-commerce Website

```tsx
import { Button } from '@syntellite/ui-components';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

// Product page buttons
function ProductActions() {
  return (
    <div className="space-y-4">
      {/* Primary CTA */}
      <Button 
        variant="gradient"
        gradientFrom="#FF6B6B"
        gradientTo="#FF8E53"
        animation="hover-scale"
        size="lg"
        fullWidth
        icon={<ShoppingCart />}
        iconPosition="left"
      >
        Add to Cart - $99.99
      </Button>

      {/* Secondary actions */}
      <Button.Group spacing="md">
        <Button 
          variant="outline" 
          animation="hover-lift"
          icon={<Heart />}
          iconPosition="left"
        >
          Wishlist
        </Button>
        <Button 
          variant="ghost" 
          animation="hover-lift"
          icon={<Eye />}
          iconPosition="left"
        >
          Quick View
        </Button>
      </Button.Group>
    </div>
  );
}
```

### NGO Website

```tsx
import { Button } from '@syntellite/ui-components';
import { Heart, Users, Gift } from 'lucide-react';

// Donation and volunteer buttons
function NGOActions() {
  return (
    <div className="space-y-6">
      {/* Main donation CTA */}
      <Button 
        variant="neon"
        animation="glow"
        primaryColor="#00D4AA"
        size="xl"
        fullWidth
        icon={<Heart />}
        iconPosition="left"
      >
        Donate Now
      </Button>

      {/* Secondary actions */}
      <Button.Group orientation="vertical" spacing="md">
        <Button 
          variant="gradient"
          gradientFrom="#4ECDC4"
          gradientTo="#44A08D"
          animation="float"
          size="lg"
          icon={<Users />}
          iconPosition="left"
        >
          Become a Volunteer
        </Button>
        
        <Button 
          variant="glass"
          animation="hover-lift"
          size="lg"
          icon={<Gift />}
          iconPosition="left"
        >
          Monthly Giving
        </Button>
      </Button.Group>
    </div>
  );
}
```

### Corporate Website

```tsx
import { Button } from '@syntellite/ui-components';
import { ArrowRight, Download, Play } from 'lucide-react';

// Corporate CTA buttons
function CorporateActions() {
  return (
    <div className="space-y-8">
      {/* Hero CTA */}
      <Button 
        variant="primary"
        animation="pulse"
        size="xl"
        icon={<ArrowRight />}
        iconPosition="right"
      >
        Get Started Today
      </Button>

      {/* Secondary actions */}
      <Button.Group spacing="lg">
        <Button 
          variant="outline"
          animation="hover-scale"
          size="lg"
          icon={<Download />}
          iconPosition="left"
        >
          Download Brochure
        </Button>
        
        <Button 
          variant="ghost"
          animation="hover-lift"
          size="lg"
          icon={<Play />}
          iconPosition="left"
        >
          Watch Demo
        </Button>
      </Button.Group>
    </div>
  );
}
```

### Form Buttons

```tsx
import { Button } from '@syntellite/ui-components';
import { Save, X, Send } from 'lucide-react';

// Form action buttons
function FormActions({ isLoading, onSave, onCancel, onSubmit }) {
  return (
    <div className="space-y-4">
      {/* Submit button */}
      <Button 
        variant="primary"
        animation="ripple"
        size="lg"
        fullWidth
        loading={isLoading}
        onClick={onSubmit}
        icon={<Send />}
        iconPosition="left"
      >
        {isLoading ? 'Submitting...' : 'Submit Form'}
      </Button>

      {/* Action buttons */}
      <Button.Group spacing="md">
        <Button 
          variant="secondary"
          animation="hover-lift"
          onClick={onSave}
          icon={<Save />}
          iconPosition="left"
        >
          Save Draft
        </Button>
        
        <Button 
          variant="ghost"
          animation="hover-lift"
          onClick={onCancel}
          icon={<X />}
          iconPosition="left"
        >
          Cancel
        </Button>
      </Button.Group>
    </div>
  );
}
```

### Social Media Buttons

```tsx
import { Button } from '@syntellite/ui-components';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Social media sharing buttons
function SocialButtons() {
  return (
    <Button.Group spacing="sm">
      <Button.Icon 
        icon={<Facebook />}
        variant="primary"
        primaryColor="#1877F2"
        animation="hover-scale"
        aria-label="Share on Facebook"
      />
      
      <Button.Icon 
        icon={<Twitter />}
        variant="primary"
        primaryColor="#1DA1F2"
        animation="hover-scale"
        aria-label="Share on Twitter"
      />
      
      <Button.Icon 
        icon={<Instagram />}
        variant="gradient"
        gradientFrom="#E4405F"
        gradientTo="#FCAF45"
        animation="hover-scale"
        aria-label="Share on Instagram"
      />
      
      <Button.Icon 
        icon={<Linkedin />}
        variant="primary"
        primaryColor="#0A66C2"
        animation="hover-scale"
        aria-label="Share on LinkedIn"
      />
    </Button.Group>
  );
}
```

### Gaming/Entertainment Buttons

```tsx
import { Button } from '@syntellite/ui-components';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';

// Gaming interface buttons
function GameButtons({ isPlaying, onPlay, onPause, onRestart, onPowerUp }) {
  return (
    <div className="space-y-4">
      {/* Main game control */}
      <Button 
        variant="neon"
        animation="glow"
        primaryColor="#00FF88"
        size="xl"
        onClick={isPlaying ? onPause : onPlay}
        icon={isPlaying ? <Pause /> : <Play />}
        iconPosition="left"
      >
        {isPlaying ? 'Pause Game' : 'Start Game'}
      </Button>

      {/* Game actions */}
      <Button.Group spacing="md">
        <Button 
          variant="bold"
          animation="shake"
          onClick={onRestart}
          icon={<RotateCcw />}
          iconPosition="left"
        >
          Restart
        </Button>
        
        <Button 
          variant="gradient"
          gradientFrom="#FFD700"
          gradientTo="#FFA500"
          animation="bounce"
          onClick={onPowerUp}
          icon={<Zap />}
          iconPosition="left"
        >
          Power Up!
        </Button>
      </Button.Group>
    </div>
  );
}
```

### Dashboard/Admin Buttons

```tsx
import { Button } from '@syntellite/ui-components';
import { Plus, Edit, Trash2, Filter, Download } from 'lucide-react';

// Admin dashboard buttons
function AdminActions() {
  return (
    <div className="space-y-6">
      {/* Primary action */}
      <Button 
        variant="primary"
        animation="hover-lift"
        size="lg"
        icon={<Plus />}
        iconPosition="left"
      >
        Create New Item
      </Button>

      {/* Table actions */}
      <Button.Group spacing="sm">
        <Button 
          variant="ghost"
          animation="hover-scale"
          size="sm"
          icon={<Edit />}
          iconPosition="left"
        >
          Edit
        </Button>
        
        <Button 
          variant="ghost"
          animation="hover-scale"
          size="sm"
          primaryColor="#EF4444"
          icon={<Trash2 />}
          iconPosition="left"
        >
          Delete
        </Button>
      </Button.Group>

      {/* Utility actions */}
      <Button.Group spacing="md">
        <Button 
          variant="outline"
          animation="hover-lift"
          icon={<Filter />}
          iconPosition="left"
        >
          Filter
        </Button>
        
        <Button 
          variant="outline"
          animation="hover-lift"
          icon={<Download />}
          iconPosition="left"
        >
          Export
        </Button>
      </Button.Group>
    </div>
  );
}
```

## Custom Theming Examples

### Brand-specific Theming

```tsx
// Custom brand colors for different clients
const ecommerceTheme = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  accent: '#45B7D1',
};

const ngoTheme = {
  primary: '#00D4AA',
  secondary: '#FF6B6B',
  accent: '#FFA726',
};

const corporateTheme = {
  primary: '#2E39FF',
  secondary: '#796EFF',
  accent: '#D632FF',
};

// Usage
<Button 
  variant="primary"
  primaryColor={ecommerceTheme.primary}
  animation="hover-scale"
>
  E-commerce Button
</Button>
```

### Responsive Button Patterns

```tsx
// Responsive button sizing
function ResponsiveButton() {
  return (
    <Button 
      variant="primary"
      animation="hover-lift"
      className="
        text-sm px-4 py-2 
        md:text-base md:px-6 md:py-3 
        lg:text-lg lg:px-8 lg:py-4
      "
      fullWidth
    >
      Responsive Button
    </Button>
  );
}
```

## Integration with Popular Libraries

### React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { Button } from '@syntellite/ui-components';

function ContactForm() {
  const { handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
      
      <Button 
        type="submit"
        variant="primary"
        animation="ripple"
        loading={isSubmitting}
        fullWidth
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
```

### Next.js Integration

```tsx
import Link from 'next/link';
import { Button } from '@syntellite/ui-components';

// Button as Next.js Link
function NavigationButton() {
  return (
    <Link href="/contact" passHref>
      <Button 
        variant="primary"
        animation="hover-lift"
        as="a"
      >
        Contact Us
      </Button>
    </Link>
  );
}
```

These examples demonstrate the flexibility and power of Syntellite UI components across different industries and use cases. The dynamic styling system allows you to maintain brand consistency while leveraging the same component library across all your projects.
