import assert from 'assert';
import SerialDataView from '../index.mjs';

const buffer = Buffer.from('Hello World');

const view = new SerialDataView(buffer);

assert(view.byteLength, 11);
assert(view.readUint8(), 72);
