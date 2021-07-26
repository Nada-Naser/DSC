$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY>20)
      {
        $('#navigation').addClass('sticky');
        $('.astarted').removeClass('active');
      }
      else
      $('#navigation').removeClass('sticky');
  })
  $(window).on("load",function(){
    if(this.pageYOffset>40)
    {
      $('#navigation').addClass('sticky');

    }
    else
    $('#navigation').removeClass('sticky');
})

});

$(document).ready(function(){
  $('.appFeauture').click(function(){
    $('.feauture').addClass('active');
    $('.aHome').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.acontact').removeClass('active');
    $('.astarted').removeClass('active');
    $('.apricing').removeClass('active');
  })

  $('.pricing').click(function(){
    $('.apricing').addClass('active');
    $('.aHome').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.acontact').removeClass('active');
    $('.astarted').removeClass('active');
    $('.feauture').removeClass('active');
  })

  $('.home').click(function(){
    $('.aHome').addClass('active');
    $('.feauture').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.acontact').removeClass('active');
    $('.astarted').removeClass('active');
    $('.apricing').removeClass('active');
  })

  $('.gallary').click(function(){
    $('.aGallary').addClass('active');
    $('.aHome').removeClass('active');
    $('.feauture').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.acontact').removeClass('active');
    $('.astarted').removeClass('active');
    $('.apricing').removeClass('active');
  })

  $('.FAQ').click(function(){
    $('.aFAQ').addClass('active');
    $('.aHome').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.feauture').removeClass('active');
    $('.acontact').removeClass('active');
    $('.astarted').removeClass('active');
    $('.apricing').removeClass('active');
  })

  $('.contact').click(function(){
    $('.acontact').addClass('active');
    $('.aHome').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.feauture').removeClass('active');
    $('.astarted').removeClass('active');
    $('.apricing').removeClass('active');
  })

  $('.started').click(function(){
    $('.astarted').addClass('active');
    $('.aHome').removeClass('active');
    $('.aGallary').removeClass('active');
    $('.aFAQ').removeClass('active');
    $('.feauture').removeClass('active');
    $('.acontact').removeClass('active');
    $('.apricing').removeClass('active');
  })

});

