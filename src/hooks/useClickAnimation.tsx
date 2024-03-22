import { useState } from "react";

function useClickAnimation(
  ref: React.RefObject<HTMLButtonElement> | null,
  animationClass: string
) {
  const [animating, setAnimating] = useState<boolean>(false);
  let prevClassName = "";
  async function triggerAnimation() {
    if (!animating && ref && ref.current) {
      setAnimating(true);
      prevClassName = ref.current.className;
      ref.current.className += " " + animationClass;

      const timeout = setTimeout(() => {
        if (!animating && ref && ref.current) {
          ref.current.className = prevClassName;
        }
        setAnimating(false);
        clearTimeout(timeout);
      }, 500);
    }
  }

  return triggerAnimation;
}

export default useClickAnimation;
