const SERVICES  = [
    {
        name:'MANGUERA ALTA PRESION ACOPLES_',
        image:'MANGUERA ALTA PRESION ACOPLES_',
    },
    {
        name:'MANTENIMIENTO REGULADORES Y EQUIPOS_',
        image:'MANTENIMIENTO REGULADORES Y EQUIPOS_',
    },
    {
        name:'PORTACILINDROS',
        image:'PORTACILINDROS',
    },
    {
        name:'RECARGA ACETILENO',
        image:'RECARGA ACETILENO',
    },
    {
        name:'RECARGA AIRE COMPRIMIDO',
        image:'RECARGA AIRE COMPRIMIDO',
    },
    {
        name:'RECARGA ARGON',
        image:'RECARGA ARGON',
    },
    {
        name:'RECARGA CO2 EXTINTORES_',
        image:'RECARGA CO2 EXTINTORES_',
    },
    {
        name:'RECARGA DIOXIDO DE CARBONO',
        image:'RECARGA DIOXIDO DE CARBONO',
    },
    {
        name:'RECARGA GASES ESPECIALES_',
        image:'RECARGA GASES ESPECIALES_',
    },
    {
        name:'RECARGA HELIO',
        image:'RECARGA HELIO',
    },
    {
        name:'RECARGA MEZCLA',
        image:'RECARGA MEZCLA',
    },
    {
        name:'RECARGA OXIGENO INDUSTRIAL',
        image:'RECARGA OXIGENO INDUSTRIAL',
    },
    {
        name:'VENTA CILINDROS NITRÓGENO ARGON ACETILENO CO2 OXÍGENO MEZCLA',
        image:'VENTA CILINDROS NITRÓGENO ARGON ACETILENO CO2 OXÍGENO MEZCLA',
    },
    {
        name:'VENTA EQUIPOS OXICORTE_',
        image:'VENTA EQUIPOS OXICORTE_',
    },
    {
        name:'VENTA REGULADOR NITRÓGENO ACETILENO CO2 ARGON OXIGENO ACETILENO HELIO',
        image:'VENTA REGULADOR NITRÓGENO ACETILENO CO2 ARGON OXIGENO ACETILENO HELIO',
    },
    {
        name:'VENTA VALVULAS NITRÓGENO ARGON CO2 OXIGENO ACETILENO',
        image:'VENTA VALVULAS NITRÓGENO ARGON CO2 OXIGENO ACETILENO',
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
                <figure class="image-box"><img src="assets/products/${i.image}.avif"
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