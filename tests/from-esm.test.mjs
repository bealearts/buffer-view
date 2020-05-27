import SerialDataView from '../index.mjs';

const buffer = Buffer.from('Hello World');

const view = new SerialDataView(buffer);

console.log(view.byteLength, view.readUint8());
