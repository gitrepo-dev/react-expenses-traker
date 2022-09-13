// toast: v 1.0.0
let el: any, btn: any

if (!document.querySelector('.toast')) {
  el = document.createElement("div")
  btn = document.createElement("button")
  btn.className = 'toast-close'
}

const toastBody = (type: string, message?: string, position?: string, time?: number) => {
  el.className = `toast ${position || 'top-right'} toast-${type}`
  el.innerText = message || ''
  document.body.appendChild(el).appendChild(btn)
}

const toastProps = (type: string, message?: string, position?: string, time?: number) => {
  let initInvoke: any

  let isToast = document.querySelector('.toast')
  function timeFn(arg?: number) {
    initInvoke = setTimeout(() => {
      isToast = document.querySelector('.toast')
      isToast?.classList.add(`toast-none`)
    }, arg || 0)
  }

  if (!isToast || isToast?.classList?.length === 4) {
    timeFn(2000)
    toastBody(type, message, position, time)
  }

  // on close
  document.querySelector('.toast > .toast-close')?.addEventListener('click', () => {
    // @ts-ignore
    document.querySelector('.toast').classList.add('toast-none')
    clearTimeout(initInvoke)
    timeFn(0)

  })
}


const toast = {
  success: (message?: string, position?: string, time?: number) => {
    toastProps('success', message, position, time)
  },
  error: (message?: string, position?: string, time?: number) => {
    toastProps('error', message, position, time)
  },
  info: (message?: string, position?: string, time?: number) => {
    toastProps('info', message, position, time)
  },
}

export default toast
