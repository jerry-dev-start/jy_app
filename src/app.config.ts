export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/index',
    'pages/firstaid/index',
    'pages/health/index',
    'pages/clockin/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    custom: true,
    list:[
      {
        text: '首页',
        pagePath: 'pages/index/index',
      },{
        text: '健康',
        pagePath: 'pages/health/index',
      },{
        text: '打卡',
        pagePath: 'pages/clockin/index',
      },{
        text: '急救',
        pagePath: 'pages/firstaid/index',
      },{
        text: '我的',
        pagePath: 'pages/profile/index',
      }
    ]
  }
})
