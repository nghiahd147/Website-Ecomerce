import { useParams, useNavigate } from 'react-router-dom'
import { deleteAccount } from '../../../Services/AccountServices'
import swal from 'sweetalert'

const DeleteAccount = () => {
  
  const param = useParams()
  const id = param.id
  const navigate = useNavigate()

  const deleteApi = async () => {
    const response = await deleteAccount(id)
    if(response) {
      swal("Good job!", "You clicked the button!", "success");
      navigate('/admin/info-account');
    }
  }

  deleteApi()

}

export default DeleteAccount