import { useEffect, useState } from "react";

interface Paw {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

const PawTrail = () => {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [pawCounter, setPawCounter] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let throttleTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);

        // Only create paws if scrolled more than 50px
        if (scrollDelta > 50) {
          const newPaw: Paw = {
            id: pawCounter,
            x: Math.random() * window.innerWidth,
            y: currentScrollY + window.innerHeight * 0.5,
            rotation: Math.random() * 360,
          };

          setPaws((prevPaws) => {
            const updatedPaws = [...prevPaws, newPaw];
            // Keep only last 15 paws for performance
            return updatedPaws.slice(-15);
          });

          setPawCounter((prev) => prev + 1);
          lastScrollY = currentScrollY;
        }

        throttleTimer = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [pawCounter]);

  // Auto-remove old paws
  useEffect(() => {
    if (paws.length === 0) return;

    const timer = setTimeout(() => {
      setPaws((prevPaws) => prevPaws.slice(1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [paws]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-4xl opacity-30 animate-fade-in-up"
          style={{
            left: `${paw.x}px`,
            top: `${paw.y}px`,
            transform: `rotate(${paw.rotation}deg)`,
            transition: "opacity 1s ease-out",
          }}
        >
          🐾
        </div>
      ))}
    </div>
  );
};

export default PawTrail;
