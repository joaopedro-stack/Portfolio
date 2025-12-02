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

    const selected = choice.dataset.choice;

    if (selected === 'projects') {
      projects.classList.add('active-section');
    } else if (selected === 'certificates') {
      certificates.classList.add('active-section');
    } else {
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

  $('.certificate').on('click', function () {
    var bg = $(this).css('background-image');
    var imageUrl = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    $('.view-certificate').addClass('show showCertificate').find('img').attr('src', imageUrl);
    $('body').addClass('mostrar-before');
  });

  $('.project-item').on('click', function () {
    var project = $(this).find('.project-about h4').text();
    var projectdescription = $('.project-description');
    var usedproject = $('.used-project');
    var projectselected = $(this).data('project');
    var acessProject = $('.acessar-projeto');
    var acessRepo = $('.acessar-repositorio')
    var acessLinkedin = $('.acessar-linkendin')
    var videoProject = $('.video-projeto')
    if (projectselected == "Weather App") {
      projectdescription.html(`Neste projeto utilizei o Vite para criar um app em React a idéia do projeto e mostrar a previsão do tempo atual e a dos próximos 5 dias com base na cidade que você pesquisar. <br><br> Utilizei o Axios para consumir a API do OpenWeather para buscar as informações sobre o clima também utilizei a API da Unsplash que gera as imagens de fundo da tela ele também utiliza a cidade que você utilizou como parametro para buscar a próxima imagem de fundo.`);
      usedproject.html(`Unsplash API <br> OpenWeather API <br> React <br> HTML <br> CSS <br> Javascript`)
      acessProject.attr('href', 'https://weatherapp-stack.netlify.app/');
      acessProject.css("display", 'flex');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/WeatherApp')
      videoProject.attr('src', 'https://drive.google.com/file/d/1mgbCgYMikjFQmWCo9gHCFDz2waNtgKBb/preview')
    } else if (projectselected == "Jogo da Memória") {
      projectdescription.html(`Este projeto foi o fechamento do meu curso técnico em informática, neste projeto criei um jogo da memória utilizando C# com o windows form ele foi desenvolvido no Visual Studio 2022, mesmo dando trabalho e consumindo muito tempo foi muito gratificante e divertido fazer ele foi um projeto trabalhoso e que fiz do jeito que queria, fiquei muito feliz com o resultado.`);
      usedproject.html(`C# <br> .Net Framework <br> Windows Form`)
      acessProject.css("display", 'none');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/Jogo_Da_Memoria')
      videoProject.attr('src', 'https://drive.google.com/file/d/1Q2WFwfq1V-N5AbbD3yEvJwIQJcnemSI9/preview')
    } else if (projectselected == "Burgos House") {
      projectdescription.html(`Visando criar algo como um e-commerce esse foi meu primeiro feito para uma hamburgueria fícticia, contém carrinho e os pedidos chegam via whatsapp`);
      usedproject.html(`HTML <br> CSS <br> Javascript <br>JQUERY`);
      acessProject.css("display", 'flex');
      acessProject.attr('href', 'https://burgoshouse.netlify.app/');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/BurgosHouse')
      videoProject.attr('src', 'https://drive.google.com/file/d/1T0DVQDQZQ-UCJhoq_yNdse1L9STyPsKC/preview')
    } else if (projectselected == "Movies Lib") {
      projectdescription.html(`Projeto feito para pesquisar sobre filmes, nele você pode efetuar a pesquisa ver a sinopse e todas as informações como faturamento, orçamento, duração etc... `);
      usedproject.html(`HTML <br> CSS <br> Javascript <br>React <br> Vite <br> TMDB API`);
      acessProject.css("display", 'flex');
      acessProject.attr('href', 'https://joaopflix.netlify.app/');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/movies_lib')
      videoProject.attr('src', 'https://drive.google.com/file/d/1pN9dmBdKFvEBXezzPhX7eu6rwXUjANOo/preview')
    } else if (projectselected == "To Do") {
      projectdescription.html(`Este projeto foi feito para me aprimorar em Typescript, funciona como uma lista de afazeres para organizar o seu dia a dia`);
      usedproject.html(`HTML <br> CSS <br> Typescript <br>React`);
      acessProject.css("display", 'flex');
      acessProject.attr('href', 'https://to-do-reacttypescript.netlify.app/');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/To-Do-Typescript')
      videoProject.attr('src', 'https://drive.google.com/file/d/1SFVLV4N_3xGmseft3WYskWjcxgwgB4k6/preview')
    } else if (projectselected == "ReactGram") {
      projectdescription.html(`Este Projeto foi criado como um clone do instagram e foi utilizada várias tecnologias para a sua criação e hospedagem, como Cloudinary e Render
        ele possui várias funcionalidades, Registro, Login, Like e comentários, postagem, edição e deleção de postagens uma api que foi bem construída com meios de autenticação e token para algumas rotas feito com JWT`);
      usedproject.html(`HTML <br> CSS <br> Javascript <br>React<br> NodeJs <br> MongoDB <br> Express`);
      acessProject.css("display", 'flex');
      acessProject.attr('href', 'https://reactgraam.netlify.app/');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/ReactGram')
      videoProject.attr('src', 'https://drive.google.com/file/d/1Hsht_fK-bR_pWHl27oanme1khhx9Ndq8/preview')
    }
    else {
      projectdescription.html(`Este projeto foi criado com a funcionalidade de recomendar filmes com base de outro filme que você goste, o usuário coloca o nome do filme que gosta e o app faz a busca com esse filme na API e busca filmes parecidos com o relatado.`);
      usedproject.html(`Tmdb API <br> React <br> HTML <br> CSS <br> Javascript`)
      acessProject.css("display", 'flex');
      acessProject.attr('href', 'https://cinemmatch.netlify.app/');
      acessRepo.attr('href', 'https://github.com/joaopedro-stack/CineMatch')
      videoProject.attr('src', 'https://drive.google.com/file/d/1HovzHJxd0tGjwa1SrqqwYHKR-qw2BVsK/preview')
    }
    $('.view-project').addClass('show showCertificate').find('h2').text(project);
    $('body').addClass('mostrar-before');
  });

  $(document).on('click', function (e) {
    const isCertificate = $(e.target).closest('.view-certificate, .certificate').length;
    const isProject = $(e.target).closest('.view-project, .project-item').length;

    if ($('body').hasClass('mostrar-before') && !isCertificate && !isProject) {
      $('.view-certificate, .view-project').removeClass('show showCertificate');
      $('body').removeClass('mostrar-before');
    }
  })
  $('.modes').change(function () {
    if ($(this).is(':checked')) {
      $('body').addClass('light-mode');
    } else {
      $('body').removeClass('light-mode');
    }
  });
})