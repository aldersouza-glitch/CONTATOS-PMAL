
import React, { useState, useMemo, useEffect } from 'react';
import { OFFICER_DATA, CATEGORY_LABELS } from './data';
import OfficerCard from './components/OfficerCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on mobile when category changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeCategory]);

  const filteredOfficers = useMemo(() => {
    return OFFICER_DATA.filter((officer) => {
      const search = searchTerm.toLowerCase().trim();
      const matchesSearch = 
        officer.name.toLowerCase().includes(search) ||
        officer.unit.toLowerCase().includes(search) ||
        officer.contact.replace(/\s|-/g, '').includes(search.replace(/\s|-/g, '')) ||
        (officer.role && officer.role.toLowerCase().includes(search)) ||
        (officer.rank && officer.rank.toLowerCase().includes(search));
      
      const matchesCategory = activeCategory === 'all' || officer.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-[#002b5c] text-white flex flex-col flex-shrink-0 shadow-2xl z-40 transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 pb-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-white/20 rounded-lg flex items-center justify-center bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tighter leading-none">PMAL</h1>
                <p className="text-[10px] uppercase font-bold text-blue-300 mt-1">Contatos Oficiais</p>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="h-px bg-white/10 w-full mb-4"></div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-6 space-y-1 custom-scrollbar">
          {Object.entries(CATEGORY_LABELS).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${
                activeCategory === id 
                ? 'bg-[#dfe9f5] text-[#002b5c] font-bold shadow-lg shadow-black/10' 
                : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-sm truncate pr-2">{label}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform ${activeCategory === id ? 'rotate-90' : 'opacity-30 group-hover:opacity-100'}`}
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          ))}
        </nav>
        
        <div className="p-4 bg-black/10 text-[10px] text-blue-200/40 text-center uppercase tracking-widest font-medium">
          Sistema de Apoio Logístico
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
        {/* Top Header with Search */}
        <header className="min-h-[140px] lg:h-44 bg-[#004085] flex flex-col justify-center px-4 lg:px-10 relative z-10 shadow-lg">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2.5 bg-white/10 rounded-xl text-white active:scale-95 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
              <div>
                <h2 className="text-white text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] opacity-80">Pesquisar Contatos Oficiais</h2>
                <div className="h-0.5 w-8 bg-blue-400 mt-1 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 lg:pl-5 pointer-events-none text-blue-400 group-focus-within:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input
                type="text"
                placeholder="Nome, unidade, cargo ou telefone..."
                className="w-full pl-11 lg:pl-14 pr-4 lg:pr-6 py-3.5 lg:py-4 bg-white border-none rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all text-sm lg:text-base shadow-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Results Body */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-10 bg-[#f4f7fa] custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-lg lg:text-2xl font-black text-slate-800 uppercase tracking-tight">
                  {CATEGORY_LABELS[activeCategory]}
                </h2>
              </div>
              <div className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {filteredOfficers.length} {filteredOfficers.length === 1 ? 'resultado' : 'resultados'}
              </div>
            </div>

            {filteredOfficers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {filteredOfficers.map((officer) => (
                  <OfficerCard key={officer.id} officer={officer} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 lg:py-32 text-center px-4">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-3xl flex items-center justify-center mb-6 text-slate-200 shadow-sm border border-slate-100">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </div>
                <h3 className="text-lg lg:text-xl font-extrabold text-slate-800 uppercase">Nenhum oficial encontrado</h3>
                <p className="text-slate-400 mt-2 font-medium text-sm lg:text-base max-w-xs mx-auto">Tente buscar por um termo diferente ou mude a categoria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
