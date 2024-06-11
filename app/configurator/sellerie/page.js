'use client'
import { useAppSelector } from "@/lib/hook";
import Carousel from "@/app/components/Carousel";
import Color from "@/app/components/Color";

export default function Sellerie() {

    const sellerieImg = useAppSelector((state) => state.counter.sellerieImg)

    return (
    <div className="text-center ">
            <Carousel type='sellerie'/>  
            <Color arrayItem={sellerieImg} type='sellerie'/>
    </div>
  );
  }