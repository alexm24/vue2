class logging {
  info(msg) {
    console.log('%c log: %c' + msg, 'color: #cccccc;', 'font-size: 1.1em; color: #b1b1b1;')
  }
  error(msg) {
    console.log('%c log: %c' + msg, 'color: #cccccc;', 'font-size: 1.1em; color: #e30611;')
  }
}
export const consoleLog = new logging()
