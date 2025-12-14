import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between" style={{ height: '6.5vh', paddingLeft: '3vw', paddingRight: '3vw' }}>
          {/* Logo */}
          <div className="flex items-center gap-[0.5vw]">
            <div className="flex flex-col items-center justify-center" style={{ width: '1.8vw', height: '1.8vw' }}>
              <div style={{ fontSize: '0.6vw', letterSpacing: '0.05em', lineHeight: 1 }}>IR</div>
              <div className="w-full h-[1px] bg-foreground" style={{ margin: '0.1vw 0' }}></div>
            </div>
            <span style={{ fontSize: '1.1vw', fontWeight: 400, letterSpacing: '0.08em' }}>MOBIARRE</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-[2.5vw]">
            <button className="flex items-center gap-[0.4vw] hover:text-primary transition-colors" style={{ fontSize: '0.9vw' }}>
              <span>Каталог</span>
              <Icon name="ChevronDown" size={16} />
            </button>
            <button className="flex items-center gap-[0.4vw] hover:text-primary transition-colors" style={{ fontSize: '0.9vw' }}>
              <span>О компании</span>
              <Icon name="ChevronDown" size={16} />
            </button>
            <a href="#" className="hover:text-primary transition-colors" style={{ fontSize: '0.9vw' }}>Наши проекты</a>
            <a href="#" className="hover:text-primary transition-colors" style={{ fontSize: '0.9vw' }}>Контакты</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-[1.5vw]">
            <button className="hover:text-primary transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <a href="tel:+73466424288" className="hover:text-primary transition-colors" style={{ fontSize: '0.95vw', fontWeight: 500 }}>
              +7 (346) 642-42-88
            </a>
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" 
              style={{ fontSize: '0.85vw', padding: '0.6vw 1.8vw', height: 'auto' }}
            >
              Свяжитесь с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="pt-[8vh]" style={{ paddingLeft: '3vw', paddingRight: '3vw', paddingTop: '9vh' }}>
        <div className="flex items-center gap-[0.8vw]" style={{ fontSize: '0.75vw', color: '#666', paddingTop: '1.5vh' }}>
          <a href="#" className="hover:text-primary transition-colors">Главная</a>
          <Icon name="ChevronRight" size={12} />
          <a href="#" className="hover:text-primary transition-colors">Блог</a>
          <Icon name="ChevronRight" size={12} />
          <span>Как выбрать дизайн-проект интерьера: 5 советов</span>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ marginTop: '3vh', marginLeft: '3vw', marginRight: '3vw' }}>
        <div className="relative rounded-lg overflow-hidden" style={{ height: '65vh' }}>
          <img 
            src="https://cdn.poehali.dev/projects/a32db0f2-92c8-436b-b3c2-c35b8e1159d1/files/16701ef5-b53a-4319-92f8-383ad5eed13e.jpg"
            alt="Современный интерьер кухни"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Tags */}
          <div className="absolute flex gap-[0.8vw]" style={{ top: '3vh', left: '2.5vw' }}>
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-[1.2vw] py-[0.6vh]" style={{ fontSize: '0.75vw' }}>
              Тренды
            </span>
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-[1.2vw] py-[0.6vh]" style={{ fontSize: '0.75vw' }}>
              28 апреля, 2025
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0" style={{ padding: '3vh 2.5vw 4vh' }}>
            <h1 className="text-white font-bold leading-tight" style={{ fontSize: '3.2vw', maxWidth: '70%' }}>
              КАК ВЫБРАТЬ ДИЗАЙН-ПРОЕКТ ИНТЕРЬЕРА: 5 СОВЕТОВ
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ marginTop: '6vh', marginLeft: '3vw', marginRight: '3vw', paddingBottom: '8vh' }}>
        <div className="max-w-[50vw]">
          <p className="leading-relaxed" style={{ fontSize: '1vw', lineHeight: 1.8, color: '#333' }}>
            Создание интерьера мечты начинается с выбора правильного дизайн-проекта. 
            Это фундамент, на котором строится весь процесс ремонта и обустройства пространства. 
            Грамотно разработанный проект позволяет избежать ошибок, сэкономить бюджет и воплотить 
            ваши идеи в реальность максимально точно.
          </p>

          <div style={{ marginTop: '4vh' }}>
            <h2 className="font-bold mb-[2vh]" style={{ fontSize: '1.8vw' }}>
              1. Определите свои потребности
            </h2>
            <p className="leading-relaxed" style={{ fontSize: '1vw', lineHeight: 1.8, color: '#333' }}>
              Прежде чем приступать к выбору дизайнера, четко сформулируйте, что именно вам нужно. 
              Составьте список помещений, которые требуют проработки, подумайте о функциональности 
              каждой зоны. Учитывайте образ жизни всех членов семьи: наличие детей, домашних животных, 
              хобби и привычки.
            </p>
          </div>

          <div style={{ marginTop: '4vh' }}>
            <h2 className="font-bold mb-[2vh]" style={{ fontSize: '1.8vw' }}>
              2. Изучите портфолио дизайнера
            </h2>
            <p className="leading-relaxed" style={{ fontSize: '1vw', lineHeight: 1.8, color: '#333' }}>
              Портфолио — это визитная карточка любого дизайнера. Внимательно изучите реализованные 
              проекты, обратите внимание на стилистику, внимание к деталям, разнообразие решений. 
              Важно, чтобы работы вызывали у вас эмоциональный отклик и соответствовали вашим 
              представлениям о красоте и комфорте.
            </p>
          </div>

          <div style={{ marginTop: '4vh' }}>
            <h2 className="font-bold mb-[2vh]" style={{ fontSize: '1.8vw' }}>
              3. Оцените уровень детализации
            </h2>
            <p className="leading-relaxed" style={{ fontSize: '1vw', lineHeight: 1.8, color: '#333' }}>
              Качественный дизайн-проект включает подробные чертежи, 3D-визуализации, развертки стен, 
              схемы размещения мебели и оборудования. Чем детальнее проработан проект, тем меньше 
              вопросов возникнет на этапе реализации и тем точнее будет соблюден бюджет.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
