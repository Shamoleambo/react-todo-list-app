import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add new todo'
      />
    </form>
  )
}

export default TodoForm
