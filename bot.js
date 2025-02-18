const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment-jalaali');


const token = "7930873100:AAE1USB6Sg-eHsMbsWZo7fQMraeF9MzIhC0";
const chatId = "";

const bot = new TelegramBot(token, { polling: true });

function getTodayDate() {
    return moment().format('jYYYY/jMM/jDD');
}

function sendDailyCalendar(chatId) {
    const today = getTodayDate();
    const message = `📅 امروز: ${today} \n یک روز خوب داشته باشید!`;
    bot.sendMessage(chatId, message);
}

// ارسال پیام هر روز در ساعت 8 صبح به وقت محلی سرور
const schedule = require('node-schedule');
schedule.scheduleJob('0 8 * * *', () => sendDailyCalendar(chatId));

