export default defineAppConfig({
  docus: {
    title: 'Denostr',

    description: 'Denostr: your cloud-native nostr relay',

    image: 'https://github.com/denostr-protocol/official-website/assets/8678079/d1d329c8-3c33-4141-ba1f-1b6fef3fa24c',

    socials: {},

    layout: 'default',

    header: {
      title: '',
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    footer: {
      credits: {
        icon: './img/logo-footer.png',
        text: 'Powered by Nostr',
        href: 'https://github.com/nostr-protocol'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      dir: undefined,
      branch: undefined,
      repo: undefined,
      owner: undefined,
      edit: false
    }
  }
})
