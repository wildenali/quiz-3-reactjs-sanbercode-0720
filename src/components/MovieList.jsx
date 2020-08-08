import React, {useState, useEffect} from "react"

const MovieList = () => {
  const [daftarMovie, setDaftarMovie] =  useState([
    { title: "Supermen", rating: 8, duration: 120, genre: "komedi", year: 2021, description: "lakilaki yang berkekuatan super power sekali dan sangan jago" },
    { title: "Superwomen", rating: 9, duration: 90, genre: "crime", year: 2022, description: "perempuan yang berkekuatan super power jago sekali dan sangan elegant" }
  ])

  return (
    <>
      <h1>Daftar Movie</h1>
      <table>
        <thead>
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
            {
              daftarMovie !== null && daftarMovie.map((item, index)=>{
                return(
                  // { title: "Supermen", rating: 8, duration: 120, genre: "komedi", year: 2021, description: "lakilaki yang berkekuatan super power sekali dan sangan jago" }
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                    <td>{item.duration} Min</td>
                    <td>{item.genre}</td>
                    <td style={{ textAlign: "center" }}>{item.rating}</td>
                    <td>
                      <textarea disabled style={{ float: "right" }} type="text">
                        {item.description}
                      </textarea>
                    </td>
                    <td>
                      <button value={item.id}>Edit</button>
                      {/* <button onClick={handleEdit} value={item.id}>Edit</button> */}
                      &nbsp;
                      <button value={item.id}>Delete</button>
                      {/* <button onClick={handleDelete} value={item.id}>Delete</button> */}
                    </td>
                  </tr>
                )
              })
            }
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