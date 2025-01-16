import { useRoutes } from 'react-router-dom'
import { router } from '../../Router/router'

const AllRouter = () => {
    const routes = useRoutes(router)

    return (
        <>
            {routes}
        </>
    )
}
    
export default AllRouter