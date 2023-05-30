import React from 'react'

function Footer() {
  return (
    <footer class="container-fluid">
			<div class="row">
				<div class="col-md-4 col-lg-2">
					<h3>Nyitvatartás:</h3>
				</div>
				<div class="col-md-8 col-lg-4">
					<ul>
						<li>Hétfő-Péntek: 8-17 óráig</li>
						<li>Szombat: 8-13 óráig</li>
						<li>Vasárnap: 9-12 óráig</li>
					</ul>
				</div>
				<div class="col-md-4 col-lg-2">
					<h3>Kapcsolat:</h3>
				</div>
				<div class="col-md-8 col-lg-4">
					<ul>
						<li>06-30/111-1111</li>
						<li>06-70/111-1111</li>
						<li>nevenincsbt@gmail.com</li>
					</ul>
				</div>
			</div>
		</footer>
  )
}

export default Footer