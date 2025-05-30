window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  const intro = document.querySelector(".transition");

  setTimeout(() => {
    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 2000);
});

const choices = document.querySelectorAll('.project-choice');
const projects = document.querySelector('.projects-items');
const certificates = document.querySelector('.certificates');
const abilities = document.querySelector('.abilities')

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    choices.forEach(c => c.classList.remove('chosen'));
    choice.classList.add('chosen');

    projects.classList.remove('active-section');
    certificates.classList.remove('active-section');
    abilities.classList.remove('active-section');

    const selected = choice.dataset.project;

    if (selected === 'projects') {
      projects.classList.add('active-section');
    } else if (selected === 'certificates') {
      certificates.classList.add('active-section');
    } else{
      abilities.classList.add('active-section');
    }

    setTimeout(() => {
      const activeSection = document.querySelector('.active-section');
      const items = activeSection.querySelectorAll('.item');

      document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('bounce-in-right');
      });

      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('bounce-in-right');

        item.addEventListener('animationend', () => {
          item.classList.remove('bounce-in-right');
        }, { once: true });
      });
    }, 50);
  });
});

$(document).ready(function () {

  const navItems = $('.nav-item');

  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() + header.outerHeight();
    let activeSectionIndex = 0;

    if (scrollPosition < 350) {
      $('.about-img').removeClass('entrada-right').addClass('saida-right')
      $('.about-txt').removeClass('entrada-left').addClass('saida-left')
      $('.about-me').removeClass('entrada-left').addClass('saida-left')
    }
    if (scrollPosition >= 350) {
      $('.about-img').removeClass('saida-right').addClass('entrada-right')
      $('.about-txt').removeClass('saida-left').addClass('entrada-left')
      $('.about-me').removeClass('saida-left').addClass('entrada-left')
    }
    if (scrollPosition < 900) {
      $('.project-wrapper').removeClass('entrada-left').addClass('saida-left')
      $('.choice').removeClass('entrada-left').addClass('saida-left')
    }
    if (scrollPosition >= 900) {
      $('.choice').removeClass('saida-left').addClass('entrada-left')
      $('.project-wrapper').removeClass('saida-left').addClass('entrada-left')
    }
    if (scrollPosition < 600) {
      activeSectionIndex = 0;
    } else if (scrollPosition < 1150) {
      activeSectionIndex = 1;
    } else if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      activeSectionIndex = 3;
    }
    else {
      activeSectionIndex = 2;
    }

    navItems.removeClass('ativa');
    $(navItems[activeSectionIndex]).addClass('ativa');

  });

  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  $('.certificate-img').on('click', function () {
    var newSrc = $(this).find('img').attr('src');
    $('.view-certificate').addClass('show showCertificate').find('img').attr('src', newSrc);
    $('body').addClass('mostrar-before');
  });

  $('.project-item').on('click', function () {
    var project = $(this).find('.project-title h4').text();
    $('.view-project').addClass('show showCertificate').find('h2').text(project);
    $('body').addClass('mostrar-before');
  });

  $(document).on('click', function (e) {
    const isCertificate = $(e.target).closest('.view-certificate, .certificate-img').length;
    const isProject = $(e.target).closest('.view-project, .project-item').length;

    if ($('body').hasClass('mostrar-before') && !isCertificate && !isProject) {
      $('.view-certificate, .view-project').removeClass('show showCertificate');
      $('body').removeClass('mostrar-before');
    }
  })
  $('.project-item').hover(
    function () {
      $(this).find('.project-about').hide();
      $(this).addClass('hide-before hovered');
    },
    function () {
      $(this).find('.project-about').show();
      $(this).removeClass('hide-before hovered');
    }
  );
  $('.modes').change(function () {
    if ($(this).is(':checked')) {
      $('body').addClass('light-mode');
    } else {
      $('body').removeClass('light-mode');
    }
  });
})