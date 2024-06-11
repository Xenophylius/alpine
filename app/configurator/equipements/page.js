'use client'
import { useAppSelector } from "@/lib/hook";
import Carousel from "@/app/components/Carousel";
import Color from "@/app/components/Color";

export default function Equipements() {

    const equipementImg = useAppSelector((state) => state.counter.equipementImg)

    return (
    <div className="text-center ">
            <Carousel type='equipement'/>  
            <Color arrayItem={equipementImg} type='equipement'/>
    </div>
  );
  }