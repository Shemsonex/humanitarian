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
</section>`;
    
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
  