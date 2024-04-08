import './tag.css'
import PropTypes from 'prop-types';

function Tag({ tag }) {
    return <div className='tag-box'>{tag}</div>      
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired
}

export default Tag