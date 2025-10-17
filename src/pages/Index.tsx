import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Hookah Set',
      category: 'hookah',
      price: 12000,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/9c237b5b-123f-4e2f-88d4-8a8daab394bd.jpg',
      badge: 'Хит продаж',
      description: 'Премиальный кальян с LED подсветкой'
    },
    {
      id: 2,
      name: 'Classic Black Hookah',
      category: 'hookah',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/9c237b5b-123f-4e2f-88d4-8a8daab394bd.jpg',
      description: 'Классический стиль, надежная конструкция'
    },
    {
      id: 3,
      name: 'Tropical Mix Tobacco',
      category: 'tobacco',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/442ee937-b447-4fc9-aa2b-2685c9ed5f4c.jpg',
      badge: 'Новинка',
      description: 'Микс тропических фруктов, 50г'
    },
    {
      id: 4,
      name: 'Berry Blast Tobacco',
      category: 'tobacco',
      price: 950,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/442ee937-b447-4fc9-aa2b-2685c9ed5f4c.jpg',
      description: 'Ягодный взрыв вкуса, 50г'
    },
    {
      id: 5,
      name: 'Mint Fresh Disposable',
      category: 'disposable',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/6a2ae71c-7971-4938-aa9c-0bbf290420c8.jpg',
      description: '800 затяжек, мятная свежесть'
    },
    {
      id: 6,
      name: 'Mango Ice Disposable',
      category: 'disposable',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/6a2ae71c-7971-4938-aa9c-0bbf290420c8.jpg',
      badge: 'Новинка',
      description: '800 затяжек, манго с холодком'
    },
    {
      id: 7,
      name: 'Gold Edition Hookah',
      category: 'hookah',
      price: 15000,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/9c237b5b-123f-4e2f-88d4-8a8daab394bd.jpg',
      badge: 'Premium',
      description: 'Золотая серия, эксклюзивный дизайн'
    },
    {
      id: 8,
      name: 'Double Apple Tobacco',
      category: 'tobacco',
      price: 850,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/442ee937-b447-4fc9-aa2b-2685c9ed5f4c.jpg',
      description: 'Классическое двойное яблоко, 50г'
    },
    {
      id: 9,
      name: 'Strawberry Ice Disposable',
      category: 'disposable',
      price: 480,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/6a2ae71c-7971-4938-aa9c-0bbf290420c8.jpg',
      description: '1000 затяжек, клубника с холодком'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'LayoutGrid' },
    { id: 'hookah', name: 'Кальяны', icon: 'Wine' },
    { id: 'tobacco', name: 'Табак', icon: 'Leaf' },
    { id: 'disposable', name: 'Одноразки', icon: 'Zap' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={28} className="text-orange-500" />
              <h1 className="text-2xl font-bold">KALYAN HOUSE</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="text-sm hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="default">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-background to-purple-50 dark:from-orange-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-orange-500 text-white">Лучшие цены в городе</Badge>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Premium Hookah & Tobacco
            </h2>
            <p className="text-lg text-muted-foreground">
              Лучшие кальяны, табак и одноразовые устройства с доставкой по всей России
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Каталог товаров</h2>
          
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'bg-orange-500 hover:bg-orange-600' : ''}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <p className="text-2xl font-bold text-orange-500">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" size={32} className="text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg">Качество</h3>
                <p className="text-muted-foreground text-sm">
                  Только сертифицированная продукция от проверенных производителей
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Truck" size={32} className="text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg">Быстрая доставка</h3>
                <p className="text-muted-foreground text-sm">
                  Доставка по Москве в день заказа, по России 2-5 дней
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Headphones" size={32} className="text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg">Поддержка 24/7</h3>
                <p className="text-muted-foreground text-sm">
                  Консультация и помощь в выборе в любое время
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Icon name="MapPin" size={32} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Доставка</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• По Москве — 300₽ (бесплатно от 3000₽)</li>
                  <li>• По России — от 500₽</li>
                  <li>• Самовывоз из магазина — бесплатно</li>
                  <li>• Доставка в день заказа</li>
                </ul>
              </Card>
              <Card className="p-6">
                <Icon name="CreditCard" size={32} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Наличными курьеру</li>
                  <li>• Банковской картой</li>
                  <li>• Онлайн на сайте</li>
                  <li>• Безналичный расчет для юр. лиц</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Icon name="Phone" size={24} className="text-orange-500 mx-auto" />
                <p className="font-semibold">Телефон</p>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" size={24} className="text-orange-500 mx-auto" />
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@kalyanhouse.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="MapPin" size={24} className="text-orange-500 mx-auto" />
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={24} className="text-orange-500" />
              <span className="font-bold">KALYAN HOUSE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Kalyan House. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
