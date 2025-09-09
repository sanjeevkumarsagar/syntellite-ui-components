import React, { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";
import {
  ButtonProps,
  ButtonGroupProps,
  IconButtonProps,
} from "../../types/button";

// Utility function to combine classes
const cn = (...inputs: (string | undefined)[]) => {
  return twMerge(clsx(inputs));
};

// Base button styles
const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

// Size variants
const sizeVariants = {
  xs: "px-2 py-1 text-xs h-6",
  sm: "px-3 py-1.5 text-sm h-8",
  md: "px-4 py-2 text-sm h-10",
  lg: "px-6 py-3 text-base h-12",
  xl: "px-8 py-4 text-lg h-14",
};

// Variant styles
const variantStyles = {
  primary:
    "bg-syntellite-primary text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
  outline:
    "border-2 border-syntellite-primary text-syntellite-primary bg-transparent hover:bg-syntellite-primary hover:text-white focus:ring-blue-500",
  ghost:
    "text-syntellite-primary bg-transparent hover:bg-blue-50 focus:ring-blue-500",
  link: "text-syntellite-primary bg-transparent hover:underline focus:ring-blue-500 p-0 h-auto",
  gradient:
    "bg-gradient-to-r from-syntellite-pink to-syntellite-accent text-white hover:from-pink-600 hover:to-purple-600 focus:ring-pink-500",
  neon: "bg-black text-syntellite-primary border-2 border-syntellite-primary hover:bg-syntellite-primary hover:text-black hover:shadow-glow focus:ring-blue-500",
  glass:
    "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",
  minimal: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  bold: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500 font-bold",
};

// Animation variants for Framer Motion
const animationVariants = {
  none: {},
  "hover-lift": {
    whileHover: { y: -2, transition: { duration: 0.2 } },
    whileTap: { y: 0 },
  },
  "hover-scale": {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  ripple: {
    whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  },
  slide: {
    whileHover: { x: 2, transition: { duration: 0.2 } },
  },
  glow: {
    whileHover: {
      boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
      transition: { duration: 0.3 },
    },
  },
  bounce: {
    whileHover: {
      y: [0, -5, 0],
      transition: { duration: 0.5, repeat: Infinity },
    },
  },
  rotate: {
    whileHover: { rotate: 5, transition: { duration: 0.2 } },
    whileTap: { rotate: -5 },
  },
  shake: {
    whileHover: {
      x: [0, -2, 2, -2, 2, 0],
      transition: { duration: 0.5 },
    },
  },
  float: {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      animation = "hover-lift",
      primaryColor,
      secondaryColor,
      textColor,
      borderColor,
      gradientFrom,
      gradientTo,
      gradientDirection = "to-r",
      animationDuration = 200,
      animationDelay = 0,
      loading = false,
      disabled = false,
      icon,
      iconPosition = "left",
      children,
      fullWidth = false,
      rounded = true,
      shadow = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Generate dynamic styles based on props
    const dynamicStyles = useMemo(() => {
      const styles: React.CSSProperties & { [key: string]: any } = { ...style };

      if (primaryColor) {
        styles["--primary-color"] = primaryColor;
      }
      if (secondaryColor) {
        styles["--secondary-color"] = secondaryColor;
      }
      if (textColor) {
        styles.color = textColor;
      }
      if (borderColor) {
        styles.borderColor = borderColor;
      }
      if (animationDuration) {
        styles.transitionDuration = `${animationDuration}ms`;
      }
      if (animationDelay) {
        styles.transitionDelay = `${animationDelay}ms`;
      }

      return styles;
    }, [
      style,
      primaryColor,
      secondaryColor,
      textColor,
      borderColor,
      animationDuration,
      animationDelay,
    ]);

    // Generate gradient classes
    const gradientClasses = useMemo(() => {
      if (variant === "gradient" && gradientFrom && gradientTo) {
        return `bg-gradient-${gradientDirection}`;
      }
      return "";
    }, [variant, gradientFrom, gradientTo, gradientDirection]);

    // Generate custom gradient styles
    const customGradientStyles = useMemo(() => {
      if (variant === "gradient" && gradientFrom && gradientTo) {
        return {
          background: `linear-gradient(${gradientDirection.replace(
            "to-",
            ""
          )}, ${gradientFrom}, ${gradientTo})`,
        };
      }
      return {};
    }, [variant, gradientFrom, gradientTo, gradientDirection]);

    // Combine all classes
    const buttonClasses = cn(
      baseStyles,
      sizeVariants[size],
      variantStyles[variant],
      gradientClasses,
      fullWidth ? "w-full" : undefined,
      rounded && size !== "xs" ? "rounded-md" : undefined,
      rounded && size === "xs" ? "rounded-sm" : undefined,
      rounded && variant === "neon" ? "rounded-full" : undefined,
      shadow ? "shadow-md" : undefined,
      variant === "neon" && shadow ? "shadow-glow" : undefined,
      disabled || loading ? "cursor-not-allowed" : undefined,
      className
    );

    // Get animation props
    const motionProps =
      animation !== "none" ? animationVariants[animation] : {};

    // Render loading spinner
    const LoadingSpinner = () => (
      <Loader2
        className={cn(
          "animate-spin",
          size === "xs" ? "w-3 h-3" : size === "sm" ? "w-4 h-4" : "w-5 h-5"
        )}
      />
    );

    // Render icon
    const IconComponent = () => {
      if (!icon) return null;
      return (
        <span
          className={cn(
            "flex items-center",
            children && iconPosition === "left" ? "mr-2" : undefined,
            children && iconPosition === "right" ? "ml-2" : undefined
          )}
        >
          {icon}
        </span>
      );
    };

    // Separate motion props from HTML button props to avoid conflicts
    const { 
      onDrag, 
      onDragStart, 
      onDragEnd, 
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...htmlProps 
    } = props;

    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        style={{
          ...dynamicStyles,
          ...customGradientStyles,
        }}
        disabled={disabled || loading}
        {...motionProps}
        {...htmlProps}
      >
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === "left" && <IconComponent />}
        {!loading && children && (
          <span className={loading ? "ml-2" : ""}>{children}</span>
        )}
        {!loading && icon && iconPosition === "right" && <IconComponent />}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Button Group Component
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = "horizontal",
  spacing = "sm",
  className,
}) => {
  const groupClasses = cn(
    "flex",
    orientation === "horizontal" ? "flex-row" : "flex-col",
    orientation === "horizontal" && spacing === "sm" ? "space-x-1" : undefined,
    orientation === "horizontal" && spacing === "md" ? "space-x-2" : undefined,
    orientation === "horizontal" && spacing === "lg" ? "space-x-4" : undefined,
    orientation === "vertical" && spacing === "sm" ? "space-y-1" : undefined,
    orientation === "vertical" && spacing === "md" ? "space-y-2" : undefined,
    orientation === "vertical" && spacing === "lg" ? "space-y-4" : undefined,
    className
  );

  return <div className={groupClasses}>{children}</div>;
};

// Icon Button Component
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = "md", variant = "ghost", className, ...props }, ref) => {
    const iconSizes = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("p-2", className)}
        {...props}
      >
        <span className={iconSizes[size]}>{icon}</span>
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

// Compound component pattern
const ButtonComponent = Button as typeof Button & {
  Group: typeof ButtonGroup;
  Icon: typeof IconButton;
};

ButtonComponent.Group = ButtonGroup;
ButtonComponent.Icon = IconButton;

export { ButtonComponent as Button, ButtonGroup, IconButton };
export default ButtonComponent;
