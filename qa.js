const fakeNews = [
  'Украинская прокуратура заочно расстреляла ведущего радио «Радонеж»',
  'Великобритания подала заявку на вступление в Евросоюз по ускоренной процедуре',
  '«Не будь меня, этих переговоров не было бы»: Лукашенко потребовал Нобелевскую премию мира',
  'Евросоюз отключит Россию от Гольфстрима',
  'Шольц: «Германия вынуждена взять под опеку Чехию, страны Прибалтики и часть Польши»',
  'В Совете Федерации предложили ввести обязательное лицензирование кухонных обсуждений политики',
  'Украинская прокуратура заочно расстреляла ведущего радио «Радонеж»',
  'Россияне жалуются на обновление их операционной системы до версии Windows 95',
  'Пользователь TikTok впал в кому, посмотрев без остановок "Солярис" Тарковского',
  'Дмитрий Пучков возглавил Госкинозвук – федеральное агентство по дубляжу и озвучиванию западного кино',
  'Студента МГУ отчислили за слишком малое пожертвования на строительство церкви',
  'Из-за ошибки оборудования банкоматы могут работать в режиме шредера',
  'Узбекские археологи 23 февраля вскрыли гробницу Тимура',
  'Эксперт: марсианская цивилизация погибла из-за эпидемии коронавируса',
  'Исследование: пастафариане меньше болеют коронавирусом',
  'Из-за глобального потепления сутки на Земле увеличатся до 25 часов',
  'Людям с отклонениями по зрению запретят учиться в технических вузах',
  'Российские учёные доказали, что ПМС не существует',
  'ЕС будет публиковать цену за литр природного газа',
  'Банк России будет самостоятельно печатать иностранную валюту',
  'CNN: в качестве царь-санкции против Запада Россия может уволить Набиуллину',
  'Россия заменит цифровую подпись сургучной печатью',
  'Всех россиян старше 18 лет обяжут брать займы для положительной кредитной истории',
  'Все платежные сервисы РПЦ работают в штатном режиме',
  'Украинская прокуратура заочно расстреляла ведущего радио «Радонеж»',
  'Великобритания подала заявку на вступление в Евросоюз по ускоренной процедуре',
  'Россияне жалуются на обновление их операционной системы до версии Windows 95',
  'Пользователь TikTok впал в кому, посмотрев без остановок "Солярис" Тарковского',
  'Дмитрий Пучков возглавил Госкинозвук – федеральное агентство по дубляжу и озвучиванию западного кино',
  'Студента МГУ отчислили за слишком малое пожертвования на строительство церкви',
  'Из-за ошибки оборудования банкоматы могут работать в режиме шредера',
  'РФС подал заявку на вступление в Ассоциацию непризнанных государств',
  'ЕС будет публиковать цену за литр природного газа',
  '«Не будь меня, этих переговоров не было бы»: Лукашенко потребовал Нобелевскую премию мира',
];

const realNews = [
  'Нижегородец умер в очереди за шаурмой',
  '«Неуверенные пользователи унитаза» из Новокузнецка затопили соседей',
  'В Уфе осудили 4-летнего детсадовца, головой помявшего внедорожник',
  'Туристов в Китае накрыло огромной приливной волной',
  'Воронежцы ограбили банк с помощью мертвой вороны',
  'Дикие кабаны-вандалы пытаются разрушить подножие Родины-матери в Волгограде',
  'Пять африканских львиц отрастили гривы и начали вести себя как самцы',
  'Рыжий кот возглавил стадо овец в Новой Зеландии',
  'В Томской области олень убил банковского работника',
  'Саранча убила мужчину в сауне',
  'В Таиланде закрывают пляжи из-за нашествия ядовитых физалий',
  'Голубь в шляпе стал хранителем оптовой базы в Уфе',
  'В Орловской области встречаются бешеные ежики',
  'Директор школы в Амурской области отпустила учеников посмотреть на труп медведя',
  'Экологи Сахалина возмутились плохим обращением с морскими котиками',
  'Заезжий верблюд укусил женщину за грудь в центре Салавата.',
  'Кусающийся верблюд и орущий осел держат в страхе целый город',
  'Петербургский учёный лишился яичка при проверке документов у поста ГИБДД',
  'Полицейский и житель Экибастуза осуждены за дачу взяток друг другу',
  'Американец потерял чемодан с кокаином и попросил полицейских помочь с поисками',
  'Британские полицейские поймали на дороге пару окровавленных зомби',
  'В США арестовали клоуна, который терроризировал жителей Кентукки',
  'Пермские чиновники ищут подрядчика на вывоз трупов пока еще живых горожан',
  'В Австралии запретили демонстрировать ягодицы в публичных местах',
  'Скульптуру «Картофельная снежинка» установили в центре Красноярска',
  'На Урале геймер подстрелил соседа из арбалета за то, что тот «громко включал воду»',
  'Американец хотел сделать девушке предложение на бейсбольном матче, но потерял кольцо',
  'Кореянка из окна многоэтажки закинула сверток с обедом в люк машины мужа',
  'Тайские женщины в протест против плохих дорог приняли ванну в дорожных ямах',
  'Молодожены из Воронежа устроили в ЗАГСе вампирскую свадьбу и отправились в психбольницу',
  'Москвич пробежал марафон в костюме Годзиллы',
  'В Рейкьявике отключили уличные огни ради северного сияния',
];

const news = [];
for (let i = 0; i < fakeNews.length; i++) {
  news.push({
    news: fakeNews[i],
    truth: false,
    status: false,
  });
}
for (let j = 0; j < realNews.length; j++) {
  news.push({
    news: realNews[j],
    truth: true,
    status: false,
  });
}

module.exports = news;
