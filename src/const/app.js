export const nameApp = 'Video Platform'

export const logoMap = {
  production: {
    value: nameApp
  },
  staging: {
    label: 'stage',
    value: nameApp,
    color: 'var(--color-error)'
  },
  develop: {
    label: 'dev',
    value: nameApp,
    color: 'var(--color-link)'
  },
  local: {
    label: 'local',
    value: nameApp,
    color: 'var(--color-text-tertiary)'
  }
}

export const LIFE_CYCLE = Object.freeze({
  FUTURE: Symbol('future'),
  PAST: Symbol('past')
})
