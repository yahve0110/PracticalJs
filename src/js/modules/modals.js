
//пишем функцию модуль для применения на модальные окна

const modals = () => {
    // кликал ли пользователь на кнопку см строку 24
    let btnPressed = false

    //1 передаем в функцию тригер элемент || 2 элемент модальное окно которое хотим вызвать || 3 элемент тригер закрытия модального окна || 4 элемент тригер закрытия модального окна на подложку по умолчанию закрывает
    function bindModal(triggerSelector,modalSelector,closeSelector,destroy = false){
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')
        let scroll = calcScroll()
        
        //  при клике на тригер  будет выполлнятся функция 
        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{
                    //отменяем стандартное поведение например если тригер это ссылка страница не будет перезагружаться
                    if(e.target){
                        e.preventDefault()
                    }
                    //если хоть раз клинкул
                    btnPressed = true

                    if(destroy){
                        item.remove()
                    }

                    windows.forEach(item=>{
                        item.style.display = 'none'
                        item.classList.add('animated','fadeIn')
                    })
                    modal.style.display = 'block'
                    //отменяем скрол при открытом модальном окне
                   document.body.style.overflow = 'hidden'
                   //document.body.classList.add('modal-open')
                   document.body.style.marginRight = `${scroll}px`
                })
        })
    

        //реализуем закрытие модального окна
        close.addEventListener('click',()=>{
            modal.style.display = 'none'
        document.body.style.overflow = ''
        document.body.style.marginRight = `0px`
            //document.body.classList.remove('modal-open')
    
        })
        windows.forEach(item=>{
            item.style.display = 'none'
        })
        //закрытие модального окна при кливке вне его
        modal.addEventListener('click',(e)=>{
            if(e.target === modal ){
                windows.forEach(item=>{
                    item.style.display = 'none'
                })
                modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`
                //document.body.classList.remove('modal-open')
            }
        })
    }
    
  
    
    //функция отображает модальное окно через определенное кол-во минут
    function showModalByTime(selector,time){
        setTimeout(function(){

            let display
            document.querySelectorAll('[data-modal]').forEach(item=>{
                if(getComputedStyle(item).display !== 'none'){
                    display = 'block'
                }
            })

            if(!display){
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = 'hidden'
                let scroll = calcScroll()
                document.body.style.marginRight = `${scroll}px`
            }

           
        },time)
    }
    
    function calcScroll(){
        let div = document.createElement('div')
    
        div.style.width = '50px'
        
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility ='hidden'
    
        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
    }
    //функция откроет модалку если долистали до конца и ни разу не нажали на модалку
    function openByScroll(selector){
        window.addEventListener('scroll',()=>{
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                document.querySelector(selector).click()
            }
        })
    }

    //вызываем функции передаем аргументы
    bindModal('.button-design','.popup-design','.popup-design .popup-close')
    bindModal('.button-consultation','.popup-consultation','.popup-consultation .popup-close')
    bindModal('.fixed-gift','.popup-gift','.popup-gift .popup-close',true)
    openByScroll('.fixed-gift')
    

    showModalByTime('.popup-consultation',60000)
    }
    
    export default modals