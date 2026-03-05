import { useState, useEffect } from "react";
import {
    FaCheckCircle, FaCog, FaGasPump, FaTractor,
    FaLeaf, FaShieldAlt, FaCalendarCheck,
    FaCalendarAlt, FaRulerVertical, FaWeightHanging,
    FaCircle,
} from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";

import kepce1 from "../assets/images/kepce1.jpeg";
import kepce2 from "../assets/images/kepce2.jpeg";

const OurMachine = () => {
    const [activeImg, setActiveImg] = useState(0);
    const images = [kepce1, kepce2];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveImg(prev => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const specs = [
        { label: "Model Yılı", value: "2023", icon: <FaCalendarAlt /> },
        { label: "Motor Gücü", value: "102 HP", icon: <GiHorseHead /> },
        { label: "Kepçe Tipi", value: "Kazıcı Yükleyici", icon: <FaTractor /> },
        { label: "Yakıt Tipi", value: "Dizel", icon: <FaGasPump /> },
        { label: "Kazı Derinliği", value: "Maks. ~4,3 m", icon: <FaRulerVertical /> },
        { label: "Yükleme Kapasitesi", value: "Yüksek kapasite", icon: <FaWeightHanging /> },
        { label: "Lastik", value: "4x4 tahrik", icon: <FaCircle /> },
        { label: "Emisyon", value: "Düşük emisyon", icon: <FaLeaf /> },
        { label: "Durum", value: "Bakımlı & Sigortalı", icon: <FaShieldAlt /> },
    ];

    const advantages = [
        { icon: <FaTractor />, text: "Yüksek kazı kapasitesi — daha hızlı ve etkili kazı" },
        { icon: <FaGasPump />, text: "Ekonomik yakıt tüketimi" },
        { icon: <FaCog />, text: "Zorlu arazi koşullarına uyum" },
        { icon: <FaLeaf />, text: "Düşük emisyon — çevre dostu" },
        { icon: <FaCalendarCheck />, text: "2023 model — yeni ve bakımlı" },
        { icon: <FaShieldAlt />, text: "Sigortalı ve güvenli çalışma" },
    ];

    return (
        <section id="kepcemiz" className="w-full py-24 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                        Kiralık Kepçemiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Hidromek HMK 102B
                    </h2>
                    <p className="text-gray-500 mt-3 text-lg">
                        2023 Model Kazıcı Yükleyici (Backhoe Loader)
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* 2 KOLON: Sol = Görsel, Sağ = Teknik Özellikler */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* SOL KOLON — Görsel + Thumbnails + Avantajlar */}
                    <div data-aos="fade-right">
                        {/* Ana görsel */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15">
                            <img
                                src={images[activeImg]}
                                alt="Hidromek HMK 102B"
                                className="w-full h-[260px] sm:h-[360px] lg:h-[500px] object-cover transition-all duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                                2023 Model
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>



                        {/* Avantajlar */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {advantages.map((adv, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 60}
                                >
                                    <span className="text-accent text-base flex-shrink-0 mt-0.5">{adv.icon}</span>
                                    <span className="text-gray-600 text-sm leading-relaxed">{adv.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ KOLON — Teknik Özellikler + CTA */}
                    <div data-aos="fade-left">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FaCog className="text-primary" />
                            </div>
                            <h3 className="text-gray-900 font-extrabold text-xl">Teknik Özellikler</h3>
                        </div>

                        {/* Spec Cards Grid — 3 kolon */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {specs.map((spec, i) => (
                                <div
                                    key={i}
                                    className="spec-card text-center group"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 50}
                                >
                                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mx-auto mb-2 text-primary text-base group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                                        {spec.icon}
                                    </div>
                                    <div className="text-gray-900 font-bold text-xs mb-1">{spec.value}</div>
                                    <div className="text-gray-400 text-xs">{spec.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Kutusu */}
                        <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl shadow-primary/20">
                            <h4 className="font-extrabold text-2xl mb-3">Hemen Kirala!</h4>
                            <p className="text-gray-200 text-base mb-6 leading-relaxed">
                                Saatlik, günlük ve aylık esnek kiralama seçenekleri ile
                                profesyonel operatörlü kepçe hizmeti alın.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651"}?text=Merhaba,%20HMK%20102B%20kepçe%20kiralama%20hakkında%20bilgi%20almak%20istiyorum.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
                                >
                                    <FaCheckCircle />
                                    Fiyat Teklifi Al
                                </a>
                                <a
                                    href="tel:05377290651"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 transition-all duration-300"
                                >
                                    0537 729 06 51
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMachine;
