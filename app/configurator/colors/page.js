'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import Carousel from "@/app/components/Carousel";
import Color from "@/app/components/Color";

export default function Colors() {

    const colorsImg = useAppSelector((state) => state.counter.colorsImg)
    const dispatch = useAppDispatch()

    return (
    <div className="text-center">
            <Carousel/>  
            <Color arrayItem={colorsImg} type='colors'/>
    </div>
  );
  }