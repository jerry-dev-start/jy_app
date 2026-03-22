import {View} from "@tarojs/components";

export default function TimerCard() {
  return (
    <View className='bg-white rounded-2xl shadow-md p-6 text-center'>
      <p className='text-gray-500 text-sm mb-1'>已经戒烟</p>
      <View className='text-3xl font-bold text-emerald-500 tracking-wide'>1天 20:08:34</View>
    </View>
  )
}
