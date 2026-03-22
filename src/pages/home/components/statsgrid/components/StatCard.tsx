import {View} from "@tarojs/components";


interface StatCardProps {
  title: string;
  value: number | string;
  trend?: 'up' | 'down'; // 问号表示可选参数
}

export default function StatCard(props:StatCardProps) {
  return (
    <View className='bg-white rounded-2xl shadow-md p-4 text-center'>
        <p className='text-gray-400 text-xs mb-1'>{props.title}</p>
        <p className='text-2xl font-bold text-emerald-500'>{ props.value }</p>
    </View>
  )
}
