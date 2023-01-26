import { useState, useEffect } from "react";

function useOnScreen(ref, threshold) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    const currentRef = ref.current;
    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
export default useOnScreen;