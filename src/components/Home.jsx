import React, { Component } from 'react'
// import logo from '../assets/img/logo.png'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      dataFilmTerbaik: [
        { title: "Supermen", rating: 8, duration: 120, genre: "komedi", year: 2021, description: "lakilaki yang berkekuatan super power sekali dan sangan jago" },
        { title: "Superwomen", rating: 9, duration: 90, genre: "crime", year: 2022, description: "perempuan yang berkekuatan super power jago sekali dan sangan elegant" }
      ]
    }
  }

  render(){
    return (
      <>
        <head>
          <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
        </head>
        <body>
          <section >
            <h1>Daftar Film Film Terbaik</h1>
              {
                this.state.dataFilmTerbaik.map((el, index) => {
                  return(
                    <div>
                      <a href=""><h3>{el.title}</h3></a>
                      <li style={{ fontWeight: "bold", listStyle: "none" }}>Ratting: {el.rating}</li>
                      <li style={{ fontWeight: "bold", listStyle: "none" }}>Durasi: {el.duration/60} jam</li>
                      <li style={{ fontWeight: "bold", listStyle: "none" }}>Tahun: {el.year}</li>
                      <li style={{ fontWeight: "bold", listStyle: "none" }}>Genre: {el.genre}</li>
                      <p>
                        <b>Deskripsi:</b> {el.description}
                      </p>
                    </div>
                  )
                })
              }
          </section>
          <footer>
            <h5>copyright &copy; 2020 by Sanbercode</h5>
          </footer>
        </body>
      </>
    )
  }
}

export default Home