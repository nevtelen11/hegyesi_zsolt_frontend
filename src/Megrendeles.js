import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Megrendeles() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [aru, setAru ] = useState({})
    useEffect(() => {
        fetch("http://localhost:9000/api/aruk/" + id)
        .then(res => res.json())
        .then(setAru)
        },[id])

  return (
    <div>
        <Header/>
        <main class="container"> 
				<h2>{aru.nev} ({aru.Kategoria ? aru.Kategoria.nev : ""})</h2>   
				<div class="row">         
					<div class="col-md-6">
						<img src={aru.kepUrl} alt={aru.nev} class="img-thumbnail"/>                    
					</div>
					<div class="col-md-6">
						<p>A dáliák gumós, fagyérzékeny évelők. Tápanyagdús talajban virágoznak a legszebben. Vízigényük közepes, virágzásuk idején rendszeres vízellátást igényelnek. Virágzási idejük júliustól októberig tart. Kiválóan alkalmasak vágott virágnak. </p>
						<form onSubmit={(e) => {
                            e.preventDefault();
                            fetch("http://localhost:9000/api/aruk/" + id, {
                                method: "PUT",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify({
                                    "keszlet": aru.keszlet - Number(e.target.elements.mennyiseg.value)
                                })
                            })
                            .then(data => {
                                alert("Koszonjuk a megrendelest")
                                navigate("/aruk")
                            })
                            .catch(err => {
                                alert("Sajmos a megrendeles sikertelen")
                            })

                        }}>
                            {aru.keszlet > 0 ? (
                                <div>
                                    <p class="text-center"><span id="ar">Ár: {aru.ar}</span>
								<label for="mennyiseg">Mennyiség:</label>
								<input type="number" name="mennyiseg" id="mennyiseg" min="1" max={aru.keszlet} defaultValue="1"  />
							</p>
							<p class="text-center"><button class="btn btn-warning btn-lg" type='submit'>Megrendelem</button></p>
                                </div>
                            ): (
                                <>
                                    <p class="text-center"><span id="ar">Ár: {aru.ar}</span> </p>
                                    <p>Jelenleg nincs keszleten gyere vissza kesobb</p>

                                
                                </>
                            )}
							
						</form>
					</div>
				</div>
		   
		</main>
        <Footer/>
    </div>
)
}

export default Megrendeles