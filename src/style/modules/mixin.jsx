let mixin = {
  whichTransitionEvent: () => {
    let t, el = document.createElement('fakeElement')

    var transitions = {
      'transition'      : 'transitionend',
      'OTransition'     : 'oTransitionEnd',
      'MozTransition'   : 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t]
      }
    }
  },
  whichAnimationEvent: () => {
    let t, el = document.createElement('fakeElement')

    var animation = {
      'animation'      : 'animationend',
      'oanimation'     : 'oanimationend',
      'mozAnimation'   : 'mozAnimationEnd',
      'WebkitAnimation': 'webkitAnimationEnd',
      'MSAnimation'    : 'MSAnimationEnd'
    }

    for (t in animation){
      if (el.style[t] !== undefined){
        return animation[t]
      }
    }
  },
  scrollTo: (node, time) => {
    let interval = 10,
      count = time / interval,
      scrollInterval = setInterval(() => {
        let scrollIndex = node.getBoundingClientRect().top / count // ease function
        window.scrollBy(0, scrollIndex)
        if (1 >= count--) {
          clearInterval(scrollInterval) // scroll end
        }
      }, interval)
  },
  rippleEffect: (node) => {
    node.addEventListener('click', () => {
      node.classList.add('ripple')
    })

    node.addEventListener(mixin.whichTransitionEvent(), () => {
      node.classList.remove('ripple')
    })
  },
  padding: (origin, pad, num) => {
    num -= String(origin).length
    return Array(num).fill(pad).join('') + String(origin)
  },
  title: (title) => {
    document.title = `${title} | CHAN Kin Yeung - Fullstack Developer`
  }
}

export default mixin
