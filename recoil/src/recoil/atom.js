import { atom } from 'recoil'

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
})

const textState = atom({
  key: 'textState',
  default: '',
})

export { fontSizeState, textState }
