import {useRecoilState} from 'recoil'
import { fontSizeState } from "../recoil/atom";

function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState)
    return(
        <div onClick={()=>setFontSize(size => size +1)} style={{fontSize}}>this text will increase every time you click</div>
    )
}

export default Text