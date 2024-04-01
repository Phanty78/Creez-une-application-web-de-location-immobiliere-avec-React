import './tag.css'
import PropTypes from 'prop-types';

function Tag({tags}){
    return (
        <div className='tags-container'>
            {tags.map((tag, index) => (
                    <div key={index} className='tag-box'>{tag}</div>
            )
                    )}
        </div>     
           )
    
}

Tag.propTypes = {
    tags : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tag