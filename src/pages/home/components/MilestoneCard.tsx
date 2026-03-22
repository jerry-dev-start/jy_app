import {View} from "@tarojs/components";
import {useMemo} from "react";

const MILESTONES = [
  { name: '20分钟 — 心率恢复正常',           seconds: 1200 },
  { name: '8小时 — 血氧水平恢复正常',        seconds: 28800 },
  { name: '24小时 — 心脏病发作风险开始降低',  seconds: 86400 },
  { name: '48小时 — 味觉嗅觉开始恢复',       seconds: 172800 },
  { name: '72小时 — 呼吸变得更轻松',         seconds: 259200 },
  { name: '2周 — 肺功能开始改善',            seconds: 1209600 },
  { name: '1个月 — 咳嗽和气短减少',          seconds: 2592000 },
  { name: '3个月 — 肺功能提升30%',           seconds: 7776000 },
  { name: '1年 — 心脏病风险降低一半',        seconds: 31536000 },
]

export default function MilestoneCard({elapsed}:{elapsed:number}) {

  const milestone = useMemo(()=>{
    const next = MILESTONES.find((m)=>m.seconds > elapsed)
    if (!next){
      return {name:'所有里程碑已达成！',progress:100}
    }
    const prev = MILESTONES[MILESTONES.indexOf(next) - 1]
    const start = prev ? prev.seconds : 0
    const progress = Math.min(
      100,
      Math.round(((elapsed - start) / (next.seconds - start)) * 100)
    )
    return { name: next.name, progress }
  },[elapsed])

  return (
    <View className='bg-white rounded-2xl shadow-md p-4'>
      <p className='text-gray-400 text-xs mb-2'>下一个里程碑</p>
      <p className='font-bold text-sm mb-2'>{milestone.name}</p>
      <View className='w-full bg-gray-200 rounded-full h-2.5'>
        <View className='bg-emerald-500 h-2.5 rounded-full transition-all duration-500'
          style={{width: `${milestone.progress}%`}}
        />
      </View>
    </View>
  )
}
