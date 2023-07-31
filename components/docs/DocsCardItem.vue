<script setup lang="ts">
defineProps({

  link: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  linkDisable:{
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <section class="docs-card-item">
    <a v-if="!linkDisable" :href="link" target="_blank" class="w-full h-full relative group" tabindex="-1" >
      <img :src="img" alt="" loading="lazy" class="img" >
      <div class="text-box">
        <h2 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            {{ title }}
          </ContentSlot>
        </h2>
        <p class="link">
          {{link.replace('https://', '').replace('www.', '')}}
        </p>
      </div>
    </a>
    <a v-else :href="link" target="_blank" class="w-full h-full relative group" tabindex="-1" onclick="return false;">
      <img :src="img" alt="" loading="lazy" class="img" >
      <div class="text-box">
        <h2 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            {{ title }}
          </ContentSlot>
        </h2>
        <p class="link">
          {{link.replace('https://', '').replace('www.', '')}}
        </p>
      </div>
    </a>
  </section>
</template>

<style scoped lang="ts">
css({
  '.docs-card-item': {
    width: '100%',
    '.img': {
      width: '100%',
      height: '200px',
      borderRadius: '10px',
      marginBottom: '18px',
      objectFit:"cover",
    },
    '.text-box': {
      textAlign: 'center',
      width: '100%',
      '.title': {

        fontSize: '20px',
        fontFamily: 'RoobertPRO,RoobertPRO override,sans-serif;',
        fontWeight: '600',
        color: '{elements.text.primary.color.static}',

        lineHeight: '24px',
        marginBottom: '3px',
      },
      '.link': {


        fontSize: '16px',
        fontFamily: 'RoobertPRO,RoobertPRO override,sans-serif;',


        color: 'rgba(127, 223, 158, 1)',
        lineHeight: '19px',
      }
    }
  }
})
</style>
