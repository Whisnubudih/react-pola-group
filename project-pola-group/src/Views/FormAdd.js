import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'


function FormAdd() {
    const navigate = useNavigate()
    const [itemsForm, setItemsForm] = useState({
        name: '',
        description: '',
        price: '',
        imgUrl:'',
        categoryId:'',

  })

  const changeItemFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setItemsForm({
      ...itemsForm,
      [field]: value
    })
  }

  const addNewItem = () =>{
    fetch(`https://warmindo-top1.herokuapp.com/items`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(itemsForm),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
  return (
    <section>
      
        <Navbar />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> Login</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewItem()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Name</label>
              <input name='name' value={itemsForm.name} onChange={changeItemFormInput} type="text" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">description</label>
                <input type="text" name='description' value={itemsForm.description} onChange={changeItemFormInput} placeholder="Type Here"></input>
              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default FormAdd; 