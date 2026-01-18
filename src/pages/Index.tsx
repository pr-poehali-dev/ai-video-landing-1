import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cases = {
    ads: [
      { 
        title: 'Рекламный ролик для IT-продукта',
        result: 'CTR увеличился на 340%, охват — 2.4M просмотров',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video1.mp4'
      },
      { 
        title: 'Промо недвижимости премиум-класса',
        result: 'Конверсия выросла на 127%, 45 заявок за неделю',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video2.mp4'
      }
    ],
    brand: [
      { 
        title: 'Имиджевое видео для финтех-компании',
        result: 'Узнаваемость бренда +85%, упоминания в соцсетях +210%',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video3.mp4'
      },
      { 
        title: 'История успеха для образовательного стартапа',
        result: 'Вовлеченность аудитории +156%, подписчики +3.2K',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video4.mp4'
      }
    ],
    animation: [
      { 
        title: '3D анимация для SaaS-платформы',
        result: 'Время на сайте +92%, конверсия демо +68%',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video5.mp4'
      },
      { 
        title: '2D объяснение сложного продукта',
        result: 'Понимание продукта +78%, заявки на консультацию +124%',
        video: 'https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/video6.mp4'
      }
    ]
  };

  const faqs = [
    {
      q: 'Сколько времени занимает создание видео?',
      a: 'В зависимости от сложности проекта — от 3 до 14 дней. Простые промо-ролики создаем за 3-5 дней, сложные имиджевые видео с уникальной анимацией — до 2 недель.'
    },
    {
      q: 'Можно ли внести правки после создания?',
      a: 'Да! Включено 2 раунда правок бесплатно. Дополнительные итерации обсуждаются индивидуально, но обычно мы попадаем в ожидания с первого раза.'
    },
    {
      q: 'Какие форматы видео вы создаете?',
      a: 'Любые форматы для соцсетей, YouTube, сайтов, презентаций. Адаптируем под все платформы: вертикальные Reels/Stories, квадратные для Instagram, горизонтальные для YouTube.'
    },
    {
      q: 'Как происходит оплата?',
      a: '50% предоплата перед стартом, 50% после утверждения финальной версии. Работаем по договору, предоставляем все закрывающие документы.'
    },
    {
      q: 'Что входит в стоимость ДЕМО ролика?',
      a: 'ДЕМО ролик создается бесплатно на базе вашего ТЗ. Это короткий 10-15 секундный фрагмент, который покажет стиль и подход. Если результат устраивает — создаем полную версию.'
    },
    {
      q: 'Используете ли вы только AI или есть ручная работа?',
      a: 'Мы комбинируем AI-технологии с профессиональным монтажом, цветокоррекцией и саунд-дизайном. AI ускоряет процесс, но финальное качество — результат ручной работы экспертов.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold">
            <span className="text-primary">BIG</span>
            <span className="text-white">PROFIT</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#how" className="text-sm font-medium hover:text-primary transition-colors">Как создаем</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79384520888" className="text-sm font-medium hover:text-primary transition-colors">
              8-938-452-08-88
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Заказать видео
            </Button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-slide-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#how" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Как создаем</a>
              <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Кейсы</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Вопросы</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              <a href="tel:+79384520888" className="text-sm font-medium text-primary">8-938-452-08-88</a>
              <Button className="bg-gradient-to-r from-primary to-secondary w-full">Заказать видео</Button>
            </div>
          </div>
        )}
      </header>

      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            АГЕНТСТВО AI<br/>СОЗДАЕМ ВИДЕО С ИИ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Превращаем идеи в вирусные видео за 3 дня. AI + креатив = результат, который продает
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
            Заказать ДЕМО
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                <span className="text-primary">СОЗДАЕМ ПРОДАЮЩЕЕ ВИДЕО</span>
              </h2>
              <h3 className="text-3xl font-heading font-semibold text-secondary">
                РАЗВИВАЕМ ВАШ БРЕНД
              </h3>
              <h3 className="text-3xl font-heading font-semibold text-accent">
                ПРИВЛЕКАЕМ КЛИЕНТОВ
              </h3>
              <Button size="lg" className="bg-gradient-to-r from-secondary to-accent mt-6">
                Заказать ДЕМО
              </Button>
            </div>
            
            <div className="relative animate-scale-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50" />
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="relative rounded-2xl w-full shadow-2xl"
              >
                <source src="https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/promo-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            КАК СОЗДАЕМ КРЕАТИВ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30" />
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="relative rounded-3xl w-full shadow-2xl"
              >
                <source src="https://cdn.poehali.dev/projects/1d3cf2f4-b6eb-46ad-a27c-1c5125086e0c/bucket/process-video.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: 'Sparkles', title: 'Идея', desc: 'Анализируем бренд и цели' },
                { icon: 'Wand2', title: 'AI-генерация', desc: 'Создаем концепцию с ИИ' },
                { icon: 'Scissors', title: 'Монтаж', desc: 'Профи-обработка кадра' },
                { icon: 'Rocket', title: 'Запуск', desc: 'Готово к размещению' }
              ].map((step, i) => (
                <Card key={i} className="p-6 bg-card border-border hover:border-primary transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <Icon name={step.icon as any} className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            КЕЙСЫ
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 text-secondary">Рекламные видеоролики</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {cases.ads.map((item, i) => (
                  <Card key={i} className="overflow-hidden bg-card border-border hover:border-primary transition-all group animate-scale-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-64 object-cover"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-primary font-medium mb-4">Результат: {item.result}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Заказать видеоролик
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 text-accent">Видео для развития бренда</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {cases.brand.map((item, i) => (
                  <Card key={i} className="overflow-hidden bg-card border-border hover:border-accent transition-all group animate-scale-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="relative">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-64 object-cover"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-accent font-medium mb-4">Результат: {item.result}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Заказать видео
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 text-secondary">Анимация</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {cases.animation.map((item, i) => (
                  <Card key={i} className="overflow-hidden bg-card border-border hover:border-secondary transition-all group animate-scale-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="relative">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-64 object-cover"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-secondary font-medium mb-4">Результат: {item.result}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Заказать анимацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            УСЛУГИ
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-border hover:border-primary transition-all hover:scale-105 animate-fade-in">
              <Icon name="TrendingUp" className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">ПРОДАЮЩИЕ ВИДЕО РОЛИКИ</h3>
              <p className="text-muted-foreground">
                Продающие видеоролики помогают продвигать продукт или услугу, привлечь внимание аудитории и мотивировать клиента к действию (купить, подписаться, обратиться за консультацией)
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-muted border-border hover:border-accent transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Award" className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">ВИДЕО ДЛЯ РАЗВИТИЯ БРЕНДА</h3>
              <p className="text-muted-foreground">
                Видео помогают развивать имидж бренда, формируя положительный образ компании или продукта. Это происходит через повышение узнаваемости, укрепление доверия и авторитета, формирование эмоциональной связи с аудиторией, повышение лояльности к бренду
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-muted border-border hover:border-secondary transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Palette" className="w-16 h-16 text-secondary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">АНИМАЦИЯ. 2D, 3D ГРАФИКА</h3>
              <p className="text-muted-foreground">
                Анимация и графика нужна бизнесу для визуализации сложных идей, эмоционального вовлечения аудитории и укрепления бренда. Помогает объяснить сложные процессы, удержать внимание аудитории и выделиться среди конкурентов
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors">
                  <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-glow">
            <h3 className="text-3xl font-heading font-bold text-center mb-6">
              Заполните заявку и получите ДЕМО ролик бесплатно
            </h3>
            
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о вашем проекте" 
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-lg"
              >
                Получить ДЕМО бесплатно
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer id="contacts" className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6">
                <span className="text-primary">BIG</span>
                <span className="text-white">PROFIT</span>
                <span className="block text-xl text-muted-foreground mt-2">АГЕНТСТВО AI</span>
              </h3>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <a href="tel:+79384520888" className="hover:text-primary transition-colors">8-938-452-08-88</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <a href="mailto:info@bigprofit.ai" className="hover:text-primary transition-colors">info@bigprofit.ai</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Send" className="text-primary" size={20} />
                  <a href="https://t.me/bigprofit" className="hover:text-primary transition-colors">Telegram</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>г. Сочи, ул. Навагинская, 13/1</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Реквизиты</h4>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>ИНН: 2320123456</p>
                <p>ОГРН: 1232300012345</p>
              </div>

              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Пользовательское соглашение</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Публичная оферта</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 BIGPROFIT. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
