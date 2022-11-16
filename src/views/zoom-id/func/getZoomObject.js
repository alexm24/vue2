import { consoleLog } from '@/comp/utils'
import { getFiles } from './'
export const getZoomObject = (i) => {
  try {
    const {
      payload: { object }
    } = JSON.parse(i)
    const email = object.host_email
    const topic = object.topic
    const items = object.recording_files
    const files = getFiles(items)
    return { topic, email, files }
  } catch (e) {
    consoleLog.error(`${e.message} in function ${getZoomObject.name}()`)
    return {}
  }
}
