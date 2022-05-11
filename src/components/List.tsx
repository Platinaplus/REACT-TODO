import React from "react"
import { ITodo } from '../interfaces'

type ListProps = {
    todos: ITodo[]
    completeHandler(id: number): void
    removeHandler(id: number): void
}

export const List: React.FC<ListProps> = ({ todos, completeHandler, removeHandler }) => {
    if (todos.length === 0) {
        return <span>There are no any points</span>
    }

    const handleRemove = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        removeHandler(id)
    }
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => completeHandler(todo.id)} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                            onClick={event => handleRemove(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}