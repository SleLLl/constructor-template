import { RefObject, useEffect, useRef, useState } from 'react';

export const useHover = (): [r: RefObject<HTMLDivElement | null>, v: boolean] => {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    if (ref?.current) {
      const node = ref.current;
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, value];
};
