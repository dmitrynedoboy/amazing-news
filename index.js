const { json } = require('micro');
const {
  Alice, Stage, Scene,
} = require('yandex-dialogs-sdk');
const { reply, pause, buttons } = require('alice-renderer');
const newsArr = require('./qa');

const alice = new Alice();
const stage = new Stage();
const FAKE_NEWS = 'FAKE_NEWS';
const fakeNews = new Scene(FAKE_NEWS);

// функция выбора рандомной новости
function randomQuestion(fakeNews) {
  const random = Math.floor(Math.random() * fakeNews.length);
  const news = fakeNews[random];
  if (news.status === false) return fakeNews[random];
  return randomQuestion(fakeNews);
}

// Сцена вопросов
fakeNews.command(
  /^(нафиг|потом|отмена|отбой|стоп|отстань|отвали|нах|иди)/im,
  (ctx) => {
    ctx.leave();
    return reply.end`
      Спасибо за игру!\n
      Ваш результат: ${ctx.session.get('score')}
      `;
  },
);

fakeNews.any((ctx) => {
  const repeatNews = ctx.session.get('currentNews');
  if (ctx.message.match(/повтори|еще раз|снова|заново/i)) {
    return reply`${repeatNews}`;
  }
  const currentScore = ctx.session.get('score');
  const answer = ctx.session.get('currentTruth');
  let userAnswer = ctx.message;
  let { news, truth, status } = randomQuestion(newsArr);
  ctx.session.set('currentNews', news);
  ctx.session.set('currentTruth', truth);

  if (ctx.message.match(
    /^(да$|так$|так точно|правда|верю|точно|^ну да|ага|угу|конечно|да |безусловно|естественно|разумеется)/i,
  ) && !ctx.message.match(/(нет|нафиг)/i)) {
    userAnswer = true;
  } else if (ctx.message.match(
    /^(не|нет|неа|совсем не|вообще не|ни разу|конечно не|нафиг)/i,
  )) {
    userAnswer = false;
  } else if (ctx.message.match(/\s/i)) {
    return reply`
    Я вас не поняла.\n
    ${pause(200)}
    Повторите.
    `;
  }
  if (answer === userAnswer) {
    ctx.session.set('score', currentScore + 1);
    status = true;
    return reply`
    ${[
    'Верно!',
    'Так точно.',
    'Правильно',
    'Как вы догадались?',
  ]}\n
    ${pause(200)}
    Следующая новость:
    ${pause(200)}
    ${news}
    `;
  }
  return reply`
        ${[
    'Вы не угадали.',
    'К сожалению это не так.',
    'Фигушки!',
    'Даже не близко!',
    'Вам следует прокачать интуицию.',
  ]}\n
        ${pause(200)}
        Следующая новость:
        ${pause(200)}
        ${news}
        `;
});

stage.addScene(fakeNews);

// MIDDLEWARE //
alice.use(stage.getMiddleware());

// Приветсвенное окно для нового юзера
alice.command(
  '',
  (ctx) => reply`
  ${[
    'Привет!',
    'Хэллоу!',
    'Гуд морнинг!',
    'Здравствуй, друг!',
    'Гуден так!',
    'Алоха!',
  ]}
  ${pause(100)}
  ${[
    'Ты хорошо разбираешься в новостях?',
    'Отличишь ложь от правды?',
    'Как думаешь - эти новости правдивы?',
    'Угадай, какие новости реальны!',
  ]}
  `,
);

// обработчик начала игры
alice.command(
  /^(да$|так$|так точно|точно|^ну да|ага|угу|конечно|да |безусловно|давай$|валяй|поехали|погнали|начинай|пожалуй|продолжай|не помешает|не откажусь|изволь|естественно|разумеется|хочу|я хочу)/i,
  async (ctx) => {
    ctx.enter(FAKE_NEWS);
    let { news, truth, status } = randomQuestion(newsArr);
    ctx.session.set('score', 0);
    ctx.session.set('currentNews', news);
    ctx.session.set('currentTruth', truth);
    status = true;
    return reply`
    ${[
    'Хорошо, давайте сыграем!',
    'Тогда начнём!',
    'Погнали!',
    'Вперед к новостям!',
  ]}
    ${pause(200)}
    ${news}
    `;
  },
);

alice.any(async (ctx) => reply`
  Я вас не поняла.\n
  ${pause(200)}
  Повторите.
`);
// alice.listen(3000, '/');

module.exports = async req => {
  // Из запроса извлекаются свойства request, session и version.
  const request = await json(req);

  // Обработчики пойдут наверх искать подходящую команду
  // И составлять ответ на её основе.
  return await alice.handleRequest(request);
};
