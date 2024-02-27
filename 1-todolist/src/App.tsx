import React, {useState} from 'react';
import './App.css';
import {TaskProps, Todolist} from "./Todolist";


function App() {
    const truckJan1 = 'What to learn-1'
    const truckJan2 = 'What to learn-2'
    const truckFeb1 = 'What to learn-3'
    // const trucks=['What to learn-1','What to learn-2','What to learn-3']
    const trucks = {
        truckJan1: 'What to learn-1',
        truckJan2: 'What to learn-2',
        truckFeb1: 'What to learn-3'
    }

    const tasks1:TaskProps[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},//0
        {id: 2, title: 'JS', isDone: true},//1
        {id: 3, title: 'ReactJS', isDone: false},//2
    ]


    const tasks2:TaskProps[] = [
        // {id: 1, title: 'Hello world', isDone: true},
        // {id: 2, title: 'I am Happy', isDone: false},
        // {id: 3, title: 'Yo', isDone: false},
        // {id: 4, title: 'Yo222222', isDone: false},
    ]
    const arr=[1,2,3]

    return (
        <div className="App">
            <Todolist truck={trucks.truckJan1} truck2={trucks.truckJan2} tasks={tasks1}/>
            <Todolist truck={trucks.truckFeb1} tasks={tasks2}/>
        </div>
    );
}

export default App;
