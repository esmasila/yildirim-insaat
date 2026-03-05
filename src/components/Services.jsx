import {
    FaWrench, FaHardHat, FaTruckMoving,
    FaLayerGroup, FaMapMarkerAlt,
} from "react-icons/fa";
import { GiMining } from "react-icons/gi";

const Services = () => {
    const services = [
        {
            icon: <FaWrench />,
            title: "Kiralık Kepçe Hizmetleri",
            bullets: ["Kazı, dolgu ve zemin hazırlığı", "Temel kazıları", "Şantiye alanı düzenleme", "Peyzaj ve çevre düzenleme", "GES Projeleri", "Toprak taşıma ve tesviye", "Yıkım ve moloz kaldırma", "Altyapı ve yol çalışmaları", "Saatlik, günlük, aylık kiralama"],
        },
        {
            icon: <GiMining />,
            title: "Hafriyat İşleri",
            bullets: ["Hafriyat kazısı ve toprak yükleme", "Nakliye hazırlığı", "Dolgu sıkıştırma", "Zemin tesviyesi", "Operatörlü kepçe ile profesyonel hafriyat"],
        },
        {
            icon: <FaHardHat />,
            title: "Demir İşleri",
            bullets: ["Betonarme donatı demiri kesim & büküm", "Montaj ve demir bağlama", "Statik projeye uygun donatı uygulamaları", "Profesyonel demir işçiliği"],
        },
        {
            icon: <FaLayerGroup />,
            title: "Kalıp İşleri",
            bullets: ["Betonarme kalıp sistemleri", "Temel, kolon, kiriş ve döşeme kalıpları", "Projeye uygun ölçü ve uygulamalar", "Şantiye kalıp montaj ve demontaj"],
        },
        {
            icon: <FaTruckMoving />,
            title: "Hafriyat Taşıma",
            bullets: ["Toprak ve moloz taşıma", "Yıkım artığı kaldırma", "Şantiye temizliği", "Nakliye hizmetleri"],
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Kayseri & Çevre İller",
            bullets: ["Kayseri merkez ve tüm ilçeler", "Çevre illere hızlı ulaşım", "Zamanında ve güvenilir hizmet", "Kısa sürede saha organizasyonu"],
        },
    ];

    return (
        <section id="hizmetler" className="w-full py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Profesyonel Çözümler
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                        İnşaat sektöründe ihtiyaç duyduğunuz tüm hizmetleri tek çatı altında sunuyoruz.
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="modern-card group"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            {/* Accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                            {/* İkon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                {service.icon}
                            </div>

                            {/* Başlık */}
                            <h3 className="text-gray-900 font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Madde listesi */}
                            <ul className="space-y-1.5">
                                {service.bullets.map((b, j) => (
                                    <li key={j} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
                                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            {/* Alt çizgi */}
                            <div className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-700 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
