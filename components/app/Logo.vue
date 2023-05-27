<script setup lang="ts">
const { config } = useDocus()

const title = computed(() => config.value.title || 'Denostr')
</script>

<template>
  <div class="logo">
    <img
      src="/img/logo.png"
      alt="Denostr logo"
    >
    <span>{{ title }}</span>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.logo': {
    display: 'flex',

    img: {
      borderRadius: '{space.5}',
      marginRight: '{space.2}',
    },

    span: {
      fontSize: '{space.5}',
      fontWeight: 'bold'
    },
  },
  // svg: {
  //   color: '{color.gray.900}',
  //   height: 'inherit',
  //   '@dark': {
  //     color: '{color.gray.100}'
  //   },
  // }
})
</style>
