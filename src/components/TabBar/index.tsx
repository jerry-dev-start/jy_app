import { useCallback } from 'react'
import { View, Text } from '@tarojs/components'
import { Home, Heart, Clock, ShieldCheck, User } from '@nutui/icons-react-taro'
import './index.scss'

/** Tab 配置 */
interface TabConfig {
  key: string
  label: string
  icon: typeof Home
}

const TABS: TabConfig[] = [
  { key: 'index', label: '首页', icon: Home },
  { key: 'health', label: '健康', icon: Heart },
  { key: 'clockin', label: '打卡', icon: Clock },
  { key: 'firstaid', label: '急救', icon: ShieldCheck },
  { key: 'profile', label: '我的', icon: User },
]

const FAB_INDEX = 2
const COLOR_ACTIVE = '#10B981'
const COLOR_INACTIVE = '#9CA3AF'

interface TabBarProps {
  selected: number
  onChange: (index: number) => void
}

export default function TabBar({ selected, onChange }: TabBarProps) {
  const handleSwitch = useCallback(
    (index: number) => {
      if (index === selected) return
      onChange(index)
    },
    [selected, onChange]
  )

  const FabIcon = TABS[FAB_INDEX].icon

  return (
    <View className='custom-tab-bar'>
      {/* 凸起 FAB */}
      <View className='tab-bar__fab-wrapper'>
        <View
          className={`tab-bar__fab ${selected === FAB_INDEX ? 'tab-bar__fab--active' : ''}`}
          onClick={() => handleSwitch(FAB_INDEX)}
        >
          {selected !== FAB_INDEX && (
            <View className='tab-bar__fab-pulse' />
          )}
          <FabIcon size='28' color='#FFFFFF' />
        </View>
      </View>

      {/* 导航栏主体 */}
      <View className='tab-bar__body'>
        {TABS.map((tab, index) => {
          if (index === FAB_INDEX) {
            return (
              <View key={tab.key} className='tab-bar__placeholder'>
                <Text className={`tab-bar__label ${selected === FAB_INDEX ? 'tab-bar__label--active' : ''}`}>
                  {tab.label}
                </Text>
              </View>
            )
          }

          const isActive = selected === index
          const IconComp = tab.icon

          return (
            <View
              key={tab.key}
              className={`tab-bar__item ${isActive ? 'tab-bar__item--active' : ''}`}
              onClick={() => handleSwitch(index)}
            >
              <IconComp size='22' color={isActive ? COLOR_ACTIVE : COLOR_INACTIVE} />
              <Text className={`tab-bar__label ${isActive ? 'tab-bar__label--active' : ''}`}>
                {tab.label}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
