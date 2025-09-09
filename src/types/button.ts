import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'link'
  | 'gradient' 
  | 'neon' 
  | 'glass' 
  | 'minimal' 
  | 'bold';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonAnimation = 
  | 'none' 
  | 'hover-lift' 
  | 'hover-scale' 
  | 'pulse' 
  | 'ripple'
  | 'slide' 
  | 'glow' 
  | 'bounce' 
  | 'rotate' 
  | 'shake'
  | 'float';

export type GradientDirection = 
  | 'to-r' 
  | 'to-l' 
  | 'to-t' 
  | 'to-b' 
  | 'to-br' 
  | 'to-bl'
  | 'to-tr'
  | 'to-tl';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animation?: ButtonAnimation;
  
  // Custom color overrides
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  borderColor?: string;
  
  // Gradient options
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?: GradientDirection;
  
  // Animation settings
  animationDuration?: number;
  animationDelay?: number;
  
  // State variations
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  
  // Content
  children?: ReactNode;
  
  // Additional styling
  fullWidth?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  
  // Custom CSS classes
  className?: string;
}

export interface ButtonGroupProps {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: ReactNode;
  'aria-label': string;
}
