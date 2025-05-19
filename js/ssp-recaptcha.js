//reCAPTCHA V3
//https://developers.google.com/recaptcha/docs/v3
//https://www.google.com/recaptcha/admin
//
//Para ativar essa funcionalidade, utilize a funcao loadReCaptchaToPage()
//Para verificar, utilize a funcao verifyReCaptchaToken()

const recaptchaObj = (function(){
    const urlGoogleReCaptcha = 'https://www.google.com/recaptcha/api.js?render='
    const siteKeySenac = '6Lcc9cIlAAAAAL_rbfu1vi7XZSoavCkm2tdCkXo-'
    let tokenRecaptchaSenac
    
    const timeIntervalReloadReCaptchaToken = 90 * 1000
    let loopReCaptcha
    
    const urlServiceSenacIsValidReCaptchaToken = '/o/senac-security-services/isValidReCaptchaToken/'
    
    function addScriptReCaptchaV3() {
        const script = document.createElement('script');
        script.id = 'reCAPTCHA-v3';
        script.src = urlGoogleReCaptcha + siteKeySenac
        script.async = true;
        script.onload = function() {
            console.log('script reCAPTCHA loaded, you can use it now.');
        }
        document.body.append(script)
    }
    
    function addSiteKeyElement() {
        const span = document.createElement('span')
        span.classList.add('siteKey')
        span.setAttribute('data-siteKey', siteKeySenac)
    
        document.body.appendChild(span)
    }
    
    function isValidElement(el) {
        try {
            if(!document.body.contains(el)) {
                console.error('Elemento nao encontrado no DOM')
                return false
            }
        } catch (error) {        
            console.error('Erro ao buscar elemento no DOM')
            return false
        }
    
        return true
    }

    function zIndexGrecaptchaBadge() {
        const badge = document.querySelector('.grecaptcha-badge')

        if(badge) {
            document.querySelector('.grecaptcha-badge').style.zIndex = 99
        } else {
            setTimeout(zIndexGrecaptchaBadge, 500)
        }
    }
    
    function createReCaptchaToken() {        
        if(typeof grecaptcha == 'undefined'){
            addScriptReCaptchaV3()
            addSiteKeyElement()
            zIndexGrecaptchaBadge()
            return new Promise((res, rej) => {
                setTimeout(() => {
                    createReCaptchaToken()
                    .then(res)
                    .catch(rej)
                }, 500)
            })
        }

        return new Promise((res, rej) => {
            grecaptcha.ready(function() {
                try {
                    grecaptcha.execute(siteKeySenac, {action: 'submit'})
                    .then(token => {
                        tokenRecaptchaSenac = token
                        res(token)
                    })
                    .catch(rej)
                } catch (err) {
                    console.warn('Algo errado ao solicitar reCaptcha.', err)
                    rej(err)
                }
            })
        })
    }
    
    function verifyReCaptchaToken() {
        return new Promise((res, rej) => {
            fetch(urlServiceSenacIsValidReCaptchaToken + tokenRecaptchaSenac)
            .then(function (response) {
                if (response.ok) {
                    return response.text()
                }
                return Promise.reject(response)
            }).then(token => {
                res(token);
            }).catch(err => {
                rej(err);
            })
        })
    }
    
    function loadReCaptchaToPage() {    
        if(loopReCaptcha)
            clearTimeout(loopReCaptcha)
    
        return createReCaptchaToken()
        .finally(() => loopReCaptcha = setTimeout(loadReCaptchaToPage, timeIntervalReloadReCaptchaToken))
    }

    return {
        verifyReCaptchaToken: verifyReCaptchaToken,
        loadReCaptchaToPage: loadReCaptchaToPage,
        createReCaptchaToken: createReCaptchaToken
    }
})()

const verifyReCaptchaToken = recaptchaObj.verifyReCaptchaToken
const loadReCaptchaToPage = recaptchaObj.loadReCaptchaToPage
const createReCaptchaToken = recaptchaObj.createReCaptchaToken
