import { doc, getDoc } from '@firebase/firestore'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import slugify from 'slugify'

import PostContent from '../../../components/Post/PostTitle'
import PostImg from '../../../components/Post/PostImg'
import PostLabel from '../../../components/Post/PostCategory'
import PostMore from '../../../components/Post/PostMore'
import { categoriesInstance, userInstance } from '../../../configs/firebase.config'
import { dtFormat } from '../../../configs/constants.config'

const PostFeatureItem = ({ value }) => {
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')
    const [createAt, setTime] = useState('')
    useEffect(() => {
        if (value.categoryId) {
            const categoryRef = doc(categoriesInstance, value.categoryId)
            getDoc(categoryRef).then((doc) => {
                setCategory(doc.data())
            })
        }

        const authorRef = doc(userInstance, value.userId)
        getDoc(authorRef).then((doc) => {
            setAuthor(doc.data().name)
        })

        if (value.createAt) {
            const time = new Date(value.createAt.seconds * 1000)
            setTime(dtFormat.format(time))
        }
    }, [])
    return (
        <div className='rounded-lg overflow-hidden relative '>
            <div className='absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] z-10'></div>
            <div className='pt-[60%]'>
                <PostImg className='absolute top-0 left-0 w-full h-full' src={value.image} />
            </div>
            <div className='absolute top-4 left-4 right-1 z-20'>
                <PostLabel className='bg-light' to={category.slug}>
                    {category ? category.name : 'unKnown'}
                </PostLabel>
                <PostContent className='text-white'>{value.title}</PostContent>
                <PostMore
                    className='absolute top-0 right-0 text-white'
                    author={author}
                    createAt={createAt || 'Unknown'}
                    to={`/${slugify(author, { lower: true })}`}
                />
            </div>
        </div>
    )
}

PostFeatureItem.propTypes = {
    value: PropTypes.object.isRequired,
}

export default PostFeatureItem
