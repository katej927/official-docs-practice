import { selector } from 'recoil'
import { fontSizeState } from './atom'

const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({ get }) => {
    const fontSize = get(fontSizeState)
    const unit = 'px'

    return `${fontSize}${unit}`
  },
})

export default fontSizeLabelState
