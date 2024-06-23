export const roundedRect = (w: number, h: number, r: number) =>
  "M 0 " +
  r +
  " A " +
  r +
  " " +
  r +
  " 0 0 1 " +
  r +
  " 0" +
  " L " +
  (w - r) +
  " 0" +
  " A " +
  r +
  " " +
  r +
  " 0 0 1 " +
  w +
  " " +
  r +
  " L " +
  w +
  " " +
  (h - r) +
  " A " +
  r +
  " " +
  r +
  " 0 0 1 " +
  (w - r) +
  " " +
  h +
  " L " +
  r +
  " " +
  h +
  " A " +
  r +
  " " +
  r +
  " 0 0 1 0 " +
  (h - r) +
  " Z";
