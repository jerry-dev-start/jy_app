import { useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import TabBar from '../../components/TabBar'
import HomeContent from '../home/content'
import HealthContent from '../health/content'
import ClockinContent from '../clockin/content'
import FirstaidContent from '../firstaid/content'
import ProfileContent from '../profile/content'
import './index.scss'

/** Tab 页面标题映射 */
const TAB_TITLES = ['首页', '健康恢复', '每日打卡', '烟瘾急救', '我的']

const TAB_CONTENTS = [HomeContent, HealthContent, ClockinContent, FirstaidContent, ProfileContent]

export default function Index() {
  const [current, setCurrent] = useState(0)

  const handleTabChange = useCallback((index: number) => {
    setCurrent(index)
    Taro.setNavigationBarTitle({ title: TAB_TITLES[index] })
  }, [])

  return (
    <View className='app-container'>
      {/* Tab 内容区 */}
      <View className='tab-content'>
        {TAB_CONTENTS.map((Content, index) => (
          <View key={index} style={current === index
            ? { display: 'block' }
            : { visibility: 'hidden', height: 0, overflow: 'hidden' }
          }>
            <Content />
          </View>
        ))}
      </View>

      {/* 底部导航 — 只渲染一次，永不重新挂载 */}
      <TabBar selected={current} onChange={handleTabChange} />
    </View>
  )
}
