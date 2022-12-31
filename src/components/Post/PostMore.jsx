import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostMore = ({ className, author, createAt, to }) => {
    return (
        <p className={`font-semibold text-sm gap-2 ${className}`}>
            <span>{createAt}</span>
            <span className='h-1 w-1 rounded-full inline-block text-2xl mx-2 -translate-y-[2px]'>
                .
            </span>
            <Link to={to} className='hover:opacity-90 hover:underline transition-all'>
                {author}
            </Link>
        </p>
    )
}

PostMore.propTypes = {
    className: PropTypes.string,
    author: PropTypes.string,
    // createAt:
    to: PropTypes.string,
}

export default PostMore
