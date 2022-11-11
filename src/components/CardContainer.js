import React from 'react'
import { selectRender } from '../helpers/herper'
import { products } from '../mock/products'
import { Card } from './Card'

export const CardContainer = () => {
  return (
    <div className='card__container'>
         {
        products.map((element, i) => <Card key={i} data={element} render={selectRender()} />)
      }
    </div>
  )
}
