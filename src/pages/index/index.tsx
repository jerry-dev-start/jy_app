import { useState, useCallback } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import TabBar from '../../components/TabBar'
import './index.scss'

/** Tab 页面标题映射 */
const TAB_TITLES = ['首页', '健康恢复', '每日打卡', '烟瘾急救', '我的']

/** 各 Tab 内容组件（后续替换为实际业务组件） */
function HomeContent() {
  return (
    <View className='page-index'>
      <Text>首页</Text>
    </View>
  )
}

function HealthContent() {
  return (
    <View className='page-health'>
      <Text>健康</Text>
    </View>
  )
}

function ClockinContent() {
  return (
    <View className='page-clockin'>
      <Text>打卡</Text>
    </View>
  )
}

function FirstaidContent() {
  return (
    <View className='page-firstaid'>
      <Text>急救</Text>
    </View>
  )
}

function ProfileContent() {
  return (
    <View className='page-profile'>
      <Text>我的</Text>
    </View>
  )
}

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
          <View key={index} style={{ display: current === index ? 'block' : 'none' }}>
            <Content />
          </View>
        ))}
      </View>

      {/* 底部导航 — 只渲染一次，永不重新挂载 */}
      <TabBar selected={current} onChange={handleTabChange} />
    </View>
  )
}
