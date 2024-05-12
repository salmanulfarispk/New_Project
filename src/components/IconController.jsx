import { Smile } from 'lucide-react'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"


function IconController() {
    const [size,setSize]=useState(280)
    const[rotate,setRotate]=useState(0)
  return (
    <div>
        <div>
            <label>Icon</label>
            <div className='p-3 cursor-pointer bg-gray-200 rounded-md  w-[50px] h-[50px] 
            flex items-center justify-center'>
                <Smile/>
            </div>
            <div className='py-2 '>
                <lable className='py-2 flex justify-between items-center'>Size  <span>{size} px</span></lable>
            <Slider defaultValue={[280]} max={512} step={1}
             onValueChange={(event)=>{
                setSize(event[0])
             }}
            />
            </div>

            <div className='py-2 '>
                <lable className='py-2 flex justify-between items-center'>Rotate <span>{rotate}°</span></lable>
            <Slider defaultValue={[0]} max={360} step={1}
             onValueChange={(event)=>{
                setRotate(event[0])
             }}
            />
            </div>



        </div>
    </div>
  )
}

export default IconController