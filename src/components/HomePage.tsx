import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  setActiveSection: (section: 'home' | 'courses' | 'about') => void;
  setIsFormOpen: (open: boolean) => void;
}

const HomePage = ({ setActiveSection, setIsFormOpen }: HomePageProps) => {
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
                <Button size="lg" className="text-base" onClick={() => setActiveSection('courses')}>
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => setIsFormOpen(true)}>
                  Записаться на консультацию
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
          <Button size="lg" variant="secondary" className="text-base" onClick={() => setIsFormOpen(true)}>
            Записаться на консультацию
            <Icon name="Calendar" size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
