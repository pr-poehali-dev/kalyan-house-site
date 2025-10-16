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
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Hookah Set',
      category: 'hookah',
      price: 12000,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/1894bdd5-f7ec-4d69-be5c-99f20b4e9354.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Classic Black Hookah',
      category: 'hookah',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/1894bdd5-f7ec-4d69-be5c-99f20b4e9354.jpg'
    },
    {
      id: 3,
      name: 'Tropical Mix Tobacco',
      category: 'tobacco',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/93863616-53d4-4fdf-a2af-e947cfa22ddf.jpg',
      badge: 'Новинка'
    },
    {
      id: 4,
      name: 'Berry Blast Tobacco',
      category: 'tobacco',
      price: 950,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/93863616-53d4-4fdf-a2af-e947cfa22ddf.jpg'
    },
    {
      id: 5,
      name: 'Mint Fresh Disposable',
      category: 'disposable',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/75204341-d7c4-47f9-acf1-305adb6eb406.jpg'
    },
    {
      id: 6,
      name: 'Mango Ice Disposable',
      category: 'disposable',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/6ff14c69-5087-43c5-a28f-3c6320ba7c2a/files/75204341-d7c4-47f9-acf1-305adb6eb406.jpg',
      badge: 'Новинка'
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
              <Icon name="Home" size={24} className="text-accent" />
              <h1 className="text-2xl font-bold">KALYAN HOUSE</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm hover:text-accent transition-colors">Каталог</a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
              <a href="#blog" className="text-sm hover:text-accent transition-colors">Блог</a>
              <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Premium Hookah & Tobacco
            </h2>
            <p className="text-lg text-muted-foreground">
              Лучшие кальяны, табак и одноразовые устройства с доставкой по всей России
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'bg-accent hover:bg-accent/90' : ''}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
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
            <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Качество</h3>
                <p className="text-muted-foreground text-sm">
                  Только сертифицированная продукция от проверенных производителей
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Truck" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Доставка</h3>
                <p className="text-muted-foreground text-sm">
                  Быстрая доставка по Москве и всей России
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Headphones" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Поддержка</h3>
                <p className="text-muted-foreground text-sm">
                  Консультация и помощь в выборе 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Контакты</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Mail" size={20} className="mr-2" />
                info@kalyanhouse.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Kalyan House. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
