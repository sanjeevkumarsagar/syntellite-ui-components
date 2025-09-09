import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'link',
        'gradient',
        'neon',
        'glass',
        'minimal',
        'bold',
        'success',
        'warning',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    animation: {
      control: { type: 'select' },
      options: [
        'none',
        'hover-lift',
        'hover-scale',
        'pulse',
        'ripple',
        'slide',
        'glow',
        'bounce',
        'rotate',
        'shake',
        'float',
      ],
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button with Icon',
    icon: <Plus />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Loading Button',
    loading: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
    children: 'Warning Button',
  },
};
