import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Button from '../components/Button'
import InputGroup from '../components/InputGroup/InputGroup'
import { login } from '../redux/authSlide'
import { CircularProgress } from '@mui/material'
import images from '../assets/images'

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup
        .string()
        .required()
        .min(8)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'At least one uppercase letter, one lowercase letter and one number'
        ),
})

const SignInForm = () => {
    const currentUser = useSelector((state) => state.auth.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })
    const handleSignIn = async (values) => {
        dispatch(login({ values, navigate }))
    }

    if (currentUser) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='w-[832px] mx-auto py-6 px-4'>
            <Link to={'/'} className='text-center mb-6 block'>
                <img src={images.logo} alt='' className='inline-block' />
            </Link>
            <h1 className='font-semibold text-primary text-4xl mb-24 text-center'>
                Monkey Blogging
            </h1>
            <form action='' className='flex flex-col gap-8' onSubmit={handleSubmit(handleSignIn)}>
                <InputGroup
                    placeholder='Please enter your email address...'
                    label='Email Address'
                    type='email'
                    id='email'
                    register={register('email')}
                    error={errors.email?.message}
                />
                <InputGroup
                    placeholder='Please enter your password...'
                    label='Password'
                    type='password'
                    id='password'
                    register={register('password')}
                    error={errors.password?.message}
                />
                <p className='text-primary'>
                    Don't have an account yet ?{' '}
                    <Link
                        className='text-red-500 font-semibold underline hover:no-underline'
                        to='/signup'
                    >
                        Sign Up
                    </Link>
                </p>
                <Button
                    className='w-max m-auto flex items-center gap-3 h-[64px] '
                    disabled={isSubmitting}
                    type='submit'
                >
                    {isSubmitting && <CircularProgress />}
                    Sign In
                </Button>
            </form>
        </div>
    )
}

export default SignInForm
