

const Header = `
<header class="main-header">
<div class="header-lower">
    <div class="shape" style="background-image: url(assets/images/shape/shape-1.png);"></div>
    <div class="outer-box">
        <div class="logo-box">
            <figure class="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""></a>
            </figure>
        </div>
        <div class="menu-area clearfix">
            <div class="mobile-nav-toggler">
                <i class="icon-bar"></i>
                <i class="icon-bar"></i>
                <i class="icon-bar"></i>
            </div>
            <nav class="main-menu navbar-expand-md navbar-light">
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="services.html">Servicios</a></li>
                        <li><a href="products.html">Productos</a></li>
                        <li><a href="about.html">Sobre nosotros</a></li>
                        <li><a href="contact.html">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
</div>
<div class="sticky-header">
    <div class="outer-box">
        <div class="logo-box">
            <figure class="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""></a>
            </figure>
        </div>
    </div>
</div>
</header>
<div class="mobile-menu">
<div class="menu-backdrop"></div>
<div class="close-btn"><i class="fas fa-times"></i></div>

<nav class="menu-box">
    <div class="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="" title=""></a>
    </div>
    <div class="menu-outer"></div>
</nav>
</div>

`
const Footer = `    
<footer class="main-footer">
<div class="pattern-layer">
    <div class="pattern-1" style="background-image: url(assets/images/shape/shape-12.png);"></div>
    <div class="pattern-2" style="background-image: url(assets/images/shape/shape-13.png);"></div>
    <div class="pattern-3" style="background-image: url(assets/images/shape/shape-14.png);"></div>
</div>
<div class="auto-container">
    <div class="footer-top clearfix">
        <div class="line-shape" style="background-image: url(assets/images/shape/shape-11.png);"></div>
        <div class="text pull-left">
            <h2> <span>Llámanos</span> para tener una mejor experiencia</h2>
        </div>
        <div class="support-box pull-right">
            <a href="#"><i class="fas fa-phone"></i><span
            class="data_phone"></span></a>
        </div>
    </div>
    <div class="widget-section">
        <div class="row clearfix">
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div class="footer-widget logo-widget">
                    <figure class="footer-logo"><a href="index.html"><img
                                src="assets/images/footer-logo.png" alt=""></a></figure>
                    <div class="text">
                        <p></p>
                    </div>
                    <div class="schedule-box">
                        <h6>Horarío</h6>
                        <ul class="list clearfix">
                            <span class="data_shedule"></span>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div class="footer-widget contact-widget ml-70">
                    <div class="widget-title">
                        <h4>Contácto</h4>
                    </div>
                    <div class="widget-content">
                        <ul class="info-list clearfix">
                            <li><i class="fal fa-map-marker-alt"></i><span class="data_address"></span></li>
                            <li><i class="fal fa-phone"></i>Llámanos: <a href="tel:3336660001"><span
                                        class="data_phone"></span></a></li>
                            <li><i class="fal fa-envelope-open-text"></i><a
                                    href="mailto:contacto@nitrogasesindustriales.com"><span
                                        class="data_email"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div class="footer-widget links-widget ml-70">
                    <div class="widget-title">
                        <h4>Enlaces</h4>
                    </div>
                    <div class="widget-content">
                        <ul class="links-list clearfix">
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="services.html">Servicios</a></li>
                            <li><a href="about.html">Sobre nosotros</a></li>
                            <li><a href="contact.html">Contáctanos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <div class="auto-container">
        <div class="bottom-inner">
            <div class="copyright">
                <p>©Copyright Nitrogases Industriales Todos los derechos reservados.</p>
            </div>
            <ul class="social-links clearfix">
                <li><a href="https://www.facebook.com/dayan.gomez.3192479?mibextid=ZbWKwL"><i
                            class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/nitrogases?igsh=Nmg2amkwdnFtdWdt"><i
                            class="fab fa-instagram"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=573222439710"><i class="fab fa-whatsapp"></i></a></li>
            </ul>

        </div>
    </div>
</div>
</footer>



<button class="scroll-top scroll-to-target" data-target="html">
<span class="fal fa-angle-up"></span>
</button>

`


const data = {
    phone: `322 2439710`,
    shedule: `Lunes a viernes de 7 AM a 6pm y sábado de 8 AM a 12 del dia`,
    email: `contacto@nitrogasesindustriales.com`,
    address: `Carrera 81b #9 26`
}


$(document).ready(function() {
    $('.component_header').html(Header)
    $('.component_footer').html(Footer)
    $('.data_phone').html(data.phone)
    $('.data_email').html(data.email)
    $('.data_address').html(data.address)
    $('.data_shedule').html(data.shedule)
});


