import { useState } from 'react';
import { Home, Info, FileText, Menu, X } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  icon: React.ReactNode;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages: Page[] = [
    { id: 'home', title: 'الرئيسية', icon: <Home size={20} /> },
    { id: 'about', title: 'حول', icon: <Info size={20} /> },
    { id: 'terms', title: 'الشروط', icon: <FileText size={20} /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <div className="animate-fadeIn" dir="rtl">
            <h2 className="text-5xl font-black text-orange-800 mb-8 text-right">حول اللعبة</h2>
            <div className="space-y-6 text-orange-900 text-right">
              <p className="text-xl leading-relaxed">
                لعبة صياد القراصنة هي لعبة مغامرة ملحمية تجمع بين إثارة صيد أعماق البحار مع تشويق الحياة البحرية للقراصنة.
              </p>
              <p className="text-xl leading-relaxed">
                انضم إلى آلاف اللاعبين حول العالم في هذه تجربة الألعاب المحمولة الغامرة. استكشف المياه الغامضة والتقط المخلوقات الأسطورية وبناء إمبراطورية القراصنة الخاصة بك.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-right">لماذا يحب اللاعبون اللعبة</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 justify-end">
                    <span>تحميلات تفوق 500 آلف مع تقييم 4.8 نجوم</span>
                    <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>50+ مستوى مع صعوبة متزايدة</span>
                    <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>رسومات ثلاثية الأبعاد مذهلة وحركات سلسة</span>
                    <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>تحديثات منتظمة مع محتوى جديد</span>
                    <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="animate-fadeIn" dir="rtl">
            <h2 className="text-5xl font-black text-orange-800 mb-8 text-right">شروط الاستخدام</h2>
            <div className="space-y-6 text-orange-900 max-h-96 overflow-y-auto text-right">
              <section>
                <h3 className="text-2xl font-bold mb-3">1. الترخيص</h3>
                <p>يتم توفير لعبة صياد القراصنة لك على أساس "كما هي". يتم منحك ترخيص محدود وغير حصري لاستخدام هذه اللعبة للترفيه الشخصي.</p>
              </section>
              <section>
                <h3 className="text-2xl font-bold mb-3">2. سلوك المستخدم</h3>
                <p>توافق على عدم استخدام اللعبة لأي أغراض غير قانونية أو بطريقة تنتهك إرشادات مجتمعنا.</p>
              </section>
              <section>
                <h3 className="text-2xl font-bold mb-3">3. الملكية الفكرية</h3>
                <p>جميع المحتوى والميزات والوظائف مملوكة لصياد القراصنة أو المرخصين لنا أو مقدمي المواد الآخرين.</p>
              </section>
              <section>
                <h3 className="text-2xl font-bold mb-3">4. تنصل</h3>
                <p>يتم توفير اللعبة على أساس "كما هي" و "كما هي متاحة". لا نقدم أي ضمانات تتعلق باللعبة.</p>
              </section>
              <section>
                <h3 className="text-2xl font-bold mb-3">5. تحديد المسؤولية</h3>
                <p>في أي حال، لن تكون صياد القراصنة مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية.</p>
              </section>
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-fadeIn" dir="rtl">
            <h1 className="text-7xl md:text-8xl font-black text-orange-800 mb-8 leading-tight text-right">
              صياد<br />القراصنة
            </h1>
            <p className="text-2xl font-semibold text-orange-900 mb-4 leading-relaxed max-w-lg text-right">
              انطلق في رحلة ملحمية! ألقِ شباكك وقاتل القراصنة المنافسين وأصبح أسطورة صيد الأسماك في سبع بحار.
            </p>
            <p className="text-lg text-orange-800 mb-10 max-w-lg text-right">
              اكتشف الكنوز، وحدِّث سفينتك، واهزم المياه في هذه مغامرة صيد والقراصنة المثيرة.
            </p>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-14 py-6 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-black/70 border-2 border-white/40"
              style={{
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.15)',
              }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              التثبيت من جوجل بلاي
            </a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4b899] via-[#f0a87d] to-[#e89a6c] overflow-hidden relative">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 bg-orange-900/80 text-white rounded-lg"
      >
        {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className="flex h-screen">
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 transition-transform duration-300 fixed md:relative right-0 md:right-auto w-16 h-screen bg-white/10 backdrop-blur-sm border-l-2 md:border-l-2 md:border-r-0 border-white/20 flex flex-col items-center py-6 gap-4 z-40`}>
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => {
                setCurrentPage(page.id);
                setSidebarOpen(false);
              }}
              className={`p-3 rounded-xl transition-all duration-300 ${
                currentPage === page.id
                  ? 'bg-orange-800 text-white shadow-lg scale-110'
                  : 'text-orange-800 hover:bg-white/20'
              }`}
              title={page.title}
            >
              {page.icon}
            </button>
          ))}
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="flex h-full">
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
              {renderPage()}
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center relative pr-8">
              <div className="relative w-full h-full max-w-md flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-3xl blur-3xl"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-56 h-96 bg-white/20 backdrop-blur-md rounded-3xl border-2 border-white/40 shadow-2xl flex items-center justify-center overflow-hidden" style={{ aspectRatio: '1080/1920' }}>
                    <div className="w-full h-full bg-gradient-to-br from-orange-600/40 to-orange-800/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/60 font-bold text-sm mb-2">لقطة شاشة</div>
                        <div className="text-white/40 text-xs">1080x1920</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-1/4 z-20">
                  <div className="w-48 h-80 bg-white/15 backdrop-blur-md rounded-3xl border-2 border-white/30 shadow-xl flex items-center justify-center overflow-hidden transform -rotate-12" style={{ aspectRatio: '1080/1920' }}>
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/40 to-orange-700/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/50 font-bold text-xs mb-1">لقطة شاشة</div>
                        <div className="text-white/30 text-xs">1080x1920</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-1/3 z-20">
                  <div className="w-48 h-80 bg-white/15 backdrop-blur-md rounded-3xl border-2 border-white/30 shadow-xl flex items-center justify-center overflow-hidden transform rotate-12" style={{ aspectRatio: '1080/1920' }}>
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/40 to-orange-700/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/50 font-bold text-xs mb-1">لقطة شاشة</div>
                        <div className="text-white/30 text-xs">1080x1920</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
