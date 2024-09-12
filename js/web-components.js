const template_hband = document.createElement('template');
template_hband.innerHTML = `<div class="wrap">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-md d-flex align-items-center">
                        <p class="mb-0 phone"><span class="mailus">Phone No:</span> <a href="#">+250 786406524</a> or <span class="mailus">email us:</span> <a href="#">brachettorwanda2@gmail.com <brachettorwanda2@gmail.com>;</a></p>
                    </div>
                    <div class="col-12 col-md d-flex justify-content-md-end">
                        <p class="mb-0">Mon - Sun / 11:30-21:30 </p>
                        <div class="social-media">
                            <p class="mb-0 d-flex">
                                <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
                                <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
                                <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
                                <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
class HeaderBand extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    appendCssLinks(this.shadowRoot);
    this.shadowRoot.appendChild(template_hband.content.cloneNode(true));
  }
}
window.customElements.define('header-band', HeaderBand);


const template_nband = document.createElement('template');
template_nband.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" >
		<div class="container">
			<a class="navbar-brand" href="index.html"></a>
			<button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
			<img src="images/h1.png" style="height:80px;width:200px;border-radius:10px;"/>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
					<li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
					<li class="nav-item"><a href="chef.html" class="nav-link">Chef</a></li>
					<li class="nav-item"><a href="menu.html" class="nav-link">Menu</a></li>
					<li class="nav-item"><a href="reservation.html" class="nav-link">Reservation</a></li>
					<li class="nav-item"><a href="blog.html" class="nav-link">Events</a></li>
					<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>`;
    
class NavBand extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    appendCssLinks(this.shadowRoot);    
    this.shadowRoot.appendChild(template_nband.content.cloneNode(true));
  }
}
window.customElements.define('nav-band', NavBand);


const template_hero = document.createElement('template');
template_hero.innerHTML = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/4j.jpeg');" data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="container">
			<div class="row no-gutters slider-text align-items-end justify-content-center">
				<div class="col-md-9 ftco-animate text-center mb-5">
					<h1 class="mb-2 bread">Book A Table Now</h1>
					<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>Reservation <i class="fa fa-chevron-right"></i></span></p>
				</div>
			</div>
		</div>
	</section>`;
    
class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    appendCssLinks(this.shadowRoot);    
    this.shadowRoot.appendChild(template_hero.content.cloneNode(true));
  }
}
window.customElements.define('hero-section', HeroSection);



const template_booktable = document.createElement('template');
template_booktable.innerHTML = `<section class="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
<div class="container">
  <div class="row no-gutters">
    <div class="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
      <form action="#" class="appointment-form">
        <h3 class="mb-3">Book your Table</h3>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input type="name" class="form-control" placeholder="Name">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Phone">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <div class="input-wrap">
                <div class="icon"><span class="fa fa-calendar"></span></div>
                <input type="text" class="form-control book_date" placeholder="Check-In">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <div class="input-wrap">
                <div class="icon"><span class="fa fa-clock-o"></span></div>
                <input type="text" class="form-control book_time" placeholder="Time">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <div class="form-field">
                <div class="select-wrap">
                  <div class="icon"><span class="fa fa-chevron-down"></span></div>
                  <select name="" id="" class="form-control">
                    <option value="">Guest</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input type="submit" value="Book Your Table Now" class="btn btn-white py-3 px-4">
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-sm-8 wrap-about py-5 ftco-animate img" style="background-image: url(images/1h.jpg);">
      <div class="row pb-5 pb-md-0">
        <div class="col-md-12 col-lg-7">
          <div class="heading-section mt-5 mb-4">
            <div class="pl-lg-3 ml-md-5">
              <span class="subheading"></span>
              <h2 class="mb-4">Welcome to BRACHETTO</h2>
            </div>
          </div>
          <div class="pl-lg-3 ml-md-5">
            <p> 								</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-intro" style="background-image: url(images/4a.jpg);">
<div class="overlay"></div>
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <span>Now Booking</span>
      <h2>Private Dinners &amp; Happy Hours</h2>
    </div>
  </div>
</div>
</section>

<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-2">
				<div class="col-md-7 text-center heading-section ftco-animate">
					<span class="subheading">Specialties</span>
					<h2 class="mb-4">Our Menu</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Breakfast</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/4a.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/breakfast-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/breakfast-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-bread" style="left: 0;"></span>
						<span class="flat flaticon-breakfast" style="right: 0;"></span>
					</div>
				</div>

				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Lunch</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/lunch-1.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/lunch-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/lunch-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-pizza" style="left: 0;"></span>
						<span class="flat flaticon-chicken" style="right: 0;"></span>
					</div>
				</div>

				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Dinner</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dinner-1.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dinner-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dinner-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-omelette" style="left: 0;"></span>
						<span class="flat flaticon-burger" style="right: 0;"></span>
					</div>
				</div>

				<!--  -->
				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Desserts</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dessert-1.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dessert-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/dessert-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-cupcake" style="left: 0;"></span>
						<span class="flat flaticon-ice-cream" style="right: 0;"></span>
					</div>
				</div>
				
				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Wine Card</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/wine-1.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/wine-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/wine-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-wine" style="left: 0;"></span>
						<span class="flat flaticon-wine-1" style="right: 0;"></span>
					</div>
				</div>

				<div class="col-md-6 col-lg-4">
					<div class="menu-wrap">
						<div class="heading-menu text-center ftco-animate">
							<h3>Drinks &amp; Tea</h3>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/drink-1.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/drink-2.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<div class="menus border-bottom-0 d-flex ftco-animate">
							<div class="menu-img img" style="background-image: url(images/drink-3.jpg);"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>Beef Roast Source</h3>
									</div>
									<div class="one-forth">
										<span class="price">$29</span>
									</div>
								</div>
								<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
							</div>
						</div>
						<span class="flat flaticon-wine" style="left: 0;"></span>
						<span class="flat flaticon-wine-1" style="right: 0;"></span>
					</div>
				</div>
			</div>
		</div>

	</section>
  
  <section class="ftco-section testimony-section">
		<div class="overlay" style="background-image: url(images/4d.jpeg);"></div>
		<div class="container">
			<div class="row justify-content-center mb-3 pb-2">
				<div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
					<span class="subheading"></span>
					<h2 class="mb-4">Happy Customer</h2>
				</div>
			</div>
			<div class="row ftco-animate justify-content-center">
				<div class="col-md-7">
					<div class="carousel-testimony owl-carousel ftco-owl">
						<div class="item">
							<div class="testimony-wrap text-center">
								<div class="text p-3">
									<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="user-img mb-4" style="background-image: url(images/5b.png)">
										<span class="quote d-flex align-items-center justify-content-center">
											<i class="fa fa-quote-left"></i>
										</span>
									</div>
									<p class="name">John Gustavo</p>
									<span class="position">Customer</span>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap text-center">
								<div class="text p-3">
									<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="user-img mb-4" style="background-image: url(images/5b.png)">
										<span class="quote d-flex align-items-center justify-content-center">
											<i class="fa fa-quote-left"></i>
										</span>
									</div>
									<p class="name">John Gustavo</p>
									<span class="position">Customer</span>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap text-center">
								<div class="text p-3">
									<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="user-img mb-4" style="background-image: url(images/5b.png)">
										<span class="quote d-flex align-items-center justify-content-center">
											<i class="fa fa-quote-left"></i>
										</span>
									</div>
									<p class="name">John Gustavo</p>
									<span class="position">Customer</span>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap text-center">
								<div class="text p-3">
									<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="user-img mb-4" style="background-image: url(images/5b.png)">
										<span class="quote d-flex align-items-center justify-content-center">
											<i class="fa fa-quote-left"></i>
										</span>
									</div>
									<p class="name">John Gustavo</p>
									<span class="position">Customer</span>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap text-center">
								<div class="text p-3">
									<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="user-img mb-4" style="background-image: url(images/5b.png)">
										<span class="quote d-flex align-items-center justify-content-center">
											<i class="fa fa-quote-left"></i>
										</span>
									</div>
									<p class="name">John Gustavo</p>
									<span class="position">Customer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
  <section class="ftco-section bg-light">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-2">
				<div class="col-md-7 text-center heading-section ftco-animate">
					<span class="subheading">Chef</span>
					<h2 class="mb-4">Our Master Chef</h2>
				</div>
			</div>	
			<div class="row">
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="staff">
						<div class="img" style="background-image: url(images/5a.jpeg);"></div>
						<div class="text px-4 pt-2">
							<h3>John Gustavo</h3>
							<span class="position mb-2">CEO, Co Founder</span>
							<div class="faded">
								<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
								<ul class="ftco-social d-flex">
									<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="staff">
						<div class="img" style="background-image: url(images/5a.jpeg);"></div>
						<div class="text px-4 pt-2">
							<h3>Michelle Fraulen</h3>
							<span class="position mb-2">Head Chef</span>
							<div class="faded">
								<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
								<ul class="ftco-social d-flex">
									<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="staff">
						<div class="img" style="background-image: url(images/5a.jpeg);"></div>
						<div class="text px-4 pt-2">
							<h3>Alfred Smith</h3>
							<span class="position mb-2">Chef Cook</span>
							<div class="faded">
								<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
								<ul class="ftco-social d-flex">
									<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="staff">
						<div class="img" style="background-image: url(images/5a.jpeg);"></div>
						<div class="text px-4 pt-2">
							<h3>Antonio Santibanez</h3>
							<span class="position mb-2">Chef Cook</span>
							<div class="faded">
								<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
								<ul class="ftco-social d-flex">
									<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
  
  <section class="ftco-section ftco-no-pt ftco-no-pb">
		<div class="container">
			<div class="row d-flex">
				<div class="col-md-6 d-flex">
					<div class="img img-2 w-100 mr-md-2" style="background-image: url(images/1k.jpg);"></div>
					<div class="img img-2 w-100 ml-md-2" style="background-image: url(images/3a.jpg);"></div>
				</div>
				<div class="col-md-6 ftco-animate makereservation p-4 p-md-5">
					<div class="heading-section ftco-animate mb-5">
						<span class="subheading">This is our secrets</span>
						<h2 class="mb-4">Perfect Ingredients</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
						</p>
						<p><a href="#" class="btn btn-primary">Learn more</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section bg-light">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-2">
				<div class="col-md-7 text-center heading-section ftco-animate">
					<span class="subheading">EVENTS</span>
					<h2 class="mb-4">Recently Events</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 ftco-animate">
					<div class="blog-entry">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/e2.jpg');">
						</a>
						<div class="text px-4 pt-3 pb-4">
							<div class="meta">
								<div><a href="#">September, 2022</a></div>
								<div><a href="#">Admin</a></div>
							</div>
							<h3 class="heading"><a href="#">CASUAL DATES</a></h3>
							<p class="clearfix">
								<a href="#" class="float-left read btn btn-primary">Read more</a>
								<a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 ftco-animate">
					<div class="blog-entry">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/4a.jpeg');">
						</a>
						<div class="text px-4 pt-3 pb-4">
							<div class="meta">
								<div><a href="#">May 3,2022</a></div>
								<div><a href="#"></a></div>
							</div>
							<h3 class="heading"><a href="#">EAT OUT EVENINGS</a></h3>
							<p class="clearfix">
								<a href="#" class="float-left read btn btn-primary">Read more</a>
								<a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 ftco-animate">
					<div class="blog-entry">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/5d.jpeg');">
						</a>
						<div class="text px-4 pt-3 pb-4">
							<div class="meta">
								<div><a href="#">August 3, 2021</a></div>
								<div><a href="#"></a></div>
							</div>
							<h3 class="heading"><a href="#">BIRTHDAY PARTIES</a></h3>
							<p class="clearfix">
								<a href="#" class="float-left read btn btn-primary">Read more</a>
								<a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section ftco-no-pt ftco-no-pb ftco-intro bg-primary">
		<div class="container py-5" style="background-color:  #100503;">
			<div class="row py-2">
				<div class="col-md-12 text-center">
					<h2>We Make Delicious &amp; Nutritious Food</h2>
					<a href="#" class="btn btn-white btn-outline-white">Book A Table Now</a>
				</div>
			</div>
		</div>
	</section>

	<footer class="ftco-footer ftco-no-pb ftco-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-6 col-lg-3">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">BRACHETTO</h2>
						<p>, there live the blind texts. Separated they live in Bookmarksgrove with refined wines and tasty italian food. We make youe evening more memorable than your daily dinners<menu></menu></p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
							<li class="ftco-animate"><a href="#"><span class="fa fa-twitter"></span></a></li>
							<li class="ftco-animate"><a href="#"><span class="fa fa-facebook"></span></a></li>
							<li class="ftco-animate"><a href="#"><span class="fa fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Open Hours</h2>
						<ul class="list-unstyled open-hours">
							<li class="d-flex"><span>Monday</span><span>11:30 AM-21:30 PM</span></li>
							<li class="d-flex"><span>Tuesday</span><span>11:30 AM-21:30 PM</span></li>
							<li class="d-flex"><span>Wednesday</span><span>11:30 AM-21:30 PM</span></li>
							<li class="d-flex"><span>Thursday</span><span>11:30 AM-21:30 PM</span></li>
							<li class="d-flex"><span>Friday</span><span>11:30 AM-21:30 PM</span></li>
							<li class="d-flex"><span>Saturday</span><span>11:30-14:30, 18:00-22:00</span></li>
							<li class="d-flex"><span>Sunday</span><span> 11:30-14:30, 18:00-22:00</span></li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Instagram</h2>
						<div class="thumb d-sm-flex">
							<a href="#" class="thumb-menu img" style="background-image: url(images/2c.png);">
							</a>
							<a href="#" class="thumb-menu img" style="background-image: url(images/2p.jpg);">
							</a>
							<a href="#" class="thumb-menu img" style="background-image: url(images/4b.jpeg);">
							</a>
						</div>
						<div class="thumb d-flex">
							<a href="#" class="thumb-menu img" style="background-image: url(images/4j.jpeg);">
							</a>
							<a href="#" class="thumb-menu img" style="background-image: url(images/35.jpg);">
							</a>
							<a href="#" class="thumb-menu img" style="background-image: url(images/1b.jpg);">
							</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Newsletter</h2>
						<p>write to us to let us know what you think about the restaurant.</p>
						<form action="#" class="subscribe-form">
							<div class="form-group">
								<input type="text" class="form-control mb-2 text-center" placeholder="Enter email address">
								<input type="submit" value="Subscribe" class="form-control submit px-3">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0 bg-primary py-3">
			<div class="row no-gutters">
				<div class="col-md-12 text-center">

					<p class="mb-0"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  <i class="fa fa-heart" aria-hidden="true"></i> BRACHETTO<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
					</div>
				</div>
			</div>
		</footer>
		

		<!-- loader 
		<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>-->
`;
    
class BookTableSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    appendCssLinks(this.shadowRoot);    
    this.shadowRoot.appendChild(template_booktable.content.cloneNode(true));
  }
}
window.customElements.define('booktable-section', BookTableSection);



function appendCssLinks(shadowRoot) {
    const cssFiles = [
      'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'css/style.css',
      'css/animate.css',
      'css/owl.carousel.min.css',
      'css/owl.theme.default.min.css',
      'css/magnific-popup.css',
      'css/bootstrap-datepicker.css',
      'css/jquery.timepicker.css',
      'css/flaticon.css'
    ];
  
    cssFiles.forEach(cssFile => {
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', cssFile);
      shadowRoot.appendChild(linkElem);
    });
  }


  function appendJsScripts(shadowRoot) {
    const jsFiles = [
      'js/jquery.min.js',
      'js/jquery-migrate-3.0.1.min.js',
      'js/popper.min.js',
      'js/bootstrap.min.js',
      'js/jquery.easing.1.3.js',
      'js/jquery.waypoints.min.js',
      'js/jquery.stellar.min.js',
      'js/owl.carousel.min.js',
      'js/jquery.magnific-popup.min.js',
      'js/jquery.animateNumber.min.js',
      'js/bootstrap-datepicker.js',
      'js/jquery.timepicker.min.js',
      'js/scrollax.min.js',
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false',
      'js/google-map.js',
      'js/main.js'
    ];
  
    jsFiles.forEach(jsFile => {
      const scriptElem = document.createElement('script');
      scriptElem.setAttribute('src', jsFile);
      shadowRoot.appendChild(scriptElem);
    });
  }
  