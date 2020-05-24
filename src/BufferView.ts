
export default class BufferView {
  public position: i32 = 0;

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

  public readFloat32(): f32 {
    return this.dataView.getFloat32(this.position+=4, this.littleEndian);
  }

  public readFloat64(): f64 {
    return this.dataView.getFloat64(this.position+=8, this.littleEndian);
  }

  public readInt8(): i8 {
    return this.dataView.getInt8(this.position++);
  }


  private dataView: DataView;
  private littleEndian: bool;
}
