import React, { useState, useEffect, useRef } from 'react';

// --- ICONS --- //

const DetailedLogoIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M106.5 66C106.5 39.7715 85.2285 18.5 59 18.5C32.7715 18.5 11.5 39.7715 11.5 66C11.5 92.2285 32.7715 113.5 59 113.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M25.5 66C25.5 89.263 39.4213 109.208 59 113.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M59 18.5C78.5787 22.7917 92.5 42.737 92.5 66C92.5 78.6948 86.824 90.2243 78 97.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M59 18.5C41.6677 22.1873 28.5279 36.4267 25.9926 54.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M11.5 66H106.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M78 34.5C86.776 41.7757 92.5 52.8052 92.5 66" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M59 113.5C41.6579 109.809 28.5126 95.5587 25.9926 77.5" stroke="#9CA3AF" strokeWidth="3"/>
        <path d="M40 97.5C31.224 90.2243 25.5 78.6948 25.5 66" stroke="#9CA3AF" strokeWidth="3"/>
        <path className="logo-arc" d="M72 18.5C92.2435 24.054 106.5 43.1895 106.5 66C106.5 88.8105 92.2435 107.946 72 113.5" stroke="#DC2626" strokeWidth="3"/>
        <path d="M59 18.5V113.5" stroke="#9CA3AF" strokeWidth="3"/>
        <text x="49" y="73" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">M</text>
        <text x="64" y="73" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">H</text>
    </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.998a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 .52-1.455l3.25-3.527a2.25 2.25 0 0 1 1.636-.712h3.582a2.25 2.25 0 0 1 1.636.712l3.25 3.527a2.25 2.25 0 0 1 .52 1.455Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a2.25 2.25 0 0 0-2.25 2.25v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.75a.75.75 0 0 0 1.5 0v-.75a2.25 2.25 0 0 0-2.25-2.25H12Z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962A3.375 3.375 0 0 1 15 12.25c1.15 0 2.181.42 2.996 1.134m-8.992-1.38c-.386.017-.77.034-1.154.034C7.095 12 5 9.905 5 7.5s2.095-4.5 4.504-4.5 4.504 2.095 4.504 4.5c0 .416-.017.828-.05 1.233m-3.198.814A3.375 3.375 0 0 1 12 12.25a3.375 3.375 0 0 1 2.268 5.626M12 12.25a3.375 3.375 0 0 1-2.268-5.626" />
    </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a6.01 6.01 0 0 0-3.75 0M3.75 12a6.01 6.01 0 0 1 12 0c0 3.314-2.686 6-6 6s-6-2.686-6-6Zm9.75-2.625a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M9.983 3v7.391c0 2.906-1.335 5.875-3.983 5.875v-2.391c1.365 0 2.483-.71 2.483-2.328v-8.547h-5.483v14h-2v-14h-2.5v-2h11.5zm10.017 0v7.391c0 2.906-1.335 5.875-3.983 5.875v-2.391c1.365 0 2.483-.71 2.483-2.328v-8.547h-5.483v14h-2v-14h-2.5v-2h11.5z" />
    </svg>
);


const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// --- UTILS --- //

const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const openLinkedInCoverGenerator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const coverHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MH Connector - LinkedIn Cover</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
            <style>
                body {
                    background-color: #f0f2f5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: 'Montserrat', sans-serif;
                }
                .linkedin-preview {
                    width: 800px;
                    border: 1px solid #ddd;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    background-color: #fff;
                }
                .instructions {
                    padding: 20px;
                    text-align: center;
                    color: #333;
                }
                .instructions h2 {
                    font-family: 'Playfair Display', serif;
                }
                .banner-container {
                    width: 1584px;
                    height: 396px;
                    position: relative;
                    background-color: #111827;
                    color: #E5E7EB;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    overflow: hidden;
                }
                .banner-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                      linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(17, 24, 39, 0.6) 60%, transparent 100%), 
                      url(https://images.unsplash.com/photo-1578575437130-5278ce68f460?auto=format&fit=crop&w=1600&q=80);
                    background-size: cover;
                    background-position: center;
                    z-index: 1;
                }
                .profile-pic-placeholder {
                    position: absolute;
                    left: 48px;
                    bottom: -48px;
                    width: 156px;
                    height: 156px;
                    border-radius: 50%;
                    background-color: #a0aec0;
                    border: 4px solid #111827;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: #111827;
                    text-align: center;
                    z-index: 3;
                }
                .content {
                    position: relative;
                    z-index: 2;
                    padding-right: 80px;
                    padding-left: 20px;
                    width: 60%;
                    text-align: right;
                }
                h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: 52px;
                    font-weight: 700;
                    margin: 0;
                    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
                }
                .slogan {
                    font-size: 20px;
                    margin: 8px 0 0;
                    color: #d1d5db;
                    font-weight: 400;
                    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
                }
                .contact-info {
                    margin-top: 24px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #d1d5db;
                    border-top: 1px solid #dc2626;
                    padding-top: 12px;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="linkedin-preview" style="width: auto;">
                <div class="instructions">
                     <h2>Sua Capa para LinkedIn</h2>
                     <p>Abaixo está a sua imagem de capa. Use uma ferramenta de captura de tela (print) para salvá-la.</p>
                </div>
                <div class="banner-container" id="linkedin-cover">
                    <div class="profile-pic-placeholder"><span>Sua Foto de Perfil Ficará Aqui</span></div>
                    <div class="content">
                        <h1>MH Global Connector</h1>
                        <p class="slogan">Global Consultancy & Networking Hub | by Marcelo Hernandez</p>
                        <p class="contact-info">marceloh1010@gmail.com</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(coverHTML);
        newWindow.document.close();
    }
};

const openLogoGenerator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const logoHTML = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MH Connector - Logo</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
            <style>
                body {
                    background-color: #f0f2f5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: sans-serif;
                    text-align: center;
                    color: #333;
                }
                .container {
                    padding: 40px;
                    border-radius: 12px;
                    background-color: #fff;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                .logo-wrapper {
                    background-color: #111827;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 20px;
                }
                .logo-wrapper svg {
                    width: 250px;
                    height: 250px;
                }
                h2 {
                    margin-bottom: 10px;
                }
                p {
                    margin-top: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Logo MH Connector</h2>
                <p>Clique com o botão direito no logo para 'Copiar Imagem' ou 'Salvar Imagem Como...'.</p>
                <div class="logo-wrapper">
                    <svg viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M106.5 66C106.5 39.7715 85.2285 18.5 59 18.5C32.7715 18.5 11.5 39.7715 11.5 66C11.5 92.2285 32.7715 113.5 59 113.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M25.5 66C25.5 89.263 39.4213 109.208 59 113.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M59 18.5C78.5787 22.7917 92.5 42.737 92.5 66C92.5 78.6948 86.824 90.2243 78 97.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M59 18.5C41.6677 22.1873 28.5279 36.4267 25.9926 54.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M11.5 66H106.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M78 34.5C86.776 41.7757 92.5 52.8052 92.5 66" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M59 113.5C41.6579 109.809 28.5126 95.5587 25.9926 77.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <path d="M40 97.5C31.224 90.2243 25.5 78.6948 25.5 66" stroke="#9CA3AF" strokeWidth="3"/>
                        <path className="logo-arc" d="M72 18.5C92.2435 24.054 106.5 43.1895 106.5 66C106.5 88.8105 92.2435 107.946 72 113.5" stroke="#DC2626" strokeWidth="3"/>
                        <path d="M59 18.5V113.5" stroke="#9CA3AF" strokeWidth="3"/>
                        <text x="49" y="73" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">M</text>
                        <text x="64" y="73" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">H</text>
                    </svg>
                </div>
            </div>
        </body>
        </html>
    `;
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(logoHTML);
        newWindow.document.close();
    }
};


// --- COMPONENTS --- //

const FadeIn = ({ children }: React.PropsWithChildren<{}>) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.1, });

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return (
        <div ref={ref} className={`transition-opacity duration-1000 ease-in ${ isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );
};

const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#experience', label: 'Experiência' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#contact', label: 'Contato' },
];

const Header = ({ activeSection }: { activeSection: string }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        smoothScrollTo(e, href);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" onClick={(e) => smoothScrollTo(e, 'body')} className="flex items-center space-x-2">
                    <DetailedLogoIcon className={`w-12 h-12 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
                    <span className="hidden md:block text-xl font-bold font-serif tracking-wide text-white pl-2">Marcelo Hernandez</span>
                </a>
                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map(({ href, label }) => {
                        const isActive = activeSection === href.substring(1);
                        return (
                            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-red-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                                {label}
                            </a>
                        );
                    })}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none" aria-label="Toggle menu">
                        {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>
             <div className={`fixed top-0 right-0 h-full w-full bg-black/90 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-end p-6">
                     <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 focus:outline-none" aria-label="Close menu"><CloseIcon className="w-8 h-8" /></button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} onClick={(e) => handleNavClick(e, href)} className="text-3xl font-semibold text-gray-200 hover:text-red-500 transition-colors">
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

const Typewriter = ({ subtitles }: { subtitles: string[] }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (subIndex === subtitles[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % subtitles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 75 : 150);
        
        setText(subtitles[index].substring(0, subIndex));

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, subtitles]);

    return (
        <h2 className="text-lg md:text-2xl mt-2 text-gray-300 font-serif" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {text}
            <span className="typewriter-cursor" />
        </h2>
    );
};


const Hero = () => (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white p-6 hero-bg-animate">
        <div className="z-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl">
            <div className="flex justify-center mb-4">
               <DetailedLogoIcon className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                MH Global Connector
            </h1>
            <p className="text-lg md:text-xl mt-3 text-gray-300 font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                Global Consultancy & Networking Hub | by Marcelo Hernandez
            </p>
            <Typewriter subtitles={[
                'Corporate Trainer & Mentor',
                'Independent Strategy Consultant',
                'Global Network Connector',
                'Developing Leaders for Global Impact'
            ]} />
            <p className="text-md md:text-lg mt-6 max-w-2xl mx-auto text-gray-300" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Atuo como profissional independente conectando a América Latina e Europa, oferecendo mentoria para líderes e abrindo portas no mercado internacional através de uma rede estratégica.
            </p>
            <a href="#services" onClick={(e) => smoothScrollTo(e, '#services')} className="mt-8 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transform hover:scale-105 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
                Descubra Minhas Palestras e Consultorias
            </a>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white font-serif">Sobre Mim</h2>
                    <p className="text-lg text-gray-400 mt-2">Formando Líderes para o Mundo</p>
                </div>
                <div className="max-w-4xl mx-auto text-lg text-gray-300 space-y-4 text-center md:text-left">
                    <p>Mais do que um executivo de logística, sou um formador de pessoas e negócios. Transformo meus 30 anos de experiência prática em comércio internacional em metodologias de ensino que preparam empresas e profissionais para os desafios reais da expansão global.</p>
                    <p>Atuando como <strong className="text-white">Treinador Corporativo, Coach Certificado e Conselheiro Independente</strong>, concentro minha energia na formação de talentos. Ajudo organizações a não apenas moverem cargas, mas a elevarem o patamar de suas equipes, garantindo que a estratégia de expansão seja liderada por pessoas preparadas para a complexidade multicultural.</p>
                    <p>Através da iniciativa <strong>MH Connector</strong>, atuo como um hub estratégico, conectando clientes aos melhores parceiros e soluções globais, garantindo que minhas consultorias e treinamentos sejam sempre baseados em vivências atuais e resultados comprovados em mais de 30 países.</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const services = [
    { icon: UsersIcon, title: 'Liderança e Treinamento Corporativo', description: 'Programas de capacitação de alto impacto para desenvolver líderes globais e equipes multiculturais de alta performance.' },
    { icon: LightbulbIcon, title: 'Consultoria Estratégica Independente', description: 'Diagnóstico e planejamento personalizado para empresas que desejam otimizar custos e iniciar operações transfronteiriças.' },
    { icon: GlobeIcon, title: 'Conexão de Negócios Globais', description: 'Acesso à minha rede global de parceiros e agentes validados (MH Connector Network) para expandir sua operação.' },
    { icon: BriefcaseIcon, title: 'Otimização de Supply Chain', description: 'Desenho de operações logísticas eficientes para garantir vantagem competitiva no comércio internacional.' },
];

const Services = () => (
    <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white font-serif">Serviços</h2>
                    <p className="text-lg text-gray-400 mt-2">Da Sala de Aula à Operação Global</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-xl text-center flex flex-col items-center transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2">
                            <div className="bg-gray-800 p-4 rounded-full mb-6">
                                <service.icon className="w-10 h-10 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">{service.title}</h3>
                            <p className="text-gray-400 flex-grow">{service.description}</p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    </section>
);

const experience = [
    { year: 'Maio 2021 - Presente', company: 'CITIUSLOG, LDA.', role: 'Senior Advisor', description: 'Como Conselheiro, desenvolvo estratégias de expansão de rede, impulsiono o crescimento, e forneço coaching e mentoria para a equipe executiva visando a excelência operacional.' },
    { year: 'Maio 2021 - Abr 2023', company: 'Vistage Portugal', role: 'Vistage Chair', description: 'Coordenei um grupo de CEOs para aconselhamento, organizei workshops e reuniões confidenciais para discutir seus desafios de negócios mais urgentes, oferecendo orientação e feedback profissional.' },
    { year: 'Mar 2020 - Maio 2021', company: 'PelicanLog International Logistics', role: 'Diretor de Alianças Estratégicas', description: 'Liderei o start-up da empresa, incluindo gestão geral, desenvolvimento de estratégias de vendas, supervisão de operações e prospecção de novas oportunidades de negócios para aumentar a receita.' },
    { year: 'Set 2007 - Ago 2016', company: 'Gateway Transports Worldwide', role: 'Managing Director - CEO', description: 'Como Fundador e Diretor Geral no Brasil, liderei a empresa por quase uma década, com total responsabilidade P&L, e construí uma robusta rede de agentes de frete internacionais e parceiros estratégicos.' },
];

const Experience = () => (
    <section id="experience" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white font-serif">Carreira Internacional</h2>
                    <p className="text-lg text-gray-400 mt-2">Destaques de uma jornada de mais de 30 anos em liderança global.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 hidden md:block" />
                    {experience.map((item, index) => (
                        <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block w-5/12"></div>
                            <div className="hidden md:block relative w-12 h-12">
                                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div>
                            </div>
                            <div className="md:w-5/12 w-full">
                                <div className="bg-black border border-gray-800 p-6 rounded-xl shadow-lg">
                                    <p className="text-red-500 font-semibold mb-1">{item.year}</p>
                                    <h3 className="text-xl text-white font-bold font-serif">{item.role}</h3>
                                    <p className="text-gray-400 mb-3">{item.company}</p>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    </section>
);

const testimonials = [
    { 
        quote: "Um excelente formador, comunicador e ser humano! Obrigado Marcelo Hernandez pelas partilhas e ensinamentos. Sair da zona de conforto faz-nos realmente crescer!", 
        name: 'Dora Nobre', 
        title: 'Store Manager - Action Coimbra',
        initials: 'DN'
    },
    { 
        quote: "Marcelo Hernandez, profissional capacitado na área de logística internacional, com forte visão para novos negócios.", 
        name: 'Aline lorscheitter', 
        title: 'Diretora na VIRTUA - Servico Virtual de Secretaria Executiva',
        initials: 'AL'
    },
];

const Testimonials = () => (
    <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white font-serif">Resultados e Parcerias de Sucesso</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex flex-col h-full">
                            <QuoteIcon className="w-10 h-10 text-red-500/50 mb-4"/>
                            <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <div className="w-12 h-12 rounded-full mr-4 bg-red-600 flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    </section>
);


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Construct the mailto link
        const subjectEncoded = encodeURIComponent(`[Site] ${formData.subject}`);
        const bodyEncoded = encodeURIComponent(
            `Nome: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Mensagem:\n${formData.message}`
        );
        
        // Use window.location.href instead of window.open to avoid popup blockers and ensure better compatibility
        window.location.href = `mailto:marceloh1010@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

        setSubmitMessage('Abrindo seu cliente de e-mail para enviar a mensagem...');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white font-serif">Vamos Conectar</h2>
                        <p className="text-lg text-gray-400 mt-2">Estou à disposição para discutir como posso ajudar seu negócio a crescer.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Seu Nome</label>
                                    <input id="name" type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Seu E-mail</label>
                                    <input id="email" type="email" name="email" placeholder="Seu E-mail" value={formData.email} onChange={handleChange} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                </div>
                             </div>
                             <div>
                                <label htmlFor="subject" className="sr-only">Assunto</label>
                                <input id="subject" type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"/>
                             </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Sua Mensagem</label>
                                <textarea id="message" name="message" placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} rows={5} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={isSubmitting} className="bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transform hover:scale-105 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </div>
                        </form>
                        {submitMessage && (
                            <div className="mt-6 text-center text-green-400 flex items-center justify-center gap-2">
                                <CheckCircleIcon className="w-6 h-6"/>
                                <span>{submitMessage}</span>
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <DetailedLogoIcon className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white font-serif">Marcelo Hernandez</h3>
            <p className="mb-4 text-gray-300 text-sm">Certified Corporate Trainer | MH Connector Network Lead</p>
            <div className="text-gray-400 space-y-1 mb-6">
                <p>Porto, Portugal</p>
                <p><a href="mailto:marceloh1010@gmail.com" className="hover:text-red-500 transition-colors">marceloh1010@gmail.com</a></p>
                <p><a href="tel:+351918239379" className="hover:text-red-500 transition-colors">+351 918239379</a></p>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
                {navLinks.map(({ href, label }) => (
                     <a key={href} href={href} onClick={(e) => smoothScrollTo(e, href)} className="hover:text-red-500 transition-colors">{label}</a>
                ))}
            </div>
            <div className="flex justify-center mb-8">
                <a href="https://www.linkedin.com/in/marceloh10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <LinkedInIcon className="w-8 h-8"/>
                </a>
            </div>
            <div className="border-t border-gray-800 pt-6 mt-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} MH Connector. Todos os direitos reservados.</p>
                <p className="text-sm mt-2">
                    <a href="#" onClick={openLinkedInCoverGenerator} className="hover:text-red-500 transition-colors">
                        Gerar Capa para LinkedIn
                    </a>
                    <span className="mx-2 text-gray-600">&bull;</span>
                    <a href="#" onClick={openLogoGenerator} className="hover:text-red-500 transition-colors">
                        Gerar Imagem do Logo
                    </a>
                </p>
            </div>
        </div>
    </footer>
);


const App = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sectionIds = ['about', 'services', 'experience', 'testimonials', 'contact'];
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);


    return (
        <div className="bg-black">
            <Header activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Services />
                <Experience />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;