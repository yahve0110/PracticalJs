//подключаем модуль modals
import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInpits";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

//При загрузке дом контента будет выполнен следующий  в функции код
window.addEventListener('DOMContentLoaded',()=>{
    'use strict'
    sliders('.feedback-slider-item','','.main-prev-btn','.main-next-btn')
    sliders('.main-slider-item','vertical')
    modals()
    forms()
    mask("[name='phone']")
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
    showMoreStyles('.button-styles', '.styles-2')
    calc('#size','#material','#options','.promocode','.calc-price')
    filter()
    pictureSize('.sizes-block')
    accordion('.accordion-heading','.accordion-block')
    burger('.burger-menu','.burger')
    scrolling('.pageup')
    drop()
})