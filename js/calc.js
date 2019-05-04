progress_bar = $('#progress');

progress_bar.circleProgress({
    inited: true,
    size: 120
});

// input variable

var per10=0.1, per20=0.2, per5=0.05, per=0;
var curr_eur=0.887118, curr_usd=1.12725;


// formula calculate cars

$('#euroblaha').submit(function(e) {
    e.preventDefault();

    var age = $('#age5').val();
    var motor = $('#motor5').val();
    var vol = $('#vol5').val();
    var price = $('#price5').val() * curr_eur;

    var discount = $('input[name=drone]:checked').val();

    if (age > 15) age = 15;

    switch (+discount) {

        case 1:
            discountamount = 0.5;
            break;

        case 2:
            discountamount = 0.75;
            break;

        default:
            discountamount = 1;
    }

    var calc = function (n) {

        var poshlina = parseFloat(price * per10);
        var aktsiz = parseFloat(n * age * (vol / 1000) * discountamount);
        var nds = parseFloat((parseFloat(poshlina) + parseFloat(aktsiz) + parseFloat(price)) * 0.2);
        var tax = parseFloat(parseFloat(poshlina) + parseFloat(aktsiz) + parseFloat(nds));
        calculate(price, poshlina, aktsiz, nds, tax);

    };

    switch (+motor) {

        case 1:
            if (vol < 3000) {

                calc(50);

            } else {
                calc(100);
            }
            break;

        case 2:
            if (vol < 3500) {

                calc(75);

            } else {
                calc(150);
            }
            break;

    }
});

// formula calculate electro cars

$('#electro-auto').submit(function(e){
    e.preventDefault();

    var price = $('#price-electro').val()*curr_eur;
    var kvt = $('#kvt').val();
    var nds = ((+kvt)+(+price))*per;
    tax = ((+kvt)+(+nds));
    calculate(price,0,0,0,0)
});



$('#hard-drive').submit(function(e){

    e.preventDefault();

    var age = $('#age3').val();
    var motor = $('#motor3').val();
    var vol = $('#vol3').val();
    var price = $('#price3').val()*curr_eur;
    var wieght = $('#wieght').val();
    var tax;
    var poshlina = parseFloat(price*per10);
    var calc = function(n){
        var aktsiz = parseFloat(n*vol);
        var nds = parseFloat((parseFloat(poshlina)+parseFloat(aktsiz)+parseFloat(price))*0.2);
        tax = (((price*per10)+(vol*n)+(+price))*per20)+(price*per10)+(vol*n);
        calculate(price,poshlina,aktsiz,nds,tax);};

    switch(+motor){
        case 1:
            switch(+wieght){
                case 1:
                    switch(+age){
                        case 1:
                            calc(0.01);
                            break;
                        case 2:
                            calc(0.02);
                            break;
                        case 3:
                            calc(0.8);
                            break;
                        case 4:
                            calc(1);
                            break;
                    }
                    break;
                case 2:
                    switch(+age){
                        case 1:
                            calc(0.013);
                            break;
                        case 2:
                            calc(0.026);
                            break;
                        case 3:
                            calc(1.04);
                            break;
                        case 4:
                            calc(1.3);
                            break;
                    }
                    break;
                case 3:
                    switch(+age){
                        case 1:
                            calc(0.016);
                            break;
                        case 2:
                            calc(0.033);
                            break;
                        case 3:
                            calc(1.32);
                            break;
                        case 4:
                            calc(1.65);
                            break;
                    }
                    break;
            }
            break;
        case 2:
            switch(+wieght){
                case 1:
                    switch(+age){
                        case 1:
                            calc(0.01);
                            break;
                        case 2:
                            calc(0.02);
                            break;
                        case 3:
                            calc(0.8);
                            break;
                        case 4:
                            calc(1);
                            break;
                    }
                    break;
                case 2:
                    switch(+age){
                        case 1:
                            calc(0.013);
                            break;
                        case 2:
                            calc(0.026);
                            break;
                        case 3:
                            calc(1.04);
                            break;
                        case 4:
                            calc(1.3);
                            break;
                    }
                    break;
                case 3:
                    switch(+age){
                        case 1:
                            calc(0.016);
                            break;
                        case 2:
                            calc(0.033);
                            break;
                        case 3:
                            calc(1.32);
                            break;
                        case 4:
                            calc(1.65);
                            break;
                    }
                    break;
            }
            break;
        default:alert('Упс, что-то пошло не так');
    }
});


$('#moto').submit(function(e){
    e.preventDefault();
    var price = $('#price4').val()*curr_eur;
    var vol = $('#vol4').val();
    var tax;
    var poshlina = parseFloat(price*per10);

    if(vol <= 500){
        aktsiz = parseFloat(vol*0.062);
        nds = parseFloat((parseFloat(poshlina)+parseFloat(aktsiz)+parseFloat(price))*per20);
        tax = ((poshlina+(vol*0.062)+(+price))*per20)+(price*per10)+(vol*0.062);
        calculate(price,poshlina,aktsiz,nds,tax);
    }
    else if(500 < vol && vol <= 800){
        aktsiz = parseFloat(vol*0.443);
        nds = parseFloat((parseFloat(poshlina)+parseFloat(aktsiz)+parseFloat(price))*per20);
        tax = (((price*per10)+(vol*0.443)+(+price))*per20)+(price*per10)+(vol*0.443);
        calculate(price,poshlina,aktsiz,nds,tax);
    }
    else{
        aktsiz = parseFloat(vol*0.447);
        nds = parseFloat((parseFloat(poshlina)+parseFloat(aktsiz)+parseFloat(price))*per20);
        tax = (((price*per10)+(vol*0.447)+(+price))*per20)+(price*per10)+(vol*0.447);
        calculate(price,poshlina,aktsiz,nds,tax);
    }
});





// Calculating and show result

function calculate(price,poshlina,aktsiz,nds,tax) {
    var decimal_places = 2;

    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    $('.poshlina').animateNumber({

        number: poshlina * decimal_factor,

        numberStep: function (now, tween) {

            var floored_number = (Math.floor(now) / decimal_factor) * curr_usd, target = $(tween.elem);
            floored_number = floored_number.toFixed(decimal_places);
            floored_number = floored_number.toString().replace('.', ',');
            target.text(floored_number + ' USD');
        }
    }, 800);

    $('.aktsiz').animateNumber({

        number: aktsiz * decimal_factor,

        numberStep: function (now, tween) {

            var floored_number = (Math.floor(now) / decimal_factor) * curr_usd,
                target = $(tween.elem);
            floored_number = floored_number.toFixed(decimal_places);
            floored_number = floored_number.toString().replace('.', ',');
            target.text(floored_number + ' USD');
        }
    }, 800);

    $('.nds').animateNumber({

        number: nds * decimal_factor,
        numberStep: function (now, tween) {

            var floored_number = (Math.floor(now) / decimal_factor) * curr_usd, target = $(tween.elem);
            floored_number = floored_number.toFixed(decimal_places);
            floored_number = floored_number.toString().replace('.', ',');
            target.text(floored_number + ' USD');
        }
    }, 800);

    $('.tax').animateNumber({

        number: tax * decimal_factor,
        numberStep: function (now, tween) {

            var floored_number = (Math.floor(now) / decimal_factor) * curr_usd, target = $(tween.elem);
            floored_number = floored_number.toFixed(decimal_places);
            floored_number = floored_number.toString().replace('.', ',');
            target.text(floored_number + ' USD');
        }
    }, 800);


    // Progress bar block

    var progress_bar = $('#progress');

    var val = progress_bar.circleProgress('value');

    var progress_percent = Math.round((tax / parseFloat(price)) * 100);

    progress_bar.attr('data-percent', progress_percent);


    progress_bar.circleProgress({
        value: progress_percent / 100,
        animationStartValue: val,
        size: 120,
        fill: { color: "#48C309" },
        animation: { duration: 800, easing: "circleProgressEasing" }
    });
}



// Clear all output 0;

$('.tabs-link a').on('click', function() {

    var poshlina = 0;
    var aktsiz = 0;
    var nds = 0;
    var tax = 0;

    $('.tax, .aktsiz, .nds, .poshlina').animateNumber({

        number: tax,
        numberStep: function (now, tween) {

            var floored_number = (Math.floor(now)) * curr_usd, target = $(tween.elem);
            target.text(floored_number + ' USD');
        }
    }, 800);


    progress_bar = $('#progress');

    progress_bar.attr('data-percent', 0);

    progress_bar.circleProgress({
        value: 0
    });
});