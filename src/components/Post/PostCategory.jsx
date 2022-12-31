import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostLabel = ({ className, children, to }) => {
    return (
        <Link
            to={to}
            className={`text-primary font-semibold py-1 px-2 rounded-md text-sm mb-3 inline-block ${className}`}
        >
            {children}
        </Link>
    )
}

PostLabel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string,
}

export default PostLabel
