import BufferView from '../src/BufferView';

test('writeFloat32', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(20));

  view.writeFloat32(12.0);
  expect(view.position).toBe(4);
  view.writeFloat32(4.0);
  expect(view.position).toBe(8);

  expect(view.toString()).toBe('41 40 00 00 40 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00');
});

test('writeFloat64', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(24));

  view.writeFloat64(412.0);
  expect(view.position).toBe(8);
  view.writeFloat64(48.0);
  expect(view.position).toBe(16);

  expect(view.toString()).toBe('40 79 C0 00 00 00 00 00 40 48 00 00 00 00 00 00 00 00 00 00 00 00 00 00');
});

test('writeInt8', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(20));

  view.writeInt8(<i8>0x12);
  expect(view.position).toBe(1);
  view.writeInt8(<i8>0xAB);
  expect(view.position).toBe(2);

  expect(view.toString()).toBe('12 AB 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00');
});

test('writeInt16', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(20));

  view.writeInt16(<i16>123);
  expect(view.position).toBe(2);
  view.writeInt16(<i16>-567);
  expect(view.position).toBe(4);

  expect(view.toString()).toBe('00 7B FD C9 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00');
});

test('writeInt32', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(20));

  view.writeInt32(<i32>123456);
  expect(view.position).toBe(4);
  view.writeInt32(<i32>-56790);
  expect(view.position).toBe(8);

  expect(view.toString()).toBe('00 01 E2 40 FF FF 22 2A 00 00 00 00 00 00 00 00 00 00 00 00');
});

test('writeInt64', () => {
  const view:BufferView = new BufferView(new ArrayBuffer(24));

  view.writeInt64(<i64>12345600);
  expect(view.position).toBe(8);
  view.writeInt64(<i64>-5679000);
  expect(view.position).toBe(16);

  expect(view.toString()).toBe('00 00 00 00 00 BC 61 00 FF FF FF FF FF A9 58 68 00 00 00 00 00 00 00 00');
});
