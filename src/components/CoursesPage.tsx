import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CoursesPageProps {
  setFormData: (data: { name: string; email: string; phone: string; course: string; message: string }) => void;
  formData: { name: string; email: string; phone: string; course: string; message: string };
  setIsFormOpen: (open: boolean) => void;
}

const CoursesPage = ({ setFormData, formData, setIsFormOpen }: CoursesPageProps) => {
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

  return (
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
                <Button className="w-full" onClick={() => { setFormData({ ...formData, course: course.title }); setIsFormOpen(true); }}>
                  Записаться на курс
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
