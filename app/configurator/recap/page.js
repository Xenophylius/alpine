'use client'
import { useAppSelector, useAppDispatch } from "@/lib/hook";
import Carousel from "@/app/components/Carousel";
import Ariane from "@/app/components/Ariane";
import { calculPricing } from "@/lib/slice";

export default function Recap() {

    const dispatch = useAppDispatch()
    

    const recap = useAppSelector((state) => state.counter.modelChoice)
    const pricing = useAppSelector((state) => state.counter.pricing)
    let nameJantes = ''
    if (recap.jante === 'blanc') {
        nameJantes = 'Standard'
    } else if (recap.jante === 'bleu'){
        nameJantes = 'Serac'
    } else if (recap.jante === 'noir'){
        nameJantes = 'Legende'
    }


    let model =''
    if (recap.name === 'pure') {
        if (recap.color === 'blanc') {
            model = "../images/model/pure/modele_pure-couleur_blanche-jante_standard (1).jpg"
        } else if (recap.color === 'noir') {
            model = "../images/model/pure/modele_pure-couleur_" + recap.color + "e-jante_standard (1).jpg"
        } else {
            model = "../images/model/pure/modele_pure-couleur_" + recap.color + "-jante_standard (1).jpg"
        }
    } else if (recap.name === 'legende') {
        model = "../images/model/legende/modele_legende-couleur_" + recap.color + "-jante_legende-1.jpg"
    }


    return (
    <div className="text-center text-capitalize mt-5 pt-5 text-light row align-items-center">
        <Ariane />
        <div className="col-6 mt-5">
            <img src={model} className="col-12 rounded-circle"/>
        </div>
        <div className="col-6 mt-5">
        <p>Model : {recap.name} </p>
        <p>Couleur  <img src={`../images/color/${recap.color}.jpg`} className="rounded-2 ms-2" style={{width: 50 + 'px'}}/></p>
        <p>Jantes  <img src={`../images/jantes/jante-${nameJantes}.jpg`} className="rounded-2 ms-2" style={{width: 50 + 'px'}}/></p>
        <p>Sellerie : {recap.sellerie}</p>
        <p>Equipements  </p>
        <ul className="list-inline mx-auto">
            {recap.equipement.map((equipement, index) => (
                <li key={index} className="col-2 list-inline-item ">
                    <img src={`../images/equipements/${equipement}.jpg`} className="rounded-2 mt-2" style={{width: 100 + 'px'}}/>
                    <p>{equipement} </p>
                </li>
            ))}
        </ul>
        <p className="">Prix : {pricing} €</p>
        </div>
    </div>
  );
  }