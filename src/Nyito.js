import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Nyito() {
  return (
    <div id="nyito">
        <Header/>
        <main>
            <Link to="/aruk">Valasszon vetomagjainkbol</Link>
        </main>
        <Footer />
        
    </div>
  )
}

export default Nyito