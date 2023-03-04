import HTMLBuilder from '/src/class.js'

const sectionTitles = Array.from(document.querySelectorAll('.section-title'));

// const subSectionTitles = Array.from(document.querySelectorAll('.info-title'));


const pregnancyInfo = {
    pregnancySubTitle: ['Куда будущей маме встать на учёт', 'Роддома Вильнюса', 'Как застраховаться', 'Какие выплаты могут получить родители'],
    pregnancyAddInfo: ['Информация про государственные и частные клиники, в которых можно вести наблюдение по беременности',
    'Стоимость родов, отзывы, список вещей в роддом, партнерские роды, прививки в роддоме...',
    'Кого страхует Содра, как проверить, застрахованы ли вы',
    'Дородовые и послеродовые пособия в Литве и критерии их получения'],
}

const articleTitles = {
pregnancy: ['Мама из Украины', 'Мама из Беларуси', 'Мама из России'],
};



const guide = new HTMLBuilder();
// console.log(guide);

function openSubtitles(event, sourse, prop, addProp) {
    const parent = event.currentTarget;
    guide.createContainer(`${prop}-container`);
    sourse[prop].forEach((title) => guide
      .createElement('h3', title, `${prop}`, 'append'));
    //   .createElement('p', title, `${addProp}`, 'after'));
    guide.insertFragment(parent);
}

sectionTitles.forEach((title) => title.addEventListener('click', (event) => {
    openSubtitles(event, pregnancyInfo, 'pregnancySubTitle', 'pregnancyAddInfo');

}));
// subSectionTitles.forEach((title) => title.addEventListener('click', (event) => openSubtitles(event, 'pregnancy')));
