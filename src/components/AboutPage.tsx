import Icon from '@/components/ui/icon';

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;
