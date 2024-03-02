import React from "react";


type TasksPropsType = {
    title: string
    tasks: OneTaskPropsType[]
    students: string[]
}

export type OneTaskPropsType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = ({title, tasks, students, ...restProps}: TasksPropsType) => {

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {
                    tasks.map((task: OneTaskPropsType) => {
                        return (
                            <li key={task.taskId}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <ul>
                {
                    students.map((student, index) => {
                        return (
                            <li>
                                <span>{student}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}