export default defineAppConfig({
  docus: {
    title: 'Denostr',
    description: 'Denostr: your cloud-native nostr relay',
    image: 'https://github.com/denostr-lab/official-website/assets/8678079/d1d329c8-3c33-4141-ba1f-1b6fef3fa24c',
    socials: {
      twitter: 'RealDenostr', // denostr-lab
      github: 'denostr-lab/denostr'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'official-website',
      owner: 'denostr-lab',
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
