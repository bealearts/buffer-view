import SerialDataView from '../src/SerialDataView';

test('readFloat32', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x41, 0x40, 0x00, 0x00, 0x40, 0x80, 0x00, 0x00]);
  expect(view.readFloat32()).toBe(12.0);
  expect(view.position).toBe(4);
  expect(view.readFloat32()).toBe(4.0);
  expect(view.position).toBe(8);
});

test('readFloat64', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x40, 0x79, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x48, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
  expect(view.readFloat64()).toBe(412.0);
  expect(view.position).toBe(8);
  expect(view.readFloat64()).toBe(48.0);
  expect(view.position).toBe(16);
});

test('readInt8', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x41, 0x34]);
  expect(view.readInt8()).toBe(0x41);
  expect(view.position).toBe(1);
  expect(view.readInt8()).toBe(0x34);
  expect(view.position).toBe(2);
});

test('readInt16', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x30, 0x39, 0x40, 0x39]);
  expect(view.readInt16()).toBe(12345);
  expect(view.position).toBe(2);
  expect(view.readInt16()).toBe(16441);
  expect(view.position).toBe(4);
});

test('readInt32', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x00, 0x01, 0xE2, 0x40, 0xFF, 0xFF, 0x22, 0x2A, 0x00, 0x00]);
  expect(view.readInt32()).toBe(123456);
  expect(view.position).toBe(4);
  expect(view.readInt32()).toBe(-56790);
  expect(view.position).toBe(8);
});

test('readInt64', () => {
  const view:SerialDataView = SerialDataView.fromByteArray([0x00, 0x00, 0x00, 0x00, 0x00, 0xBC, 0x61, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xA9, 0x58, 0x68, 0x00, 0x00]);
  expect(view.readInt64()).toBe(12345600);
  expect(view.position).toBe(8);
  expect(view.readInt64()).toBe(-5679000);
  expect(view.position).toBe(16);
});
