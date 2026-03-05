import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const whatsappHikmet = import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651";
    const whatsappSamet = import.meta.env.VITE_WHATSAPP_SAMET || "905527955838";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.message) return;
        setSubmitting(true);
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: serverTimestamp(),
                read: false,
            });
            setSubmitted(true);
            setFormData({ name: "", phone: "", message: "" });
            setTimeout(() => setSubmitted(false), 4000);
        } catch {
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
        setSubmitting(false);
    };

    const contactCards = [
        {
            icon: <FaPhoneAlt />,
            title: "Hikmet Yıldırım",
            subtitle: "0537 729 06 51 — Kepçe Kiralama",
            href: "tel:+905377290651",
            whatsapp: whatsappHikmet,
        },
        {
            icon: <FaPhoneAlt />,
            title: "Samet Yıldırım",
            subtitle: "0552 795 58 38 — Demir & İnşaat",
            href: "tel:+905527955838",
            whatsapp: whatsappSamet,
        },
        {
            icon: <FaEnvelope />,
            title: "E-posta",
            subtitle: "yildirimhafriyat58@gmail.com",
            href: "mailto:yildirimhafriyat58@gmail.com",
            whatsapp: null,
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Adres",
            subtitle: "Kayseri, Türkiye",
            href: null,
            whatsapp: null,
        },
    ];

    return (
        <section id="iletisim" className="w-full py-24 bg-white">
            <div className="w-full max-w-6xl mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-accent text-xs font-semibold uppercase tracking-[0.25em]">
                        İletişim
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Bize Ulaşın
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
                        Projeleriniz için hemen iletişime geçin, size en uygun çözümü sunalım.
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* 2 kolon */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Sol — İletişim Kartları + Harita */}
                    <div className="space-y-4" data-aos="fade-right">
                        {contactCards.map((info, i) => (
                            <div
                                key={i}
                                className="relative bg-white rounded-2xl p-6 flex items-center justify-between border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden"
                            >
                                {/* Left accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-primary text-lg">{info.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold">{info.title}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-gray-500 hover:text-accent transition-colors duration-300"
                                            >
                                                {info.subtitle}
                                            </a>
                                        ) : (
                                            <p className="text-gray-500">{info.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                                {info.whatsapp && (
                                    <a
                                        href={`https://wa.me/${info.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg shadow-green-500/30"
                                    >
                                        <FaWhatsapp className="text-white text-lg" />
                                    </a>
                                )}
                            </div>
                        ))}

                        {/* Harita */}
                        <div className="overflow-hidden h-56 border border-gray-200 mt-2 shadow-md" style={{ borderRadius: '12px' }}>
                            <iframe
                                title="Kayseri Konum"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199064.0!2d35.3!3d38.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b0fd4e1160bcf%3A0x2bca6a0e07a09c01!2sKayseri!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                sandbox="allow-scripts allow-same-origin allow-popups"
                            ></iframe>
                        </div>
                    </div>

                    {/* Sağ — Form */}
                    <div data-aos="fade-left">
                        <div className="modern-card !p-8 lg:!p-10">
                            <h3 className="text-gray-900 text-xl font-extrabold mb-2">Mesaj Gönderin</h3>
                            <p className="text-gray-500 text-sm mb-6">Formu doldurun, size en kısa sürede dönüş yapalım.</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-green-500 text-3xl">✓</span>
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-lg mb-2">Mesajınız Alındı!</h3>
                                    <p className="text-gray-500 text-sm">En kısa sürede size dönüş yapacağız.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Adınız Soyadınız</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                                            placeholder="Adınızı yazın"
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon Numaranız</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                                            placeholder="05XX XXX XX XX"
                                            pattern="[0-9+\s\-]{7,20}"
                                            maxLength={20}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows="5"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm resize-none"
                                            placeholder="Projeniz hakkında bilgi verin..."
                                            maxLength={1000}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-accent text-white font-bold py-3.5 rounded-xl hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-accent/20"
                                    >
                                        <FaPaperPlane className="text-sm" />
                                        {submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
