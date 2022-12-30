import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import images from '../../assets/images'
import Button from '../../components/Button'
import { SearchIcon, UserIcon } from '../../components/icons'
import Home from '../../pages/Home'
import { navigation } from '../../configs/routes.config'
import Popper from '../../components/Popper'
import Menu from '../Menu'

const Header = ({ className }) => {
    const currentUser = useSelector((state) => state.auth.userLogin)
    useEffect(() => {}, [])
    return (
        <header className={`flex items-center py-6 ${className}`}>
            <Link>
                <img src={images.logo} alt='' className='w-14 object-cover' />
            </Link>
            <nav className='ml-6 flex gap-10'>
                {navigation.map((item, index) => (
                    <Link key={index} to='#' className='text-lg font-semibold text-dark'>
                        {item.title}
                    </Link>
                ))}
            </nav>
            <div className='ml-auto border border-primary rounded-lg flex items-center  mr-5 w-[320px]'>
                <input
                    type='text'
                    name=''
                    id=''
                    className='outline-none p-4 bg-transparent flex-1'
                    placeholder='Search posts...'
                />
                <button className='px-4 '>
                    <SearchIcon />
                </button>
            </div>
            {currentUser ? (
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold text-primary text-lg'>Hi, {currentUser.name}</h2>
                    <Popper content={<Menu />} offset={[12, 10]} placement='bottom-end'>
                        <button className='p-1 rounded-full hover:bg-light transition-all'>
                            <UserIcon />
                        </button>
                    </Popper>
                </div>
            ) : (
                <>
                    <Button
                        elementType={Link}
                        to='/signin'
                        className='h-[58px] leading-[58px] mr-5'
                        style='p-0 text-xl'
                    >
                        Sign In
                    </Button>
                    <Button
                        elementType={Link}
                        to='/signup'
                        className='h-[58px] leading-[58px]'
                        style='p-0 text-xl'
                    >
                        Sign Up
                    </Button>
                </>
            )}
        </header>
    )
}

export default Header
