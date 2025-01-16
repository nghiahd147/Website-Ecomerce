import React, { useState } from 'react';
import { createCategory } from '../../../Services/CategoryServices';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {

  const [reload, setReload] = useState(false)
  const reloadPage = () => {
    setReload(!reload)
  }

  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const handleCreateCategory = async (e) => {

    e.preventDefault()

    const response = await createCategory(data);

    if (response) {
      navigate('/admin/info-category')
      swal("Good job!", "You clicked the button!", "success");
      reloadPage()
      setData('')
    } else {
      alert('Thêm danh mục thất bại');
    }
    
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(
      {
        [name]: value
      }
    );
  }

  return (
    <div className='mx-10 flex-1'>
      <div className='flex'>
        <h3 className='font-bold my-5'>Trang Thêm Danh Mục</h3>
      </div>
      <form onSubmit={handleCreateCategory} >
        <div className='flex items-center'>
          <label className='py-1' htmlFor="">Tên danh mục: </label>
          <input onChange={handleInput} className='flex-1 mx-6 px-2 py-1 rounded-lg border-none outline-none text-base' name='title' type="text" placeholder='Nhập tên danh mục...' />
        </div>
        <button className='mt-5 bg-green-500 px-1 py-1 rounded-md'>Thêm danh mục</button>
      </form>
    </div>

  )
}

export default CreateCategory