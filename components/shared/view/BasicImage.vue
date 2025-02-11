<template>
  <figure class="image-wrapper image is-1by1" :class="customClass">
    <transition name="fade">
      <NuxtImg
        v-if="imageSrc"
        :src="imageSrc || placeholder"
        :alt="alt"
        :class="['has-ratio', { 'rounded-full': rounded }]"
        :sizes="sizes"
        :loading="loading"
        @load="onImageLoad"
        @error="onImageError" />
    </transition>
    <transition name="fade">
      <slot v-if="!loaded" name="placeholder">
        <NeoSkeleton full-size no-margin :circle="rounded" />
      </slot>
    </transition>
  </figure>
</template>

<script lang="ts" setup>
import { NeoSkeleton } from '@kodadot1/brick'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    customClass?: string
    rounded?: boolean
    sizes?: string
    lazy?: boolean
  }>(),
  {
    src: '',
    alt: '',
    customClass: '',
    sizes: '',
    lazy: false,
  },
)

const { $consola } = useNuxtApp()
const { placeholder } = useTheme()

const imageSrc = ref(props.src)
const loaded = ref(false)

const loading = computed<'eager' | 'lazy'>(() =>
  props.lazy ? 'lazy' : 'eager',
)

const onImageLoad = () => {
  loaded.value = true
}

const onImageError = (ev: Event) => {
  $consola.error('[BasicImage] to load:', props.src, ev)
  imageSrc.value = placeholder.value
}

watchEffect(() => {
  imageSrc.value = props.src
})
</script>

<style lang="scss" scoped>
.image-wrapper {
  padding-top: 100%;
  img {
    object-fit: cover;
  }
}
</style>
