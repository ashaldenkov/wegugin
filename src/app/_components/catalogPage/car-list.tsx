import React from 'react'
import CarCard from "@/app/_components/catalogPage/car-card"


interface CarList {
  data: any;
}

export default async function CarList({data}: CarList) {

  return (
    <div className='w-full max-w-[720px] mx-auto'>
        {
            data.map((car:any) => {
                return <CarCard key={car} carData={car}/>
            })
        }
    </div>
  )
}

