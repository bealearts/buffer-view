const fs = require("fs");
const loader = require("@assemblyscript/loader");

const { default: SDV , use, Uint8Array_ID, __release, __retain, __allocArray } = loader.instantiateSync(
  fs.readFileSync("./dist/untouched.wasm")
).exports;


class SerialDataView {
  constructor(buffer) {
    const bufferRef = __retain(__allocArray(Uint8Array_ID, buffer));
    const view = SDV.wrap(SDV.fromUint8Array(bufferRef));
    __release(bufferRef);
    return view;
  }
}

const buffer = Buffer.from('Hello World fg ghf');

const view = new SerialDataView(buffer);

console.log(view.byteLength, view.readUint8());
