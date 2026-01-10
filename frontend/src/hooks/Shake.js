import { useEffect, useRef } from "react";

export default function useAndroidShake({
  threshold = 16,
  cooldown = 1200,
  onShake,
}) {
  const lastTrigger = useRef(0);

  useEffect(() => {
    function handleMotion(event) {
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;

      const strength = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

      const now = Date.now();

      if (strength > threshold && now - lastTrigger.current > cooldown) {
        lastTrigger.current = now;
        onShake?.();
      }
    }

    window.addEventListener("devicemotion", handleMotion);

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [threshold, cooldown, onShake]);
}
