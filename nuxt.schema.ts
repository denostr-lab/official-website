export default defineNuxtSchema({
  appConfig: {
    /**
     * Docus theme configuration.
     *
     * @studioIcon material-symbols:docs
     */
    docus: {
      /**
       * Website title, used as header default title and meta title.
       *
       * @studioIcon material-symbols:title
       */
      title: 'Denostr',
      /**
       * The website title template, to overwrite the default one.
       */
      titleTemplate: '%s · Denostr',
      /**
       * Website description, used for meta description.
       *
       * @studioIcon material-symbols:description
       */
      description: 'Denostr: your cloud-native nostr relay',
      /**
       * Cover image.
       *
       * @example '/cover.jpg'
       *
       * @studioIcon dashicons:cover-image
       * @studioInput file
       */
      image: 'https://github.com/denostr-lab/official-website/assets/8678079/d1d329c8-3c33-4141-ba1f-1b6fef3fa24c',

      /**
       * Social links
       *
       * Will be used in AppSocialIcons component.
       *
       * @studioIcon material-symbols:share-outline
       */
      socials: {
        /**
         * Twitter social handle
         * @example 'nuxt_js'
         * @studioIcon simple-icons:twitter
         */
        twitter: '',
        /**
         * GitHub org or repository
         * @example 'nuxt/framework'
         * @studioIcon simple-icons:github
         */
        github: '',
        /**
         * Facebook page url
         * @example https://www.facebook.com/groups/nuxtjs
         * @studioIcon simple-icons:facebook
         */
        facebook: '',
        /**
         * Instagram page url
         * @example https://www.instagram.com/wearenuxt
         * @studioIcon simple-icons:instagram
         */
        instagram: '',
        /**
         * Instagram page url
         * @example https://www.youtube.com/@NuxtLabs
         * @studioIcon simple-icons:youtube
         */
        youtube: '',
        /**
         * Medium page url
         * @example https://medium.com/nuxt
         * @studioIcon simple-icons:medium
         */
        medium: ''
      },

      /**
       * Theme layout configuration.
       *
       * @type {'default'|'page'}
       * @studioIcon tabler:arrow-autofit-width
       */
      layout: 'default',

      /**
       * Aside navigation configuration.
       *
       * @studioIcon fluent:document-page-24-regular
       */
      aside: {
        /**
         * Aside navigation level
         *
         * Use 0 to disable all nesting.
         * Use 1 and more to display nested navigation in header and aside navigation.
         */
        level: 0,
        /**
         * Specify if default collapsibles state globally for aside navigation.
         */
        collapsed: false,
        /**
         * Paths to be excluded from aside navigation.
         *
         * @type {string[]}
         */
        exclude: []
      },

      /**
       * Header configuration.
       *
       * @studioIcon fluent:document-header-24-regular
       */
      header: {
        /**
         * Website title
         *
         * Title to be displayed in header or as aria-label if logo is defined.
         *
         * Default to docus.title
         *
         * @studioIcon material-symbols:title
         */
        title: '',
        /**
         * Logo configuration
         *
         * Boolean to disable or use the `Logo.vue` component.
         *
         * String to be used as a name of a component.
         *
         * @example 'MyLogo'
         * @studioInput boolean
         */
        logo: false,
        /**
         * Header links
         *
         * Toggle links icons in the header.
         */
        showLinkIcon: false,
        /**
         * Paths to be excluded from header links.
         *
         * @type {string[]}
         *
         */
        exclude: [],
        /**
         * Makes the content of the header fluid.
         */
        fluid: false
      },

      /**
       * Main content configuration.
       *
       * @studioIcon fluent:document-header-footer-24-filled
       */
      main: {
        /**
         * Makes the content of the main container fluid.
         */
        fluid: false,
        /**
         * Makes the content of the main container padded.
         */
        padded: true
      },

      /**
       * Footer configuration
       *
       * @studioIcon fluent:document-footer-24-regular
       */
      footer: {
        /**
         * Website credits configuration.
         *
         * @type {false|{icon: string, text: string, href: string}}
         *
         * @studioIcon material-symbols:copyright
         */
        credits: {
          /**
           * Icon to show on credits
           * @formtype Icon
           */
          icon: './img/logo-footer.png',
          text: 'Powered by Nostr',
          href: 'https://github.com/nostr-protocol'
        },
        /**
         * Text links
         *
         * Will be added into center section of the footer.
         *
         * @studioIcon material-symbols:add-link
         */
        textLinks: {
          $schema: {
            type: 'array',
            items: {
              type: 'object',
              required: ['text', 'href'],
              properties: {
                href: {
                  type: 'string',
                  description: 'URL when clicking the link'
                },
                text: {
                  type: 'string',
                  description: 'Text of the link'
                },
                target: {
                  type: 'string',
                  description: 'Target attribute of the link'
                },
                rel: {
                  type: 'string',
                  description: 'Rel attribute of the link'
                }
              }
            }
          }
        },
        /**
         * Icon links
         *
         * Icons to be added to Social Icons in footer.
         *
         * @studioIcon material-symbols:add-link
         */
        iconLinks: {
          $schema: {
            type: 'array',
            items: {
              type: 'object',
              required: ['icon', 'href'],
              properties: {
                icon: {
                  type: 'string',
                  description: 'Icon name'
                },
                href: {
                  type: 'string',
                  description: 'Link when clicking on the icon'
                },
                label: {
                  type: 'string',
                  description: 'Label of the icon'
                },
                rel: {
                  type: 'string',
                  description: 'Rel attribute of the link'
                }
              }
            }
          }
        },
        /**
         * Makes the content of the footer fluid.
         */
        fluid: true
      },

      /**
       * GitHub integration
       *
       * Configure the Edit on Github integration.
       *
       * @studioIcon simple-icons:github
       */
      github: {
        /**
         * Directory
         *
         * Your GitHub repository root directory.
         */
        dir: '',
        /**
         * Branch
         *
         * Your GitHub repository branch.
         */
        branch: '',
        /**
         * Repository
         *
         * Your GitHub repository name.
         */
        repo: '',
        /**
         * Owner
         *
         * Your GitHub repository owner.
         */
        owner: '',
        /**
         * EditOnGithub
         *
         * Display EditOnGithub button.
         */
        edit: false
      }
    }
  }
})
