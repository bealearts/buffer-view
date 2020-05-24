
export default class BufferView {
  public position: i32 = 0;

  public static fromByteArray(bytes:Array<u8>):BufferView {
    const view = new BufferView(new ArrayBuffer(bytes.length));
    for (let i:i32=0; i<bytes.length; i++) {
      view.writeUint8(bytes[i]);
    }
    view.position = 0;
    return view;
  }

  public constructor(
    buffer: ArrayBuffer,
    littleEndian: bool = false,
    byteOffset: i32 = 0,
    byteLength: i32 = buffer.byteLength
  ) {
    this.dataView = new DataView(buffer, byteOffset, byteLength);
    this.littleEndian = littleEndian;
  }

  public get buffer(): ArrayBuffer {
    return this.dataView.buffer;
  }

  public toString(): string {
    const lookup:string = "0123456789ABCDEF";
    let result:string = '';
    for (let c:i32=0; c<this.dataView.byteLength; c++) {
      const val = this.dataView.getUint8(c);
      const hex = lookup.substr((val>>4), 1) + lookup.substr((val & 0x0F), 1);
      result += hex + ' ';
    }
    return result.trim();
  }

  /** Read **/

  public readFloat32(): f32 {
    return this.dataView.getFloat32(this.incOffset(4), this.littleEndian);
  }

  public readFloat64(): f64 {
    return this.dataView.getFloat64(this.incOffset(8), this.littleEndian);
  }

  public readInt8(): i8 {
    return this.dataView.getInt8(this.incOffset(1));
  }


  /** Write **/

  public writeFloat32(value: f32): void {
    this.dataView.setFloat32(this.incOffset(4), value, this.littleEndian);
  }

  public writeUint8(value: u8): void {
    this.dataView.setUint8(this.incOffset(1), value);
  }

  private dataView: DataView;
  private littleEndian: bool;

  private incOffset(value: i32): i32 {
    const pos = this.position;
    this.position += value;
    return pos;
  }
}
