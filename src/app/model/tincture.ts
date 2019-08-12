export const argent = { color: '#FFFFFF', tricking: ['ar.'], name: 'argent' } as const;
export type Argent = typeof argent;
export const or = { color: '#FFD700', tricking: ['o.'], name: 'or' } as const;
export type Or = typeof or;

export const gules = { color: '#FF0000', tricking: ['gu.'], name: 'gules' } as const;
export type Gules = typeof gules;
export const sable = { color: '#000000', tricking: ['s.', 'sa.'], name: 'sable' } as const;
export type Sable = typeof sable;
export const azure = { color: '#0000FF', tricking: ['as.', 'bl.', 'b.'], name: 'azure' } as const;
export type Azure = typeof azure;
export const vert = { color: '#008000', tricking: ['vt.', 'v.'], name: 'vert' } as const;
export type Vert = typeof vert;
export const purpure = { color: '#800080', tricking: ['purp.', 'pu.', 'p.'], name: 'purpure' } as const;
export type Purpure = typeof purpure;

export const murrey = { color: '#8A004B', tricking: 'm.', name: 'murrey' } as const;
export type Murrey = typeof murrey;
export const sanguine = { color: '#B22221', tricking: [], name: 'sanguine' } as const;
export type Sanguine = typeof sanguine;
export const tenne = { color: '#C67000', tricking: [], name: 'tenné' } as const;
export type Tenne = typeof tenne;

export type Metal = Argent | Or;
export type Colours = Gules | Sable | Azure | Vert | Purpure;
export type Stains = Murrey | Sanguine | Tenne;

export const ermine = { name: 'ermine', field: argent, spot: sable } as const;
export type Ermine = typeof ermine;
export const counterErmine = { name: 'counter-ermine', field: sable, spot: argent } as const;
export type CounterErmine = typeof counterErmine;
export const erminois = { name: 'erminois', field: or, spot: sable } as const;
export type Erminois = typeof erminois;
export const pean = { name: 'pean', field: sable, spot: or } as const;
export type Pean = typeof pean;
export const vair = { name: 'vair', field: argent, bell: azure } as const;
export type Vair = typeof vair;

export type Ermines = Ermine | CounterErmine | Erminois | Pean;
export const ermines: ReadonlyArray<Ermines> = [ermine, counterErmine, erminois, pean] as const;

export type Furs = Ermines | Vair;

export type Tincture = Metal | Colours | Stains | Furs;

export function isFur(tincture: Tincture): tincture is Furs {
  return (
    ermines.some(e => e.name === tincture.name) ||
    tincture.name === 'vair'
  );
}

export function isMetal(tincture: Tincture): tincture is Metal {
  return tincture.name === 'argent' || tincture.name === 'or';
}

export const tinctures: Array<Tincture> = [
  argent,
  or,
  gules,
  sable,
  azure,
  vert,
  purpure,
  murrey,
  sanguine,
  tenne,
  ermine,
  counterErmine,
  erminois,
  pean,
  vair,
];
