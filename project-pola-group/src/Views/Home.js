import React, {useEffect} from 'react'
import Cards from '../Components/Cards'
import { useSelector,useDispatch } from 'react-redux';
import {setItems} from '../store/actionCreator'
import NavbarHome from '../Components/NavbarHome'



function Home (){

  const {items,loading,error }= useSelector(state =>state)
  const dispatch = useDispatch()
useEffect(() =>{
 dispatch(setItems())
},[])

if(loading === undefined){
  return <div>LOADING........</div>
}

if(error){
  return <div>{JSON.stringify(error)}</div>
}

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>LIST CLIENTS</h2>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Name</th>
          <th className="table-th">Category</th>
          <th className="table-th">Image</th>
          <th className="table-th">Action</th>
        </tr>
        </thead>

    
        
   

      {items.map((item) =>(
                      <Cards key={item.id} item={item} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
