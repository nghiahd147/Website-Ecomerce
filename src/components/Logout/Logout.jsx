import { useNavigate } from "react-router-dom"
import { deleteAllCookies, getCookie } from "../../helpers/cookie"
import { useDispatch } from "react-redux"
import { login } from "../../actions/login"
import swal from 'sweetalert'

const Logout = () => {
    const navigate = useNavigate()
    const cookie = getCookie('token')
    const dispatch = useDispatch()

    const handleLogout = () => {
      if(cookie) {
        deleteAllCookies()
        dispatch(login(false))
        navigate('/login')
        swal("Đăng xuất thành công!", "You clicked the button!", "success");
      }
    }

    handleLogout()

}

export default Logout