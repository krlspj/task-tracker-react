import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
	return (
		<header className='header'>
			<h1 style={headingStyle}>{props.title}</h1>			
			<Button 
				color={!props.showAdd ? 'green' : '#660000' } 
				text={!props.showAdd ? 'Add': 'close'} onClick={props.onAdd} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

const headingStyle = {
  color: 'red', 
  backgroundColor: 'black'
}

export default Header
