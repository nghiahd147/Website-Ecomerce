import { useNavigate, useParams } from 'react-router-dom'
import { deleteCategory } from '../../../Services/CategoryServices'
import swal from 'sweetalert';
import { useState } from 'react';

const DeleteCategory = () => {
  
  const isData = useParams()

  const id = isData.id

  const navigate = useNavigate()

  const [reload, setReload] = useState(false)
  const reloadPage = () => {
    setReload(!reload)
  }

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then(async(willDelete) => {
    if (willDelete) {
      await deleteCategory(id)
      reloadPage()
      navigate('/admin/info-category')
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      navigate('/admin/info-category')
      swal("Your imaginary file is safe!");
    }
  });

}

export default DeleteCategory