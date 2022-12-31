import { CircularProgress, FormControlLabel, RadioGroup, Switch } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { deleteObject, getDownloadURL, ref, uploadBytes } from '@firebase/storage'
import { addDoc, getDocs, serverTimestamp } from '@firebase/firestore'
import { categoriesInstance, postInstance, storage } from '../configs/firebase.config'
import { toast } from 'react-toastify'
import slugify from 'slugify'

import InputGroup from '../components/InputGroup/InputGroup'
import RadioButton from '../components/Radio'
import Button from '../components/Button'
import UploadImg from '../layouts/UploadImg'
import { postStatus } from '../configs/constants.config'
import Select from '../components/Select'
import { useSelector } from 'react-redux'

const DashboardAddPost = () => {
    const fileRef = useRef(null)
    const [values, setValues] = useState({
        title: '',
        slug: '',
        status: postStatus.PENDING,
        categoryId: '',
        hot: false,
        userId: '',
        image: '',
    })
    const currentUser = useSelector((state) => state.auth.userLogin)
    const [loadingImg, setLoadingImg] = useState(false)
    const [isAddingPost, setLoadingAdd] = useState(false)
    const [categories, setCategories] = useState([])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpload = async (e) => {
        setLoadingImg(true)
        const file = e.target.files[0]
        if (fileRef.current && file) {
            let prevImg = ref(storage, `images/${fileRef.current}`)
            await deleteObject(prevImg)
        }
        if (!file) {
            toast.warn('Upload failed!!!')
            setLoadingImg(false)
            return
        }
        fileRef.current = file.name
        const imgRef = ref(storage, `images/${file.name}`)
        const res = await uploadBytes(imgRef, file)
        const url = await getDownloadURL(res.ref)
        setValues({
            ...values,
            image: url,
        })
        setLoadingImg(false)
    }

    useEffect(() => {
        getDocs(categoriesInstance).then((docs) => {
            const result = docs.docs.map((doc) => {
                return { id: doc.id, label: doc.data().name }
            })
            setCategories(result)
        })
        setValues({ ...values, userId: currentUser.id })
    }, [])

    const handleDelImg = async (e) => {
        e.stopPropagation()
        if (fileRef.current) {
            let currentImg = ref(storage, `images/${fileRef.current}`)
            await deleteObject(currentImg)
            setValues({ ...values, image: '' })
            fileRef.current = null
            return
        }
        return
    }

    const handleAddPost = async (e) => {
        e.preventDefault()
        setLoadingAdd(true)
        const newValues = { ...values }
        newValues.slug = slugify(values.slug || values.title, { lower: true })
        try {
            await addDoc(postInstance, { ...newValues, createAt: serverTimestamp() })
            toast.success('Add post successfully!')
            setValues({
                ...values,
                title: '',
                slug: '',
                status: postStatus.PENDING,
                hot: false,
                image: '',
            })
            fileRef.current = null
            setLoadingAdd(false)
        } catch (error) {
            setLoadingAdd(false)
        }
    }

    return (
        <div className=''>
            <h2 className='text-3xl font-bold text-primary my-6'>Add new post</h2>
            <form className='grid grid-cols-2 gap-10' onSubmit={handleAddPost}>
                <InputGroup
                    value={values.title}
                    label={'Title'}
                    name='title'
                    placeholder='Enter your title...'
                    onChange={handleChange}
                    required
                />
                <InputGroup
                    value={values.slug}
                    label={'Slug'}
                    name='slug'
                    placeholder='Enter your slug...'
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                        Status
                    </label>
                    <RadioGroup row name='status' onChange={handleChange} value={values.status}>
                        <RadioButton label='Pending' value={postStatus.PENDING} />
                        <RadioButton label='Approved' value={postStatus.APPROVED} />
                        <RadioButton label='Rejected' value={postStatus.REJECTED} />
                    </RadioGroup>
                </div>
                <div>
                    <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                        Feature post
                    </label>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={values.hot}
                                onChange={(e) => {
                                    setValues({ ...values, hot: e.target.checked })
                                }}
                            />
                        }
                        label={values.hot ? 'On' : 'Off'}
                    />
                </div>

                <div>
                    <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                        Image
                    </label>
                    <UploadImg
                        onChange={handleUpload}
                        imgSrc={values.image}
                        loading={loadingImg}
                        onDelete={handleDelImg}
                    />
                </div>
                <div>
                    <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                        Categories
                    </label>
                    <Select
                        data={categories}
                        onChange={(e, value) => {
                            setValues({ ...values, categoryId: value?.id || '' })
                        }}
                    />
                </div>
                <Button type='submit' className={'h-[56px] self-end'} style='p-0 text-xl'>
                    Add new post
                </Button>
            </form>
            {isAddingPost && (
                <div className='fixed z-30 inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center'>
                    <CircularProgress className='isAddPost' />
                </div>
            )}
        </div>
    )
}

export default DashboardAddPost
