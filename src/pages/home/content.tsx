import { View } from '@tarojs/components'
import './content.scss'
import TimerCard from "./components/TimerCard";
import StatsGrid from "./components/statsgrid/StatsGrid";
import MilestoneCard from "./components/MilestoneCard";
import AchievementPreview from "./components/AchievementPreview";

export default function HomeContent() {
  const handleViewAll = ()=>{}
  return (
    <View className='page-index'>
        {/*<h1 className='text-2xl font-bold text-center text-emerald-500 mb-4'>🌿清风</h1>*/}
        <div className='flex flex-col gap-4'>
          <TimerCard />
          <StatsGrid />
          <MilestoneCard elapsed={1000000} />
          <AchievementPreview
            elapsed={1000000}
            streak={1000}
            onViewAll={handleViewAll}
          />
        </div>
    </View>
  )
}
