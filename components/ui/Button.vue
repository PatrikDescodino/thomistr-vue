<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :disabled="disabled"
    :type="type"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="iconLeft" class="w-5 h-5 mr-2">
      <component :is="iconLeft" class="w-full h-full" />
    </span>
    <span class="relative z-10">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="iconRight" class="w-5 h-5 ml-2">
      <component :is="iconRight" class="w-full h-full" />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  iconLeft?: any
  iconRight?: any
  label?: string
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  disabled: false,
  loading: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Determine component tag
const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

// Handle click events
const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

// Base classes - Oldschool style with light border radius
const baseClasses = [
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'font-semibold',
  'rounded',
  'transition-colors',
  'duration-200',
  'ease-out',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-offset-gray-900'
]

// Size variants
const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
}

// Variant classes - Oldschool style with subtle transparent borders
const variantClasses = {
  primary: [
    'bg-gold-600',
    'hover:bg-gold-800',
    'text-white',
    'border-2 border-white/40',
    'hover:border-white/60',
    'focus:ring-gold-500'
  ],
  secondary: [
    'bg-gray-700',
    'hover:bg-gray-900',
    'text-gray-300',
    'hover:text-white',
    'border-2 border-white/40',
    'hover:border-white/60',
    'focus:ring-gray-500'
  ],
  outline: [
    'bg-transparent',
    'border-2 border-gold-600',
    'text-gold-400',
    'hover:bg-gold-600',
    'hover:text-white',
    'hover:border-gold-700',
    'focus:ring-gold-500'
  ],
  ghost: [
    'bg-transparent',
    'text-gray-300',
    'hover:bg-gray-800',
    'hover:text-white',
    'border-2 border-white/40',
    'hover:border-white/60',
    'focus:ring-gray-500'
  ],
  danger: [
    'bg-red-600',
    'hover:bg-red-800',
    'text-white',
    'border-2 border-white/40',
    'hover:border-white/60',
    'focus:ring-red-500'
  ]
}

// Compute classes
const buttonClasses = computed(() => [
  ...baseClasses,
  sizeClasses[props.size],
  ...variantClasses[props.variant],
  {
    'w-full': props.fullWidth,
    'opacity-50 cursor-not-allowed hover:scale-100': props.disabled || props.loading,
    'pointer-events-none': props.disabled || props.loading
  }
])
</script>