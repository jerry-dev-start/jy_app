import {Text, View, ScrollView} from "@tarojs/components";
import {useMemo} from "react";
import AchievementBadge from "./AchievementBadge";

interface Achievement {
  id: string
  icon: string
  name: string
  desc: string
  condition: (elapsed: number, streak: number) => boolean
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 'h1',  icon: '🌱', name: '第一步',     desc: '戒烟满1小时',   condition: (e) => e >= 3600 },
  { id: 'd1',  icon: '⭐', name: '初见曙光',   desc: '戒烟满1天',     condition: (e) => e >= 86400 },
  { id: 'd3',  icon: '🔥', name: '三日不凡',   desc: '戒烟满3天',     condition: (e) => e >= 86400 * 3 },
  { id: 'd7',  icon: '🏅', name: '一周勇士',   desc: '戒烟满7天',     condition: (e) => e >= 86400 * 7 },
  { id: 'd30', icon: '🏆', name: '月度英雄',   desc: '戒烟满30天',    condition: (e) => e >= 86400 * 30 },
  { id: 's7',  icon: '📅', name: '连续七天',   desc: '连续打卡7天',   condition: (_, s) => s >= 7 },
  { id: 's30', icon: '💎', name: '钻石毅力',   desc: '连续打卡30天',  condition: (_, s) => s >= 30 },
]

export default function AchievementPreview({ elapsed,streak,onViewAll }:{elapsed:number,streak:number,onViewAll:()=>void}) {

  const results = useMemo(()=>ACHIEVEMENTS.map((a)=>({
    ...a,
    unlocked: a.condition(elapsed,streak)
  })),[elapsed,streak])

  const unlockedCount = results.filter((a)=>a.unlocked).length


  return (
      <View className='bg-white rounded-2xl shadow-md p-4'>
        {/*头部*/}
        <View className='flex items-center justify-between mb-1'>
          <Text className='font-bold text-sm'>🏆 我的成就</Text>
          <Text className='text-xs text-emerald-500 font-medium' onClick={onViewAll}>查看全部 →</Text>
        </View>
        {/*横向滚动*/}
        <ScrollView scrollX className='py-1' style={{whiteSpace:'nowrap'}}>
          <View className='flex gap-3' style={{display:'inline-flex'}}>
            {results.map((ach)=>(
              <AchievementBadge key={ach.id} icon={ach.icon} name={ach.name} unlocked={ach.unlocked} />
            ))}
          </View>
        </ScrollView>
        <p className='text-xs text-gray-400 mt-2 text-center'>
          已解锁 {unlockedCount}/{results.length}
        </p>
      </View>
  )
}
