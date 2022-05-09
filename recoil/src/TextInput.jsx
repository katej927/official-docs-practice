import {atom, useRecoilState, selector, useRecoilValue}from 'recoil'
import textState from './recoil/textState'

export default function TextInput(){
    const [text, setText] = useRecoilState(textState)

    const onChange=(event)=>{
        setText(event.currentTarget.value)
    }

    return(
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br/>
            Echo: {text}
        </div>
    )
}