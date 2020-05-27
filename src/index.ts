import BufferView from './BufferView';

export default BufferView;

export const Uint8Array_ID = idof<Uint8Array>();

export function use(buffer: Uint8Array): BufferView {
  const view: BufferView = BufferView.fromUint8Array(buffer);
  return view;
}
