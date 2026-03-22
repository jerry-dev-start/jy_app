import {View} from "@tarojs/components";
import StatCard from "./components/StatCard";

export default function StatsGrid() {
  return (
    <View className='grid grid-cols-2 gap-3'>
      <StatCard title='省下的钱' value='￥45.98' />
      <StatCard title='少吸的烟' value='36 支' />
      <StatCard title='健康恢复' value='38.4%' />
      <StatCard title='连续打卡' value='0 天' />
    </View>
  )
}
