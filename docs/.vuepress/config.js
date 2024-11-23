import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '你好，上冬辰',
  description: 'My first VuePress Site',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],


  theme: defaultTheme({
    logo: '/logo/index.svg',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关于',
        link: '/about',
      },
    ],
    // 我们会将它作为一个 GitHub 仓库
    repo: 'https://github.com/sunwenqiangy',
  }),


  bundler: viteBundler(),
})
