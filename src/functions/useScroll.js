export const unScrolled = () => {
   const body = document.body
   body.style.overflow = 'hidden'
   body.style.paddingRight = '17px'
}

export const isScrolled = () => {
   const body = document.body
   body.removeAttribute('style')
}