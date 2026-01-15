import { Target, Trophy, Users, Zap, Shield, Star, Calendar, ArrowRight, Menu, X, Heart, TrendingUp, Award } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const legendsRef = useRef(null)
  const newsRef = useRef(null)
  const featuresRef = useRef(null)
  const legendsInView = useInView(legendsRef, { once: true })
  const newsInView = useInView(newsRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })

  const legends = [
    {
      name: 'Wraith',
      role: 'Штурмовик',
      ability: 'Межпространственный разлом',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      description: 'Быстрый и неуловимый боец, способный перемещаться между измерениями'
    },
    {
      name: 'Pathfinder',
      role: 'Разведчик',
      ability: 'Крюк-кошка',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80',
      description: 'Робот-оптимист с возможностью быстрого перемещения по карте'
    },
    {
      name: 'Lifeline',
      role: 'Поддержка',
      ability: 'Дрон помощи',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
      description: 'Боевой медик, способный лечить союзников и вызывать снаряжение'
    },
    {
      name: 'Bloodhound',
      role: 'Разведчик',
      ability: 'Глаз Всеотца',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      description: 'Технологический охотник, выслеживающий врагов по следам'
    }
  ]

  const news = [
    {
      title: 'Новый сезон: Затмение',
      date: '15 января 2024',
      description: 'Встречайте новую легенду Catalyst и обновленную карту Storm Point с уникальными локациями',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80'
    },
    {
      title: 'Обновление баланса оружия',
      date: '8 января 2024',
      description: 'Значительные изменения в характеристиках популярного оружия для более сбалансированного геймплея',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80'
    },
    {
      title: 'Коллекционное событие',
      date: '1 января 2024',
      description: 'Эксклюзивные скины для легенд и оружия доступны в течение ограниченного времени',
      image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-red-600/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Target className="w-10 h-10 text-red-600" />
              <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full" />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">APEX LEGENDS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#legends" onClick={(e) => { e.preventDefault(); document.getElementById('legends').scrollIntoView({behavior: 'smooth'}); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Легенды</a>
            <a href="#news" onClick={(e) => { e.preventDefault(); document.getElementById('news').scrollIntoView({behavior: 'smooth'}); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Новости</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({behavior: 'smooth'}); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Особенности</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({behavior: 'smooth'}); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">О игре</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 flex items-center gap-2">
              Играть сейчас
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-red-600/20">
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <a href="#legends" onClick={(e) => { e.preventDefault(); document.getElementById('legends').scrollIntoView({behavior: 'smooth'}); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Легенды</a>
              <a href="#news" onClick={(e) => { e.preventDefault(); document.getElementById('news').scrollIntoView({behavior: 'smooth'}); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Новости</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({behavior: 'smooth'}); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Особенности</a>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-bold">
                Играть сейчас
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80" 
            alt="Apex Legends Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-orange-950/30" />
        </div>
        
        <div className="relative z-10 container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
              APEX
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                LEGENDS
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-red-500 mb-8 font-bold tracking-tight">
              Королевская битва нового поколения
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Выбери свою легенду из уникальных персонажей с мощными способностями. Объединяйся в команды по 3 игрока и сражайся за звание чемпиона на полях Frontier.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 flex items-center justify-center gap-3">
                <Zap className="w-6 h-6" />
                Начать играть
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm border-2 border-red-600/30 hover:border-red-600/60">
                Смотреть трейлер
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEGENDS SECTION */}
      <section id="legends" className="py-24 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            ref={legendsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: legendsInView ? 1 : 0, y: legendsInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Выбери свою <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">легенду</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Каждая легенда обладает уникальными способностями и стилем игры
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {legends.map((legend, index) => (
                <motion.div
                  key={legend.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: legendsInView ? 1 : 0, y: legendsInView ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={legend.image} 
                      alt={legend.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-red-600/20 backdrop-blur-md rounded-lg px-3 py-1 inline-block mb-3 border border-red-600/30">
                      <span className="text-red-400 text-sm font-bold">{legend.role}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">{legend.name}</h3>
                    <p className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      {legend.ability}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {legend.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-24 px-6 bg-slate-950/50">
        <div className="container mx-auto">
          <motion.div
            ref={newsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: newsInView ? 1 : 0, y: newsInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Последние <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">новости</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Будь в курсе всех обновлений и событий в мире Apex Legends
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: newsInView ? 1 : 0, y: newsInView ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-red-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <button className="text-red-500 hover:text-red-400 font-semibold flex items-center gap-2 transition-colors">
                      Читать далее
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Почему <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Apex?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20">
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-red-600/30">
                  <Users className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Командная игра</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Объединяйся с друзьями в отряды по 3 человека. Координация и синергия способностей - ключ к победе.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
                <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-orange-600/30">
                  <Trophy className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Рейтинговый режим</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Поднимайся по рангам от Бронзы до легендарного Хищника. Докажи, что ты лучший!
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20">
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-red-600/30">
                  <TrendingUp className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Регулярные обновления</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Новые легенды, оружие, карты и события каждый сезон. Игра постоянно развивается!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-slate-950/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-20 h-20 text-red-600 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            О игре Apex Legends
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Apex Legends - это бесплатная королевская битва от создателей Titanfall, где легендарные персонажи с мощными способностями сражаются за славу и богатство на окраинах Frontier.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Собери отряд из трех человек, выбери уникальную легенду и используй её тактические способности в динамичных боях. Совмещай умения персонажей, находи лучшее снаряжение и докажи, что твоя команда достойна звания чемпионов Apex.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">20+</div>
              <div className="text-gray-400 font-semibold">Легенд</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-500 mb-2">5</div>
              <div className="text-gray-400 font-semibold">Карт</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">100M+</div>
              <div className="text-gray-400 font-semibold">Игроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-red-950/20 to-transparent">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/30 backdrop-blur-xl rounded-3xl p-16 border border-red-600/30">
            <Award className="w-20 h-20 text-red-500 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Готов стать <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">чемпионом?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Присоединяйся к миллионам игроков по всему миру. Скачай игру бесплатно и начни свой путь к вершине!
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-16 py-6 rounded-xl text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 flex items-center justify-center gap-3 mx-auto">
              <Zap className="w-7 h-7" />
              Скачать бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-red-900/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Target className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-black text-white tracking-tighter">APEX LEGENDS</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <a href="#legends" className="hover:text-red-500 transition-colors">Легенды</a>
              <a href="#news" className="hover:text-red-500 transition-colors">Новости</a>
              <a href="#features" className="hover:text-red-500 transition-colors">Особенности</a>
              <a href="#about" className="hover:text-red-500 transition-colors">О игре</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-red-900/20 pt-8">
            <p className="mb-2">© 2024 Apex Legends. Unofficial fan site. All rights reserved to Respawn Entertainment and EA.</p>
            <p>Создано для демонстрационных целей</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App