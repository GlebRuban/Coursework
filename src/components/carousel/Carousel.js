import { Children, useEffect, useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import '../carousel/carousel.css'
import { cloneElement } from 'react'

const page_width = 891

export const Carousel = ({children}) =>  {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const handleLeftArrow = () => {
    setOffset((currentOffet) => {
      const newOffset = currentOffet + page_width
      return Math.min(newOffset,0)
    })
  }

  const handleRightArrow = () => {
    setOffset((currentOffet) => {
      const newOffset = currentOffet - page_width
      const maxOffset = -(page_width * (pages.length - 1))
      console.log(newOffset);
      return Math.max(newOffset,maxOffset)
    })
  }


  useEffect(() => {
    setPages(
      Children.map(children,(child) => {
        return cloneElement(child, {
          style:{
            height:'100%',
            minWidth: `${page_width}px`, 
            maxWidth: `${page_width}px`,
          },
        })
      })
    )
  }, [])

  return<>
  <div className='sliderConteiner'>
    <FaChevronLeft className='arrow' onClick={handleLeftArrow}/>
    <div className='windows'>
      <div className='allItems' style={{transform:`transtaleX(${offset}px)`}}>
        {pages}
      </div>
    </div>
    <FaChevronRight className='arrow' onClick={handleRightArrow}/>
  </div>
  </>
}


