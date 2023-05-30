import React from "react";
import logo from './sunflower.jpg'

function Header() {
  return (
    <header>
			<a href="index.html"><img src={logo} alt="fa" id="logo" /></a>
			<h1>Nevenincs Bt.</h1>
			<h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
		</header>
  )
}

export default Header