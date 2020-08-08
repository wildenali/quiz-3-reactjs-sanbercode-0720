import React from 'react'
import logo from '../assets/img/logo.png'

const Index = () => {
  return (
    <>
      <head>
        <link href="public/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
      </head>
      <body>
        <header>
          <img id="logo" src={ logo } width="200px" />
          <nav>
            <ul>
              <li><a href="index.html">Home </a> </li>
              <li><a href="about.html">About </a> </li>
              <li><a href="contact.html">Contact </a> </li>
            </ul>
          </nav>
        </header>
        <section >
          <h1>Featured Posts</h1>
          <div id="article-list">
            <div>
              <a href=""><h3>Lorem Post 1</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
            <div>
              <a href=""><h3>Lorem Post 2</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
            <div>
              <a href=""><h3>Lorem Post 3</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
            <div>
              <a href=""><h3>Lorem Post 4</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
            <div>
              <a href=""><h3>Lorem Post 5</h3></a>
              <p>
                Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
              </p>
            </div>
            <div>
                <a href=""><h3>Lorem Post 5</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href=""><h3>Lorem Post 5</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
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

export default Index