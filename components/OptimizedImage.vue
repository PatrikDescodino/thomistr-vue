<template>
  <div class="lazy-image-wrapper">
    <img
      v-if="!isLazy || isVisible"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :class="imageClass"
      @load="onLoad"
      @error="onError"
    />
    <div 
      v-else
      ref="lazyRef"
      :class="placeholderClass"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <div class="animate-pulse bg-gray-200 w-full h-full rounded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  isLazy?: boolean
  imageClass?: string
  placeholderClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 300,
  loading: 'lazy',
  isLazy: true,
  imageClass: 'w-full h-auto object-cover',
  placeholderClass: 'w-full'
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

const lazyRef = ref<HTMLElement>()
const isVisible = ref(false)

const onLoad = (event: Event) => {
  emit('load', event)
}

const onError = (event: Event) => {
  emit('error', event)
}

// Intersection Observer pro lazy loading
onMounted(() => {
  if (!props.isLazy) {
    isVisible.value = true
    return
  }

  if (lazyRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.disconnect()
          }
        })
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    )
    
    observer.observe(lazyRef.value)
    
    onBeforeUnmount(() => {
      observer.disconnect()
    })
  }
})
</script>