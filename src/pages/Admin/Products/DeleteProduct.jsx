import { useNavigate, useParams } from 'react-router-dom'
import { deleteProduct } from '../../../Services/ProductServices'
import swal from 'sweetalert'

const DeleteProduct = () => {

  const params = useParams()

  const id = params.id
  const navigate = useNavigate()

  const deleteApi = async () => {
    const response = await deleteProduct(id)
    if(response) {
      swal("Good job!", "You clicked the button!", "success")
      navigate('/admin/info-product')
    }
  }

  deleteApi()
 
}

export default DeleteProduct