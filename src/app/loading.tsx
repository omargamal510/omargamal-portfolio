"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // fake loading
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="h-screen fixed inset-0 z-50 bg-black text-white text-9xl font-bold flex-center">
        {"</>"}
      </div>
    );

  return;
}
