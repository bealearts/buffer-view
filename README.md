# buffer-view [![Build Status](https://travis-ci.org/bealearts/buffer-view.png?branch=master)](https://travis-ci.org/bealearts/buffer-view) [![npm version](https://badge.fury.io/js/buffer-view.svg)](http://badge.fury.io/js/buffer-view) [![Dependency Status](https://david-dm.org/bealearts/buffer-view.png)](https://david-dm.org/bealearts/buffer-view)

Serial, Heterogeneous access to an ArrayBuffer

> AssemblyScript library to work with binary data
>
>  Supports;
> * Heterogeneous reading of data
> * Heterogeneous writing of data
> * Serial access, current byte position is incremented after each operation
> * Setting Endianness


## Usage
```ts
import BufferView from 'buffer-view';

const view:BufferView = BufferView.fromByteArray([0x41, 0x40, 0x00, 0x00, 0x40, 0x80, 0x00, 0x00]);
view.readFloat32(); // 12.0
view.readUint8(); // 0x40
view.readUint8(); // 0x80
view.position; // 6
```

```ts
import BufferView from 'buffer-view';

const view:BufferView = new BufferView(new ArrayBuffer(10), true);  // littleEndian
view.writeFloat32(12.0)
view.writeInt32(12345);
view.position; // 8
view.toString();  // "00 00 40 41 39 30 00 00 00 00"
```


# Install
```shell
npm install buffer-view --save-dev
```
