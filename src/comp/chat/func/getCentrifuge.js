import Centrifuge from 'centrifuge'

export const getCentrifuge = (token) => {
  // TODO proxy vue
  const centrifuge = new Centrifuge('wss://chat.vp.mts.ru/connection/websocket')

  centrifuge.setToken(token)
  centrifuge.on('connect', function (ctx) {
    console.log('connected', ctx)
  })
  centrifuge.on('disconnect', function (ctx) {
    console.log('disconnected', ctx)
  })
  centrifuge.connect()
  return centrifuge
}
