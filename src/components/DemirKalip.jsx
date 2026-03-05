import { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaChevronLeft, FaChevronRight, FaHardHat, FaTools, FaBuilding } from "react-icons/fa";

import demir1 from "../assets/images/demir1.jpeg";
import demir2 from "../assets/images/demir2.jpeg";
import demir3 from "../assets/images/demir3.jpeg";
import demir4 from "../assets/images/demir4.jpeg";
import demir5 from "../assets/images/demir5.jpeg";
import demir6 from "../assets/images/demir6.jpeg";

const images = [demir1, demir2, demir3, demir4, demir5, demir6];

const services = [
    { icon: <FaBuilding />, title: "Kolon & Kiriş Kalıbı", desc: "Betonarme yapılarda profesyonel kolon ve kiriş kalıp uygulaması" },
    { icon: <FaHardHat />, title: "Temel Kalıbı", desc: "Zemin ve temel betonlama işlemleri için sağlam kalıp çalışması" },
    { icon: <FaTools />, title: "Demir İşçiliği", desc: "Donatı kesim, bükme ve montaj işleri uzman ekibimizle yapılır" },
];

const DemirKalip = () => {
    const [current, setCurrent] = useState(0);
    const whatsappSamet = import.meta.env.VITE_WHATSAPP_SAMET || "905527955838";
    const whatsappLink = `https://wa.me/${whatsappSamet}?text=Merhaba,%20demir%20kalıp%20işleri%20hakkında%20bilgi%20almak%20istiyorum.`;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent(p => (p - 1 + images.length) % images.length);
    const next = () => setCurrent(p => (p + 1) % images.length);

    return (
        <section id="demir-kalip" className="w-full py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6">

                {/* Başlık */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                        Ek Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Demir & Kalıp İşleri
                    </h2>
                    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
                        Temel, kolon, kiriş ve döşeme kalıp işleriniz için deneyimli ekibimizle yanınızdayız.
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* 2 Kolon: Sol Galeri | Sağ Bilgi */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* SOL — Fotoğraf Galerisii */}
                    <div data-aos="fade-right" className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 aspect-[4/3]">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Demir Kalıp ${idx + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                                    style={{ opacity: idx === current ? 1 : 0 }}
                                />
                            ))}

                            {/* Ok butonları */}
                            <button onClick={prev} aria-label="Önceki"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-accent/80 text-white flex items-center justify-center transition-all duration-300 z-10"
                            >
                                <FaChevronLeft />
                            </button>
                            <button onClick={next} aria-label="Sonraki"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-accent/80 text-white flex items-center justify-center transition-all duration-300 z-10"
                            >
                                <FaChevronRight />
                            </button>

                            {/* Dot göstergesi */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className="h-2 rounded-full transition-all duration-300"
                                        style={{
                                            width: idx === current ? '24px' : '8px',
                                            background: idx === current ? '#d97706' : 'rgba(255,255,255,0.6)',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Foto sayacı */}
                        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full z-10">
                            {current + 1} / {images.length}
                        </div>
                    </div>

                    {/* SAĞ — Bilgi + Butonlar */}
                    <div data-aos="fade-left" className="flex flex-col gap-6">

                        {/* Hizmet kartları */}
                        {services.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-accent/20 transition-all duration-300">
                                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-lg flex-shrink-0">
                                    {s.icon}
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold text-base mb-1">{s.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}

                        {/* CTA kutusu */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-7 text-white shadow-xl shadow-primary/20 mt-2">
                            <h4 className="font-extrabold text-xl mb-2">Hemen Bilgi Alın</h4>
                            <p className="text-gray-200 text-sm leading-relaxed mb-5">
                                Demir kalıp işleriniz için teklif almak veya bilgi edinmek üzere bize ulaşın.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-sm"
                                >
                                    <IoLogoWhatsapp className="text-lg" />
                                    WhatsApp ile Yaz
                                </a>
                                <a
                                    href="tel:05527955838"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold border border-white/20 transition-all duration-300 text-sm"
                                >
                                    <FaPhone />
                                    0552 795 58 38
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemirKalip;
