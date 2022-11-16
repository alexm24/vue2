let clickOutsideEvent
function bind(el, binding, vnode) {
  clickOutsideEvent = (event) => {
    if (!(el === event.target || el.contains(event.target))) {
      vnode.context[binding.expression](event)
    }
  }
  document.body.addEventListener('click', clickOutsideEvent)
}

function unbind() {
  document.body.removeEventListener('click', clickOutsideEvent)
}

export const clickOutside = { bind, unbind }
