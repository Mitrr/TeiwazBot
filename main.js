process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');

const token = '663693965:AAEqeavpyzA55J0_ZM8REI1BN95Y8FeBnk8';

const bot = new TelegramBot(token,{ polling:{
        interval: 300,
        autoStart: true,
        params:{
            timeout:10
        }
    }
});

const startMenuMsgOpt = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard:[
            [{
                text:'Оставить заявку',
                request_contact: true,
            }],
            [{
                text:'Посчитать проект'
            }],
            [{
                text:'Наши контактные данные'
            }],
            [{
                text:'О нас'
            }]
        ]
    })
};

bot.onText(/\/menu/, function (message, match) {
    var msgText = message.text;
    let clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;

    bot.sendMessage(clientId, 'MENU', startMenuMsgOpt);
});

bot.on('message', msg => {
    const chatId = msg.chat.id;
    
    if (msg.text === 'Посчитать проект') {
        bot.sendMessage(chatId,'Какая услуга вас интересует?',{
            disable_web_page_preview: false,
            reply_markup:JSON.stringify ({
                inline_keyboard: [
                    [{
                        text:'Интернет магазин',
                        callback_data: 'magazine'
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
        });

    }else if (msg.text === 'Наши контактные данные') {
        bot.sendMessage(chatId,'Номер телефона: + 7 912 365 79 73\nСайт: teiwaz.ru'+'\nПочта: teiwaz@yandex.ru');
        bot.sendMessage(chatId, text);
        bot.sendMessage(chatId,'Наш сайт:',{
            disable_web_page_preview: false,
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{
                        text: 'Перейти на сайт',
                        url:'https://www.google.ru'
                    }]
                ],
                one_time_keyboard: true
            })
        });
        bot.sendMessage(chatId,'Наш менеджер');
        bot.sendContact(chatId,'+79123657973','Dmitry');
    }

    if (msg.contact !== undefined){
        var contact = msg.contact;
        var fName = contact.first_name;
        var lName = contact.last_name;
        var number = contact.phone_number;
        var userid = contact.user_id;
        console.log(fName+" "+lName+" "+number);
    }
});

bot.on('callback_query', query => {
    const {message: {chat, message_id, text}} = query;
    //console.log(debug(query));

    switch (query.data) {
        default:
            console.log('unknown callback');
    }

    bot.answerCallbackQuery({callback_query_id: query.id});
});

function debug(obj = {}) {
    return JSON.stringify(obj, null, 4);
}