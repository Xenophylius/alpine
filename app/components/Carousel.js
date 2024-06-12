'use client'
import { useAppSelector, useAppDispatch } from '@/lib/hook'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { janteChoice, sellerieChoice, equipementChoice } from '@/lib/slice';
import { useRouter } from 'next/navigation';
import Ariane from './Ariane';

const Carousel = (props) => {

    const modelChoice = useAppSelector(state => state.counter.modelChoice)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const modelChoiceColor = useAppSelector(state => state.counter.modelChoice.color)

    let pureColor = []

    if (modelChoice.name === 'pure') {
      pureColor = useAppSelector(state => state.counter.pureColor)
    } else if (modelChoice.name === 'legende') {
      pureColor = useAppSelector(state => state.counter.legendeColor)
    }

    if (props.type === 'jantes' && modelChoice.jante === 'standard') {
      dispatch(janteChoice({jante: 'blanc'}))
    }
    if (props.type === 'sellerie' && modelChoice.sellerie === '') {
      dispatch(sellerieChoice({sellerie: 'cuir brun'}))
    }

    if (props.type === 'equipement'  && modelChoice.equipement === '') {
      dispatch(equipementChoice({equipement: 'conduite'}))
    }
    let title = ''
    

  return (
    <>
    <Ariane />
    <Splide aria-label="My Favorite Images" className='position-relative' options={ {
      autoplay : true,
      type   : 'loop'
    } }>
      {pureColor.map((color, index) => (
        title = color.split('/'),
        title = title[4].split('.'),
        title = title[0].split('-'),
        title = title.join(' '),
          <SplideSlide key={index} className='position-relative'>
            <img src={color} alt={`Image ${index}`} className='imgCarousel' />
            <h2 className='position-absolute text-light bottom-0 start-50 translate-middle mt-5 fw-bold'>{title.toUpperCase()}</h2>
          </SplideSlide>
      ))}
    </Splide>
    </>
  )
}

export default Carousel