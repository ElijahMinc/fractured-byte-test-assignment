export interface CircleDragEventType extends EventTarget {
  position: (coords?: { x: number; y: number }) => { x: number; y: number };
}
