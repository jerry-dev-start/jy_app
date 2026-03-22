import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useCallback } from 'react'

interface UserInfo {
  nickName: string
  avatarUrl: string
}

export default function ProfileContent() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
    const cached = Taro.getStorageSync('userInfo')
    return cached || null
  })
  const [logging, setLogging] = useState(false)

  const handleLogin = useCallback(async () => {
    if (logging) return
    setLogging(true)
    try {
      const { code } = await Taro.login()
      console.log('login code:', code)
      // TODO: 把 code 发给后端换 token
      // const res = await Taro.request({
      //   url: 'https://你的后端/api/login',
      //   method: 'POST',
      //   data: { code }
      // })
      // Taro.setStorageSync('token', res.data.token)

      // 暂时模拟登录成功，设置默认用户信息
      const info: UserInfo = {
        nickName: '微信用户',
        avatarUrl: ''
      }
      Taro.setStorageSync('userInfo', info)
      setUserInfo(info)
      Taro.showToast({ title: '登录成功', icon: 'success' })
    } catch (err) {
      console.error('登录失败', err)
      Taro.showToast({ title: '登录失败', icon: 'none' })
    } finally {
      setLogging(false)
    }
  }, [logging])

  const handleChooseAvatar = useCallback((e) => {
    const avatarUrl = e.detail.avatarUrl
    if (avatarUrl && userInfo) {
      const updated = { ...userInfo, avatarUrl }
      setUserInfo(updated)
      Taro.setStorageSync('userInfo', updated)
    }
  }, [userInfo])

  const handleNickNameChange = useCallback((e) => {
    const nickName = e.detail.value
    if (nickName && userInfo) {
      const updated = { ...userInfo, nickName }
      setUserInfo(updated)
      Taro.setStorageSync('userInfo', updated)
    }
  }, [userInfo])

  const handleLogout = useCallback(() => {
    Taro.removeStorageSync('userInfo')
    Taro.removeStorageSync('token')
    setUserInfo(null)
    Taro.showToast({ title: '已退出登录', icon: 'none' })
  }, [])

  // 未登录状态
  if (!userInfo) {
    return (
      <View className='page-profile'>
        <View className='flex flex-col items-center pt-16'>
          {/* Logo */}
          <View className='w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4'>
            <Text className='text-4xl'>🌿</Text>
          </View>
          <Text className='text-lg font-bold text-gray-700 mb-1'>欢迎使用清风</Text>
          <Text className='text-xs text-gray-400 mb-8'>登录后可同步你的戒烟数据</Text>

          {/* 微信登录按钮 */}
          <Button
            className='w-72 bg-emerald-500 text-white font-bold py-3 rounded-2xl text-sm flex items-center justify-center'
            style={{backgroundColor:'#10B981', color:'#fff', border:'none', lineHeight:'1.5'}}
            loading={logging}
            onClick={handleLogin}
          >
            {logging ? '登录中...' : '微信一键登录'}
          </Button>

          <Text className='text-xs text-gray-300 mt-6'>
            登录即表示同意用户协议和隐私政策
          </Text>
        </View>
      </View>
    )
  }

  // 已登录状态
  return (
    <View className='page-profile'>
      {/* 用户信息卡片 */}
      <View className='bg-white rounded-2xl shadow-md p-5 mb-4 flex items-center gap-4'>
        <Button
          className='p-0 border-none bg-transparent'
          style={{padding:0, margin:0, border:'none', background:'transparent', lineHeight:'1'}}
          openType='chooseAvatar'
          onChooseAvatar={handleChooseAvatar}
        >
          {userInfo.avatarUrl ? (
            <Image
              className='w-14 h-14 rounded-full'
              src={userInfo.avatarUrl}
              mode='aspectFill'
            />
          ) : (
            <View className='w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center'>
              <Text className='text-2xl'>😊</Text>
            </View>
          )}
        </Button>
        <View className='flex-1'>
          <input
            type='nickname'
            className='text-base font-bold text-gray-700 bg-transparent border-none outline-none w-full'
            style={{border:'none', background:'transparent', padding:0, fontSize:'16px', fontWeight:'bold'}}
            placeholder='点击设置昵称'
            value={userInfo.nickName}
            onBlur={handleNickNameChange}
          />
          <Text className='text-xs text-gray-400 mt-1'>点击头像和昵称可修改</Text>
        </View>
      </View>

      {/* 退出登录 */}
      <View
        className='bg-gray-100 rounded-2xl py-3 text-center mt-4'
        onClick={handleLogout}
      >
        <Text className='text-sm text-gray-500'>退出登录</Text>
      </View>
    </View>
  )
}
