import React from 'react'

function StatisticsCard({Icon,Number,Desc}) {
  return (
    <div className='bg-white px-3 py-8 rounded-xl shadow-lg border-b-4 border-b-blue-700 w-[300px]'>
      <div className="flex  gap-3 justify-center items-center ">
        <span className='text-7xl text-blue-700'>{Icon}</span>
        <div className="space-y-1">
          <h1 className='text-3xl text-center font-bold'>{Number}</h1>
          <p className='text-center text-sm'>{Desc}</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard