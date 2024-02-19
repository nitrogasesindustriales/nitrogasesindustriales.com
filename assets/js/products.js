const SERVICES  = [
    {
        name:'NITROGENO',
        image:'NITROGENO',
    },
    {
        name:'ARGON',
        image:'ARGON',
    },
    {
        name:'OXIGENO INDUSTRIAL',
        image:'OXIGENO INDUSTRIAL',
    },
    {
        name:'AGAMIX',
        image:'AGAMIX',
    },
    {
        name:'MEZCLAS ESPECIALES',
        image:'MEZCLAS ESPECIALES',
    },
    {
        name:'CO2',
        image:'CO2',
    },
    {
        name:'GAS COMPRIMIDO',
        image:'GAS COMPRIMIDO',
    },
    {
        name:'ACETILENO',
        image:'ACETILENO',
    },
    {
        name:'HELIO',
        image:'HELIO',
    },
    {
        name:'RECARGA CO2 EXTINTOR',
        image:'RECARGA CO2 EXTINTOR',
    },
]
{/* <a href="https://storyset.com/shopping">Shopping illustrations by Storyset</a> */}
$(document).ready(function() {
    const box = $('.box_products');
    box.empty();

    $.each(SERVICES, function (key, i) {
        box.append(`<div class="col-lg-6 col-md-6 col-sm-12 shop-block">
        <div class="shop-block-one wow fadeInUp animated" data-wow-delay="00ms"
            data-wow-duration="1500m">
            <div class="inner-box">
                <figure class="image-box"><img src="assets/products/${i.image}.jpg"
                        alt=""></figure>
                <div class="lower-content">
                    <div class="shape"
                        style="background-image: url(assets/images/shape/shape-7.png);">
                    </div>
                    <span></span>
                    <h4>${i.name}</h4>
                    <h6></h6>
                    <p>
                    </p>
                    <div class="btn-box">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=573222439710&text=Hola%20quisiera%20información%20sobre%20${i.name}" class="theme-btn btn-two">Cotizar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    })


});