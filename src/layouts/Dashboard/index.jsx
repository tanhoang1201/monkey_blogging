import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DashboardSidebar from './DashbardSidebar'
import DashboardHeader from './DashboardHeader'

const DashBoardLayout = () => {
    const currentUser = useSelector((state) => state.auth.userLogin)
    if (!currentUser) {
        return <Navigate to={'/signin'} />
    }
    return (
        <div>
            <DashboardHeader />
            <div className='grid grid-cols-8 px-4 gap-6'>
                <DashboardSidebar className={'col-span-2'} />
                <div className='col-span-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashBoardLayout
