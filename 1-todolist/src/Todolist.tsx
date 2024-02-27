import React from "react";
import {Button} from "./components/Button";
import {Task} from "./Tasks";


type TodolistProps = {
    truck: string
    truck2?: string,
    truck3?: string,
    // tasks:Array<Task>
    tasks: TaskProps[]
}

export type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistProps) => {
    const {
        truck,
        truck2,
        tasks,
        ...restProps
    } = props

    const mappedTasks = tasks.length
        ? tasks.map((task, index) => {
            return (
                // <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
                <Task isDone={task.isDone} id={task.id} title={task.title}/>
            )
        })
        : <div>тасок нет</div>

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                {/*<button>+</button>*/}
                <Button name={'+'}/>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
            </div>
        </div>
    )
}

