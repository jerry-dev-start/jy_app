
import './index.scss'
import {  UserAdd } from '@nutui/icons-react-taro'
import {View,Text} from "@tarojs/components";
interface TabBarItem {
  text: string,
  pagePath: string,
  iconPath?: React.ReactElement,
}
function Index() {
  const list:TabBarItem[] = [
    {
      text: "首页",
      pagePath: "pages/index/index",

    },
    {
      text: "健康",
      pagePath: "pages/health/index",

    },
    {
      text: "打卡",
      pagePath: "pages/clockin/index",

    },{
      text: "急救",
      pagePath: "pages/firstaid/index",

    },
    {
      text: "我的",
      pagePath: "pages/profile/index",

    }
  ]
  return (
    <View className='tab-bar-wrapper'>

      <View className='tab-bar-content'>
        {list.map((item,index) => {
          return (
            <View
              key={index}
              className='tab-bar-item'
            >
              <UserAdd/>
              <Text>{item.text}</Text>
            </View>
          )
        })}
      </View>

    </View>
  )
}

export default Index
