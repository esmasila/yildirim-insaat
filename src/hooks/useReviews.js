import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const demoReviews = [
    { id: "demo1", name: "Ahmet K.", rating: 5 },
    { id: "demo2", name: "Mehmet Y.", rating: 5 },
    { id: "demo3", name: "Fatma S.", rating: 4 },
];

export const useReviews = () => {
    const [reviews, setReviews] = useState(demoReviews);

    useEffect(() => {
        try {
            const q = query(
                collection(db, "reviews"),
                where("approved", "==", true)
            );
            const unsubscribe = onSnapshot(q, (snapshot) => {
                if (!snapshot.empty) {
                    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    const sorted = data.sort((a, b) => {
                        const at = a.createdAt?.seconds ?? 0;
                        const bt = b.createdAt?.seconds ?? 0;
                        return bt - at;
                    });
                    setReviews(sorted);
                }
            }, () => { });
            return () => unsubscribe();
        } catch { }
    }, []);

    // Ortalama puana göre memnuniyet yüzdesi (5 üzerinden)
    const satisfaction = reviews.length > 0
        ? Math.round((reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length / 5) * 100)
        : 100;

    return { reviews, setReviews, satisfaction };
};
