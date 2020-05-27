import fs from 'fs';
import loader from "@assemblyscript/loader";

const { default: SDV , use, Uint8Array_ID, __release, __retain, __allocArray } = loader.instantiateSync(
  fs.readFileSync("./dist/optimized.wasm")
).exports;


export default class SerialDataView {
  constructor(buffer) {
    const bufferRef = __retain(__allocArray(Uint8Array_ID, buffer));
    const view = SDV.wrap(SDV.fromUint8Array(bufferRef));
    __release(bufferRef);
    return view;
  }
}
