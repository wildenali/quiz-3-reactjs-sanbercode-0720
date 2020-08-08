import React from 'react'
// import logo from '../assets/img/logo.png'

const Home = () => {
  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
      </head>
      <body>
        <section >
          <h1>Daftar Film Film Terbaik</h1>
          <div id="article-list">
            <div>
              <a href=""><h3>Lorem Post 1</h3></a>
              <li style={{ fontWeight: "bold", listStyle: "none" }}>Ratting: 9.0</li>
              <li style={{ fontWeight: "bold", listStyle: "none" }}>Durasi: 2 jam</li>
              <li style={{ fontWeight: "bold", listStyle: "none" }}>Tahun: 2019</li>
              <li style={{ fontWeight: "bold", listStyle: "none" }}>Genre: fantasy, action</li>
              <p>
                <b>Deskripsi:</b> Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <h5>copyright &copy; 2020 by Sanbercode</h5>
        </footer>
      </body>
    </>
  )
}

export default Home