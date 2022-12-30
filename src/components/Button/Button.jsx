import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Button({
    children,
    className,
    theme = 'bg-gradient-to-br from-primary to-[#A4D96C] text-white',
    style = 'text-2xl py-4',
    elementType = 'button',
    ...props
}) {
    let Com = elementType
    return (
        <Com
            className={`${
                props.disabled ? 'opacity-50 disabled:pointer-events-none' : ''
            } font-semibold px-8 rounded-md hover:opacity-80 transition-all ${theme} ${style} ${className}`}
            {...props}
        >
            {children}
        </Com>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    elementType: PropTypes.elementType,
    theme: PropTypes.string,
    style: PropTypes.string,
}

export default Button
