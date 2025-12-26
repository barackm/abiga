import { useEffect } from "react";
import AOS from "aos";

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);
}

