import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import kepce1 from "../assets/images/kepce1.jpeg";
import slogan from "../assets/images/slogan.png";
import sloganTel from "../assets/images/slogan_tel.png";

const Hero = ({ satisfaction = 100 }) => {
    const whatsappHikmet = import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651";
    const whatsappLink = `https://wa.me/${whatsappHikmet}?text=Merhaba,%20kepçe%20kiralama%20hakkında%20bilgi%20almak%20istiyorum.`;

    const [loaded, setLoaded] = useState(false);
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
    const animatingRef = React.useRef(false);

    const slides = [
        { image: kepce1, objectPosition: 'center', backgroundSize: 'cover' },
        { image: isMobile ? sloganTel : slogan, objectPosition: isMobile ? 'center' : '85% center', backgroundSize: 'cover' },
    ];

    useEffect(() => {
        setLoaded(true);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (idx) => {
        if (animatingRef.current) return;
        animatingRef.current = true;
        setCurrent(idx);
        setTimeout(() => { animatingRef.current = false; }, 800);
    };

    const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);
    const nextSlide = () => goTo((current + 1) % slides.length);

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden',
            }}
        >
            {/* Tam ekran slider arka plan görselleri */}
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: slide.backgroundSize || 'cover',
                        backgroundPosition: slide.objectPosition || 'center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'opacity 1.2s ease-in-out',
                        opacity: idx === current ? 1 : 0,
                        zIndex: 0,
                    }}
                />
            ))}

            {/* Metin okunabilirliği için sol-alt karartma */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
                zIndex: 1,
            }} />

            {/* Slider ok butonları */}
            <button
                onClick={prevSlide}
                aria-label="Önceki"
                style={{
                    position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                    zIndex: 20, background: 'rgba(217,119,6,0.25)', border: '1px solid rgba(217,119,6,0.5)',
                    color: 'white', borderRadius: '50%', width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.3s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(217,119,6,0.7)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(217,119,6,0.25)'}
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Sonraki"
                style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    zIndex: 20, background: 'rgba(217,119,6,0.25)', border: '1px solid rgba(217,119,6,0.5)',
                    color: 'white', borderRadius: '50%', width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.3s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(217,119,6,0.7)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(217,119,6,0.25)'}
            >
                <FaChevronRight />
            </button>

            {/* Dot göstergesi */}
            <div style={{
                position: 'absolute', bottom: '112px', left: '50%', transform: 'translateX(-50%)',
                zIndex: 20, display: 'flex', gap: '8px',
            }}>
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        aria-label={`Slayt ${idx + 1}`}
                        style={{
                            width: idx === current ? '28px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: idx === current ? '#d97706' : 'rgba(255,255,255,0.45)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.4s ease',
                            padding: 0,
                        }}
                    />
                ))}
            </div>

            {/* İçerik — tek sütun sol hizalı */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '80px 20px 120px',
            }}>
                <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '600px' }}>
                        {/* Badge */}
                        <div
                            className={`transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                                border: '1px solid rgba(217, 119, 6, 0.4)',
                                borderRadius: '50px',
                                padding: '8px 16px',
                                marginBottom: '24px'
                            }}
                        >
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#d97706', borderRadius: '50%' }}></span>
                            <span style={{ color: '#f59e0b', fontSize: '14px', fontWeight: 500 }}>Kayseri & Çevre İller</span>
                        </div>

                        {/* Ana başlık */}
                        <h1
                            className={`transition-all duration-700 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                                fontWeight: 900,
                                color: 'white',
                                lineHeight: 1.1,
                                marginBottom: '24px'
                            }}
                        >
                            KEPÇE
                            <br />
                            <span style={{ color: '#d97706' }}>KİRALAMA</span>
                        </h1>

                        {/* Açıklama */}
                        <p
                            className={`transition-all duration-700 delay-400 ${loaded ? "opacity-100" : "opacity-0"}`}
                            style={{
                                color: '#d1d5db',
                                fontSize: 'clamp(14px, 4vw, 18px)',
                                lineHeight: 1.8,
                                marginBottom: '28px',
                                maxWidth: '550px'
                            }}
                        >
                            Profesyonel operatörlü <strong style={{ color: 'white' }}>Hidromek HMK 102B</strong> kepçe kiralama hizmeti. Hafriyat, temel kazı, altyapı ve arazi düzenleme işleriniz için yanınızdayız.
                        </p>

                        {/* Butonlar */}
                        <div
                            className={`transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
                        >
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    backgroundColor: '#d97706',
                                    color: 'white',
                                    padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                                    borderRadius: '8px',
                                    fontSize: 'clamp(15px, 4vw, 18px)',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b45309'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
                            >
                                <IoLogoWhatsapp style={{ fontSize: 'clamp(20px, 5vw, 24px)' }} />
                                Hemen Teklif Al
                            </a>
                            <a
                                href="tel:05377290651"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                                    borderRadius: '8px',
                                    fontSize: 'clamp(15px, 4vw, 18px)',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            >
                                <FaPhone />
                                0537 729 06 51
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alt istatistikler */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                padding: '40px 20px 28px'
            }}>
                <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-center" style={{ gap: '16px' }}>
                        <div>
                            <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 900, color: 'white' }}>500<span style={{ color: '#d97706' }}>+</span></div>
                            <div style={{ color: '#9ca3af', fontSize: 'clamp(11px, 3vw, 14px)', marginTop: '4px' }}>Tamamlanan Proje</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 900, color: 'white' }}>25<span style={{ color: '#d97706' }}>+</span></div>
                            <div style={{ color: '#9ca3af', fontSize: 'clamp(11px, 3vw, 14px)', marginTop: '4px' }}>Yıllık Tecrübe</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 900, color: 'white' }}>{satisfaction}<span style={{ color: '#d97706' }}>%</span></div>
                            <div style={{ color: '#9ca3af', fontSize: 'clamp(11px, 3vw, 14px)', marginTop: '4px' }}>Müşteri Memnuniyeti</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 900, color: 'white' }}>365</div>
                            <div style={{ color: '#9ca3af', fontSize: 'clamp(11px, 3vw, 14px)', marginTop: '4px' }}>Gün Hizmet</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
