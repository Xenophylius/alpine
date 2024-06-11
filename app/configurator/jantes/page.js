'use client'
import { useAppSelector } from "@/lib/hook";
import Carousel from "@/app/components/Carousel";
import Color from "@/app/components/Color";

export default function Jantes() {

    const colorsImg = useAppSelector((state) => state.counter.jantesImg)

    return (
    <div className="text-center ">
            <Carousel type='jantes'/>  
            <Color arrayItem={colorsImg} type='jantes'/>
    </div>
  );
  }