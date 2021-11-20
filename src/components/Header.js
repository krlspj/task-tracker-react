import PropTypes from 'prop-types'

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>			
		</div>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	tile: PropTypes.string.isRequired
}


export default Header
