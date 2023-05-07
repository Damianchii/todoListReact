import { useState } from "react"

export function NewTodoForm({ addTodo }) {
	const [newItem, setNewItem] = useState("")
	const handleSubmit = e => {
		e.preventDefault()
		if (newItem === "") {
			return
		} else {
			addTodo(newItem)
			setNewItem("")
		}
	}
	return (
		<form onSubmit={handleSubmit} className='new-item-form'>
			<div className='form-row'>
				<label htmlFor='item'>New Item</label>
				<input
					value={newItem}
					type='text'
					id='item'
					onChange={e => setNewItem(e.target.value)}
				/>
				<button className='btn'>Add</button>
			</div>
		</form>
	)
}
