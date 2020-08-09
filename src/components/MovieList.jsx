import React, {useState, useEffect} from "react"
import axios from 'axios'

const MovieList = () => {
  // const [daftarMovie, setDaftarMovie] = useState([
  //   { title: "Supermen", rating: 8, duration: 120, genre: "komedi", year: 2021, description: "lakilaki yang berkekuatan super power sekali dan sangan jago" },
  //   { title: "Superwomen", rating: 9, duration: 90, genre: "crime", year: 2022, description: "perempuan yang berkekuatan super power jago sekali dan sangan elegant" }
  // ])
  const [daftarMovie, setDaftarMovie] = useState(null)
  const [input, setInput] = useState({ title: "", rating: 0, duration: 0, genre: "", year: 0, description: "" })
  const [statusForm, setStatusForm] = useState("create")
  const [selectedId, setSelectedId]  =  useState(0)

  useEffect( () => {
    if(daftarMovie === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          console.log(res)
          console.log(res.data)
          setDaftarMovie(res.data.map(el=>{return {id: el.id, title: el.title, rating:el.rating, duration:el.duration, genre:el.genre, year:el.year, description: el.description}}))
        })
    }
  },[daftarMovie])

  const handleEdit = (event) => {
    // let idBuah = parseInt(event.target.value)
    let idMovie = parseInt(event.target.value)
    console.log(idMovie)

    let dataMovie = daftarMovie.find(x => x.id === idMovie)
    console.log(dataMovie)

    setInput({title: dataMovie.title, rating: dataMovie.rating, genre: dataMovie.genre, year: dataMovie.year, description: dataMovie.description})
    setSelectedId(idMovie)
    setStatusForm("edit")
  }

  const handleDelete = (event) => {
    let idMovie = parseInt(event.target.value)

    let newDaftarMovie = daftarMovie.filter(el => el.id != idMovie)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
    .then(res => {
      console.log(res)
    })
          
    setDaftarMovie([...newDaftarMovie])
    
  }

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "title":
      {
        setInput({...input, title: event.target.value});
        break
      }
      case "rating":
      {
        setInput({...input, rating: event.target.value});
        break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
        break
      }
      case "genre":
      {
        setInput({...input, genre: event.target.value});
        break
      }
      case "year":
      {
        setInput({...input, year: event.target.value});
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
    default:
      {break;}
    }
  }

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault()

    let title = input.title
    let rating = input.rating.toString()
    let duration = input.duration.toString()
    let genre = input.genre
    let year = input.year.toString()
    let description = input.description

    if (title.replace(/\s/g,'') !== "" && rating.replace(/\s/g,'') !== "" && duration .replace(/\s/g,'') !== "" && genre.replace(/\s/g,'') !== "" && year.replace(/\s/g,'') !== "" && description.replace(/\s/g,'') !== "") {
      if (statusForm === "create") {
        axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, rating, duration, genre, year, description})
          .then(res => {
            setDaftarMovie([...daftarMovie, {id: res.data.id, title: title, rating: rating, duration: duration, genre: genre, year: year, description: description}])
          })
      } else if (statusForm === "edit") {
        axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`, {title: input.title, rating: input.rating, duration: input.duration, genre: input.genre, year: input.year, description: input.description})
          .then(res => {
            console.log(res)
              // let dataMovie = daftarMovie.find(el => el.id === selectedId)
              // dataMovie.title = title
              // dataMovie.rating = rating
              // dataMovie.duration = duration
              // dataMovie.genre = genre
              // dataMovie.year = year
              // dataMovie.description = description
              // setDaftarMovie([...daftarMovie])
            }
          )
      }
      
      setStatusForm("create")
      setInput({ title: "", rating: 0, duration: 0, genre: "", year: 0, description: "" })
    }

  }


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
                      {/* <button value={item.id}>Edit</button> */}
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      {/* <button value={item.id}>Delete</button> */}
                      <button onClick={handleDelete} value={item.id}>Delete</button>
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
          {/* <form> */}
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>Title:</label>
            {/* <input style={{float: "right"}} type="text" name="title"/> */}
            <input style={{float: "right"}} type="text" name="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Year:</label>
            {/* <input style={{float: "right"}} type="number" name="year" /> */}
            <input style={{float: "right"}} type="number" name="year" value={input.year} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Duration (in minutes):</label>
            {/* <input style={{float: "right"}} type="number" name="duration" /> */}
            <input style={{float: "right"}} type="number" name="duration" value={input.duration} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Genre:</label>
            {/* <input style={{float: "right"}} type="text" name="genre" /> */}
            <input style={{float: "right"}} type="text" name="genre" value={input.genre} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Rating:</label>
            {/* <input style={{float: "right"}} type="number" name="rating" /> */}
            <input style={{float: "right"}} type="number" name="rating" value={input.rating} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Description:</label>
            {/* <textarea style={{float: "right"}} type="text" name="description" /> */}
            <textarea style={{float: "right"}} type="text" name="description" value={input.description} onChange={handleChange} />
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