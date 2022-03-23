import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { itemDeleteSucces } from '../store/actionCreator';


function Cards({ item }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleteHandler = (id) =>{
    console.log(id)
      fetch(`https://warmindo-top1.herokuapp.com/items/${id}`, {
          method: 'DELETE',  
          headers: {
            access_token: localStorage.getItem('access_token')
          }, 
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success delate');
          dispatch(itemDeleteSucces(id))
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  const editHandler = (id) =>{
    navigate(`/${id}`)
  }


  return (
    <tbody>
      <tr className="table-row-2">
        <td className="table-td">{item.name}</td>
        <td className="table-td">{item.Category.name}</td>
        <td className="table-td">
          <div className="table-td-container">

            <img src={item.imgUrl} className="img-table" alt="" />
          </div>
        </td>
        <td className="table-td1">
          <button onClick={() => {
            editHandler(item.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteHandler(item.id)
          }} className="table-button2" >
            <p className="table-button-text">
              Delete
            </p>
          </button>
        </td>
      </tr>
    </tbody>
  )

}

export default Cards;  