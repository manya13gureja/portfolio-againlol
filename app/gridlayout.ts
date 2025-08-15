
import { Layout } from "react-grid-layout";

export const fixedLayout: Layout[] = [
  { x: 0, y:0, w: 2, h: 2, i: "0", static: true },
  { x: 0, y:2, w: 2, h: 1, i: "1", static: false, },
  { x: 0, y:3, w: 2, h: 1, i: "2", static: true },
  { x: 10, y:2, w: 2, h: 2, i: "3", static: false }, 
  { x: 10, y:4, w: 2, h: 2, i: "4", static: true }, 
  { x: 2, y: 0, w: 2, h: 4, i: "6", static: true },
  { x: 0, y: 4, w: 4, h: 4, i: "7", static: true },
  { x: 0, y: 8, w: 3, h: 11, i: "8", static: true },
  { x: 4, y: 8, w: 3, h: 11, i: "9", static: true },
  { x: 6, y: 5, w: 2, h: 1, i: "10", static: true },
  { x: 6, y: 6, w: 2, h: 1, i: "11", static: true },
];