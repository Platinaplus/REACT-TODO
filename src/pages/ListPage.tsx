import React, { useState, useEffect } from "react"
import { TodoForm } from "../components/ToDoForm"
import { List } from "../components/List"
import { ITodo } from '../interfaces';

export const ListPage: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const completeHandler = (id: number) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(newTodos)
    }

    const removeHandler = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        const shouldRemove = confirm('Are you sure?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return <>
        <TodoForm onAdd={addHandler} />
        <List todos={todos} completeHandler={completeHandler} removeHandler={removeHandler} />
    </>
}