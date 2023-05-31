export default defineAppConfig({
  docus: {
    title: 'Denostr',
    description: 'Denostr: your cloud-native nostr relay',
    image: 'https://github.com/denostr-protocol/official-website/assets/8678079/d1d329c8-3c33-4141-ba1f-1b6fef3fa24c',
    socials: {
      twitter: 'RealDenostr', // denostr-protocol
      github: 'denostr-protocol/denostr'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'official-website',
      owner: 'denostr-protocol',
      edit: false
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
