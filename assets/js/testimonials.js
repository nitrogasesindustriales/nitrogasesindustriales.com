const CUSTOMERS = [
    {
        name: "REPUESOS Y SERVICIOS DIESEL  & R SAS ",
        image: "https://i.postimg.cc/W3nw3vCz/Screenshot-20240223-142110-2.png"
    },

    {
        name: "LINEA DE VIDA LTDA",
        image: "https://i.postimg.cc/Y2vTPDWg/IMG-20240223-WA0025.jpg"
    },

    {
        name: "DISTRIBUIDORA DIPRO",
        image: "https://i.postimg.cc/fLZvDLH1/Screenshot-20240222-101756-2.png"
    },

    {
        name: "EXTINTORES MTF",
        image: "https://i.postimg.cc/sXFNSsTJ/Screenshot-20240222-101233-2.png"
    },

    {
        name: "PROCABLES SAS",
        image: "https://i.postimg.cc/L6yQDzy5/Screenshot-20240222-100313-2.png"
    },

    {
        name: "ZOA SERVICIOS VETERINARIOS SAS",
        image: "https://i.postimg.cc/1Xs7CMhn/Screenshot-20240222-101656-2.png"
    },

    {
        name: "MICROAMBIENTAL SAS",
        image: "https://i.postimg.cc/MTW1gLHS/Screenshot-20240222-101621-2.png"
    },

    {
        name: "CENTRO COMERCIAL CENTRO MAYOR",
        image: "https://i.postimg.cc/vZcqNcjz/Screenshot-20240222-101525-2.png"
    },

    {
        name: "LABORATORIO ENERXIS SAS",
        image: "https://i.postimg.cc/v8tNgRfW/Screenshot-20240222-101514-2.png"
    },

    {
        name: "ABC FUMISERVICES FUMIGACION Y EXTINTORES SAS",
        image: "https://i.postimg.cc/GpPk7RcK/Screenshot-20240222-101449-2.png"
    },

    {
        name: "REPUESTOS Y SERVICIOS DIESEL Y & R SAS",
        image: "https://i.postimg.cc/HxM0P0jC/Screenshot-20240223-142110-2.png"
    },

    {
        name: "SOCIEDAD DE CAMELL EXTINTORES LTDA",
        image: "https://i.postimg.cc/BZLZkYqF/Screenshot-20240222-102256-2.png"
    },

    {
        name: "EXTINTORES RAMIREZ M . SAS",
        image: "https://i.postimg.cc/L800cT4q/Screenshot-20240222-102246-2.png"
    },

    {
        name: "UNIVERSIDAD DE LA SABANA",
        image: "https://i.postimg.cc/d1KMfBn2/Screenshot-20240222-103152-2.png"
    },

    {
        name: "BELAIR SAS",
        image: "https://i.postimg.cc/TYBtQPtm/Screenshot-20240222-103205-2.png"
    },

    {
        name: "SUPERMERCADOS ECO SAS",
        image: "https://i.postimg.cc/jjxPh0YP/IMG-20240222-WA0055.jpg"
    },

    {
        name: "EXTINTORES CAPITAL ",
        image: "https://i.postimg.cc/kgXQd6fL/IMG-20240222-WA0061.jpg"
    },

    {
        name: "FILTRADE  SAS",
        image: "https://i.postimg.cc/SQgQvnYn/Screenshot-20240222-171547-2.png"
    },

    {
        name: "INDUSTRIAL 180",
        image: "https://i.postimg.cc/HsQmCjV0/Screenshot-20240222-171414-2.png"
    },

    {
        name: "HACH",
        image: "https://i.postimg.cc/c4d9rJFB/Screenshot-20240222-171404-2.png"
    },

    {
        name: "CIMA SAS",
        image: "https://i.postimg.cc/j5Q6bHY0/Screenshot-20240222-171355-2.png"
    },

    {
        name: "SAMSUNG",
        image: "https://i.postimg.cc/tTSTWJhn/Screenshot-20240222-171342-2.png"
    },

    {
        name: "METALICAS & ESTRUCTURAS SAS",
        image: "https://i.postimg.cc/TwgxYPtX/Screenshot-20240222-171328-2.png"
    },

    {
        name: "ALF SOLUCIONES METALICAS ",
        image: "https://i.postimg.cc/rm8jznJF/Screenshot-20240222-171319-2.png"
    },

    {
        name: "SANTA CLARA",
        image: "https://i.postimg.cc/SKmCGXzg/Screenshot-20240222-171227-2.png"
    },

    {
        name: "MULTICONSTRUCCIONES SAS",
        image: "https://i.postimg.cc/X7M8CYxz/Screenshot-20240222-171259-2.png"
    },

    {
        name: "TECNOMECANIZADOS",
        image: "https://i.postimg.cc/0yXK7tPy/Screenshot-20240222-171240-2.png"
    },

    {
        name: "MANTENIMIENTO Y AUTOMATIZACIONES HIDRAULICAS ",
        image: "https://i.postimg.cc/wTfjr7PW/Screenshot-20240222-171309-2.png"
    },

    {
        name: "DIACCES",
        image: "https://i.postimg.cc/fRnrDv6k/IMG-20240222-WA0063.jpg",
    }


]
$(document).ready(function () {
    const box = $('.customers');
    box.empty();
    box.append(`<div class="crm">`);
    CUSTOMERS.forEach((testimonial) => {
        box.append(`
            <div class="item">
                <div class="testimonial-item" style="width:100px;">
                    <div class="">
                        <img src="${testimonial.image}" class="logo_customer" alt="${testimonial.name}">
                    </div>
                    <div class="testimonial-content">
                    <p>${testimonial.name}</p>
                </div>
                </div>
            </div>
        `);
    });
    box.append(`</div>`);
});