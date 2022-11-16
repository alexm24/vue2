export const URL = {
  CDN_LIVE: 'https://cdn.vp.mts.ru/live',
  CDN_ZOOM: 'https://cdn.vp.mts.ru/zoom',
  ISSO_AVATAR: 'https://cdn.vp.mts.ru/aang/v1/avatar'
}

const PREFIX = 'api'
const PREFIX_V1 = 'api/v1'

export const API_URL = {
  BROADCAST: `/${PREFIX}/broadcasts`,
  BROADCAST_V1: `/${PREFIX_V1}/broadcasts`,
  PARTICIPANTS_V1: `/${PREFIX_V1}/participants`,
  LIVE: `/${PREFIX_V1}/live`,
  USER: `/${PREFIX_V1}/admin`,
  IMAGE: `/${PREFIX}/images`,
  FILE: `/${PREFIX}/file`,
  TOKEN: `/${PREFIX_V1}/token`,
  STREAM: `/${PREFIX_V1}/stream`,
  STREAM_CHAT: `/${PREFIX_V1}/stream/chat`,
  MESSAGES: `/${PREFIX_V1}/messages`,
  ZOOM: `/${PREFIX_V1}/zoom`,
  ZOOM_EMAIL: `/${PREFIX_V1}/zoom/email`
}

export const APP_ROUTE = {
  WATCH: 'watch',
  LIVE: 'live',
  BROADCAST: 'broadcast',
  REPORT: 'report',
  STREAM: 'stream',
  STREAM_SETTING: 'stream-setting',
  HELP: 'help',
  ZOOM: 'zoom'
}

export const ROUTE_NAME_BROADCAST = {
  NEW: 'NewBroadcast',
  EDIT: 'EditBroadcast'
}
