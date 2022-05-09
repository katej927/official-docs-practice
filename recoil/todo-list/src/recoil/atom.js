import { atom } from 'recoil'

const todoListState = atom({
  key: 'todoListState',
  default: [],
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show all',
})

export { todoListState, todoListFilterState }
