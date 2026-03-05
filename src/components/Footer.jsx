import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaChevronUp, FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo1.jpeg";

const Footer = () => {
    const whatsappHikmet = import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const quickLinks = [
        { label: "Ana Sayfa", href: "#hero" },
        { label: "Hakkımızda", href: "#hakkimizda" },
        { label: "Kepçemiz", href: "#kepcemiz" },
        { label: "Hizmetlerimiz", href: "#hizmetler" },
        { label: "Demir & Kalıp", href: "#demir-kalip" },
        { label: "Yorumlar", href: "#yorumlar" },
    ];

    const services = [
        "Kepçe Kiralama",
        "Hafriyat İşleri",
        "Temel Kazı",
        "Altyapı Çalışmaları",
        "Demir İşleri",
        "Kalıp İşleri",
        "Arazi Düzenleme",
        "Yıkım İşleri",
    ];

    return (
        <footer className="w-full bg-dark border-t border-darkBorder pt-16 pb-6">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Üst Kısım */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-darkBorder">
                    {/* Logo & Açıklama */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src={logo}
                                alt="Yıldırım İnşaat Logo"
                                className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-lg"
                            />
                            <div>
                                <h3 className="text-white font-extrabold text-lg leading-tight">Yıldırım</h3>
                                <p className="text-accent text-xs font-semibold tracking-wide">İnşaat Hafriyat</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Kayseri'de profesyonel kepçe kiralama ve hafriyat hizmetleri.
                            Yeni nesil ekipmanlarımızla projelerinize güç katıyoruz.
                        </p>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
                            Hızlı Linkler
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent text-sm transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hizmetlerimiz */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
                            Hizmetlerimiz
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, i) => (
                                <li key={i}>
                                    <span className="text-gray-400 text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
                            İletişim
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+905377290651"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                <FaPhoneAlt className="text-accent text-xs" />
                                0537 729 06 51
                            </a>
                            <a
                                href="tel:+905527955838"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                <FaPhoneAlt className="text-accent text-xs" />
                                0552 795 58 38
                            </a>
                            <a
                                href="mailto:yildirimhafriyat58@gmail.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                <FaEnvelope className="text-accent text-xs" />
                                yildirimhafriyat58@gmail.com
                            </a>
                            <span className="flex items-center gap-3 text-gray-400 text-sm">
                                <FaMapMarkerAlt className="text-accent text-xs" />
                                Kayseri, Türkiye
                            </span>
                            {/* Sosyal Medya İkonları */}
                            <div className="flex gap-3 pt-2">
                                <a
                                    href="https://www.instagram.com/yild.irimhafriyat/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href={`https://wa.me/${whatsappHikmet}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300"
                                >
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alt Kısım */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} Yıldırım İnşaat Hafriyat. Tüm hakları saklıdır.
                        </p>
                        <p className="text-gray-600 text-xs mt-1 flex items-center gap-1 justify-center sm:justify-start">
                            Web sitesi yapımı:
                            <a
                                href="https://github.com/esmasila"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-gray-500 hover:text-accent transition-colors duration-300"
                            >
                                <FaGithub className="text-xs" />
                                esmasila
                            </a>
                        </p>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                    >
                        <FaChevronUp className="text-sm" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
