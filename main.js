process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');
const tokenInfo = require("./token");
const token = tokenInfo.token;

const keyboardsModule = require('./keyboards');

const bot = new TelegramBot(token,{ polling:{
        interval: 300,
        autoStart: true,
        params:{
            timeout:10
        }
    }
});

console.log('starting bot');

const startMenuMsgOpt = keyboardsModule.alotofmenu.mainMenu;

bot.onText(/\/menu/, function (message, match) {
    let clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    bot.sendMessage(clientId, '<strong>Главное Меню</strong>', startMenuMsgOpt);
});

bot.onText(/\/start/, function (message) {
    let clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    bot.sendMessage(clientId, 'Доброго времени суток! Введите команду /menu, чтобы открыть главное меню');
});

bot.on('message', msg => {

    const chatId = msg.chat.id;
    
    if (msg.text === 'Посчитать проект') {
        bot.sendMessage(chatId,'Какая услуга вас интересует?', keyboardsModule.alotofmenu.servicesKeyboard);

    }else if (msg.text === 'Наши контактные данные') {
        bot.sendMessage(chatId,'Наш сайт:', keyboardsModule.alotofmenu.sendCard);
        bot.sendContact(chatId,'+79123657973','Свяжитесь с Дмитрием');
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

var bill = {
  cost: 0,
  service: ''
};

bot.on('callback_query', query => {
    var {message: {chat, message_id, text}} = query;
    console.log(text);

    switch (query.data) {
        case "design":
            if (bill.service === ''){
                bill.service +='Дизайн';
            }
            bot.sendMessage(chat.id,'Выберите вид/виды требуемой услуги одним нажатием по нужным пунктам', keyboardsModule.alotofmenu.designKeyboard);
            break;
        case "marketing":
            if (bill.service === ''){
                bill.service +='Реклама';
            }
            bot.sendMessage(chat.id, 'Выберите вид/виды требуемой услуги одним нажатием по нужным пунктам', keyboardsModule.alotofmenu.marketingKeyboard);
            break;

        case "market":
            if (bill.service === ''){
                bill.service +='Интернет магазин';
            }
            bot.sendMessage(chat.id,'Выберите функциональность одним нажатием по нужным пунктам', keyboardsModule.alotofmenu.marketKeyboard);
            break;

        case "app":
            if (bill.service === ''){
                bill.service +='Приложение';
            }
            bot.sendMessage(chat.id,'Выберите функциональность одним нажатием по нужным пунктам', keyboardsModule.alotofmenu.appKeyboard);
            break;

        case 'dcs':
            bot.sendMessage(chat.id,'20 000');
            bill.cost+=20000;
            break;

        case 'da':
            bot.sendMessage(chat.id, '10 000');
            bill.cost+=10000;
            break;

        case 'db':
            bot.sendMessage(chat.id, '12 000');
            bill.cost+=12000;
            break;

        case 'dm':
            bot.sendMessage(chat.id, '15 000');
            bill.cost+=15000;
            break;

        case 'close':
            bot.deleteMessage(chat.id, query.message.message_id,);
            //bot.answerCallbackQuery(query.id,"idi nakhyi", true);
            if (bill.cost !== 0) {
                bot.sendMessage(chat.id, `Итоговая сумма за услугу ${bill.service} = ${bill.cost}`);
                bill.cost = 0;
                bill.service = '';
            }
            break;
        default:
            console.log('unknown callback');
    }
    bot.answerCallbackQuery({callback_query_id: query.id});
});

function debug(obj = {}) {
    return JSON.stringify(obj, null, 4);
}
