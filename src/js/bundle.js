import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

'use strict';

// выполним после полной загрузки всех эл-тов
window.onload = function (){
    // после того как весь контент загружен сделаем паузу в 2 мс, потому что контент не всегда может успеть загрузиться
    setTimeout(function() {

        document.body.classList.add('loaded'); // for preloader

        // перемещение (только на десктопе)
        if(document.body.clientWidth >= 992){
            gsap.registerPlugin(Draggable);
            gsap.registerPlugin(InertiaPlugin);
            Draggable.create('.gallery', {
                bounds: 'body', // ограничим область перемещения эл-тов
                inertia: true // InertiaPlugin
            });
        }
    }, 200);

}