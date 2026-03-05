import { useEffect, useState, useRef } from "react";
import { FaBullseye, FaEye, FaProjectDiagram, FaClock, FaSmile } from "react-icons/fa";

const useCountUp = (end, duration = 2000, startCounting) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!startCounting) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration, startCounting]);
    return count;
};

const About = ({ satisfaction: satisfactionProp = 100 }) => {
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStartCounting(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = useCountUp(500, 2500, startCounting);
    const years = useCountUp(25, 2000, startCounting);
    const satisfaction = useCountUp(satisfactionProp, 2000, startCounting);

    return (
        <section
            id="hakkimizda"
            ref={sectionRef}
            className="w-full py-24 bg-white"
        >
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Bölüm Başlığı */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                        Hakkımızda
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Güvenin ve Kalitenin Adresi
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* 2 KOLON: Sol = Açıklama + Vizyon/Misyon, Sağ = Sayaçlar */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* SOL — Açıklama + Vizyon/Misyon */}
                    <div data-aos="fade-right">
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            <span className="font-extrabold text-primary text-2xl block mb-4">
                                Yıldırım İnşaat Hafriyat,
                            </span>
                            Kayseri ve çevresinde hafriyat, kalıp ve demir işleri ile iş makinesi kiralama
                            alanlarında faaliyet gösteren profesyonel bir inşaat firmasıdır. Kurulduğu günden
                            bu yana <strong className="text-gray-800">güven, kalite, iş disiplini ve zamanında teslim</strong> ilkelerini
                            temel alarak sektörde güçlü bir konum elde etmeyi hedeflemektedir.
                            Saha tecrübesi, deneyimli operatör ve ustabaşı kadrosu ile modern makine parkuru
                            sayesinde küçük ölçekli projelerden büyük çaplı şantiye çalışmalarına kadar geniş
                            bir yelpazede hizmet sunmaktadır.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="modern-card group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 rounded-l-2xl"></div>
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <FaEye className="text-primary text-xl" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3">Vizyonumuz</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    Kayseri ve çevresinde hafriyat, kalıp, demir işleri ve iş makinesi kiralama
                                    alanlarında güvenilirliği ve kaliteli işçiliği ile örnek gösterilen öncü
                                    firmalar arasında yer almak; sektörde sürdürülebilir büyüme sağlayarak
                                    güçlü ve saygın bir marka haline gelmektir.
                                </p>
                            </div>
                            <div className="modern-card group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/50 rounded-l-2xl"></div>
                                <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <FaBullseye className="text-accent text-xl" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3">Misyonumuz</h3>
                                <ul className="text-gray-500 text-sm space-y-1.5 mt-1">
                                    <li className="flex items-start gap-2"><span className="text-accent mt-1">▸</span>Hafriyat, kalıp ve demir işlerinde yüksek kalite standartlarında uygulamalar yapmak</li>
                                    <li className="flex items-start gap-2"><span className="text-accent mt-1">▸</span>Kiralık kepçe hizmetlerinde zamanında, güvenli ve verimli çözümler sunmak</li>
                                    <li className="flex items-start gap-2"><span className="text-accent mt-1">▸</span>İş sağlığı ve güvenliği ile çevre duyarlılığını ön planda tutmak</li>
                                    <li className="flex items-start gap-2"><span className="text-accent mt-1">▸</span>Her projeyi ekonomik, planlı ve sorunsuz şekilde tamamlamak</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SAĞ — İstatistik sayaçları */}
                    <div className="flex flex-col gap-8" data-aos="fade-left">
                        {[
                            { value: projects, suffix: "+", label: "Tamamlanan Proje", icon: <FaProjectDiagram />, color: "text-primary", gradient: "from-primary/10 to-primary/20" },
                            { value: years, suffix: "+", label: "Yıl Tecrübe", icon: <FaClock />, color: "text-accent", gradient: "from-accent/10 to-accent/20" },
                            { value: satisfaction, suffix: "%", label: "Müşteri Memnuniyeti", icon: <FaSmile />, color: "text-primary", gradient: "from-primary/10 to-primary/20" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                                data-aos="fade-left"
                                data-aos-delay={i * 100}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                    <span className={`${stat.color} text-3xl`}>{stat.icon}</span>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-gray-900">
                                        {stat.value}
                                        <span className="text-accent text-3xl ml-1">{stat.suffix}</span>
                                    </div>
                                    <div className="text-gray-500 font-medium mt-1 text-lg">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
