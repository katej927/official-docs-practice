import {useRecoilValue} from 'recoil'
import {filteredTodoListState} from '../recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import TodoListFilters from './TodoListFilter'
import TodoListStats from './TodoListStats'

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState)

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator/>
            {todoList.map(todoItem=><TodoItem key={todoItem.id} item={todoItem}/>)}
        </>
    )
}