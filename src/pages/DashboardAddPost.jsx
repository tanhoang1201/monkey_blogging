import { FormControlLabel, RadioGroup, Switch } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { deleteObject, getDownloadURL, ref, uploadBytes } from '@firebase/storage'
import { addDoc, getDocs } from '@firebase/firestore'
import { categoriesInstance, postInstance, storage } from '../configs/firebase.config'
import { toast } from 'react-toastify'
import slugify from 'slugify'

import InputGroup from '../components/InputGroup/InputGroup'
import RadioButton from '../components/Radio'
import Button from '../components/Button'
import UploadImg from '../layouts/UploadImg'
import { postStatus } from '../configs/constants.config'
import CategoriesSelect from '../layouts/CategoriesSelect'

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
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpload = async (e) => {
        setLoading(true)
        const file = e.target.files[0]
        if (fileRef.current && file) {
            let prevImg = ref(storage, `images/${fileRef.current}`)
            await deleteObject(prevImg)
        }
        if (!file) {
            toast.warn('Upload failed!!!')
            setLoading(false)
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
        setLoading(false)
    }

    useEffect(() => {
        getDocs(categoriesInstance).then((docs) => {
            const result = docs.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setCategories(result)
        })
    }, [])
    // const handleAddPost = async (e) => {
    //     e.preventDefault()
    //     const res = await addDoc(PostInstance, values)
    //     console.log(res)
    // }

    console.log(categories)
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary my-6'>Add new post</h2>
            <form className='grid grid-cols-2 gap-10'>
                <InputGroup
                    label={'Title'}
                    name='title'
                    placeholder='Enter your title...'
                    onChange={handleChange}
                    required
                />
                <InputGroup
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
                                onChange={(e) => {
                                    setValues({ ...values, hot: e.target.checked })
                                }}
                            />
                        }
                        label={values.hot ? 'On' : 'Off'}
                    />
                </div>
                <UploadImg onChange={handleUpload} imgSrc={values.image} loading={loading} />
                <div>
                    <label htmlFor='' className='text-xl font-semibold mb-4 text-dark block'>
                        Categories
                    </label>
                    <CategoriesSelect
                        data={categories}
                        onChange={(e, child) => {
                            console.log(e)
                        }}
                    />
                </div>
                <Button type='submit' className={'h-[56px] self-end'} style='p-0 text-xl'>
                    Add new post
                </Button>
            </form>
        </div>
    )
}

export default DashboardAddPost
