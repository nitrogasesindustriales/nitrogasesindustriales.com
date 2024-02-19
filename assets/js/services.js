const SERVICES  = [
    {
        name:'PRUEBA HIDROSTÁTICAS CERTIFICADAS ',
        image:'test',
    },
    {
        name:'VENTA DE REGULADORES ACETILENO CO2 OXIGENO NITROGENO OXIGENO HELIO ',
        image:'sales',
    },
    {
        name:'MANTENIMIENTO GENERAL REGULADORES ',
        image:'maintenance',
    },
    {
        name:'VENTA MANGUERA ALTA PRESIÓN  CON ACOPLES ',
        image:'sales_2',
    },
    {
        name:'VENTA EQUIPOS DE OXICORTE',
        image:'sales_3',
    },
    {
        name:'VENTA CILINDROS DE NITRÓGENO OXÍGENO ARGÓN CO2 ACETILENO  DE TODAS LAS CAPACIDADES',
        image:'sales_4',
    },
    {
        name:'VENTA DE VALVULAS DE NITROGENO ARGON OXIGENO ACETILENO CO2 ',
        image:'sales_5',
    },
    {
        name:'VENTA DE PORTACILINDROS',
        image:'sales_6',
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
                <figure class="image-box">
                <a href="https://storyset.com/shopping">
                <img src="assets/svg/${i.image}.svg"
                        alt=""> </a>
                        </figure>
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