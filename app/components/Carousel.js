'use client'
import { useAppSelector, useAppDispatch } from '@/lib/hook'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { janteChoice, sellerieChoice } from '@/lib/slice';

const Carousel = (props) => {

    const modelChoice = useAppSelector(state => state.counter.modelChoice)
    const dispatch = useAppDispatch()
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

  return (
    <Splide aria-label="My Favorite Images" className='position-relative' options={ {
      autoplay : true,
      type   : 'loop'
    } }>
      {pureColor.map((color, index) => (
          <SplideSlide key={index} className='position-relative'>
            <img src={color} alt={`Image ${index}`} className='imgCarousel' />
            <p className='position-absolute text-light top-0 start-50 translate-middle mt-5'>{color}</p>
          </SplideSlide>
      ))}
    </Splide>
  )
}

export default Carousel