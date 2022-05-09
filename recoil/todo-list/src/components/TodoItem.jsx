import { useRecoilState } from "recoil"
import {todoListState} from "../recoil"

export default function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const idx = todoList.findIndex(listItem=>listItem===item)

    const editItemText = ({currentTarget: {value}}) => {
        const newList = replaceItemAtIndex(todoList, idx, {
            ...item,
            text: value
        } )
        setTodoList(newList)
    }

    const toggleItemCompletion = ()=>{
        const newList = replaceItemAtIndex(todoList, idx, {
            ...item,
            isComplete: !item.isComplete
        } )

        setTodoList(newList)
    }

    const deleteItem = ()=>{
        const newList = removeItemAtIndex(todoList, idx)
        setTodoList(newList)
    }


    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion}/>
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)]
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }