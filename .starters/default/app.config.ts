export default defineAppConfig({
  docus: {
    title: 'Denostr',
    description: 'Denostr: your cloud-native nostr relay',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'denostr',
      github: 'Guakamoli/denostr'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'denostr-docs',
      owner: 'guakamoli',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://www.bytetradelab.io/',
          icon: './img/bytetrade.svg'
        }
      ]
    }
  }
})
