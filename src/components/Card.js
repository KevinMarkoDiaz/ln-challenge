import React from 'react'

export const Card = ({ render, data }) => {
  const { imagen, titulo, bajada, autor } = data;  
  return (
    <div className={`card--${render}`}>
      <div className={`card__image--${render}`}>
        <img src={imagen} alt={''} />
      </div>
      <h3 className={`card__title--${render}`}><span>Lead. </span>{titulo}</h3>
      <p className={`card__description--${render}`}>{bajada}</p>
      <p className={`card__author--${render}`}>{autor}</p>
      <div />
    </div>
  )
};
