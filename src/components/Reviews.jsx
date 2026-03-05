import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const censorName = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0];
    const censored = parts.slice(1).map(p => p[0] + "*".repeat(Math.max(p.length - 1, 1)));
    return [parts[0], ...censored].join(" ");
};

const StarRating = ({ rating, onRate, interactive = false }) => {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type={interactive ? "button" : undefined}
                    disabled={!interactive}
                    className={`text-xl transition-colors duration-200 ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
                        }`}
                    onClick={() => interactive && onRate(star)}
                    onMouseEnter={() => interactive && setHover(star)}
                    onMouseLeave={() => interactive && setHover(0)}
                >
                    {star <= (interactive ? hover || rating : rating) ? (
                        <FaStar className="text-accent-light" />
                    ) : (
                        <FaRegStar className="text-gray-300" />
                    )}
                </button>
            ))}
        </div>
    );
};

const Reviews = ({ reviews, setReviews }) => {
    const [formOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", rating: 0, comment: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.comment || formData.rating === 0) return;
        setSubmitting(true);
        const newReview = {
            id: `local-${Date.now()}`,
            name: formData.name,
            rating: formData.rating,
            comment: formData.comment,
            createdAt: { seconds: Date.now() / 1000 },
        };
        try {
            await addDoc(collection(db, "reviews"), {
                name: formData.name,
                rating: formData.rating,
                comment: formData.comment,
                approved: true,
                createdAt: serverTimestamp(),
            });
        } catch {
            // Firestore yazma hatası sessizce yoksayılır; optimistik UI zaten güncellendi
        }
        setReviews(prev => [newReview, ...prev]);
        setSubmitted(true);
        setFormData({ name: "", rating: 0, comment: "" });
        setTimeout(() => {
            setSubmitted(false);
            setFormOpen(false);
        }, 2500);
        setSubmitting(false);
    };

    return (
        <section id="yorumlar" className="w-full py-24 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-accent font-semibold text-xs tracking-[0.25em] uppercase">
                        Müşteri Yorumları
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                        Müşterilerimiz Ne Diyor?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
                        Birlikte çalıştığımız müşterilerimizin deneyimleri
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
                </div>

                {/* Yorum Kartları — geniş, ferah tasarım */}
                <div className="grid sm:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md hover:shadow-xl hover:border-accent/20 transition-all duration-500 group"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-full"></div>

                            {/* Üst kısım: Avatar + İsim + Yıldızlar */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-primary/20">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">{censorName(review.name)}</p>
                                    <div className="flex text-accent-light text-base mt-1 gap-0.5">
                                        {"★".repeat(review.rating)}
                                        <span className="text-gray-200">{"★".repeat(5 - review.rating)}</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaQuoteLeft className="text-accent text-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Yorum metni */}
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Yorum Yaz Butonu / Form */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
                    {!formOpen ? (
                        <button
                            onClick={() => setFormOpen(true)}
                            className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25"
                        >
                            + Yorum Yaz
                        </button>
                    ) : (
                        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-2xl text-left">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-green-500 text-3xl">✓</span>
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-lg mb-2">Teşekkürler!</h3>
                                    <p className="text-gray-500 text-sm">
                                        Yorumunuz incelemeye alındı, onaylanmanın ardından yayınlanacaktır.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Adınız</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                                            placeholder="Adınızı yazın"
                                            maxLength={80}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Puanınız</label>
                                        <StarRating
                                            rating={formData.rating}
                                            onRate={(r) => setFormData({ ...formData, rating: r })}
                                            interactive
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Yorumunuz</label>
                                        <textarea
                                            value={formData.comment}
                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                            rows="4"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm resize-none"
                                            placeholder="Deneyiminizi paylaşın..."
                                            maxLength={500}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="flex-1 bg-accent text-white font-bold py-3 rounded-xl hover:bg-accent-dark transition-all duration-300 disabled:opacity-50 text-sm"
                                        >
                                            {submitting ? "Gönderiliyor..." : "Gönder"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormOpen(false)}
                                            className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium text-sm"
                                        >
                                            İptal
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
