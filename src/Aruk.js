import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Aruk() {
  const [aruk, setAruk] = useState([])
  useEffect(() =>{
    fetch("http://localhost:9000/api/aruk")
        .then(res => res.json())
        .then(setAruk)
  })

  return (
    <>
      <Header/>

      <main class="container">  
			<div class="row">
				<h2>Vetőmagjaink:</h2>
				{aruk.map(aru => (
          <div class="col-lg-4 mt-4 arukep" key={aru.id}>
            <h4>{aru.nev}</h4>
            <Link to={`/megrendeles/${aru.id}`}><img src={aru.kepUrl} alt={aru.nev} class="img-fluid"/>
					</Link>
          </div>
        ))}
          </div>
          </main>
          <Footer/>
      
    </>
  )
}

export default Aruk