function activeItem(c) {
    if (c === 'bleu' || c === 'cuir noir') {
        document.querySelector('#blueRef').classList.add('activeItem')
        document.querySelector('#whiteRef').classList.remove('activeItem')
        if (document.querySelector('#blackRef')) {
        document.querySelector('#blackRef').classList.remove('activeItem')
        }
        if (document.querySelector('#dinamicaRef')) {
          document.querySelector('#dinamicaRef').classList.remove('activeItem')
        }
      }
      if (c === 'noir' || c === 'perfore') {
        document.querySelector('#blueRef').classList.remove('activeItem')
        document.querySelector('#whiteRef').classList.remove('activeItem')
        if (document.querySelector('#blackRef')) {
        document.querySelector('#blackRef').classList.add('activeItem')
        }
        if (document.querySelector('#dinamicaRef')) {
          document.querySelector('#dinamicaRef').classList.remove('activeItem')
        }
      }
      if (c === 'blanc' || c === 'cuir brun') {
        document.querySelector('#blueRef').classList.remove('activeItem')
        document.querySelector('#whiteRef').classList.add('activeItem')
        if (document.querySelector('#blackRef')) {
        document.querySelector('#blackRef').classList.remove('activeItem')
        }
        if (document.querySelector('#dinamicaRef')) {
          document.querySelector('#dinamicaRef').classList.remove('activeItem')
        }
      }

      if (c === 'dinamica') {
        document.querySelector('#blueRef').classList.remove('activeItem')
        document.querySelector('#whiteRef').classList.remove('activeItem')
        if (document.querySelector('#blackRef')) {
        document.querySelector('#blackRef').classList.remove('activeItem')
        }
        document.querySelector('#dinamicaRef').classList.add('activeItem')
      }

      
}
  
export default activeItem