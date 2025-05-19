/*1747681556000*/
    let btnsMochila = document.querySelectorAll(".ssp-mochila__button");
    const modalMochila = document.querySelector(".ssp-mochila__card-list-items");
    
    const mochila = {
		codMochila: null,
		itens : []
	};
	
	mochila.tagEvent = {
		'REMOVE' : 'remove_from_cart',
		'CHECKOUT' : 'begin_checkout'
	}

	mochila.showItens = function(){
		
		$('.ssp-mochila__card-list-items-body').show();
		$('.ssp-mochila__card-list-items-login').hide();
		$('.ssp-mochila__card-list-items-msg-limpa-mochila').hide();
	}
	
	mochila.showModal = function(){
		mochila.showItens();
        modalMochila.classList.toggle('open-menu-mochila');
		modalMochila.setAttribute("tabindex", -1)
		setTimeout(() => {
			modalMochila.focus();
		}, 50);

	}
	
	mochila.closeModal = function(e){
        let btnMochilaActive = document.querySelector('.js-btn-mochila-active')
		e.preventDefault();
        modalMochila.classList.remove('open-menu-mochila');
		modalMochila.removeAttribute("tabindex")
		btnMochilaActive.focus()
		btnMochilaActive.classList.toggle('js-btn-mochila-active')
		btnMochilaActive.setAttribute('aria-expanded', 'false');
	}

	mochila.closeModalClicaFora = function(e){
		
		const btnMochilaDesktop = document.querySelector("[data-btn-mochila='btn-mochila-desktop']");
		const btnMochilaMobile = document.querySelector("[data-btn-mochila='btn-mochila-mobile']");
		
		let modalMochilaIsActive = modalMochila.classList.contains('open-menu-mochila');

		if (!modalMochila.contains(e.target) && 
				!btnMochilaDesktop.contains(e.target) && 
				!btnMochilaMobile.contains(e.target) && 
				!e.target.classList.contains('btn-mochila-finalizar-compra-success') && 
				modalMochilaIsActive ){

			mochila.closeModal(e);

		}
		
	}
	
	mochila.verificaLogin = function(){
		
		if(getCookie('ticket') == null){
			//Habilita form de login
			mochila.createFormLogin();
			
			$('.ssp-mochila__card-list-items-body').hide();
			$('.ssp-mochila__card-list-items-msg-limpa-mochila').hide();
			$('.ssp-mochila__card-list-items-login').show('slide');

			if(!modalMochila.classList.contains('open-menu-mochila')) modalMochila.classList.toggle('open-menu-mochila');
			
		}else{
			
			mochila.sendTagEvent(mochila.tagEvent.CHECKOUT, mochila.itens);
			window.location.href = mochila.getServiceUrl();
		}
		
	}
	
	mochila.createFormLogin = function(){
		
		if($('#js-login-dropdown-menu-mochila').length == 0){
        	const $divLogin = $('#js-login-dropdown-menu').clone();
        	$divLogin.attr('id', 'js-login-dropdown-menu-mochila');
        	$divLogin.removeAttr('class');
			$divLogin.find('dropdown-divider').remove();
        	
        	const $formLogin = $divLogin.find('#login-form');
        	$formLogin.attr('id', 'login-form-mochila');
        	$formLogin.find('#login-email').attr('id', 'login-form-mochila__email');
        	$formLogin.find('#login-password').attr('id', 'login-form-mochila__password');
        	
        	$formLogin.on('keyup',function(e){  
        		if (e.which == 13) $btnEntrar.click();
         		else{
         			if(!$('.erro-login').hasClass('d-none')) $('.erro-login').addClass('d-none');
         		}
            });
        	
        	const $btnEntrar = $divLogin.find('#btnLoginHeader');
        	$btnEntrar.attr('id', 'btnLoginMochila');
        	$btnEntrar.on('click', function(){
        		$('#login-email').val($('#login-form-mochila__email').val());
        		$('#login-password').val($('#login-form-mochila__password').val());
        		loginHeader(true);
        	});

			$divLogin.css('position', 'relative');
			$divLogin.css('transform', 'none');
        	$divLogin.insertAfter($('.login-header'));
		}
		
	}
	
	mochila.check = function(){

		mochila.codMochila = getCookie('codMochila');
    	
    	if(mochila.codMochila != null && mochila.codMochila.length > 0) mochila.requestAccess(mochila.getItens);
    	else mochila.fill();
		
	}
	
	mochila.getItens = function(){
		
		var hostMochila = '/o/senac-backpack-services/backpack/';
		
		var url = hostMochila + mochila.codMochila;
		
        $.ajax({
            url:url,
            method:'GET',
			cache: 'false',
			headers: {
				'Cache-Control': 'no-store, no-cache, max-age=0',
				'Expires': '0',
				'Pragma': 'no-cache'
			},
            beforeSend: function(xhr){
            	xhr.setRequestHeader("Authorization", "Bearer " + getCookie("tokenMochila"));
            }
        })
        .done(function(itens){
        	
        	mochila.fill(itens);
        	
        })
        .fail(function(err){
        	
			if(err.status == 404) mochila.removeCookie();
			else console.error('Erro get mochila :' + err.status + " " + err.responseText);
        	
			mochila.fill();
        	
        });
		
	}
	
	mochila.fill = function(itens = []){
		
		mochila.reset();
		mochila.itens = itens;
		mochila.displayTotalItens();
		
		const $btnCompra = $('.btn-mochila-finalizar-compra');
		const $linkEsvaziar = $('#btn-esvaziar-mochila');
		
		if(mochila.itens && mochila.itens.length > 0){

			const $container = $('.card-curso__list-item-content');
			$btnCompra.removeClass('d-none');
			$btnCompra.on('click', mochila.verificaLogin);
			
			for(var cont=0, len=mochila.itens.length; cont < len; cont++){
				
				var item = mochila.itens[cont];
				var $card = $('.card-curso__list-item.d-none').clone();
				
				var cardClass = item.descTipoProduto.toLowerCase();
				cardClass = cardClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				cardClass = cardClass.replace(/[\s]/g, "-");
				
				$card.find('.card-curso__list-item-tag-tipo-curso').addClass('bg-nivel-' + cardClass);
				$card.find('.card-curso__list-item-title-curso').html(item.descricaoProduto);
				$card.find('.card-curso__list-item-tipo-curso').html(item.descTipoProduto);
				$card.find('.card-curso__list-item-valor-curso').html(mochila.buildValorCurso(item));
				$card.find('.card-curso__list-item-button-remove').attr('data', item.codigoProduto);
				$card.find('.card-curso__list-item-button-remove').on('click', mochila.removeSingleItem);
				$card.removeClass('d-none');
				$container.prepend($card);

			}
			
			$linkEsvaziar.removeClass('d-none');
			
		}else{
			
			$btnCompra.addClass('d-none');
			if(!$linkEsvaziar.hasClass('d-none')) $linkEsvaziar.addClass('d-none');
			
		}
		
	}
	
	mochila.reset = function(){
		
		mochila.itens = [];
		$('.card-curso__list-item:not(.d-none)').remove();
		
	}
	
	mochila.displayTotalItens = function(){
		
		var qtItens = mochila.itens.length;
		let val = (qtItens > 0) ? qtItens : 'Nenhum';
		let msg = (qtItens > 1) ? ' itens adicionados' : ' item adicionado';
		$('.mochila-txt-block__itens').html(val + msg);
		mochila.atualizaIconeContador();
		
	}
	
	mochila.formataValor = function(valor){
	      
	      if(!valor.toString().includes(".")){
	        valor = parseFloat(valor).toLocaleString('pt-BR')+",00";
	      }else{
	         valor = parseFloat(valor).toLocaleString('pt-BR');
	         
	         if(valor.split(",").length == 2){
	           
	           if(valor.split(",")[1].length == 1)
	              valor += "0";
	           
	         }else
	           valor += ",00";
	      }
	      
	      return valor;
	}
	
	mochila.buildValorCurso = function(curso){
		
		return curso.parcelamentoProduto + 'x R$ ' + mochila.formataValor(curso.valorParcela) || '';
		
	}
	
	mochila.getServiceUrl = function(){
		
		return (isAmbienteTeste() === true) ? 
				'http://hom-mochila.cloud.sp.senac.br' : 
				'https://mochila.sp.senac.br';
		
	}
	
	mochila.atualizaIconeContador = function(){
		
		var qtItens = mochila.itens.length;
		const $iconeContador = $('.radius-count');
		if(qtItens > 0){
			$iconeContador.html(qtItens);
			$iconeContador.removeClass('d-none');
		}else $iconeContador.addClass('d-none');
		
	}
	
	mochila.requestAccess = function(callback, callbackData){
		
		if(getCookie("tokenMochila") != null){
			
			callback(callbackData);
			
		}else{
			
			var url = '/o/senac-security-services/oAuthToken';
			
            $.ajax({
                url:url,
                method:'GET'
            })
            .done(function(data){
            	
            	data = JSON.parse(data);
            	
            	writeCookie("tokenMochila", data.access_token, 3.1);//6 min
            	
            	callback(callbackData);
            	
            })
            .fail(function(){
            	
            	console.log('Acesso negado!');
            	
            });
			
		}
		
	}
	
	mochila.confirmRemoval = function(code = null){
		
		const $msgMochila = $('.msg-mochila p');
		const $btnLimpa = $('.btn-limpa-mochila');
		
		if(code != null){
			$msgMochila.html('Você deseja mesmo<br>remover o produto?');
			$btnLimpa.attr('data', code);
		}else{
			$msgMochila.html('Você deseja mesmo<br>esvaziar a mochila?');
			$btnLimpa.removeAttr('data');
		} 
		
		$('.ssp-mochila__card-list-items-body').hide();
		$('.ssp-mochila__card-list-items-login').hide();
		$('.ssp-mochila__card-list-items-msg-limpa-mochila').show('slide');
		
	}
	
	mochila.remove = function(ev){
		
		let codigoProduto = $(ev.target).attr('data') || null;
		
		const hostMochila = '/o/senac-backpack-services/backpack/';
		const url = hostMochila + mochila.codMochila;
		var jsonData = {
			codigoProduto : codigoProduto
		};
		
        $.ajax({
            url:url,
            method:'POST',
            contentType: 'application/json',
            beforeSend: function(xhr){
            	xhr.setRequestHeader("Authorization", "Bearer " + getCookie("tokenMochila"));
            	$('#loading-remove-item').addClass('d-flex');
            },
            data: JSON.stringify(jsonData)
        })
        .done((data) => { 
        	if(codigoProduto != null){
        		let removingIndex = mochila.itens.findIndex(i => i.codigoProduto == codigoProduto);
				let arrItem = [mochila.itens[removingIndex]];
				mochila.sendTagEvent(mochila.tagEvent.REMOVE, arrItem);
				mochila.itens.splice(removingIndex, 1);
        	}
        	if( codigoProduto== null || mochila.itens.length == 0){
				if(mochila.itens.length > 0) mochila.sendTagEvent(mochila.tagEvent.REMOVE, mochila.itens);	
				mochila.removeCookie();
        	}
        	mochila.fill(codigoProduto == null ? [] : mochila.itens);
        	
        })
        .fail((err) => console.error('Erro esvaziar mochila ' + err))
        .always(() => {
        	setTimeout(()=>$('#loading-remove-item').removeClass('d-flex'),1000);
        	mochila.showItens();
        });
		
	}
	
	mochila.removeSingleItem = function(ev){
		
		let $btn = $(ev.target);
		if(!$btn.is('.card-curso__list-item-button-remove')){
			$btn = $btn.parents('.card-curso__list-item-button-remove');
		}

		mochila.confirmRemoval($btn.attr('data'));
		
	}
	
	
	mochila.sendTagEvent = function(eventName, items){
		
		var ofertas = [];
		var searchCalls = [];
		
		const url = '/o/senac-oferta-services/ofertaPorCodigo'
			+ '/' + Liferay.ThemeDisplay.getCompanyId()
			+ '/' + Liferay.ThemeDisplay.getScopeGroupId()
			+ '/{codigoOferta}';
		
		items.forEach(item => {
		    var searchCall = $.ajax({
	            url:url.replace('{codigoOferta}', item.numeroOfertaProduto),
	            method:'GET',
	            contentType: 'application/json',
				success: oferta => ofertas.push(JSON.parse(oferta))
		    });
		    searchCalls.push(searchCall);
		});
		
		// Quando terminar a lista de chamadas
		$.when.apply($,searchCalls).then(() => {
    		let itensEcommerce = mochila.createEcommerceItems(ofertas);
			sendEventEcommerce(eventName, Array.from(itensEcommerce.values()));
		});		

		
	}
	
	mochila.createEcommerceItems = function(ofertas){
	
	    let itensEcommerce = new Map();

		ofertas.forEach((oferta, index)=>{
			
			itensEcommerce.set(oferta.codigoOferta, {
			
				item_id: oferta.codigoOferta, //codOferta - oferta,
				item_name: oferta.cursoOfertado.title || '', //Nome do curso - curso,
				affiliation: oferta.categoriaUnidade.name, //nome da unidade - oferta,
				currency: "BRL", //Moeda - "BRL",
				discount: (oferta.precoCheioOferta - oferta.precoVendaOferta), //desconto - oferta,
				index: index, //indice da lista - i,
				item_brand: "Senac SP", //"Senac SP",
				item_category: oferta.cursoOfertado.tipoCursoNome || '', //categoria do curso - curso,
				item_list_id: oferta.codUnidadeOfertante, //"ID UNIDADE",
				item_list_name: oferta.categoriaUnidade.name, //"NOME UNIDADE" - Oferta,
				item_variant: oferta.cursoOfertado.formatos[0].name || '', //formato - curso,
				price: oferta.precoCheioOferta, //preco cheio - oferta,
				quantity: 1
				
			});
			
		});
	
	    console.dir(itensEcommerce)
	    return itensEcommerce;
	}

	mochila.removeCookie = function(){
		let domain = '';
		if(getAmbiente() == 'hom' || getAmbiente() == 'prod'){
			domain = '.sp.senac.br';
		}
		writeCookie("codMochila", "", -3, domain);
	}
	
	$(()=>{

		btnsMochila.forEach(function(btnMochila) {
			btnMochila.addEventListener('click', function(event) {
				// Executa a função showModal
				mochila.showModal(event);
		
				// Adiciona uma classe ao botão clicado
				btnMochila.classList.toggle('js-btn-mochila-active');

				
				// Alterna o valor do atributo aria-expanded
				const isExpanded = btnMochila.getAttribute('aria-expanded') === 'true';
				btnMochila.setAttribute('aria-expanded', !isExpanded);


			});
		});


		// btnsMochila.forEach(function(btnMochila){

        // 	btnMochila.addEventListener('click',mochila.showModal)

		// });

        window.addEventListener('click',mochila.closeModalClicaFora);
 
		$('#btn-esvaziar-mochila').on('click', () => mochila.confirmRemoval());
		$('.btn-limpa-mochila').on('click', (ev) => mochila.requestAccess(mochila.remove, ev));
		$('.btn-nao-limpa-mochila').on('click', mochila.showItens);
		$('.btn-mochila-continuar-site').on('click',mochila.closeModal);
		$('.btn-mobile-close-mochila').on('click',mochila.closeModal);
		
		mochila.check();
	})
