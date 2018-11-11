
module.exports.alotofmenu = {
    'mainMenu': {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Оставить заявку',
                    request_contact: true,
                }],
                [{
                    text: 'Посчитать проект'
                }],
                [{
                    text: 'Наши контактные данные'
                }],
                [{
                    text: 'О нас'
                }]
            ]
        })
    },
    'servicesKeyboard': {
        disable_web_page_preview: false,
        reply_markup:JSON.stringify ({
            inline_keyboard: [
                [{
                    text:'Интернет магазин',
                    callback_data: 'market'
                }],
                [{
                    text:'Приложение',
                    callback_data: 'app'
                }],
                [{
                    text:'Сайт',
                    callback_data: 'site'
                }],
                [{
                    text:'Реклама',
                    callback_data: 'marketing'
                }],
                [{
                    text:'Дизайн',
                    callback_data: 'design'
                }]
            ],
            one_time_keyboard: true
        })
    },
    'sendCard': {
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Перейти на сайт Teiwaz.ru',
                    url:'https://www.google.ru'
                }],
            ],
            one_time_keyboard: true
        })
    },
    'designKeyboard':{
        disable_web_page_preview:false,
        reply_markup:JSON.stringify({
            inline_keyboard:[
                [{
                    text:'Дизайн корпоративного сайта',
                    callback_data:'dcs'
                }],
                [{
                    text:'Брендинг (логотипы, фирменный стиль)',
                    callback_data:'db'
                }],
                [{
                    text:'Дизайн приложения',
                    callback_data:'da'
                }],
                [{
                    text:'Дизайн магазина',
                    callback_data:'dm'
                }],
                [{
                    text:'Закрыть',
                    callback_data:'close',
                }]
            ]
        })
    },
    'marketingKeyboard': {
        disable_web_page_preview:false,
        reply_markup:JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Реклама в ВК',
                    callback_data: 'vk'
                }],
                [{
                    text: 'Реклама в Instagram',
                    callback_data: 'inst'
                }],
                [{
                    text: 'Google Adwords',
                    callback_data: 'ga'
                }],
                [{
                    text: 'Yandex Direct',
                    callback_data: 'yd'
                }],
                [{
                    text: 'Закрыть',
                    callback_data: 'close'
                }]

            ]
        })
    },
    "marketKeyboard": {
        disable_web_page_preview:false,
        reply_markup:JSON.stringify({
            inline_keyboard: [
                [{
                    text:"Корзина",
                    callback_data:"basket"
                }],
                [{
                    text:"Личный кабинет",
                    callback_data:"po"
                }],
                [{
                    text:"Онлайн оплата",
                    callback_data:"op"
                }],
                [{
                    text:"Каталог товаров",
                    callback_data:"ct"
                }],
                [{
                    text: "Закрыть",
                    callback_data:"close"
                }]
            ]
        })
    },
    "appKeyboard": {
        disable_web_page_preview:false,
        reply_markup:JSON.stringify({
            inline_keyboard: [
                [{
                    text: "Онлайн оплата картой",
                    callback_data:"ocp"
                }],
                [{
                    text: "Apple Pay",
                    callback_data:"applepay"
                }],
                [{
                    text: "Android Pay",
                    callback_data:"androidpay"
                }],
                [{
                    text: "Закрыть",
                    callback_data:"close"
                }]
            ]
        })
    }
};
