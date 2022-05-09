import { useRecoilState, useRecoilValue } from "recoil"
import {fontSizeState, fontSizeLabelState} from '../recoil'

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState)
    const fontSizeLabel = useRecoilValue(fontSizeLabelState)

    return (
        <>
        <div>Current font sizd: {fontSizeLabel}</div>
        <button onClick={()=>setFontSize(size=>size+1)} style={{fontSize}}>
            Click to Enlarge
        </button>
        </>
    )
}

export default FontButton