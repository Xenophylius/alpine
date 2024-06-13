'use client'
import { useAppSelector, useAppDispatch } from "@/lib/hook";
import Ariane from "@/app/components/Ariane";

export default function Recap() {  

    const recapitulation = useAppSelector((state) => state.counter.modelChoice)
    const pricing = useAppSelector((state) => state.counter.pricing)
    let nameJantes = ''
    if (recapitulation.jante === 'blanc') {
        nameJantes = 'Standard'
    } else if (recapitulation.jante === 'bleu'){
        nameJantes = 'Serac'
    } else if (recapitulation.jante === 'noir'){
        nameJantes = 'legende'
    }


    let model =''
    if (recapitulation.name === 'pure') {
        if (recapitulation.color === 'blanc') {
            model = "../images/model/pure/modele_pure-couleur_blanche-jante_standard (1).jpg"
        } else if (recapitulation.color === 'noir') {
            model = "../images/model/pure/modele_pure-couleur_" + recapitulation.color + "e-jante_standard (1).jpg"
        } else {
            model = "../images/model/pure/modele_pure-couleur_" + recapitulation.color + "-jante_standard (1).jpg"
        }
    } else if (recapitulation.name === 'legende') {
        model = "../images/model/legende/modele_legende-couleur_" + recapitulation.color + "-jante_legende-1.jpg"
    }


    return (
    <div className="text-center text-capitalize mt-5 pt-5 text-light row align-items-center">
        <Ariane />
        <div className="col-6 mt-5">
            <img src={model} className="col-10 rounded-2"/>
        </div>
        <div className="col-6 mt-5">
        <p>Model : {recapitulation.name} </p>
        <p>Couleur  <img src={`../images/color/${recapitulation.color}.jpg`} className="rounded-2 ms-2" style={{width: 50 + 'px'}}/></p>
        <p>Jantes  <img src={`../images/jantes/jante-${nameJantes}.jpg`} className="rounded-2 ms-2" style={{width: 50 + 'px'}}/></p>
        <p>Sellerie : {recapitulation.sellerie}</p>
        <p>Equipements  </p>
        <ul className="list-inline mx-auto">
            {recapitulation.equipement.map((equip, index) => (
                <li key={index} className="col-2 list-inline-item ">
                    <img src={`../images/equipements/${equip}.jpg`} className="rounded-2 mt-2" style={{width: 100 + 'px'}}/>
                    <p>{equip} </p>
                </li>
            ))}
        </ul>
        <p className="">Prix : {pricing} €</p>
        </div>
    </div>
  );
  }