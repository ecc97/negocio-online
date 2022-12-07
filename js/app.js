$(document).ready(function(){
    $('.rollhover1').mouseenter(function(){
        $('#c1').show(1000);
        $('.rollhover1').css("padding", "20px");
        $('.rollhover1').css('transition', 'all 1s ease');
    })
    $('.col-md-3').mouseenter(function(){
        $('.rollhover1').css("padding", "0");
        $('.rollhover1').css('transition', 'all 1s ease');
    })
    $('.rollhover2').mouseenter(function(){
        $('#c2').show(1000);
        $('.rollhover2').css("padding", "20px");
        $('.rollhover2').css('transition', 'all 1s ease');
    })
    $('.col-md-3').mouseenter(function(){
        $('.rollhover2').css("padding", "0");
        $('.rollhover2').css('transition', 'all 1s ease');
    })
    $('.rollhover3').mouseenter(function(){
        $('#c3').show(1000);
        $('.rollhover3').css("padding", "20px");
        $('.rollhover3').css('transition', 'all 1s ease');
    })
    $('.col-md-3').mouseenter(function(){
        $('.rollhover3').css("padding", "0");
        $('.rollhover3').css('transition', 'all 1s ease');
    })
    $('.rollhover4').mouseenter(function(){
        $('#c4').show(1000);
        $('.rollhover4').css("padding", "20px");
        $('.rollhover4').css('transition', 'all 1s ease');
    })
    $('.col-md-3').mouseenter(function(){
        $('.rollhover4').css("padding", "0");
        $('.rollhover4').css('transition', 'all 1s ease');
    })
    $('#mostrarPCF1').click(function(){
        $('#mostrarPCF1').hide();
        $('#precioCF1').text('13000 COP');
    })
    $('#mostrarPCF2').click(function(){
        $('#mostrarPCF2').hide();
        $('#precioCF2').text('18000 COP');
    })
    $('#mostrarPCF3').click(function(){
        $('#mostrarPCF3').hide();
        $('#precioCF3').text('30000 COP');
    })
    $('#mostrarPB1').click(function(){
        $('#mostrarPB1').hide();
        $('#precioB1').text('20000 COP');
    })
    $('#mostrarPB2').click(function(){
        $('#mostrarPB2').hide();
        $('#precioB2').text('25000 COP');
    })
    $('#mostrarPB3').click(function(){
        $('#mostrarPB3').hide();
        $('#precioB3').text('27000 COP');
    })
    $('#mostrarPA1').click(function(){
        $('#mostrarPA1').hide();
        $('#precioA1').text('30000 COP');
    })
    $('#mostrarPA2').click(function(){
        $('#mostrarPA2').hide();
        $('#precioA2').text('35000 COP');
    })
    $('#mostrarPA3').click(function(){
        $('#mostrarPA3').hide();
        $('#precioA3').text('50000 COP');
    })
    $('#mostrarPPl1').click(function(){
        $('#mostrarPPl1').hide();
        $('#precioPl1').text('40000 COP');
    })
    $('#mostrarPPl2').click(function(){
        $('#mostrarPPl2').hide();
        $('#precioPl2').text('45000 COP');
    })
    $('#mostrarPPl3').click(function(){
        $('#mostrarPPl3').hide();
        $('#precioPl3').text('37000 COP');
    })
});