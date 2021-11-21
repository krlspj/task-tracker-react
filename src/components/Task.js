import {FaTimes}  from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
	return (
		<div 
			className={`task ${task.reminder ? 'reminder' : ''}`} // if task.reminder == true => append className reminder, otherwise don't
			onDoubleClick={() => onToggle(task.id)}
			>
			<h3>
				{task.text}{' '}
				<FaTimes 
					style={{color:'red', cursos:'pointer'}}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	)
}

export default Task