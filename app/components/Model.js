'use client'
import { useAppSelector, useAppDispatch } from '@/lib/hook'
import { pushName } from '@/lib/slice'
import { useRouter } from 'next/navigation'

const Model = (props) => {

    const modelBase = useAppSelector(state => state.counter.modelBase)
    const dispatch = useAppDispatch()
    const router = useRouter()
    let model = ''

    if (props.model === 'pure') {
        model = modelBase.find((element) => element.name === 'pure')
    } else if (props.model === 'legende') {
        model = modelBase.find((element) => element.name === 'legende')
    }

    const modelChoice = () => {
        dispatch(pushName({name: model.name}))
        router.push('/configurator/colors')
    }

  return (
    <div className="card" style={{width: 18 + 'rem' }}>
        <img src={model.img} className="card-img-top" alt={model.name} />
        <div className="card-body">
            <h5 className="card-title">{model.name.toUpperCase()}</h5>
            <p className="card-text">{model.description}</p>
            <p className='fst-italic'>A partir de {model.price} €</p>
            <button className="btn btn-primary" onClick={() => modelChoice()}>CONFIGURER</button>
        </div>
    </div>
  )
}

export default Model