import '@splidejs/react-splide/css/skyblue';
import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { colorChoice, janteChoice, sellerieChoice, equipementChoice, countEquipement, calculPricing, pushAriane } from '@/lib/slice';
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
      dispatch(pushAriane({link: '/configurator/colors', title: 'Couleur'}))
      router.push('/configurator/jantes')
    }
    if (props.type === 'jantes') {
      dispatch(pushAriane({link: '/configurator/jantes', title: 'Jante'}))
      router.push('/configurator/sellerie')
    }
    if (props.type === 'sellerie') {
      dispatch(pushAriane({link: '/configurator/sellerie', title: 'Sellerie'}))
      router.push('/configurator/equipements')
    }
    if (props.type === 'equipement') {
      dispatch(pushAriane({link: '/configurator/equipements', title: 'Equipement'}))
      dispatch(pushAriane({link: '/configurator/recap', title: 'Récapitulatif'}))
      dispatch(countEquipement())
      dispatch(calculPricing())
      router.push('/configurator/recap')
    }
    
  }

  if (props.type === 'jantes' && model === 'legende' || props.type === 'colors') {
    return (
      <div className='pt-4'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('blanc')}/>
          <img src={props.arrayItem[2]} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('bleu')}/>
          <img src={props.arrayItem[3]} id='blackRef' className='color mx-2 p-1 ' onClick={() => handleClick('noir')}/>
          <button className="btn btn-primary col-12 position-fixed bottom-0 start-0" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else if (props.type === 'sellerie') {
    return (
      <div className='pt-4'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('cuir brun')}/>
          <img src={props.arrayItem[2]} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('cuir noir')}/>
          <img src={props.arrayItem[3]} id='blackRef' className='color mx-2 p-1 ' onClick={() => handleClick('perfore')}/>
          <img src={props.arrayItem[4]} id='dinamicaRef' className='color mx-2 p-1 ' onClick={() => handleClick('dinamica')}/>
          
          <button className="btn btn-primary col-12 position-fixed bottom-0 start-0" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else if (props.type === 'equipement') {
    return (
      <div className='pt-4'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <div className='row justify-content-center'>
            <div className='col -1 position-relative ' onClick={(e) => handleClick('conduite')}>
              <img src={props.arrayItem[1]} id='conduite' className='color mx-2 p-1 activeItem equipement position-relative' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>CONDUITE</p>
            </div>
            <div className='col -1 position-relative' onClick={(e) => handleClick('confort')}>
              <img src={props.arrayItem[2]} id='confort' className='color mx-2 p-1 equipement ' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>CONFORT</p>
            </div>
            <div className='col -1 position-relative' onClick={(e) => handleClick('design')}>
              <img src={props.arrayItem[3]} id='design' className='color mx-2 p-1 equipement' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>DESIGN</p>
            </div>
            <div className='col -1 position-relative '  onClick={(e) => handleClick('media-nav')}>
              <img src={props.arrayItem[4]} id='media-nav' className='color mx-2 p-1 equipement'/>
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>MEDIA</p>
            </div>
            <div className='col -1 position-relative' onClick={(e) => handleClick('perso-ext')}>
              <img src={props.arrayItem[5]} id='perso-ext' className='color mx-2 p-1 equipement' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>EXTERIEUR</p>
            </div>
            <div className='col -1 position-relative' onClick={(e) => handleClick('perso-int')}>
              <img src={props.arrayItem[6]} id='perso-int' className='color mx-2 p-1 equipement' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>INERIEUR</p>
            </div>
            <div className='col -1 position-relative' onClick={(e) => handleClick('securite')}>
              <img src={props.arrayItem[7]} id='securite' className='color mx-2 p-1 equipement' />
              <p className='position-absolute bottom-0 start-50 translate-middle m-0 text-light fw-bold'>SECURITE</p>
            </div>
          </div>
          <button className="btn btn-primary col-12 position-fixed bottom-0 start-0" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  } else {
    return (
      <div className='pt-4'>
          <h3 className='text-light '>{props.arrayItem[0]}</h3>
          <img src={props.arrayItem[1]} id='whiteRef' className='color mx-2 p-1 activeItem' onClick={() => handleClick('blanc')}/>
          <img src={props.arrayItem[2]} id='blueRef' className='color mx-2 p-1' onClick={() => handleClick('bleu')}/>
          <button className="btn btn-primary col-12 position-fixed bottom-0 start-0" onClick={() => routeClick()}>SUIVANT</button>
      </div>
    )
  }
}

export default Color