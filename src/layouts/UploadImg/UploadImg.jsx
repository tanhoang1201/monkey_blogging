import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'

import { CloseIcon, UploadIcon } from '../../components/icons'

const UploadImg = ({ imgSrc, loading, onDelete, ...props }) => {
    return (
        <div className='relative group'>
            <label
                htmlFor='img'
                className='border-dashed border-2 border-dark bg-light w-full h-[200px] rounded-md overflow-hidden flex items-center r justify-center cursor-pointer'
            >
                <input hidden id='img' type='file' {...props} />
                {imgSrc && (
                    <img
                        src={imgSrc}
                        className='absolute top-0 left-0 w-full h-full object-contain'
                    />
                )}

                {loading && <CircularProgress />}
                {!loading && !imgSrc && <UploadIcon />}
            </label>
            {imgSrc && (
                <div
                    className='absolute p-2 bg-white text-red-500 rounded-full top-3 right-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 cursor-pointer'
                    onClick={onDelete}
                >
                    <CloseIcon />
                </div>
            )}
        </div>
    )
}

UploadImg.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    onDelete: PropTypes.func,
}

export default UploadImg
