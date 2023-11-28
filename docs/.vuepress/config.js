

module.exports = {
    title: '魔方低代码',
    description: 'Just playing around',
    temp: './core',
    dest: './dist',
      themeConfig: {
        logo: '/assets/logo.png',
        // displayAllHeaders: true, // 默认值：false
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/one' },
        ],
        sidebar: [
            '/guide/one',
            ['/guide/two', 'Explicit link text']
          ]
      },
  }