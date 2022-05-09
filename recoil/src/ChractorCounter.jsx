import {atom, useRecoilState, selector, useRecoilValue}from 'recoil'

function ChracterCounter(){
    return (
        <div>
            <TextInput/>
            <CharacterCount/>
        </div>
    )
}

const textState = atom({
    key: 'textState',
    default: ''
})

function TextInput(){
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

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }

export default ChracterCounter