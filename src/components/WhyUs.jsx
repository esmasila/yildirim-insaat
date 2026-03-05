import { FaTools, FaHandshake, FaBolt, FaTags } from "react-icons/fa";

const WhyUs = () => {
    const reasons = [
        {
            icon: <FaTools />,
            title: "Yeni & Bakımlı Ekipman",
            description: "2023 model Hidromek HMK 102B kepçemizle sorunsuz çalışma. Tüm makinelerimiz düzenli bakımlı ve sigortalıdır.",
        },
        {
            icon: <FaHandshake />,
            title: "Esnek Kiralama Seçenekleri",
            description: "Günlük, haftalık ve aylık kiralama alternatifleri. Projenizin ihtiyacına göre en ideal çözümü sunuyoruz.",
        },
        {
            icon: <FaBolt />,
            title: "Hızlı & Güvenilir Hizmet",
            description: "Kayseri ve çevre illere zamanında teslimat. İş sağlığı ve güvenliğini ön planda tutan profesyonel ekip.",
        },
        {
            icon: <FaTags />,
            title: "Uygun & Şeffaf Fiyat",
            description: "Bütçeye uygun kepçe kiralama seçenekleri. Kaliteden ödün vermeden rekabetçi fiyat politikası.",
        },
    ];

    return (
        <section className="w-full py-24 bg-primary">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-accent-light font-semibold text-xs tracking-[0.25em] uppercase">
                        Neden Biz?
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
                        Farkımız Ne?
                    </h2>
                    <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
                        Yıldırım İnşaat olarak müşterilerimize en iyi hizmeti sunuyoruz.
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* 4 Kart */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, i) => (
                        <div
                            key={i}
                            className="glass-card text-center group"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent text-3xl group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                {reason.icon}
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">{reason.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{reason.description}</p>

                            {/* Hover line */}
                            <div className="mt-6 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto w-20 group-hover:w-full transition-all duration-500">
                                <div className="h-full bg-accent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
