import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

const Header = (props) => {
	const location = useLocation()
	return (
		<header className='header'>
			<h1 style={headingStyle}>{props.title}</h1>			
			{location.pathname === '/' && <Button 
				color={!props.showAdd ? 'green' : '#660000' } 
				text={!props.showAdd ? 'Add': 'close'} onClick={props.onAdd} />
			}
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
  color: 'Blue', 
  backgroundColor: 'white'
}

export default Header
