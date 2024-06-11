import '@splidejs/react-splide/css/skyblue';
import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { colorChoice, janteChoice, sellerieChoice, equipementChoice } from '@/lib/slice';
import { useRouter } from 'next/navigation'
import activeItem from '../functions/activeItem';
import activeItemEquipement from '../functions/activeItemEquipement';

const Color = (props) => {

  const dispatch = useAppDispatch()
  const model = useAppSelector((state) => state.counter.modelChoice.name)
  const router = useRouter()

  const handleChoice = (c) => {
    dispatch(colorChoice({color: c}))
    activeItem(c)
  }

  const handleJantes = (c) => {
    dispatch(janteChoice({jante: c}))
    activeItem(c)
  }

  const handleSellerie = (c) => {
    dispatch(sellerieChoice({sellerie: c}))
    activeItem(c)
  }

  const handleEquipement = (c) => {
    dispatch(equipementChoice({equipement: c}))
    activeItemEquipement(c)
  }

  const handleClick = (c) => {
    if (props.type === 'colors') {
      handleChoice(c)
    }
    if (props.type === 'jantes') {
      handleJantes(c)
    }
    if (props.type === 'sellerie') {
      handleSellerie(c)
    }
    if (props.type === 'equipement') {
      handleEquipement(c)
    }
  }

  const routeClick = (c) => {
    if (props.type === 'colors') {
      router.push('/configurator/jantes')
    }
    if (props.type === 'jantes') {
      router.push('/configurator/sellerie')
    }
    if (props.type === 'sellerie') {
      router.push('/configurator/equipements')
    }
    if (props.type === 'equipement') {
      router.push('/configurator/accessoires')
    }
  }

  if (props.type === 'jantes' && model === 'legende' || props.type === 'colors') {
    return (
      <div className='bg-dark bg-opacity-75'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('blanc')}/>
          <img src={props.arrayItem[2]} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('bleu')}/>
          <img src={props.arrayItem[3]} id='blackRef' className='color mx-2 p-1 ' onClick={() => handleClick('noir')}/>
          <button className="btn btn-primary col-12" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else if (props.type === 'sellerie') {
    return (
      <div className='bg-dark bg-opacity-75'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('cuir brun')}/>
          <img src={props.arrayItem[2]} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('cuir noir')}/>
          <img src={props.arrayItem[3]} id='blackRef' className='color mx-2 p-1 ' onClick={() => handleClick('perfore')}/>
          <img src={props.arrayItem[4]} id='dinamicaRef' className='color mx-2 p-1 ' onClick={() => handleClick('dinamica')}/>
          
          <button className="btn btn-primary col-12" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else if (props.type === 'equipement') {
    return (
      <div className='bg-dark bg-opacity-75'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='conduite' className='color mx-2 p-1 activeItem equipement' onClick={(e) => handleClick('conduite')}/>
          <img src={props.arrayItem[2]} id='confort' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('confort')}/>
          <img src={props.arrayItem[3]} id='design' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('design')}/>
          <img src={props.arrayItem[4]} id='media-nav' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('media-nav')}/>
          <img src={props.arrayItem[5]} id='perso-ext' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('perso-ext')}/>
          <img src={props.arrayItem[6]} id='perso-int' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('perso-int')}/>
          <img src={props.arrayItem[7]} id='securite' className='color mx-2 p-1 equipement' onClick={(e) => handleClick('securite')}/>
          
          <button className="btn btn-primary col-12" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else {
    return (
      <div className='bg-dark bg-opacity-75'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} ref={whiteRef} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('blanc')}/>
          <img src={props.arrayItem[2]} ref={blueRef} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('bleu')}/>
          <button className="btn btn-primary col-12" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  }
}

export default Color