import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LuckyStar Token",
  description: "At LuckyStar, we are committed to transparency and innovation in the blockchain space. Explore our tokenomics, roadmap, and join the community to unlock exclusive benefits with LuckyStar Token!",
  head: [
      ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  locales:{
    root: {
      label: 'English',
      lang: 'en-us',
      link: '/en',
      themeConfig:{
        nav:[
          { text: 'Home', link: '/en' },
          { text: 'telegram', link: 'https://t.me/+FrPdglWVvjY5NGZl' }
        ],
        sidebar: [
          {
            text: 'navigation',
            items: [
              { text: 'tokenomics', link: '/en/tokenomics' },
              { text: 'Project introduction', link: '/en/origin' }
            ]
          }
        ],
        outline:{
          label: 'directory'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh',
      themeConfig:{
        nav:[
          { text: '主页', link: '/zh' },
          { text: 'telegram', link: 'https://t.me/+FrPdglWVvjY5NGZl' }
        ],
        // https://vitepress.dev/reference/default-theme-config
        sidebar: [
          {
            text: '导航',
            items: [
              { text: '代币经济学', link: '/zh/tokenomics' },
              { text: '项目介绍', link: '/zh/origin' }
            ]
          }
        ],
        outline:{
          label: '目录'
        }
      },

      // 其余 locale 特定属性...
    }
  },
})
