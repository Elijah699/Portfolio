import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

// Counts the leading number of `value` up from zero once visible ('5+' → 0…5+).
// Values without a leading number are rendered as-is.
const CountUp = ({ value, duration = 1600 }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === null || !inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(target);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
