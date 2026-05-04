export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "زيت محرك تخليقي بالكامل 5W-30",
    description: "أقصى حماية للمحركات الحديثة، يقلل الاحتكاك ويحسن استهلاك الوقود.",
    price: 120,
    image: "https://images.unsplash.com/photo-1635334994200-a5482e361286?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "تخليقي"
  },
  {
    id: "p2",
    name: "زيت محرك نصف تخليقي 10W-40",
    description: "توازن مثالي بين الأداء والحماية للمحركات المعتادة.",
    price: 85,
    image: "https://images.unsplash.com/photo-1635334994200-a5482e361286?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "نصف تخليقي"
  },
  {
    id: "p3",
    name: "زيت محرك للخدمة الشاقة 20W-50",
    description: "مصمم خصيصاً للمحركات القديمة وتلك التي تعمل في ظروف قاسية وحرارة عالية.",
    price: 70,
    image: "https://images.unsplash.com/photo-1635334994200-a5482e361286?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "معدني"
  },
  {
    id: "p4",
    name: "زيت ناقل الحركة الأوتوماتيكي ATF",
    description: "تبديلات سلسة وعمر أطول لناقل الحركة.",
    price: 60,
    image: "https://images.unsplash.com/photo-1610640321523-8e7f1e7d89be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "سوائل أخرى"
  },
  {
    id: "p5",
    name: "سائل فرامل DOT 4",
    description: "استجابة فائقة لنظام الفرملة حتى في درجات الحرارة الاستثنائية.",
    price: 35,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "سوائل أخرى"
  },
  {
    id: "p6",
    name: "ماء رديتر (مبرد محرك) 50/50",
    description: "حماية قصوى من الغليان والتجمد، يحافظ على درجة حرارة المحرك المثالية.",
    price: 45,
    image: "https://images.unsplash.com/photo-1598555877526-72aa8e6fb10b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "سوائل أخرى"
  }
];
