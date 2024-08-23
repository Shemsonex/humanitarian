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
template_hero.innerHTML = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/4m.jpeg');" data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="container">
			<div class="row no-gutters slider-text align-items-end justify-content-center">
				<div class="col-md-9 ftco-animate text-center mb-5">
					<h1 class="mb-2 bread">Menu</h1>
					<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>Menu <i class="fa fa-chevron-right"></i></span></p>
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



function appendCssLinks(shadowRoot) {
    const cssFiles = [
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