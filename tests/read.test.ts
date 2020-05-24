import BufferView from '../src/BufferView';

test('readFloat32', () => {
  const view = BufferView.fromByteArray([0x41, 0x40, 0x00, 0x00, 0x40, 0x80, 0x00, 0x00]);
  expect(view.readFloat32()).toBe(12.0);
  expect(view.position).toBe(4);
  expect(view.readFloat32()).toBe(4.0);
  expect(view.position).toBe(8);
});

// test('readFloat64', () => {
//   const view = new BufferView(buffer);
//   expect(view.readFloat64()).toBe(0);
//   expect(view.position).toBe(8);
// });

test('readInt8', () => {
  const view = BufferView.fromByteArray([0x41, 0x34]);
  expect(view.readInt8()).toBe(0x41);
  expect(view.position).toBe(1);
  expect(view.readInt8()).toBe(0x34);
  expect(view.position).toBe(2);
});
