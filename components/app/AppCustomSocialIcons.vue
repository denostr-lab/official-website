<script setup lang="ts">

const socials = [
  {
    label: 'twitter',
    icon: 'mdi:twitter-circle',
    // icon: 'entypo-social:twitter-with-circle',
  },
  {
    label: 'github',
    icon: 'mdi:github',
    // icon: 'entypo-social:github-with-circle',
  },
]

const { config } = useDocus()

const icons = computed<any>(() => {
  return Object.entries(config.value.socials || {})
    .map(([key, value]) => {
      const social = socials.find(s => s.label === key)
      if (social) {
        return {
          href: `https://${key}.com/${value}`,
          icon: social.icon,
          label: value,
          rel: 'noopener noreferrer',
          className: social.label,
        }
      }
      return null
    })
    .filter(Boolean)
})
</script>

<template>
  <NuxtLink
    v-for="icon in icons"
    :key="icon.label"
    :rel="icon.rel"
    :title="icon.label"
    :aria-label="icon.label"
    :href="icon.href"
    target="_blank"
  >
    <Icon
      v-if="icon.icon"
      :name="icon.icon"
      :class="icon.className"
    />
  </NuxtLink>
</template>
  
<style lang="ts" scoped>
css({
    a: {
        display: 'flex',
        padding: '{space.4}',

        '@dark': {
            color: '{color.gray.400}'
        },

        '&:hover': {
            color: '{color.gray.700}',
            '@dark': {
                color: '{color.gray.200}',
            }
        },

        '.twitter': {
            width: '{space.6}',
            height: '{space.6}',
            color: '#01abfb',

            '@dark': {
                color: '{color.gray.500}'
            },

            '&:hover': {
                color: '#42c3ff',

                '@dark': {
                    color: '{color.gray.300}',
                }
            }
        },

        '.github': {
            width: '{space.6}',
            height: '{space.6}',
            color: '{color.black}',

            '@dark': {
                color: '{color.gray.500}',
            },

            '&:hover': {
                color: '{color.gray.600}',

                '@dark': {
                    color: '{color.gray.300}',
                }
            }
        },
    },
})
</style>
