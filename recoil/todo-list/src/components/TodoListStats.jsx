import {useRecoilValue} from 'recoil'
import { todoListStatsState } from "../recoil"

export default function TodoListStats(){
    const {totalNum, totalCompletedNum,totalUnCompletedNum,percentCompleted} = useRecoilValue(todoListStatsState)

    const formattedPercentCompleted = Math.round(percentCompleted*100);


    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed: {totalUnCompletedNum}</li>
            <li>Percent completed:{formattedPercentCompleted} </li>
        </ul>
    )
};