export default {
  title: 'Numo UI',
  description: 'Just playing around.',
  base: '/numo-ui/',
  appearance: false,  
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Install', link: 'getting_started/install' }
        ]
      },
      {
        text: 'Styles',
        collapsible: true,
        items: [
          { text: 'Neumorphism Shadows', link: 'styles/neumorphism_shadows' }
        ]
      }
    ]
  },
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present Evan You'
  }
}