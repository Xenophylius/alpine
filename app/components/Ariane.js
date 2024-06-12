import React from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hook'

const Ariane = () => {

    const router = useRouter()
    const ariane = useAppSelector((state) => state.counter.ariane)
    const navStyle = (link) => {
        router.push(link)
    }
    let styleNav = "--bs-breadcrumb-divider: '>'"

  return (
    <nav style={{styleNav}} aria-label="breadcrumb">
      <ol class="breadcrumb">
        {ariane.map((link, index) => (
            <li class="breadcrumb-item"><a href="#" onClick={() => navStyle(link.link)}>{link.title}</a></li>
        ))}
      </ol>
    </nav>
  )
}

export default Ariane