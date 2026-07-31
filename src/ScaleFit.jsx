import { useEffect, useRef, useState } from 'react';

/**
 * Renders children at a fixed "desktop" pixel width, then visually
 * scales the whole block down (like a browser tab's "Desktop site"
 * zoom) so it always fits the available width — instead of reflowing
 * into a stacked mobile layout. The reserved space shrinks to match
 * the scaled visual size, so it never leaves blank gaps.
 */
export default function ScaleFit({ width, children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const recalc = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;
      const available = outer.offsetWidth;
      const s = Math.min(1, available / width);
      setScale(s);
      setHeight(inner.offsetHeight * s);
    };

    recalc();

    const ro = new ResizeObserver(recalc);
    if (outerRef.current) ro.observe(outerRef.current);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener('resize', recalc);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', recalc);
    };
  }, [width]);

  return (
    <div ref={outerRef} style={{ width: '100%', height, overflow: 'hidden' }}>
      <div
        ref={innerRef}
        style={{ width: `${width}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  );
}
