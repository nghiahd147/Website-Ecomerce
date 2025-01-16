import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { deletePay } from '../../../Services/PayServices'

const DeleteOrder = () => {
  
  const param = useParams()
  const id = param.id
  const navigate = useNavigate()

  const deleteApi = async () => {
    const response = await deletePay(id)
    if(response) {
      swal("Good job!", "Xóa đơn hàng thành công", "success");
      navigate('/admin/info-order');
    }
  }

  deleteApi()

}

export default DeleteOrder