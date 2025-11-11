import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'courses' | 'about'>('home');

  const courses = [
    {
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием React, TypeScript и Node.js',
      duration: '6 месяцев',
      level: 'С нуля',
      icon: 'Code2',
    },
    {
      title: 'Data Science',
      description: 'Анализ данных, машинное обучение и работа с большими данными на Python',
      duration: '8 месяцев',
      level: 'Базовые знания',
      icon: 'BarChart3',
    },
    {
      title: 'Мобильная разработка',
      description: 'Разработка приложений для iOS и Android на React Native',
      duration: '5 месяцев',
      level: 'С нуля',
      icon: 'Smartphone',
    },
    {
      title: 'UX/UI Дизайн',
      description: 'Проектирование интерфейсов и создание пользовательского опыта',
      duration: '4 месяца',
      level: 'С нуля',
      icon: 'Palette',
    },
    {
      title: 'Python-разработка',
      description: 'Backend-разработка на Python с использованием Django и FastAPI',
      duration: '6 месяцев',
      level: 'С нуля',
      icon: 'Terminal',
    },
    {
      title: 'Тестирование ПО',
      description: 'Ручное и автоматизированное тестирование веб-приложений',
      duration: '4 месяца',
      level: 'С нуля',
      icon: 'Bug',
    },
  ];

  const benefits = [
    {
      icon: 'Rocket',
      title: 'Практика с первого дня',
      description: 'Работаете над реальными проектами под руководством опытных наставников',
    },
    {
      icon: 'Users',
      title: 'Сообщество экспертов',
      description: 'Доступ к закрытому сообществу выпускников и практикующих специалистов',
    },
    {
      icon: 'Award',
      title: 'Сертификат',
      description: 'Получите документ о профессиональной переподготовке государственного образца',
    },
    {
      icon: 'Briefcase',
      title: 'Трудоустройство',
      description: 'Помощь с резюме, подготовка к собеседованиям и доступ к вакансиям партнеров',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">Т</span>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">Т-образование</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('courses')}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  activeSection === 'courses' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Курсы
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О центре
              </button>
            </nav>
            <Button className="hidden md:flex">Записаться</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="bg-gradient-to-br from-white to-secondary py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                    Освойте профессию будущего
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Практические курсы по IT-профессиям от ведущих экспертов индустрии. Начните карьеру в технологиях
                    с гарантией трудоустройства.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-base">
                      Выбрать курс
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-base">
                      Узнать подробнее
                    </Button>
                  </div>
                </div>
                <div className="animate-slide-in-left">
                  <img
                    src="https://cdn.poehali.dev/projects/08b25026-867d-45e9-9eed-83198ac5bfb2/files/277733db-e36c-4754-837a-4e42aaca5959.jpg"
                    alt="Образование"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                Мы создали образовательную среду, которая поможет вам достичь профессиональных целей
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={benefit.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Готовы начать обучение?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Запишитесь на бесплатную консультацию и узнайте, какой курс подходит именно вам
              </p>
              <Button size="lg" variant="secondary" className="text-base">
                Записаться на консультацию
                <Icon name="Calendar" size={20} className="ml-2" />
              </Button>
            </div>
          </section>
        </>
      )}

      {activeSection === 'courses' && (
        <section className="py-20 bg-white min-h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши курсы</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите направление и начните путь к новой профессии
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all hover:shadow-xl group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={course.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-muted-foreground">Длительность: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="GraduationCap" size={16} className="text-primary" />
                        <span className="text-muted-foreground">Уровень: {course.level}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Подробнее о курсе
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-20 bg-white min-h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">О центре</h1>
                <div className="mb-12">
                  <img
                    src="https://cdn.poehali.dev/projects/08b25026-867d-45e9-9eed-83198ac5bfb2/files/b487b23b-eca5-41cc-8d23-b81eb6cb12dc.jpg"
                    alt="Наш центр"
                    className="rounded-2xl shadow-xl w-full mb-8"
                  />
                </div>

                <div className="space-y-8 text-lg text-foreground/90">
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Наша миссия</h2>
                    <p className="leading-relaxed">
                      Мы создаем образовательную экосистему, которая помогает людям освоить востребованные профессии в
                      IT-индустрии. Наша цель — сделать качественное технологическое образование доступным для каждого,
                      независимо от начального уровня подготовки.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Наши ценности</h2>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                        <span>
                          <strong>Практический подход:</strong> Все знания применяются на реальных проектах с первого
                          дня обучения
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                        <span>
                          <strong>Экспертность:</strong> Преподаватели — практикующие специалисты из ведущих IT-компаний
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                        <span>
                          <strong>Поддержка:</strong> Индивидуальное сопровождение каждого студента на всех этапах
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                        <span>
                          <strong>Результат:</strong> Гарантия трудоустройства для успешных выпускников программ
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Наши достижения</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                      <div className="text-center">
                        <div className="text-5xl font-heading font-bold text-primary mb-2">5000+</div>
                        <div className="text-muted-foreground">Выпускников</div>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-heading font-bold text-primary mb-2">85%</div>
                        <div className="text-muted-foreground">Трудоустроены</div>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-heading font-bold text-primary mb-2">4.8</div>
                        <div className="text-muted-foreground">Средняя оценка</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-secondary rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold mb-4">Свяжитесь с нами</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" className="text-primary" size={20} />
                      <span>info@t-education.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <span>Москва, ул. Примерная, д. 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
    </div>
  );
};

export default Index;
