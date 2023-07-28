<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  },
  description: {
    type: String,
    default: ''
  },
  cta: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
})
</script>

<template>
  <section class="docs-card-grid">
    <ContentSlot :use="$slots.root" />

    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>
    <p class="description font-sans">
      <ContentSlot :use="$slots.description" unwrap="p">
        {{ description }}
      </ContentSlot>
    </p>
    <div class="layout">
      <slot />
    </div>
    <div class="bottom-box">
      <ButtonLink v-if="cta" class="cta" bold size="medium" :href="(cta[1] as any)">
      {{ cta[0] }}
    </ButtonLink>
    </div>
  
  </section>
</template>

<style scoped lang="ts">
css({
  '.docs-card-grid': {
    position: 'relative',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '.title': {
      marginBottom: '{space.6}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '.description': {
        marginBottom: '{space.16}',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
        textAlign: 'center',
        color: 'rgb(113, 113, 122)',
        '@lg': {
          textAlign: 'start'
        }
      },
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      textAlign: 'start',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    },
    '.bottom-box': {
      display:"flex",
      marginTop:"90px",
      justifyContent:"center"
    }
  }
})
</style>
