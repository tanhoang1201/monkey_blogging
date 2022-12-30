import { UploadIcon } from '../../components/icons'

import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'

const UploadImg = ({ imgSrc, loading, ...props }) => {
    return (
        <div>
            <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                Image
            </label>
            <label
                htmlFor='img'
                className='border-dashed border-2 border-dark bg-light w-full h-[200px] rounded-md overflow-hidden flex items-center justify-center relative'
            >
                <input hidden id='img' type='file' {...props} />
                {imgSrc && <img src={imgSrc} className='absolute w-full h-full object-contain' />}
                {loading && <CircularProgress />}
                {!loading && !imgSrc && <UploadIcon />}
            </label>
        </div>
    )
}

UploadImg.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default UploadImg
