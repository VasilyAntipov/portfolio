export const hexagonItems = [
    { head: 'Индивидуальные качества', text: `Быстрое изучение необходимого навыка, умение работать в команде, способность решать поставленную задачу в сжатые сроки` },
    { head: 'Понимание принципов ООП/паттернов/алгоритмизации', text: `Использование в работе принципов ООП, использование паттернов, знание основ алгоритмизации` },
    { head: 'Принципы продуктивного кода, DRY', text: `Использование фреймворков, переиспользование компонент, использование систем контроля версий` },
    { head: 'Знание .nix, Windows', text: `Умение установки и администрирования серверов, nix/windows систем, веб-сервера` }
]

export const links = [
    { to: 'intro', text: 'СТАРТОВАЯ' },
    { to: 'about-wrapper', text: 'ИНФОРМАЦИЯ' },
    { to: 'portfolio', text: 'ПОРТФОЛИО' },
    { to: 'contacts', text: 'КОНТАКТЫ' },
]

export const graphItems = [
    { name: ' CSS', skill: '2.5' },
    { name: ' HTML', skill: '2.5' },
    { name: ' JavaScript', skill: '2.5' },
    { name: ' React', skill: '2' },
    { name: ' Redux', skill: '2' },
    { name: ' NextJS', skill: '1.5' },
    { name: ' UI/UX design', skill: '2' },
    { name: ' Node.js', skill: '1.5' },
    { name: ' Express', skill: '1.5' },
    { name: ' Postgre/MSSQL', skill: '5' },
]

export const projects = [
    {
        index: 1,
        groups: ['JavaScript', 'React', 'Redux', 'Material-UI', 'ExpressJS', 'PostgreSQL', 'SequelizeJS'],
        name: 'Онлайн-магазин',
        image: '/slide-shop1.png',
        text: 'Фулл-стэк приложение с использованием токенов, админ-панели, пагинации, фильтрации и др.',
        link: 'https://shop.froggy.pw',
        slides: ['slide-shop1.png', 'slide-shop2.png', 'slide-shop3.png'],
        git: 'https://github.com/VasilyAntipov/shop'
    },
    {
        index: 2,
        groups: ['JavaScript'],
        name: 'Chess',
        image: '/slide-chess3.png',
        text: 'Chessmate client on VanillaJS,logical and mathematical calculations',
        link: 'https://chess.froggy.com',
        slides: ['slide-chess1.png', 'slide-chess2.png', 'slide-chess3.png'],
        git: 'https://github.com/VasilyAntipov/chess'
    },
    {
        index: 3,
        groups: ['JavaScript', 'React', 'Redux'],
        name: 'ShortLink',
        // image: '/shorts-slide1.png',
        text: 'ShortLink',
        link: 'https://shorts.froggy.com',
        slides: ['slide-shorts1.png', 'slide-shorts2.png', 'slide-shorts3.png'],
        git: ''
    },
    {
        index: 4,
        groups: ['JavaScript', 'React'],
        name: 'Portfolio',
        image: '/slide-portfolio1.png',
        text: 'Chess',
        link: 'https://froggy.com',
        slides: ['slide-portfolio2.png', 'slide-portfolio3.png'],
        git: 'https://github.com/VasilyAntipov/portfolio'
    },
    {
        index: 5,
        groups: ['JavaScript', 'NextJS', 'React', 'Redux', 'Material-UI'],
        name: 'Films',
        // image: '/slide-films.png',
        text: 'Test',
        link: 'https://vk.com',
        slides: ['slide-films1.png', 'slide-films2.png', 'slide-films3.png'],
        git: ''
    },
]