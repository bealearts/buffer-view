import SerialDataView from './SerialDataView';

export default SerialDataView;

export const Uint8Array_ID = idof<Uint8Array>();

export function use(buffer: Uint8Array): SerialDataView {
  const view: SerialDataView = SerialDataView.fromUint8Array(buffer);
  return view;
}
