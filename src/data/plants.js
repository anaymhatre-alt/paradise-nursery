export const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 38, light: 'Bright, indirect light', image: 'monstera', tag: 'Bestseller' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 54, light: 'Bright, filtered light', image: 'fiddle-leaf', tag: 'Room favorite' },
  { id: 'rubber-tree', name: 'Ruby Rubber Tree', category: 'Statement Plants', price: 42, light: 'Medium to bright light', image: 'rubber-tree', tag: 'Easy care' },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'Statement Plants', price: 68, light: 'Bright, direct light', image: 'bird-paradise', tag: 'A little drama' },
  { id: 'kentia-palm', name: 'Kentia Palm', category: 'Statement Plants', price: 62, light: 'Indirect light', image: 'kentia-palm', tag: 'Pet friendly' },
  { id: 'dragon-tree', name: 'Dragon Tree', category: 'Statement Plants', price: 46, light: 'Bright, indirect light', image: 'dragon-tree', tag: 'Low fuss' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy-Care Greens', price: 24, light: 'Low to bright light', image: 'snake', tag: 'Nearly unkillable' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy-Care Greens', price: 28, light: 'Low to bright light', image: 'zz', tag: 'Easy care' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy-Care Greens', price: 19, light: 'Low to bright light', image: 'pothos', tag: 'Trailing beauty' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Easy-Care Greens', price: 32, light: 'Low to medium light', image: 'peace-lily', tag: 'Air purifier' },
  { id: 'jade', name: 'Jade Plant', category: 'Easy-Care Greens', price: 22, light: 'Bright light', image: 'jade', tag: 'Slow grower' },
  { id: 'parlor-palm', name: 'Parlor Palm', category: 'Easy-Care Greens', price: 26, light: 'Indirect light', image: 'parlor-palm', tag: 'Pet friendly' },
  { id: 'string-hearts', name: 'String of Hearts', category: 'Trailing & Small', price: 25, light: 'Bright, indirect light', image: 'string-hearts', tag: 'Window ledge star' },
  { id: 'pilea', name: 'Chinese Money Plant', category: 'Trailing & Small', price: 27, light: 'Bright, indirect light', image: 'pilea', tag: 'A happy gift' },
  { id: 'peperomia', name: 'Watermelon Peperomia', category: 'Trailing & Small', price: 23, light: 'Medium, indirect light', image: 'peperomia', tag: 'Compact cutie' },
  { id: 'string-pearls', name: 'String of Pearls', category: 'Trailing & Small', price: 29, light: 'Bright, indirect light', image: 'string-pearls', tag: 'Trailing beauty' },
  { id: 'cactus', name: 'Desert Cactus Duo', category: 'Trailing & Small', price: 21, light: 'Bright, direct light', image: 'cactus', tag: 'Sun lover' },
  { id: 'mini-monstera', name: 'Mini Monstera', category: 'Trailing & Small', price: 34, light: 'Bright, indirect light', image: 'mini-monstera', tag: 'Climber' },
];
export const categories = [
  { name: 'Statement Plants', note: 'Make room for a little wonder.' },
  { name: 'Easy-Care Greens', note: 'Lovely leaves, lighter routines.' },
  { name: 'Trailing & Small', note: 'Small spaces, big personality.' },
];
const hashText = (text) => [...text].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);
export const imageUrl = (id, width = 720, category = 'Statement Plants') => {
  const seed = hashText(id);
  const hue = [118, 136, 92, 151, 105, 164][seed % 6];
  const potHue = [18, 28, 36, 42, 350, 24][(seed >>> 4) % 6];
  const leafCount = 5 + (seed % 4);
  const leaves = Array.from({ length: leafCount }, (_, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    const level = 380 - Math.floor(index / 2) * 47;
    const offset = 45 + ((seed >>> (index % 16)) % 35);
    const angle = side * (24 + ((seed >>> ((index + 5) % 16)) % 20));
    const lightness = 28 + ((seed >>> ((index + 9) % 16)) % 15);
    const shape = category === 'Easy-Care Greens'
      ? 'M0 42 C-22 10 -17 -42 0 -62 C17 -42 22 10 0 42Z'
      : category === 'Trailing & Small'
        ? 'M0 32 C-33 7 -27 -27 0 -43 C27 -27 33 7 0 32Z'
        : 'M0 42 C-38 13 -32 -30 0 -58 C32 -30 38 13 0 42Z';
    return `<g transform="translate(${300 + side * offset} ${level}) rotate(${angle})"><path d="${shape}" fill="hsl(${hue + index * 3} 42% ${lightness}%)"/><path d="M0 39 Q0 -2 0 -49" fill="none" stroke="hsl(${hue} 27% 72%)" stroke-width="2" opacity=".7"/></g>`;
  }).join('');
  const trailing = category === 'Trailing & Small'
    ? `<path d="M276 260 C206 310 251 365 190 421 M325 258 C398 318 353 382 416 431" fill="none" stroke="hsl(${hue} 38% 35%)" stroke-width="7" stroke-linecap="round"/>`
    : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 600 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue} 28% 94%)"/><stop offset="1" stop-color="hsl(${hue + 22} 25% 82%)"/></linearGradient><linearGradient id="pot" x2="0" y2="1"><stop stop-color="hsl(${potHue} 34% 59%)"/><stop offset="1" stop-color="hsl(${potHue} 34% 43%)"/></linearGradient></defs><rect width="600" height="600" fill="url(#bg)"/><circle cx="470" cy="130" r="60" fill="#fff" opacity=".22"/><ellipse cx="300" cy="520" rx="150" ry="18" fill="#43533f" opacity=".12"/><path d="M300 470 C292 385 305 300 300 180" fill="none" stroke="hsl(${hue} 35% 31%)" stroke-width="10" stroke-linecap="round"/>${trailing}${leaves}<path d="M212 418 H388 L363 536 Q300 558 237 536Z" fill="url(#pot)"/><ellipse cx="300" cy="420" rx="88" ry="17" fill="hsl(${potHue} 26% 69%)"/><ellipse cx="300" cy="420" rx="70" ry="11" fill="#4a4938"/><path d="M232 451 H368" stroke="#fff" stroke-width="5" opacity=".18"/><path d="M250 516 Q300 530 350 516" fill="none" stroke="#fff" stroke-width="4" opacity=".16"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
