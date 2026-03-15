import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Clock, Users, Lock, FileText, CheckCircle2, 
  ChevronRight, ArrowRight, FileCheck, History, Key, 
  Building2, Briefcase, Landmark, Plus, Minus, Menu, X
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Producto', href: '#producto' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Flujo', href: '#flujo' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'FAQ', href: '#faq' },
];

const CREDIBILITY = [
  "Registro claro de eventos",
  "Versionado controlado",
  "Validación documental",
  "Trazabilidad de accesos",
  "Flujos de aprobación estructurados"
];

const WHY_MATTERS = [
  { icon: FileText, title: "Evita versiones duplicadas", desc: "Mantén una única fuente de verdad. Se acabó el caos de correos con documentos adjuntos y versiones desactualizadas." },
  { icon: ShieldCheck, title: "Reduce errores de validación", desc: "Asegura que cada documento cumple con los requisitos exactos antes de avanzar en el flujo operativo." },
  { icon: Clock, title: "Acelera revisiones internas", desc: "Notificaciones automáticas y flujos claros que eliminan cuellos de botella entre departamentos." },
  { icon: History, title: "Conserva evidencia clara", desc: "Historial inmutable preparado para cualquier auditoría interna o requerimiento normativo externo." }
];

const HOW_IT_WORKS = [
  { step: "01", title: "Centraliza y organiza", desc: "Sube tus documentos a un entorno seguro, estructurado y accesible solo para personal autorizado." },
  { step: "02", title: "Define permisos y flujos", desc: "Asigna roles específicos, aprobadores requeridos y reglas de visibilidad por documento o carpeta." },
  { step: "03", title: "Consulta el historial", desc: "Audita cada acceso, cambio de versión y aprobación en tiempo real con un registro inmutable." }
];

const FEATURES = [
  { icon: History, title: "Control de versiones" },
  { icon: FileCheck, title: "Verificación documental" },
  { icon: Clock, title: "Trazabilidad por evento" },
  { icon: Users, title: "Historial de accesos" },
  { icon: CheckCircle2, title: "Aprobaciones por rol" },
  { icon: ShieldCheck, title: "Registro auditable" },
  { icon: Key, title: "Permisos por usuario o equipo" },
  { icon: FileText, title: "Consulta rápida de estado" }
];

const USE_CASES = [
  { icon: Landmark, title: "Finanzas", items: ["Aprobación de facturas y presupuestos", "Validación de justificantes de gasto", "Auditoría de cierres contables"] },
  { icon: Building2, title: "Operaciones", items: ["Control de contratos de proveedores", "Seguimiento de normativas de calidad", "Gestión de SLAs y acuerdos"] },
  { icon: Briefcase, title: "Administración", items: ["Onboarding documental de empleados", "Políticas internas y compliance", "Registro de accesos a información sensible"] }
];

const FAQS = [
  { q: "¿Qué tipo de documentos puedo gestionar?", a: "Cualquier formato estándar (PDF, Word, Excel, imágenes). El sistema se centra en el control del archivo, su ciclo de vida y la trazabilidad de las interacciones con el mismo." },
  { q: "¿Cómo se controla el historial de cambios?", a: "Cada acción (lectura, edición, subida de nueva versión, aprobación) genera un evento inmutable en el Audit Trail con fecha, usuario, rol y detalle exacto de la acción." },
  { q: "¿Se pueden definir roles y aprobaciones?", a: "Sí, puedes crear flujos personalizados donde roles específicos (ej. Director Financiero, Legal) deben aprobar un documento para que este cambie de estado o avance en el flujo." },
  { q: "¿Quién puede acceder a cada documento?", a: "El acceso es estrictamente granular. Solo los usuarios o equipos con permisos explícitos asignados pueden ver, descargar o interactuar con un documento específico." },
  { q: "¿Está pensado para equipos pequeños o medianos?", a: "Está diseñado para escalar. Aporta valor desde equipos operativos de 10 personas hasta departamentos enteros en grandes corporaciones que requieren rigor documental." },
  { q: "¿Puedo adaptar el flujo a mi operativa?", a: "Totalmente. Los estados documentales, los roles de aprobación y los requisitos de verificación son configurables para reflejar los procesos reales de tu empresa." }
];

const Logo = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <mask id="keyhole-mask">
        <rect width="100" height="100" fill="white" />
        <circle cx="50" cy="58" r="7" fill="black" />
        <polygon points="46,62 54,62 57,80 43,80" fill="black" />
      </mask>
    </defs>
    <g mask="url(#keyhole-mask)">
      <path d="M 50 85 L 21 85 L 24 42 L 32 44 V 30 A 18 18 0 0 1 50 12 V 22 A 8 8 0 0 0 42 30 V 42 H 45 V 36 H 50 Z" fill="#D4B271" />
      <path d="M 50 85 L 79 85 L 76 42 L 68 44 V 30 A 18 18 0 0 0 50 12 V 22 A 8 8 0 0 1 58 30 V 42 H 55 V 36 H 50 Z" fill="#B98A2E" />
    </g>
  </svg>
);

const Mockup = () => (
  <div className="bg-white rounded-[16px] shadow-[0_20px_60px_-15px_rgba(31,42,68,0.1)] border border-border overflow-hidden flex flex-col h-[360px] w-full max-w-[460px] mx-auto relative">
    {/* Header */}
    <div className="border-b border-border p-3 flex justify-between items-center bg-bg-alt/50">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-navy/5 flex items-center justify-center border border-navy/10">
          <FileText size={14} className="text-navy" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-navy mb-0.5">Acuerdo_Marco_Proveedores_v3.pdf</div>
          <div className="text-[9px] text-text-sec">Actualizado hoy, 10:42 AM</div>
        </div>
      </div>
      <div className="px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[9px] font-semibold flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
        Verificado
      </div>
    </div>
    {/* Body */}
    <div className="flex flex-1 overflow-hidden">
      {/* Document Preview Skeleton */}
      <div className="flex-1 p-5 border-r border-border bg-bg-main/30 flex flex-col gap-3">
        <div className="w-2/3 h-3 bg-border/60 rounded-md"></div>
        <div className="w-full h-1.5 bg-border/40 rounded-sm mt-1.5"></div>
        <div className="w-full h-1.5 bg-border/40 rounded-sm"></div>
        <div className="w-4/5 h-1.5 bg-border/40 rounded-sm"></div>
        <div className="w-full h-1.5 bg-border/40 rounded-sm mt-3"></div>
        <div className="w-5/6 h-1.5 bg-border/40 rounded-sm"></div>
        <div className="w-full h-1.5 bg-border/40 rounded-sm"></div>
        
        {/* Signature block skeleton */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-3 border-t border-border/50">
           <div className="flex flex-col gap-1.5">
             <div className="w-16 h-5 bg-navy/5 rounded border border-navy/10"></div>
             <div className="w-20 h-1 bg-border/60 rounded-sm"></div>
           </div>
           <div className="flex flex-col gap-1.5">
             <div className="w-16 h-5 bg-navy/5 rounded border border-navy/10"></div>
             <div className="w-20 h-1 bg-border/60 rounded-sm"></div>
           </div>
        </div>
      </div>
      {/* Sidebar Timeline */}
      <div className="w-40 p-3 bg-white flex flex-col gap-4 overflow-y-auto">
        <div className="text-[9px] font-bold text-navy uppercase tracking-widest">Audit Trail</div>
        <div className="relative pl-3 border-l border-border flex flex-col gap-4">
          <div className="relative">
            <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
            <div className="text-[11px] font-semibold text-navy mb-0.5">Aprobación Final</div>
            <div className="text-[9px] text-text-sec mb-1">M. López (Dir. Finanzas)</div>
            <div className="inline-block px-1.5 py-0.5 bg-bg-main rounded text-[8px] font-mono text-navy-light">v3.0 • 10:42</div>
          </div>
          <div className="relative">
            <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-gold border-2 border-white shadow-sm"></div>
            <div className="text-[11px] font-semibold text-navy mb-0.5">Revisión Legal</div>
            <div className="text-[9px] text-text-sec mb-1">A. García (Legal)</div>
            <div className="inline-block px-1.5 py-0.5 bg-bg-main rounded text-[8px] font-mono text-navy-light">v2.1 • 09:15</div>
          </div>
          <div className="relative">
            <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-border border-2 border-white shadow-sm"></div>
            <div className="text-[11px] font-semibold text-navy mb-0.5">Documento Subido</div>
            <div className="text-[9px] text-text-sec mb-1">C. Ruiz (Operaciones)</div>
            <div className="inline-block px-1.5 py-0.5 bg-bg-main rounded text-[8px] font-mono text-navy-light">v1.0 • Ayer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[16px] border border-border text-center shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="text-emerald-600" size={28} />
        </div>
        <h3 className="text-xl font-serif font-medium text-navy mb-2">Solicitud recibida</h3>
        <p className="text-text-sec text-base">Gracias. Hemos recibido tu solicitud y te escribiremos pronto para organizar la demostración.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-[16px] border border-border shadow-sm flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-navy">Nombre y apellidos *</label>
          <input required type="text" className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-navy">Empresa *</label>
          <input required type="text" className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-navy">Email corporativo *</label>
          <input required type="email" className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-navy">Cargo</label>
          <input type="text" className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-navy">Tamaño de la empresa</label>
        <select className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white text-sm">
          <option value="">Selecciona una opción</option>
          <option value="1-50">1 - 50 empleados</option>
          <option value="51-200">51 - 200 empleados</option>
          <option value="201-500">201 - 500 empleados</option>
          <option value="500+">Más de 500 empleados</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-navy">Mensaje / Necesidad</label>
        <textarea rows={3} className="px-3 py-2.5 rounded-lg border border-border focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none text-sm"></textarea>
      </div>
      <div className="flex items-start gap-2.5 mt-1">
        <input required type="checkbox" id="privacy" className="mt-0.5 rounded border-border text-gold focus:ring-gold w-3.5 h-3.5" />
        <label htmlFor="privacy" className="text-xs text-text-sec leading-relaxed">
          He leído y acepto la política de privacidad. Entiendo que mis datos serán tratados para gestionar mi solicitud.
        </label>
      </div>
      <button disabled={status === 'loading'} type="submit" className="mt-2 w-full bg-gold hover:bg-gold-hover text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-base">
        {status === 'loading' ? 'Enviando solicitud...' : 'Solicitar contacto'}
      </button>
    </form>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-medium text-base text-navy group-hover:text-gold transition-colors pr-8">{question}</span>
        {isOpen ? <Minus className="text-gold flex-shrink-0" size={20} /> : <Plus className="text-navy-light flex-shrink-0" size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-4 text-text-sec leading-relaxed text-sm"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-navy bg-bg-main selection:bg-gold/20">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-serif text-2xl font-medium tracking-wide text-navy">Nexum Xestion</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-text-sec hover:text-navy transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contacto" className="bg-gold hover:bg-gold-hover text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
              Solicitar demo
            </a>
          </div>

          <button className="lg:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-navy border-b border-border pb-4">
                  {link.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-white text-center font-medium px-6 py-4 rounded-lg mt-6 text-lg">
                Solicitar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center pt-28 pb-4 px-6 md:px-12 max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl lg:text-[40px] leading-[1.1] text-[#8c6d14] tracking-tight"
              >
                Control documental con trazabilidad real.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base text-text-sec leading-relaxed max-w-xl"
              >
                Centraliza documentos, evita duplicidades, verifica integridad y registra cada evento, acceso y aprobación en un historial claro, auditable y fácil de seguir.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-2.5 mt-1"
              >
                {["Integridad verificada", "Historial por evento", "Aprobaciones por rol", "Control de accesos"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-navy font-medium">
                    <CheckCircle2 size={16} className="text-gold" strokeWidth={2.5} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4"
              >
                <a href="#contacto" className="bg-gold hover:bg-gold-hover text-white font-medium px-5 py-2.5 rounded-lg transition-colors w-full sm:w-auto text-center text-sm shadow-sm">
                  Solicitar demo
                </a>
                <a href="#producto" className="text-navy font-medium px-5 py-2.5 rounded-lg border border-border hover:bg-navy/5 transition-colors w-full sm:w-auto text-center text-sm">
                  Ver cómo funciona
                </a>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs text-text-sec mt-1 font-medium"
              >
                Pensado para equipos de finanzas y operaciones.
              </motion.p>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Mockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="border-y border-border bg-white py-10 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
              {CREDIBILITY.map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-base font-medium text-navy-light">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section id="beneficios" className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 max-w-[1360px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 w-full">
            <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Menos fricción operativa. Más control.</h2>
            <p className="text-lg text-text-sec leading-relaxed">Un sistema diseñado para eliminar la incertidumbre en la gestión documental de tu empresa, aportando claridad a cada proceso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_MATTERS.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[16px] border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center mb-6 border border-border/50">
                  <item.icon className="text-gold" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-text-sec leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="flujo" className="min-h-screen flex flex-col justify-center py-12 bg-white border-y border-border">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Flujo de trabajo estructurado</h2>
              <p className="text-lg text-text-sec leading-relaxed">Tres pasos para recuperar el control de tus documentos críticos y asegurar su integridad.</p>
            </div>
            
            <div className="relative">
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                {HOW_IT_WORKS.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center bg-white px-4">
                    <div className="w-16 h-16 rounded-full bg-bg-main border border-border flex items-center justify-center font-serif text-2xl text-gold mb-6 shadow-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                    <p className="text-text-sec text-base leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="producto" className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Capacidades core del sistema</h2>
              <p className="text-lg text-text-sec mb-8 leading-relaxed">Todo lo necesario para garantizar la integridad, seguridad y trazabilidad de la información en tu organización.</p>
              <a href="#contacto" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-hover transition-colors text-base">
                Solicitar demostración técnica <ArrowRight size={18} />
              </a>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-[14px] border border-border bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-bg-main flex items-center justify-center flex-shrink-0 border border-border/50">
                    <feature.icon className="text-navy-light" size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-medium text-base text-navy">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Control */}
        <section id="seguridad" className="min-h-screen flex flex-col justify-center py-12 bg-navy text-white">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-[32px] mb-4 leading-tight">Control claro para procesos sensibles.</h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  Cada interacción deja rastro. Cada versión queda identificada. Cada aprobación puede consultarse. Preparado para entornos donde la trazabilidad y el control son críticos.
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <History className="text-gold" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Registro de actividad</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Log inmutable de cada acción realizada sobre un documento, indicando quién, cuándo y qué.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="text-gold" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Permisos estructurados</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Control granular de acceso basado en roles. Define exactamente quién puede ver, editar o aprobar.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-gold" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Evidencia documental</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Garantía de integridad para auditorías internas o requerimientos normativos externos.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Audit Trail */}
              <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-sm">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-8">Audit Trail Log</div>
                <div className="flex flex-col gap-6 relative before:absolute before:inset-y-3 before:left-[11px] before:w-px before:bg-white/10">
                  <div className="relative flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center flex-shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-medium text-base">Documento Aprobado</span>
                        <span className="text-xs text-white/50">Hoy, 10:42</span>
                      </div>
                      <div className="text-sm text-white/70">Por: Marta López (Dir. Financiera)</div>
                      <div className="mt-2 inline-block px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-mono text-white/60">v2.0.FINAL</div>
                    </div>
                  </div>
                  <div className="relative flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center flex-shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-medium text-base">Nueva Versión Subida</span>
                        <span className="text-xs text-white/50">Ayer, 16:30</span>
                      </div>
                      <div className="text-sm text-white/70">Por: Carlos Ruiz (Operaciones)</div>
                    </div>
                  </div>
                  <div className="relative flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-medium text-base">Permisos Modificados</span>
                        <span className="text-xs text-white/50">Ayer, 09:15</span>
                      </div>
                      <div className="text-sm text-white/70">Acceso concedido a: Equipo Legal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 max-w-[1360px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 w-full">
            <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Adaptable a tu operativa</h2>
            <p className="text-lg text-text-sec leading-relaxed">Casos de uso comunes en empresas que requieren alto rigor documental.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="bg-white p-8 rounded-[16px] border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center mb-6 border border-border/50">
                  <uc.icon className="text-navy" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-5">{uc.title}</h3>
                <ul className="flex flex-col gap-3">
                  {uc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-sec">
                      <ChevronRight className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span className="leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="min-h-screen flex flex-col justify-center py-12 bg-white border-y border-border">
          <div className="max-w-[900px] mx-auto px-6 md:px-12 w-full">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Preguntas frecuentes</h2>
              <p className="text-lg text-text-sec">Resuelve tus dudas sobre la implementación y capacidades de Nexum Xestion.</p>
            </div>
            <div className="flex flex-col">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacto" className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            <div>
              <h2 className="font-serif text-3xl md:text-[32px] text-navy mb-4 leading-tight">Hablemos de vuestro flujo documental</h2>
              <p className="text-lg text-text-sec leading-relaxed mb-8">
                Déjanos tus datos y te contactaremos para enseñarte cómo Nexum Xestion puede ayudaros a ganar control, trazabilidad y claridad operativa.
              </p>
              <div className="flex items-center gap-4 text-navy font-medium bg-white p-5 rounded-[14px] border border-border shadow-sm inline-flex">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-gold" size={24} />
                </div>
                <span className="text-base">Demostración personalizada sin compromiso.</span>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <Logo className="w-10 h-10 opacity-90" />
                <span className="font-serif text-3xl font-medium tracking-wide">Nexum Xestion</span>
              </div>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Software B2B de control, verificación y trazabilidad documental para equipos de finanzas y operaciones que no pueden permitirse errores.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-semibold mb-8 tracking-wider uppercase text-sm text-white/80">Producto</h4>
              <ul className="flex flex-col gap-5 text-base text-white/60">
                <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
                <li><a href="#flujo" className="hover:text-white transition-colors">Cómo funciona</a></li>
                <li><a href="#seguridad" className="hover:text-white transition-colors">Seguridad</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-semibold mb-8 tracking-wider uppercase text-sm text-white/80">Compañía</h4>
              <ul className="flex flex-col gap-5 text-base text-white/60">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="mailto:contacto@nexumxestion.com" className="hover:text-white transition-colors">contacto@nexumxestion.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Nexum Xestion. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
