import BufferView from '../src/BufferView';

const buffer:ArrayBuffer = new ArrayBuffer(100);

test("constructor", () => {
  const view = new BufferView(buffer);
  expect(view.buffer).toBe(buffer);
  expect(view.position).toBe(0);
});

test("readFloat32", () => {
  const view = new BufferView(buffer);
  expect(view.readFloat32()).toBe(0);
  expect(view.position).toBe(4);
});
