# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# La Nacion challenge

## Componente Card

Este componente recibe por parámetro los datos del artículo a renderizar, así como el tipo del mismo,
dependiendo del tipo la Card recibe distintos estilos haciéndola dinámica.

` <Card data={element}  render={selectRender()} />)`

### Función selectRender

Esta función me retorna un tipo aleatorio de rénder entre tres opciones.

`selectRender()`

### Salida esperada

    case 1:
        return 'author'         
    case 2:
        return 'regular'         
    case 3:
        return 'cinema'     

