const DESKTOP = 1279;
const MOBIL = 768;
const SMOBIL = 400;

export const LAYOUT = {
  WIDTH: 1268,
};

export function getDevice(width: number): string {
  if (DESKTOP < width) return "WIDESCREEN";
  else if (MOBIL < width && width < DESKTOP) return "DESKTOP";
  else if (SMOBIL < width && width < MOBIL) return "MOBIL";
  else return "SMOBIL";
}
