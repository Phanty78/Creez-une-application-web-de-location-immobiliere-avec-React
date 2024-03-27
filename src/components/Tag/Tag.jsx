import './tag.css'

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

export default Tag