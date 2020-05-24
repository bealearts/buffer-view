import BufferView from '../src/BufferView';

test('writeFloat32', () => {
  const view = new BufferView(new ArrayBuffer(20));
  view.writeFloat32(12.0);
  expect(view.position).toBe(4);
  view.writeFloat32(4.0);
  expect(view.position).toBe(8);

  expect(view.toString()).toBe('41 40 00 00 40 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00');
});

// test('writeFloat64', () => {
//   const view = new BufferView(new ArrayBuffer(100));
//   expect(view.writeFloat64()).toBe(0);
//   expect(view.position).toBe(8);
// });
//
// test('writeInt8', () => {
//   const view = new BufferView(new ArrayBuffer(100));
//   expect(view.readInt8()).toBe(0x01);
//   expect(view.position).toBe(1);
// });
