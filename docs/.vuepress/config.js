

module.exports = {
    title: '魔方低代码',
    description: 'Just playing around',
    temp: './core',
    base: '/cube-doc/',
    dest: './dist',
      themeConfig: {
        // displayAllHeaders: true, // 默认值：false
        search: false,
        lastUpdated: 'Last Updated',
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/platform/main' },
          { text: '体验', link: 'https://web.bxcube.com/cube/' },
        ],
        sidebar: [
            '/platform/main.md',
            '/panorama/main.md',
            '/product/main.md',
            '/guide/main.md',
            '/official/main.md',
            '/develop/main.md',
          ]
      },
  }