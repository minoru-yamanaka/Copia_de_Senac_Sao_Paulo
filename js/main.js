/*1747683664000*/

$(function() {

    $('.slick-area-estatico').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerPadding: 0,
                    centerMode: false,
                }
            }

        ]

    });

    // slider fale com a gente

    $('.slick-area-fale-com-gente').slick({

        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerPadding: 0,
                    centerMode: false,
                }
            }

        ]

    });


    $('.acesso-rapido-slick-area').slick({

        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    dots: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: true,
                    infinite: true,
                    centerMode: false,
                    centerPadding: 0,
                }
            }

        ]

    });

    $('.nossos-numeros-slick-area').slick({

        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: true,
                    centerMode: false,
                    centerPadding: 0,
                }
            }

        ]

    });

    $('.infra-estrutura-slick-area').slick({


        autoplay: false,
        centerMode: true,
        variableWidth: true,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrow: false,
                    centerMode: false,
                    variableWidth: true,
                    infinite: true,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    arrow: false,
                    dots: true,
                    centerMode: false,
                    centerPadding: 0
                }
            }

        ]

    });


    $('.slick-area-depoimentos-bolsas').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        dots: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    centerPadding: 0,
                    centerMode: false,
                }
            }

        ]

    });

    $('.slider-passo-passo__cursos-cozinha').slick({

        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        infinite: false,
        variableWidth: true,
        dots: false,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    centerPadding: 0,
                    dots: true,
                    centerMode: false,
                }
            }

        ]

    })

    $('.slick-area-sobre-senac').slick({

        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    centerPadding: 0,
                    centerMode: false,
                }
            }

        ]

    });


    // subtema slick area

    function slickSliderTema() {

        $('.subtema-slick-area').slick({

            slidesToShow: 4,
            slidesToScroll: 3,
            dots: true,
            autoplay: false,
            infinite: false,
            prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
            nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',

            responsive: [

                {
                    breakpoint: 1200,

                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: true,

                    }
                },

                {
                    breakpoint: 767,
                    settings: "unslick"
                }

            ]

        });

    };

    function widthResize(){

        $(window).resize(function(){

            var $windowWidth = $(window).width();

            if ($windowWidth > 767) {
                slickSliderTema();
            }

        });

    }


    $( document ).ready(function() {
        localStorage.removeItem('termo');
        slickSliderTema();
        widthResize();
        clickConfiguracaoPortletExperiencia()
    });

    // subtema slick area



    setTimeout(function() { $(window).trigger('resize') }, 1);


    // Init mega menu
    megaMenu.init($('.ssp-mega-menu .ssp-mega-menu__wrapper > ul > li'));




	 /* Track user click */
	 $('.ck-unidade').click(function(){

		  var unidade = $(this).data('ck');

		  manageCookieArray('ck-unidades', unidade);

	 });

	 $('.ck-curso').click(function(){

		  var curso= $(this).data('ck');

		  manageCookieArray('ck-cursos',  curso);

	 });


	 /*
		 * Exibe o prompt solicitando ao usuário a geolocation, caso ainda não
		 * tenha feito
		 */
	 function getLocation() {


    	if (navigator.geolocation) {

    		if(getCookie("accepted_geolocation") == null){

    			navigator.geolocation.watchPosition(showPosition);

    		}
    	}
	 }


	 /*
		 * Armazena em cookies a posicao do usuario e atualiza a tela
		 * Parametros: position - Latitude e Longitude do usuário
		 */
	 function showPosition(position) {

		writeCookie("accepted_geolocation" , 1);
		writeCookie("latitude" , position.coords.latitude);
		writeCookie("longitude" , position.coords.longitude);


		document.location.reload();


	 }

	 getLocation();

});


/*
 * Retorna o valor de um cookie Parametros: name - Nome do cookie a ser buscado
 */
function getCookie(c_name) {

	if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}


/*
 * Gerencia a logica de insercao nos vetores de cookies (unidades, cursos, etc)
 * Parametros: cookieName - Nome do cookie a ser armazenado cookieValue - Valor
 * do cookie a ser armazenado
 */
function manageCookieArray(cookieName, cookieValue, totalItens){

	// Tamanho do vetor de cookie
	var arraySize = 12;
	if(totalItens){

		arraySize = totalItens;
	}

	// Caso o cookie ainda não exista, cria
	if(getCookie(cookieName) == null){

	  writeCookie(cookieName, JSON.stringify([cookieValue]));

	  // Se já existe, faz um push no array
	}else{

	  var json_str = getCookie(cookieName);
	  var arr = JSON.parse(json_str);
	  var position = arr.indexOf(cookieValue);

	  // Novo elemento
	  if(position == -1) {

		  // Verifica se ainda existe posição vazia no array
		  if(arr.length < arraySize)
			  arr.unshift(cookieValue);

		  else{

			  arr.unshift(cookieValue);
			  arr.pop();
		  }

		// Elemento já existente, entra como mais recente
	  }else{

		  arr.splice(position, 1);
		  arr.unshift(cookieValue);

	  }

	  // Atualiza a variavel de cookie
	  writeCookie(cookieName, JSON.stringify(arr));

	}
}

/*
 * Insere / Atualiza o valor de um cookie Parametros: name - Nome do cookie a
 * inserido value - Informacao a ser armazenada no cookie
 */
function writeCookie(name, value, expirationHours, domain){

	var cookieString = name+"="+value+";  path=/ ; ";

	if(typeof expirationHours !== 'undefined' && expirationHours != '' && expirationHours != -1){

		var now = new Date();
		now.setTime(now.getTime() + ((expirationHours - 3) * 3600 * 1000));

		cookieString += ' expires=' + now.toUTCString() +'; ';

	}else{
		var now = new Date();
		now.setFullYear(9999);

		cookieString += ' expires=' + now.toUTCString() +'; ';

	}

	if(typeof domain !== 'undefined' && domain != '' && domain != -1){
		cookieString += ' domain=' + domain +'; ';
	}

	document.cookie = cookieString;
}

function resetSlickPosition(element){
	$(element).slick('setPosition');
}

function sliderCurso(element){

	$(element).not('.slick-initialized').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        infinite: false,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    centerPadding: 0,
                    centerMode: false,
                    arrows: false
                }
            }

        ]

    });
}

function sliderTemaBtn(){

	$('.tema-slick-area').slick({

        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        infinite: true,
        variableWidth: true,
        dots: false,
        prevArrow: '<a href="#" style="font-size:23px;" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" style="font-size:23px;" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    centerPadding: 0,
                }
            }

        ]

    });
}


function sliderUnidade(unidadeElement){

	$(unidadeElement).slick({

        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        infinite: false,
        variableWidth: true,
        adaptiveHeight: true,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: false,
                    dots: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    centerPadding: 0,
                }
            }

        ]

    });
}


function sliderOfertas(){

    $('.oferta-slick-area').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,

        prevArrow: '<a href="#" style="color:white" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" style="color:white" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    centerMode: false,
                    dots: false,
                    arrows: true 


                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: false,
                    adaptiveHeight: true,
                    centerPadding: 0,
                    dots: false,
                    arrows: true                 


                }
            }

        ]

    });

}

function sliderPerguntas(){

	$('.slick-area-perguntas-bolsas').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        draggable: false,
        adaptiveHeight: true,
        dots: false,
        prevArrow: '<a href="#" style="color:white" class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" style="color:white" class="slick-next"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // variableWidth: true,
                    // infinite: true,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // variableWidth: true,
                    // infinite: true,
                    centerPadding: 0,
                    centerMode: false,
                }
            }

        ]

    });
}

function moedaMask(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++);
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",  tamanho2 = ajd2.length, h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}

function loading(element){

	$(element).html('<div style="width:100%; text-align:center">'+
						'<div class="ssp-loader-content">'+
							'<div class="ssp-loader"></div>'+
							'<p class="ssp-loader-text">Carregando...</p>'+
		        		'</div>'+
		        	'</div>');
}

/*
 * Adiciona o loading em um botão após submeter um formulário
 */
function loadingSubmitButton(element, text = 'Enviando'){
	if($(element).is('a')){
		$(element).addClass('disabled');
	}else{
		$(element).attr('disabled', true);
	}
    $(element).addClass('sending');
    $(element).html('<div class="loading-icon-button">'+
                    '<div></div>'+
      				'<span>'+text+'</span></div>');
	$(element).find('.loading-icon-button').css('height', 'unset')
}

/*
 * Remove o loading e o disabled do botão após finalizar o submit
 */
function cleanLoadingSubmitButton(element, text = 'Enviar'){
    if($(element).is('a')){
		$(element).removeClass('disabled');
	}else{
		$(element).attr('disabled', false);
	}
	$(element).removeClass('sending');
	$(element).text(text);
}

function findDataBaseUnica(codPessoaCorp){
    var url = '/o/senac-external-services/findTokenAcessoBaseUnica';
    $.ajax({
        url:url,
        method:'get',
        async: false
    }).done(function(token){
        if(token.length > 0){
            var tokenData = JSON.parse(token);
            let data = {
                headerAuthorization: tokenData.token,
                codPessoaCorp: codPessoaCorp,
            };
            $.ajax({
                url: '/o/senac-external-services/findPessoaBaseUnica',
                method:'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'JSON',
                async: false
            }).done(function(response){
                writeCookie('cpf', response.cpf, 4);
                writeCookie('numCelular', response.numCelular, 4);
                writeCookie('numResidencial', response.numResidencial, 4);
            }).fail(function(response){
               showError(response)                    
            })

            $.ajax({
                url: '/o/senac-external-services/findIdAlunoBaseUnica',
                method:'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'JSON',
                async: false
            }).done(function(idResponse){
                writeCookie('idAluno', idResponse.idAluno, 4);
            }).fail(function(idResponse){
               showError(idResponse)                    
            })

        } else{
            console.log("Mensagem vazia");
        }
    });
}

function doLogin(obj) {
    const user = obj.user
    const pass = obj.pass
    const before = obj.before
    const done = obj.done
    const errorMessageSelector = obj.errorMessageSelector
    const error = obj.error
    let always = obj.always
    const btnLoadingSelector = obj.btnLoadingSelector
    const textButton = $(btnLoadingSelector).first().text()

    function showError(data) {
        let msg
        try {
            tokenData = JSON.parse(data.responseText);
            console.error(tokenData);
            msg = tokenData.mensagem
        } catch (e) {
            console.error(data.responseText);
            msg = "Ocorreu um erro inesperado"
        }
        
        $(errorMessageSelector).removeClass('d-none');
        $(errorMessageSelector).text(msg);
    }

    if(before) before()
    
    loadingSubmitButton(btnLoadingSelector, 'Enviando')

    //Gera o token
    $.ajax({
        url: '/o/senac-content-services/geraTokenLogin',
        method:'get'
    }).done(function(data){
        if(data.length > 0){        	  
            var tokenData = JSON.parse(data);
            
            if(tokenData.status == 200 || tokenData.status == 201){
                data = {
                    email: user,
                    senha: pass,
                    token: tokenData.token,
                };

                //Faz o login
                $.ajax({
                    url: '/o/senac-content-services/autenticacaoLogin',
                    method:'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    async: false
                }).done(function(data){
                    var loginData = JSON.parse(data);

			        if(loginData.status == 200 || loginData.status == 201){
                        //Salva os dados de login no cookie
                        writeCookie('name', "\""+loginData.nome+"\"", 4);
                        writeCookie('email', "\""+loginData.email+"\"", 4);
                        writeCookie('nome_social', loginData.nomeSocial != 'null' ? loginData.nomeSocial : "\"\"", 4);
                        writeCookie('ticket', loginData.ticket, 4);
                        writeCookie('ticket', loginData.ticket, 4, '.sp.senac.br');
                        writeCookie('tcSS', loginData.ticket, 4, '.sp.senac.br');
                        writeCookie('codigo', loginData.codigoLoginUnico, 4);
                        writeCookie('codPessoa', "\""+loginData.codigoPessoaCorp+"\"", 4);
                        writeCookie('codPessoa', "\""+loginData.codigoPessoaCorp+"\"", 4, '.sp.senac.br');

						sendEventLogin('login', loginData.codigoLoginUnico ); 
						                      
                    }

                    if(done) done(data)
                }).fail(function(data){
                   showError(data)                    
                    if(error) error(data)
                }).always(function(){
                    cleanLoadingSubmitButton(btnLoadingSelector, textButton)
                    if(always) always()
                    always = undefined
                })
            }
        }
    }).fail(function(data){
        showError(data)
        if(error) error(data)
    }).always(function(){
        cleanLoadingSubmitButton(btnLoadingSelector, textButton)
        if(always) always()
    })
}

/* Inicio funcionalidades de busca */


// Se for Mobile a busca aber o modal

function searchHomeMobile(){

     //Se for mobile ao dar focus na busca abrir modal

    if(tam<=1024){

        $('.busca-fixa-home').click(function(){

            $('.lupa-modal-search').trigger('click')

            //Callback para retirar o focus da busca fixa
            $('.busca-fixa-home').blur()

            $('#modal-search-container .input-busca-avancada').focus()

            $('#resultados-recentes').addClass('d-none')

        });

    }

}

searchHomeMobile()

const minCharsTerm = 2;
let siglasPermitidas = null;

function buscaSiglasPermitidas(){

    const urlCheckWords = '/o/senacsearch/check-allowed-word/{companyId}/{groupId}';
    let url = urlCheckWords
    .replace('\{companyId\}',themeDisplay.getCompanyId())
    .replace('\{groupId\}', themeDisplay.getSiteGroupId() );

    return $.ajax({
        url:url,
        method:'GET',
    });

}

function focusBusca() {

	  var inputBusca = $(this);

	  // Se já estiver preenchido, executa a busca
	  if(inputBusca.val().length >= minCharsTerm){
           inputBusca.trigger('keyup');
	   	 return;
      }

	// Verifica se o cookie está habilitado
    if(getCookie('portalSenacCookie') != null){

    	// verifica nos cookies se teve buscados recentementex
        let terms = [];
    	if(getCookie('ck-terms-search') != null)
           terms = JSON.parse(getCookie('ck-terms-search'));

    	if(terms.length > 0)
    		$('.ssp-busca-avancada__buscado-recente-header').removeClass('d-none');

    	$('.ssp-busca-avancada__termos-buscados-content').empty();

		$.each(terms, function (k, t){
			$('.ssp-busca-avancada__termos-buscados-content').append(
					'<div class="ssp-busca-avancada__termos-buscados-content-itens">'
					+'<i class="fas fa-times ssp-busca-avancada__termos-buscados-content-itens-close-icon" aria-label="Excluir termo buscado" tabindex="0" role="button" data-term="'+t+'"></i>'
					+'<a href="#a" class="link-term" data-term="'+t+'">'+t+'</a>'
					+'</div>');
		});

    	// Verifica se existem ultimos cursos vistos no cookie
        var cookies = [];

        if(getCookie('ck-cursos') != null) cookies.push(JSON.parse(getCookie('ck-cursos')));

        var ultimosCursosVistos = [];

        if(cookies.length > 0 && typeof objsTela.cursosRecentes !== 'undefined' && objsTela.cursosRecentes.length == 0){

    	    $.ajax({
    	        url :  '/o/senac-content-services/cursosInfo/'+Liferay.ThemeDisplay.getScopeGroupId()+'/'+cookies.join(',')+'/0/4',
    	        type : 'get'
    	    })
    	    .done(function(cursosRecentes){

    	        if(cursosRecentes.length > 0){

    	          objsTela.cursosRecentes = JSON.parse(cursosRecentes);

    	          preencheUltimosCursosVistos();
    	        }

    	     })
    	     .fail(function(jqXHR, textStatus, msg){
    	         // alert(msg);
    	     });
        }else{
        	if(typeof objsTela.cursosRecentes !== 'undefined')
        		preencheUltimosCursosVistos()
		}

    if(
        (getCookie('ck-terms-search') != null && getCookie('ck-terms-search').length > 2) ||
        (getCookie('ck-cursos') != null && getCookie('ck-cursos').length > 2 )
    ){

			if(tam<=1024)
				var resultadosRecentes = $('#resultados-recentes-mobile');
			else
				var resultadosRecentes = $('#resultados-recentes');

			resultadosRecentes.removeClass('d-none');

			var localizacaoBusca = inputBusca.attr('data-element');

			if(localizacaoBusca == 'home')
				$('#home-search-container').append(resultadosRecentes);

			else if(localizacaoBusca == 'modal')
				$('#modal-search-container').append(resultadosRecentes);

			else if(localizacaoBusca == 'busca')
				$('#inputBusca').append(resultadosRecentes);
        }
    }
}



var timeoutId = 0;
async function digitaBusca() {

	var inputBusca = $(this);
    var value = $(this).val();


  	//Se apertou Enter, executa a busca
  	if(window.event.keyCode == 13)	{
  		executaBusca(value, true);
  		return;
    }

    if(value.length == minCharsTerm && siglasPermitidas == null){
        siglasPermitidas = await buscaSiglasPermitidas();
    }

    if(value.length < minCharsTerm || (value.length == minCharsTerm && !siglasPermitidas.includes(value.toLowerCase()))){

        showResultadosRentes(inputBusca)

  		inputBusca.trigger("focus");

  		if(tam<=1024)  $('#resultados-busca-mobile').addClass('d-none');
          else $('#resultados-busca').addClass('d-none');
          
        return;

    }
    
    if(value !== JSON.parse(localStorage.getItem('termo')) ){

        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(function(){
            
            digitaBuscaAtraso(inputBusca, value)

        }, 1000);
    };

}

function focusOutBusca(){

    var inputBusca = $(this);

    var value = $(this).val();

    localStorage.setItem('termo',JSON.stringify(value))
    
}

function digitaBuscaAtraso(inputBusca, value){

  		// esconde buscados recentes
  		$('#resultados-recentes').addClass('d-none');
  		$('#resultados-recentes-mobile').addClass('d-none');
  		$('#btn-limpa-busca-nao-encontrado').remove();

  		// Executa a busca com o termo digitado
  		const urlSearch = urlSearchKeywords
  	      .replace('\{companyId\}',themeDisplay.getCompanyId())
  	      .replace('\{groupId\}',themeDisplay.getScopeGroupId())
  	      .replace('\{start\}', 0)
  	      .replace('\{end\}', 4)
  	      .concat('?keywords='+value)
  	      .concat('&shortResult=1');

  		$.ajax({
  	          url:urlSearch,
  	          method:'get',
  	          beforeSend: function(){
  	        	  loading('#resultados-busca-cursos-itens');
  	        	  loading('#resultados-busca-cursos-itens-mobile');
  	        	  loading('#resultados-busca-paginas-itens');
  	        	  loading('#resultados-busca-paginas-itens-mobile');
  	          }

  	        }).done(function(data){

  	          if(tam<=1024) $('#resultados-busca-cursos-itens-mobile').empty();
  	          else $('#resultados-busca-cursos-itens').empty();

  	          if(tam<=1024) $('#resultados-busca-paginas-itens-mobile').empty();
  	          else $('#resultados-busca-paginas-itens').empty();

  	    	  if(data.length > 0){

  	        	var search = JSON.parse(data);

  	        	var cursos = search.cursos;
  	        	var paginas = search.paginas;

  	        	// exibe os resultados da busca
  	        	if(cursos.length > 0 || paginas.length > 0){

  	        		if(tam<=1024) var resultadosBusca = $('#resultados-busca-mobile');
  	        		else  var resultadosBusca = $('#resultados-busca');

  	        	 	resultadosBusca.removeClass('d-none');

  	        	 	var localizacaoBusca = inputBusca.attr('data-element');

      					if(localizacaoBusca == 'home')
      						$('#home-search-container').append(resultadosBusca);
      					else if(localizacaoBusca == 'modal')
      						$('#modal-search-container').append(resultadosBusca);
      					else if(localizacaoBusca == 'busca')
      						$('#inputBusca').append(resultadosBusca);

  	        	}

  	        	if(search.total_cursos <= 0) {
  	        		if(tam<=1024) $('#resultados-busca-cursos-mobile').addClass('d-none');
  	        		else $('#resultados-busca-cursos').addClass('d-none');
  	        	}

  	        	if(search.total_paginas <= 0) {
  	        		if(tam<=1024) $('#resultados-busca-paginas-mobile').addClass('d-none');
  	        		else  $('#resultados-busca-paginas').addClass('d-none');
  	        	}

  	        	if(tam<=1024) $('#totalCursosEncontradosMobile').text(search.total_cursos);
  	        	else $('#totalCursosEncontrados').text(search.total_cursos);


  	        	if(search.total_cursos > 0){

  	        		if(tam<=1024) $('#resultados-busca-cursos-mobile').removeClass('d-none');
  	        		else $('#resultados-busca-cursos').removeClass('d-none');

  	        		$.each(cursos.slice(0, 4), function(k, c){

  	        			var itemCurso = $('#curso-item-buscado-recente-template').clone();

  	        			 itemCurso.prop('id', '');

  	        			 itemCurso.find('.ssp-card-curso__color-tag-modalidade').addClass('bg-nivel-'+c.tipoCursoNomeNormalizado);

  	        			 itemCurso.find('.ssp-card-curso-search__title').text(c.toDisplay.title);
  	        		    itemCurso.find('.ssp-card-curso-search__tag-formato-title').text(c.toDisplay.tipoFormato);

                        if(c.toDisplay.isShowModalidadeSecundariaDuracao){
                            let original = itemCurso.find('.ssp-card-curso-search__tag-formato-title')
                            let tagSecundaria = original.clone()
                            tagSecundaria.text(c.toDisplay.modalidadeSecundariaDuracao);
                            original.after(tagSecundaria)
                        }

  	        			 itemCurso.find('.ck-curso').attr('data-ck',
								           c.articleId);



  	        			 var prefixUrl = themeDisplay.getLayoutRelativeURL();

  	        			 if(prefixUrl.indexOf('staging/')> 1)
  	        				prefixUrl = prefixUrl.substring(0, prefixUrl.lastIndexOf('staging/') + 7);
                     	 else
  	        				prefixUrl ="";

  	        			 itemCurso.find('a.ssp-absolute-link').attr('href',prefixUrl+c.url);


  	        			 itemCurso.removeClass('d-none');

  	        			 if(tam<=1024) $('#resultados-busca-cursos-itens-mobile').append(itemCurso);
  	        			 else $('#resultados-busca-cursos-itens').append(itemCurso);

  	        		});
  	        	}

  	        	if(tam<=1024) $('#totalPaginasEncontradaMobiles').text((search.total_paginas == 0 || search.total_paginas > 1) ? search.total_paginas+' resultados' : search.total_paginas +' resultado');
  	        	else $('#totalPaginasEncontradas').text((search.total_paginas == 0 || search.total_paginas > 1) ? search.total_paginas+' resultados' : search.total_paginas +' resultado');

  	        	if(search.total_paginas > 0){

  	        		if(tam<=1024)  $('#resultados-busca-paginas-mobile').removeClass('d-none');
  	        		else $('#resultados-busca-paginas').removeClass('d-none');

  	        		$.each(paginas.slice(0, 2), function(k, p){

  	        			var itemPagina= $('#pagina-item-buscado-recente-template').clone();

  	        			itemPagina.prop('id', '');

  	        			itemPagina.find('.pagina-title').text(p.title);
  	        			itemPagina.find('.pagina-description').text(p.description);

  	        			itemPagina.removeClass('d-none');

  	        			itemPagina.find('a.ssp-absolute-link').attr('href',p.friendlyURL);

  	        			 if(tam<=1024) $('#resultados-busca-paginas-itens-mobile').append(itemPagina)
  	        			 else $('#resultados-busca-paginas-itens').append(itemPagina)

  	        		});
  	        	}

              if(search.total_paginas <= 0 && search.total_cursos <= 0){

                showResultadosRentes(inputBusca, true);
              }

  	        }

  	      });
  	
  }

function showResultadosRentes(inputBusca, vazil){

  if(
      (getCookie('ck-terms-search') != null && getCookie('ck-terms-search').length > 2) ||
      (getCookie('ck-cursos') != null && getCookie('ck-cursos').length > 2 )||
      vazil
  ){

    if(tam<=1024)
      var resultadosRecentes = $('#resultados-recentes-mobile');
    else
      var resultadosRecentes = $('#resultados-recentes');

    resultadosRecentes.removeClass('d-none');


    var localizacaoBusca = inputBusca.attr('data-element');


    if(localizacaoBusca == 'home')
      $('#home-search-container').append(resultadosRecentes);

    else if(localizacaoBusca == 'modal')
    	$('#modal-search-container').append(resultadosRecentes);

    else if(localizacaoBusca == 'busca')
			$('#inputBusca').append(resultadosRecentes);

    resultadosRecentes.find('#nenhumResultadoMSG').remove();
    if(vazil){

      $('#resultados-busca').addClass('d-none');

      resultadosRecentes.empty()

      resultadosRecentes.prepend('<h3 id="nenhumResultadoMSG" class="ssp-txt-search__nao-encontrado">Não encontramos <span>nenhum resultado</span></h3>')
        //  Add btn limpar Buscar
        resultadosRecentes.append('<div id="btn-limpa-busca-nao-encontrado" class="ssp-busca-avancada__ver-todos-resultados"><a href="#a" class="btn btn-nivel ssp-busca-avancada__btn-todos_resultados mt-10"><i class="fas fa-redo mr-2" aria-hidden="true"></i>Limpar busca</a></div>');

        resultadosRecentes.on('click', '#btn-limpa-busca-nao-encontrado', function() {
            $('.input-busca-avancada').val("");
        });

    }
  }else{

     $('#resultados-busca').addClass('d-none');
  }
}
function removeItemBuscadoRecente(){

	var termRemove = $(this).data('term');

	// Remove do cookie e da tela
	var terms = [];

	if(getCookie('ck-terms-search') != null)
       terms = JSON.parse(getCookie('ck-terms-search'));

	var newTerms = terms.filter(function(value, index, arr){ return value != termRemove; });

	// limpa para criar um novo cookie atualizado
	writeCookie("ck-terms-search", JSON.stringify(newTerms));

	// limpa da tela
	$(this).parent().remove();

	// Se não tiver mais termos, limpa as buscas recentes
	if(newTerms.length == 0) $('.ssp-busca-avancada__buscado-recente-header').addClass('d-none');

	// Se não tiver busca nem cursos para exibir
	if(newTerms.length == 0 && objsTela.cursosRecentes.length == 0) $('#resultados-recentes').addClass('d-none');

};

function buscaTermoRecente(){
	  executaBusca($(this).data('term'), false);
}

function buscarEVerTodosCursos(){

	  var term = $('.input-busca-avancada:visible').val();

	  var prefixUrl = themeDisplay.getLayoutRelativeURL();

	  if(prefixUrl.indexOf('staging/')> 1)
		  prefixUrl = prefixUrl.substring(0, prefixUrl.lastIndexOf('staging/') + 7);
  	  else
		  prefixUrl = "";

	  window.location.href = prefixUrl + '/busca?q=' + encodeURIComponent(term)+'#c';
}

function buscarEVerTodasPaginas(){
	var term = $('.input-busca-avancada:visible').val();

	var prefixUrl = themeDisplay.getLayoutRelativeURL();

	  if(prefixUrl.indexOf('staging/')> 1)
		  prefixUrl = prefixUrl.substring(0, prefixUrl.lastIndexOf('staging/') + 7);
	  else
		  prefixUrl = "";

	  window.location.href = prefixUrl + '/busca?q=' + encodeURIComponent(term)+'#p';

}

 function preencheUltimosCursosVistos(){

  	if(objsTela.cursosRecentes.length > 0){
      $('#resultados-recentes').removeClass('d-none');
  		$('#section-cursos-oferecidos').removeClass('d-none');
  		$('.ssp-busca-avancada__cursos-vistos-content').removeClass('d-none');
      $('#resultados-recentes').find('#nenhumResultadoMSG').remove();
  	}

  	$('.ultimos-cursos-vistos-itens').empty();

  	$.each(objsTela.cursosRecentes, function(k, c){

  		var itemCurso = $('#curso-item-buscado-recente-template').clone();

  		 itemCurso.prop('id', '');
  		 itemCurso.find('.ssp-card-curso__color-tag-modalidade').addClass('bg-nivel-'+c.tipoCursoNomeNormalizado);
  		 itemCurso.find('.ssp-card-curso-search__title').text(c.title);
         itemCurso.find('.ssp-card-curso-search__tag-formato-title').text(c.toDisplay.tipoFormato);

         if(c.toDisplay.isShowModalidadeSecundariaDuracao){
            let original = itemCurso.find('.ssp-card-curso-search__tag-formato-title')
            let tagSecundaria = original.clone()
            tagSecundaria.text(c.toDisplay.modalidadeSecundariaDuracao);
            original.after(tagSecundaria)
        }

  		 var prefixUrl = themeDisplay.getLayoutRelativeURL();

			 if(prefixUrl.indexOf('staging/')> 1)
				prefixUrl = prefixUrl.substring(0, prefixUrl.lastIndexOf('staging/') + 7);
    	 else
				prefixUrl = "";

			 itemCurso.find('a.ssp-absolute-link').attr('href',prefixUrl+c.url);

  		 itemCurso.removeClass('d-none');

  		 $('.ultimos-cursos-vistos-itens').append(itemCurso)

  	});

  }

 function executaBusca(term, salvarCookie){

  	// garante que existe algo a ser buscado
  	if(term.length <= 0) return;

  	// armazena a busca no cookie, se preciso
  	if(getCookie('portalSenacCookie') != null && salvarCookie) manageCookieArray('ck-terms-search', term, 5);

  	// chama a página de busca
	 var prefixUrl = themeDisplay.getLayoutRelativeURL();

	  if(prefixUrl.indexOf('staging/')> 1)
		  prefixUrl = prefixUrl.substring(0, prefixUrl.lastIndexOf('staging/') + 7);
	  else
		  prefixUrl = "";

	  window.location.href = prefixUrl + '/busca?q=' + encodeURIComponent(term);

  }



 function limparHistoricoRecente(){

 	// limpa os cookies
 	writeCookie("ck-terms-search", JSON.stringify([]));

 	// limpa as buscas recentes
 	$('.ssp-busca-avancada__buscado-recente-header').addClass('d-none');

 	// Se não tiver busca nem cursos para exibir
 	if(objsTela.cursosRecentes.length == 0) $('#resultados-recentes').addClass('d-none');

 }


 function salvaTermoBuscado(value){

	if(getCookie('portalSenacCookie') != null){
		var terms = [];

	 	if(getCookie('ck-terms-search') != null)
	        terms = JSON.parse(getCookie('ck-terms-search'));

	 	terms.push(value);

	 	writeCookie("ck-terms-search", JSON.stringify(terms));
	}
 }


 function verTodosResultados(){
 	executaBusca($('.input-busca-avancada:visible').val(), true);
 }

 function lupaBusca(){

	  var inputBusca = $(this).siblings('.input-busca-avancada');

	  executaBusca(inputBusca.val(), true);
 }


function modalBusca(){

    const modalSearch = document.querySelector('#modal-search')

	$('#refazer-busca-cantainer').addClass('d-none');

    modalSearch.showModal()

	// Fecha Modal
	$('#btn-close-modal-search').click(function(){

        modalSearch.close()

        $('#refazer-busca-cantainer').removeClass('d-none');
        $('#resultados-recentes').addClass('d-none')
        $('#resultados-busca').addClass('d-none')
        $(this).parent().find('input').val('');
        $('#resultados-recentes').addClass('d-none').find('#nenhumResultadoMSG').remove();
	})

    $('[id="modal-search"].ssp-modal-ds').click(function(ev){
        if(ev.target.id == "modal-search"){
            $('#btn-close-modal-search').click()
        }
    });

      // Fecha Modal ao pressionar a tecla Esc
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalSearch.open) {
            $('#btn-close-modal-search').click();
        }
    });
}

$('.lupa-modal-search').click(function() {

    modalBusca();

    // mostra buscacos recentes no mobile

    if(tam<=1024){

        $('#modal-search-container .input-busca-avancada').focus()

    }


})

// Function Verifica Formato Ao Vivo

function verificaFormatoAovivo(curso){

    var aoVivo = false;
					
    $.each(curso.formatos, function(j, formato){

        if(formato.name.includes('ao vivo')){

            aoVivo = true;

        }

    });

    return aoVivo
}
    
function verificaFormatoOnlinePresencial(curso){

    var onlinePresencial = false;
					
    $.each(curso.formatos, function(j, formato){

        if(formato.name.includes('Online e Presencial')){

            onlinePresencial = true;

        }

    });

    return onlinePresencial
}

/* Fim funcionalidades de busca */

function limitaTitleCurso(title){

	var limitCaracteres = 66;

	return (title.length <= limitCaracteres) ? title : title.substr(0, limitCaracteres - 3) + '...';
}

/* alternativa para o funcionamento dos clicks para acessar as configurações dos portlet com a experiencia esta ativa */
function clickConfiguracaoPortletExperiencia(){

  setInterval(function(){
    $('[id*="_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_"] [id*="SEGMENTS_EXPERIENCE"] [id$="menu"]').each(function(){
    	var id = $(this).attr('id').replace('menu','')
      var addClick = $(this).data('addclick')?false:true;
      if(addClick){
        $(this).click(function(){
      		$('[id^="'+id+'"]').each(function(){
      				var idConfiguracao = $(this).attr('id');
      				if(idConfiguracao.indexOf('configuracao')>0){

                $(this).click();
              }

      		});
      	});
        $(this).data('addclick',true);
        console.info('addClick')
      }
    });
  },1000);
}



/**
 * INICIO
 * Rotina destinada a criação de card de curso para slider
 */
 function globalTemplateItemCardCursoMobile(curso) {
    return $(`
    <div class="slick-area__item d-none" data-template-card="template-curso-item-slider-mobile">
        <a class="text-decoration-none ck-curso" href="#a" >
        <div class="ssp-card-curso custom-card-curso-tema">
            <div class="ssp-card-curso__image custom-card-curso-tema__image">
                <div class="ssp-image-container">
                        <img loading="lazy" src="" />
                </div>
            </div>
            <div class="ssp-card-curso__body custom-card-curso-tema__body">
                <div class="ssp-card-curso__color-tag-modalidade custom-card-curso-tema__color-tag-modalidade"></div>
                <div class="ssp-card-curso__tags custom-card-curso-tema__tags">
                        <span class="ssp-card-curso__tag-formato-title mobile"></span>
                </div>
                    <h6 class="ssp-card-curso__title custom-card-curso-tema__title"></h6>
                    
                    <span class="ssp-card-curso-search__tag-formato-title">texto tipo curso</span>
                    `+

                    (curso.tipoCursoNome == "Livre" || curso.tipoCursoNome == "Técnico" || curso.tipoCursoNome == "Extensão" ? 

						`<div class="ssp-card-curso__info custom-card-curso-tema__info">
							<span class="ssp-tag btn-inscricoes-abertas"><i class="fa-regular fa-circle-dollar"></i>Comprar agora</span> 
							<span class="ssp-tag btn-bolsas"><i class="fa-regular fa-book"></i>Bolsas de estudo</span>
						</div>` 
						
						: 
						
						`<div class="ssp-card-curso__info custom-card-curso-tema__info">
							<span class="ssp-tag btn-inscricoes-abertas"><i class="fa-regular fa-file-signature"></i></i>Inscrições abertas</span> 
							<span class="ssp-tag btn-bolsas"><i class="fa-regular fa-book"></i>Bolsas de estudo</span>
						</div>`
					
					)
                    
                +`</div>
                </div>
        </a>
    </div>
    `)
}
 function globalTemplateItemCardCurso(curso) {
    return $(`
    <div data-template-card="ssp-global-curso-item-template" class="d-none slick-area__item">
        <a class="text-decoration-none ck-curso" href="#a">
            <div class="ssp-card-curso" style="height: 282px;">
                <div class="ssp-card-curso__image">
                    <div class="ssp-image-container">
                        <img loading="lazy" src="" />
                    </div>
                </div>
                <div class="ssp-card-curso__body">
                    <div class="ssp-card-curso__color-tag-modalidade"></div>
                    <div class="ssp-card-curso__tags">
                        <span class="ssp-card-curso__tag-formato-title"></span>          
                        <span class="tag-modalidade-title__senac-online d-none">Senac Online - ao vivo</span>
                    </div>
                    
		            <span class="ssp-card-curso-search__tag-formato-title">texto tipo curso</span>
                    <h6 class="ssp-card-curso__title mt-4"></h6>
                    `+

                    (curso.tipoCursoNome == "Livre" || curso.tipoCursoNome == "Técnico" || curso.tipoCursoNome == "Extensão" ? 

						`<div class="ssp-card-curso__info">
							<span class="ssp-tag btn-inscricoes-abertas"><i class="fa-regular fa-circle-dollar"></i>Comprar agora</span> 
							<span class="ssp-tag btn-bolsas"><i class="fa-regular fa-book"></i>Bolsas de estudo</span>
						</div>` 
						
						: 
						
						`<div class="ssp-card-curso__info">
							<span class="ssp-tag btn-inscricoes-abertas"><i class="fa-regular fa-file-signature"></i></i>Inscrições abertas</span> 
							<span class="ssp-tag btn-bolsas"><i class="fa-regular fa-book"></i>Bolsas de estudo</span>
						</div>`
					
					)

                +`</div>
                    </div>
        </a>
        </div>
    `)
}

function addModalidadeEDuracao(curso, wrapper, isMobile) {
    if(curso.tipoCursoNomeNormalizado == 'graduacao' && curso.modalidade) {
        wrapper.empty()
        wrapper.css('font-size', '11px')
        wrapper.css('line-height', '16px')

        let _modalidade = (curso.modalidade || [{}])[0].name
        const _duracao = curso.duracaoCursoFT
        
        const _list = (_modalidade || '').split(' - ')
        if(_list.length > 1)
            _modalidade = _modalidade.substring(_modalidade.indexOf(' - ') + 3)

		if((_modalidade == 'Licenciatura' && curso.title.toLowerCase().includes('bacharelado')) || (_modalidade == 'Bacharelado' && curso.title.toLowerCase().includes('licenciatura')))
			_modalidade = 'Bacharelado e Licenciatura'
        
        if(isMobile){
        	wrapper.append($('<span class="ssp-card-curso__tag-formato-title">' + curso.tipoCursoNome + ' - ' + _modalidade + (_duracao ? ' - ' + _duracao : '') + '</span>'))
        }else{
			wrapper.append($('<span class="ssp-card-curso__tag-formato-title d-block">' + curso.tipoCursoNome + '</span>'))
        	wrapper.append($('<span class="ssp-card-curso__tag-formato-title d-block">' + _modalidade + (_duracao ? ' - ' + _duracao : '') + '</span>'))
        }

        const after = wrapper.next()
        after.css('margin', '0px')
    }
}

function buildCardCurso(curso, infoBotoes, isMobile, unidadeFriendlyURL, hideBtnBolsaInscricao) {
    const URL = window.location.href
    const HOST = window.location.origin;
    let urlCurso = URL.indexOf('staging') > 1 ? URL.substring(0, URL.lastIndexOf('staging/') + 9) : ''
    let itemCurso = (isMobile) ? globalTemplateItemCardCursoMobile(curso) : globalTemplateItemCardCurso(curso);

    itemCurso.prop('id', '');        
    itemCurso.find('.ssp-card-curso__title').text(getTitleCardCurso(curso));
    itemCurso.find('.ssp-image-container img').attr("src", HOST+curso.imagemURL);
    itemCurso.find('.ck-curso').attr('data-ck', curso.articleId);

	unidadeFriendlyURL = (unidadeFriendlyURL) ? '/' + unidadeFriendlyURL : '';

    itemCurso.find('.ck-curso').attr('href', urlCurso+unidadeFriendlyURL+curso.url);
    itemCurso.find('.ssp-card-curso__color-tag-modalidade').addClass('bg-nivel-'+curso.tipoCursoNomeNormalizado);
    itemCurso.removeClass('d-none')
    
    itemCurso.find('.ssp-card-curso-search__tag-formato-title').text(curso.toDisplay.tipoFormato);

    if(curso.toDisplay.isShowModalidadeSecundariaDuracao){
        let original = itemCurso.find('.ssp-card-curso-search__tag-formato-title')
        let tagSecundaria = original.clone()
        tagSecundaria.text(curso.toDisplay.modalidadeSecundariaDuracao);
        original.after(tagSecundaria)
    }

    if(hideBtnBolsaInscricao){
		itemCurso.find('.btn-inscricoes-abertas').remove()
		itemCurso.find('.btn-bolsas').remove()
	}else{
    
    if(infoBotoes) {
			
			if(infoBotoes[curso.articleId] && !infoBotoes[curso.articleId].botaoInscricoesAbertas)
            itemCurso.find('.btn-inscricoes-abertas').remove()
                     
			if(infoBotoes[curso.articleId] && !infoBotoes[curso.articleId].botaoBolsas)
            itemCurso.find('.btn-bolsas').remove()
    	}
    }
    
    return itemCurso
}


function getTitleCardCurso(curso){
	return limitaTitleCurso(curso.toDisplay.title);	
}

/**
 * FIM
 * Rotina destinada a criação de card de curso para slider
 */

 
 /**
  * Funcoes para enviar eventos ao Google Tag Manager
 */
	function sendEventLogin(event, userId){
		
		let pushObject = {
			"userid" : userId
			}
				
				
		sendEvent(event, pushObject)	
	}
	
	function sendEventEcommerce(event, eventItens){
				
		let pushObject = {
			"ecommerce" : {
				"items" : eventItens
			}
		}		
				
		sendEvent(event, pushObject)
				
	}
  
  	function sendEvent(event, eventObject){
		
		let pushObject = {"event":  event}
		
		pushObject = Object.assign(pushObject, eventObject);
		
		console.dir(pushObject);
		
		dataLayer.push(pushObject);

	}
