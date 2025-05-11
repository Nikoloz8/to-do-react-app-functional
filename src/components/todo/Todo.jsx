import "./todo.css"

export default function Todo({ todos, setDone, setTodos, done }) {
    return (
        todos.map((e, index) => {
            return <div key={index} className='to-do-container'>
                <p onClick={() => !done.includes(index) ? setDone([...done, index]) : setDone(done.filter(e => e !== index))} style={done.includes(index) ? { textDecorationLine: "line-through" } : { textDecorationLine: "none" }}>{e}</p>
                <button onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index))
                    setDone(done.filter(e => e !== index))
                }}>Delete</button>
            </div>
        })
    )
}
