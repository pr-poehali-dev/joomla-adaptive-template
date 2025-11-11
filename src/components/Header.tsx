import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: 'home' | 'courses' | 'about';
  setActiveSection: (section: 'home' | 'courses' | 'about') => void;
  isFormOpen: boolean;
  setIsFormOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  formData: { name: string; email: string; phone: string; course: string; message: string };
  setFormData: (data: { name: string; email: string; phone: string; course: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
  navigateTo: (section: 'home' | 'courses' | 'about') => void;
}

const Header = ({
  activeSection,
  setActiveSection,
  isFormOpen,
  setIsFormOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  formData,
  setFormData,
  handleSubmit,
  navigateTo,
}: HeaderProps) => {
  return (
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
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button className="hidden md:flex">Записаться</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">Записаться на курс</DialogTitle>
                <DialogDescription>
                  Оставьте заявку и мы свяжемся с вами для консультации
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Интересующий курс</Label>
                  <Input
                    id="course"
                    placeholder="Веб-разработка"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о себе и своих целях"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl">Меню</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => navigateTo('home')}
                  className={`text-left text-lg font-semibold transition-colors hover:text-primary py-3 border-b ${
                    activeSection === 'home' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Home" size={20} />
                    Главная
                  </div>
                </button>
                <button
                  onClick={() => navigateTo('courses')}
                  className={`text-left text-lg font-semibold transition-colors hover:text-primary py-3 border-b ${
                    activeSection === 'courses' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="BookOpen" size={20} />
                    Курсы
                  </div>
                </button>
                <button
                  onClick={() => navigateTo('about')}
                  className={`text-left text-lg font-semibold transition-colors hover:text-primary py-3 border-b ${
                    activeSection === 'about' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Info" size={20} />
                    О центре
                  </div>
                </button>
                <div className="mt-6">
                  <Button className="w-full" size="lg" onClick={() => { setIsMobileMenuOpen(false); setIsFormOpen(true); }}>
                    Записаться на курс
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
