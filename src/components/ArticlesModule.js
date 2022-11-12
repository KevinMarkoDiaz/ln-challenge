import React from 'react'
import { products } from '../mock/products'
import { Card } from './Card'

export const ArticlesModule = () => {
    return (
        <div className='module__container'>
            <h4 className='module__title'>Opinión</h4>
            <div className='module__layout'>
                <div className="module__layout--left">
                    <Card render='regular' data={products[0]} />

                </div>
                <div className="module__layout--centerup">
                    <Card render='author' data={products[0]} />

                </div>
                <div className="module__layout--centerdown">

                    <Card render='author' data={products[0]} />
                </div>
                <div className="module__layout--right">
                    <Card render='cinema' data={products[0]} />

                </div>
            </div>
            <div className='module__footer'>
                <p className='module__footer--negrilla'>editoriales</p>
                <span/>
                <p>cuando se dieron cuenta</p>
                <span/>
                <p>cuando se dieron cuenta</p>
            </div>
        </div>
    )
}
