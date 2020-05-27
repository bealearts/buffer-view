import SerialDataView from '../src/SerialDataView';

test('constructor', () => {
  const buffer:ArrayBuffer = new ArrayBuffer(10);
  const view:SerialDataView = new SerialDataView(buffer);
  expect(view.buffer).toBe(buffer);
  expect(view.position).toBe(0);
});

test('fromByteArray', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0xFF, 0x00, 0xAB, 0x20]);
  expect(view.position).toBe(0);
  expect(view.toString()).toBe('FF 00 AB 20');
});
