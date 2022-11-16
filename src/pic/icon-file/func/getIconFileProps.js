import { EXT, COLOR } from './const'
export const getIconFileProps = (mime) => {
  switch (mime) {
    case EXT.PNG:
      return { text: 'png', color: COLOR.IMAGE }
    case EXT.JPG:
      return { text: 'jpg', color: COLOR.IMAGE }
    case EXT.TIFF:
      return { text: 'tif', color: COLOR.IMAGE }
    case EXT.PSD:
      return { text: 'psd', color: COLOR.IMAGE }
    case EXT.PSD1:
      return { text: 'psd', color: COLOR.IMAGE }
    case EXT.PSD2:
      return { text: 'psd', color: COLOR.IMAGE }
    case EXT.BMP:
      return { text: 'bmp', color: COLOR.IMAGE }
    case EXT.GIF:
      return { text: 'gif', color: COLOR.IMAGE }
    case EXT.ICO:
      return { text: 'ico', color: COLOR.IMAGE }
    case EXT.SVG:
      return { text: 'svg', color: COLOR.IMAGE }
    case EXT.DOC:
      return { text: 'doc', color: COLOR.DOCUMENT }
    case EXT.DOCX:
      return { text: 'docx', color: COLOR.DOCUMENT }
    case EXT.RTF:
      return { text: 'rtf', color: COLOR.DOCUMENT }
    case EXT.TXT:
      return { text: 'txt', color: COLOR.DOCUMENT }
    case EXT.XLS:
      return { text: 'xls', color: COLOR.TABLE }
    case EXT.XLSX:
      return { text: 'xlsx', color: COLOR.TABLE }
    case EXT.CSV:
      return { text: 'csv', color: COLOR.TABLE }
    case EXT.PPT:
      return { text: 'ppt', color: COLOR.PRESENT }
    case EXT.PPTX:
      return { text: 'pptx', color: COLOR.PRESENT }
    case EXT.PDF:
      return { text: 'pdf', color: COLOR.PRESENT }
    case EXT.XML:
      return { text: 'xml', color: COLOR.MARKUP }
    case EXT.XML1:
      return { text: 'xml', color: COLOR.MARKUP }
    case EXT.CSS:
      return { text: 'css', color: COLOR.MARKUP }
    case EXT.P7S:
      return { text: 'p7s', color: COLOR.ARCHIV }
    case EXT.ZIP:
      return { text: 'zip', color: COLOR.ARCHIV }
    case EXT.GZ:
      return { text: 'gz', color: COLOR.ARCHIV }
    case EXT.JAR:
      return { text: 'jar', color: COLOR.ARCHIV }
    case EXT.BZ:
      return { text: 'bz', color: COLOR.ARCHIV }
    case EXT.BZ2:
      return { text: 'bz2', color: COLOR.ARCHIV }
    case EXT.RAR:
      return { text: 'rar', color: COLOR.ARCHIV }
    case EXT.TAR:
      return { text: 'tar', color: COLOR.ARCHIV }
    case EXT.a7z:
      return { text: '7z', color: COLOR.ARCHIV }
    case EXT.AVI:
      return { text: 'avi', color: COLOR.VIDEO }
    case EXT.MPEG:
      return { text: 'mpeg', color: COLOR.VIDEO }
    case EXT.MP4:
      return { text: 'mp4', color: COLOR.VIDEO }
    case EXT.MP3:
      return { text: 'mp3', color: COLOR.AUDIO }
    case EXT.WAV:
      return { text: 'wav', color: COLOR.AUDIO }
    case EXT.MP4_ZOOM:
      return { text: 'mp4', color: COLOR.VIDEO }
    case EXT.CHAT_ZOOM:
      return { text: 'chat', color: COLOR.DOCUMENT }
    case EXT.M4A_ZOOM:
      return { text: 'M4A', color: COLOR.AUDIO }
    default:
      if (mime && mime.length > 0) return { text: 'xxx', color: COLOR.XXX }
      else return { text: '?', color: COLOR.UNKNOWN }
  }
}
