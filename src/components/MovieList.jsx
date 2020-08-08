import React, {useState, useEffect} from "react"

const MovieList = () => {
  const [daftarMovie, setDaftarMovie] =  useState(null)

  return (
    <>
      <h1>Daftar Movie</h1>
      <table>
        <thead>
        {/* { title: "Supermen", rating: 8, duration: 120, genre: "komedi", year: 2021, description: "lakilaki yang berkekuatan super power sekali dan sangan jago" }, */}
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {/* {
              daftarMovie !== null && daftarMovie.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight/1000} Kg</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            } */}
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Daftar Movie</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form>
          {/* <form onSubmit={handleSubmit}> */}
            <label style={{float: "left"}}>Title:</label>
            <input style={{float: "right"}} type="text" name="title"/>
            {/* <input style={{float: "right"}} type="text" name="name" value={input.name} onChange={handleChange}/> */}
            <br/>
            <br/>
            <label style={{float: "left"}}>Year:</label>
            <input style={{float: "right"}} type="number" name="year" />
            {/* <input style={{float: "right"}} type="text" name="price" value={input.price} onChange={handleChange}/> */}
            <br/>
            <br/>
            <label style={{float: "left"}}>Duration (in minutes):</label>
            <input style={{float: "right"}} type="number" name="duration" />
            {/* <input style={{float: "right"}} type="number" name="weight" value={input.weight} onChange={handleChange}/> */}
            <br/>
            <br/>
            <label style={{float: "left"}}>Genre:</label>
            <input style={{float: "right"}} type="text" name="genre" />
            {/* <input style={{float: "right"}} type="number" name="weight" value={input.weight} onChange={handleChange}/> */}
            <br/>
            <br/>
            <label style={{float: "left"}}>Rating:</label>
            <input style={{float: "right"}} type="number" name="rating" />
            {/* <input style={{float: "right"}} type="number" name="weight" value={input.weight} onChange={handleChange}/> */}
            <br/>
            <br/>
            <label style={{float: "left"}}>Description:</label>
            <textarea style={{float: "right"}} type="text" name="description" />
            {/* <input style={{float: "right"}} type="number" name="weight" value={input.weight} onChange={handleChange}/> */}
            <br/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MovieList