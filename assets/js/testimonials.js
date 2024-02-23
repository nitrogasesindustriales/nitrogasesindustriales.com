const TESTIMONIALS  = [
    {
        name:'',
        image:'',
    }
]
$(document).ready(function() {
    const box = $('.testimonials');
    box.empty();
    $.each(TESTIMONIALS, function (key, i) {
        box.append(`
        <div class="testimonial-block-two">
            <div class="inner-box">
                <figure class="author-thumb"><img src="${i.image}" alt="">
                </figure>
                <div class="inner">
                    <ul class="rating clearfix">
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                    </ul>
                    <p></p>
                    <h5>${i.name}</h5>
                </div>
            </div>
        </div>
        `);
    })
});