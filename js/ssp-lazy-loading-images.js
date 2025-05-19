/*1747681556000*/
/** Variavel reservada ao 'sspLazyLoadingImage', armazenando informações que serão carregadas na página */
const _pageImages = []
/** Variável reservada ao 'sspLazyLoadingImage', utilizada no adiantamento de carregamento da imagem conforme scroll */
const _distanceFromViewport = (document.getElementById('ssp-is-mobile') || {}).value ? 100 : 300
/** Variável reservada ao 'sspLazyLoadingImage', utilizada para carregar elementos de imagem */
const _selectorSspLazyLoadingImage = 'ssp-load-lazy-image'

/**
 *  ##### CARREGAMENTO LAZY DE IMAGENS #####
 *  
 *  CARREGAMENTO LAZY DE IMAGENS - sspLazyLoadingImage(...images)
 *  
 *  SEMPRE que for criar o elemento, adicione um 'id'
 *  Opções de como usar:
 *  - Crie uma tag 'img' com o seguinte atributo: 'ssp-load-lazy-image'
 *  - Crie uma tag 'img' no HTML e no JS envie objetos para função 'sspLazyLoadingImage' com do seguinte formato:
 *  - --> {id: string, url: string}
 *  - Elementos que não forem 'img'
 */
const sspLazyLoadingImage = (function(){
  let _slickLists
  
  window.addEventListener('scroll', (event) => _loadLazyImage(_pageImages.filter(img => !img.printed), event))
  window.addEventListener('touchmove', (event) => _loadLazyImage(_pageImages.filter(img => !img.printed), event))  
  window.addEventListener('load', () => {
    const htmlLazyImages = Array.from(document.querySelectorAll('[' + _selectorSspLazyLoadingImage + ']'))
    const images = htmlLazyImages.map(img => ({
      id: img.id,
      url: img.getAttribute(_selectorSspLazyLoadingImage),
      element: img
    }))

    _slickLists = Array.from(document.querySelectorAll('.slick-list')) || []

    _sspLazyLoadingImage(...images)
  });

  function _sspLazyLoadingImage(...images) {    
    images = _getElementFromImages(images)
    images = _getUrlFromImages(images)

    _loadError(images)

    images = images.filter(img => img.url) || []
    _pageImages.push(...images)

    _loadLazyImage(_pageImages.filter(img => !img.printed))
  }

  function _loadError(images) {
    images.forEach(img => {
      if(!img.url) {
        console.error('ERRO', 'loadError', 'sspLazyLoadingImage', 'IMAGEM deve possuir URL no "' + _selectorSspLazyLoadingImage + '":', img)
        return
      }

      if(img.element) {
        const tagName = img.element.tagName
        if ((tagName || '').toLowerCase() != 'img') {
          console.error('ERRO', 'loadError', 'sspLazyLoadingImage', 'IMAGEM deve utilizar tag "img":', img)
          return
        }
      } else {
        if(!img.id) {
          console.error('ERRO', 'loadError', 'sspLazyLoadingImage', 'IMAGEM sem ID e/ou sem "' + _selectorSspLazyLoadingImage + '": ', img)
          return
        }
      }
    })
  }

  function _getElementFromImages(images) {
    images.filter(img => !img.element)
    .forEach(img => img.element = document.getElementById(img.id))

    return images
  }

  function _getUrlFromImages(images) {
    images.filter(img => !img.url)
    .filter(img => img.id)
    .forEach(img => img.url = document.getElementById(img.id).getAttribute(_selectorSspLazyLoadingImage))

    return images
  }

  function _loadLazyImage(images, event) {
    if(!images || !images.length) return
    
    const scrollPositionY = (event && event.touches && event.touches.length) ? event.touches[0].clientY : window.scrollY
    const currentScrollPosition = scrollPositionY + document.documentElement.clientHeight + _distanceFromViewport
    images = images.filter(img => !img.printed && currentScrollPosition > img.element.getBoundingClientRect().top)

    if(!images || !images.length) return

    images = images.sort((a, b) => {
      if(a.element.getBoundingClientRect().top < b.element.getBoundingClientRect().top) return -1
      if(a.element.getBoundingClientRect().top > b.element.getBoundingClientRect().top) return 1
      return 0
    })

    const next = images.shift()    
    
    const isSlickImage = !!(next && next.element) ? _hasSlickChildImage(next.element) : false

    next.element.src = next.url
    next.element.removeAttribute(_selectorSspLazyLoadingImage)
    next.printed = true
    
    next.element.addEventListener('load', () => _loadLazyImage(images, event))
    
    if(isSlickImage)
      _loadLazyImage(images, event)
  }

  function _hasSlickChildImage(el) {
    let has

    if(!_slickLists || !_slickLists.length)
      _slickLists = Array.from(document.querySelectorAll('.slick-list')) || []

    _slickLists.forEach(slickList => {
      const list = Array.from(slickList.querySelectorAll('[ssp-load-lazy-image]')).filter(img => img == el)
      has = has || !!list.length
    })

    return has
  }

  return _sspLazyLoadingImage
})()