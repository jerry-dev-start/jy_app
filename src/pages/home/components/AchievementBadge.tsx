import {Text, View} from "@tarojs/components";

interface AchievementBadgeProps {
  icon: string
  name: string
  unlocked: boolean
}

export default function AchievementBadge({ icon, name, unlocked }: AchievementBadgeProps) {
  return (
    <View className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl ${
      unlocked
        ? 'bg-emerald-50 border-2 border-emerald-500'
        : 'bg-gray-50 border border-dashed border-gray-200 opacity-45'
    }`}>
      <Text className='text-2xl'>{unlocked ? icon : '🔒'}</Text>
      <Text className={`font-bold mt-1 ${unlocked ? 'text-emerald-700' : 'text-gray-400'}`} style={{fontSize:'20rpx'}}>
        {name}
      </Text>
    </View>
  )
}
