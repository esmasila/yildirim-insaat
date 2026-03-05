import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo1 from "../assets/images/logo1.jpeg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const whatsappHikmet = import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651";
    const whatsappLink = `https://wa.me/${whatsappHikmet}?text=Merhaba,%20kepçe%20kiralama%20hakkında%20bilgi%20almak%20istiyorum.`;

    const navLinks = [
        { name: "Ana Sayfa", href: "#hero" },
        { name: "Hakkımızda", href: "#hakkimizda" },
        { name: "Kepçemiz", href: "#kepcemiz" },
        { name: "Hizmetler", href: "#hizmetler" },
        { name: "Demir & Kalıp", href: "#demir-kalip" },
        { name: "Yorumlar", href: "#yorumlar" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <>
            {/* ── NAVBAR ── */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-2"
                    : "bg-gradient-to-b from-black/70 to-transparent py-4"
                    }`}
            >
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
                            <img
                                src={logo1}
                                alt="Yıldırım İnşaat Logo"
                                className="w-16 h-16 rounded-xl object-cover border-2 border-accent/30 group-hover:border-accent transition-all duration-300 shadow-md"
                            />
                            <div className="hidden sm:block">
                                <span className={`font-extrabold text-lg leading-tight block tracking-wide ${scrolled ? "text-primary" : "text-white"}`}>
                                    YILDIRIM
                                </span>
                                <span className="text-accent text-[11px] font-semibold tracking-[0.15em] uppercase">
                                    İnşaat Hafriyat
                                </span>
                            </div>
                        </a>

                        {/* Masaüstü Menü */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group rounded-lg ${scrolled
                                        ? "text-gray-600 hover:text-primary hover:bg-primary/5"
                                        : "text-gray-200 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Sağ butonlar */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="https://www.instagram.com/yild.irimhafriyat/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1.5 text-sm transition-all duration-300 group ${scrolled ? "text-gray-500 hover:text-pink-500" : "text-gray-300 hover:text-white"}`}
                            >
                                <FaInstagram className="text-base group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="tel:05377290651"
                                className={`flex items-center gap-2 text-sm transition-all duration-300 group ${scrolled ? "text-gray-500 hover:text-primary" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                <FaPhoneAlt className="text-accent text-xs group-hover:rotate-12 transition-transform" />
                                <span className="font-medium">0537 729 06 51</span>
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                            >
                                <IoLogoWhatsapp className="text-lg" />
                                Teklif Al
                            </a>
                        </div>

                        {/* Hamburger — mobil */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden text-2xl p-2 transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
                            aria-label="Menü"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── MOBİL MENÜ — nav DIŞINDA, z-index 9999, tam beyaz ── */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    zIndex: 9999,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s ease',
                    overflowY: 'auto',
                }}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <a href="#hero" onClick={handleLinkClick} className="flex items-center gap-3">
                        <img src={logo1} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                            <span className="text-primary font-extrabold text-lg block">YILDIRIM</span>
                            <span className="text-accent text-[10px] font-semibold tracking-wider uppercase">İnşaat Hafriyat</span>
                        </div>
                    </a>
                    <button onClick={() => setIsOpen(false)} className="text-gray-900 text-2xl p-2">
                        <FaTimes />
                    </button>
                </div>

                <div className="flex flex-col px-6 pt-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:text-primary text-lg font-medium py-4 border-b border-gray-100 transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-8 mb-10">
                        <a
                            href="tel:05377290651"
                            className="flex items-center justify-center gap-2 text-gray-700 border border-gray-200 py-3 rounded-xl font-medium"
                        >
                            <FaPhoneAlt className="text-accent" />
                            0537 729 06 51
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl text-lg font-bold"
                        >
                            <IoLogoWhatsapp className="text-xl" />
                            Teklif Al
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
