import React, { useRef } from "react";

interface ToDoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ToDoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title);
            // setTitle('')
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                // value={title}
                // onChange={changeHandler}
                type="text"
                id="title"
                placeholder="Input title"
                onKeyDown={keyPressHandler}
                ref={ref}  />
            <label htmlFor="title" className="active">
                New Point
            </label>
        </div>
    )
}