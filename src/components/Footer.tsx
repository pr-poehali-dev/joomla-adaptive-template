const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold">Т</span>
              </div>
              <span className="text-lg font-heading font-bold">Т-образование</span>
            </div>
            <p className="text-sm text-white/70">
              Образовательный центр для развития IT-специалистов
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Веб-разработка</li>
              <li>Data Science</li>
              <li>Мобильная разработка</li>
              <li>UX/UI Дизайн</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>О нас</li>
              <li>Преподаватели</li>
              <li>Партнеры</li>
              <li>Карьера</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@t-education.ru</li>
              <li>Москва, ул. Примерная, 10</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
          © 2024 Т-образование. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
