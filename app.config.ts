export default defineAppConfig({
  docus: {
    title: 'Denostr',

    description: 'Denostr: your cloud-native nostr relay',

    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

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
