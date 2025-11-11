import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import CoursesPage from '@/components/CoursesPage';
import AboutPage from '@/components/AboutPage';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'courses' | 'about'>('home');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const { toast } = useToast();

  const navigateTo = (section: 'home' | 'courses' | 'about') => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        navigateTo={navigateTo}
      />

      {activeSection === 'home' && (
        <HomePage setActiveSection={setActiveSection} setIsFormOpen={setIsFormOpen} />
      )}

      {activeSection === 'courses' && (
        <CoursesPage setFormData={setFormData} formData={formData} setIsFormOpen={setIsFormOpen} />
      )}

      {activeSection === 'about' && <AboutPage />}

      <Footer />
    </div>
  );
};

export default Index;
