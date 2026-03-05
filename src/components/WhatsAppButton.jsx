import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const [visible, setVisible] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    const whatsappHikmet = import.meta.env.VITE_WHATSAPP_HIKMET || "905377290651";
    const message = encodeURIComponent("Merhaba, kepçe kiralama hakkında bilgi almak istiyorum.");

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (visible) {
            const labelTimer = setTimeout(() => setShowLabel(true), 3000);
            return () => clearTimeout(labelTimer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            {/* Hemen Teklif Al Label */}
            {showLabel && (
                <div className="animate-float-label hidden sm:block">
                    <a
                        href={`https://wa.me/${whatsappHikmet}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-xl px-3 py-2 text-xs font-semibold text-gray-700 whitespace-nowrap border border-gray-100 hover:shadow-md hover:border-accent/30 transition-all duration-300 flex items-center gap-1.5 group"
                    >
                        <span className="text-accent text-sm">🚜</span>
                        Hemen Teklif Al
                        <span className="text-accent font-bold group-hover:translate-x-0.5 transition-transform text-xs">→</span>
                    </a>
                </div>
            )}

            {/* Buton */}
            <a
                href={`https://wa.me/${whatsappHikmet}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 group"
            >
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20"></span>

                <FaWhatsapp className="text-white text-[28px] relative z-10" />
            </a>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default WhatsAppButton;
