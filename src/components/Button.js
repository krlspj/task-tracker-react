import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
	//const onClick = (e) => { // onClick is already defined on the parent component
	//	console.log('click',e)
	//}
	return (
			<button onClick={onClick} className="btn" style={{backgroundColor: color}}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func
}

export default Button
