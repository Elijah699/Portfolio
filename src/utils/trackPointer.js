// Mouse-move handler that exposes the pointer position to CSS as --x / --y,
// used by the `.spotlight` hover effect.
const trackPointer = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

export default trackPointer;
