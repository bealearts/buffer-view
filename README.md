# serial-data-view [![Build Status](https://travis-ci.org/bealearts/serial-data-view.png?branch=master)](https://travis-ci.org/bealearts/serial-data-view) [![npm version](https://badge.fury.io/js/serial-data-view.svg)](http://badge.fury.io/js/serial-data-view) [![Dependency Status](https://david-dm.org/bealearts/serial-data-view.png)](https://david-dm.org/bealearts/serial-data-view)

Serial, Heterogeneous access to an ArrayBuffer

> [AssemblyScript](https://docs.assemblyscript.org/) library to work with binary data
>
>  Supports;
> * Heterogeneous reading of data
> * Heterogeneous writing of data
> * Serial access, current byte position is incremented after each operation
> * Setting Endianness
> * Can be called directly from JavaScript


## Usage

### From AssemblyScript

```ts
import SerialDataView from 'serial-data-view';

const view:SerialDataView = SerialDataView.fromByteArray([0x41, 0x40, 0x00, 0x00, 0x40, 0x80, 0x00, 0x00]);
view.readFloat32(); // 12.0
view.readUint8(); // 0x40
view.readUint8(); // 0x80
view.position; // 6
```

```ts
import SerialDataView from 'serial-data-view';

const view:SerialDataView = new SerialDataView(new ArrayBuffer(10), true);  // littleEndian
view.writeFloat32(12.0)
view.writeInt32(12345);
view.position; // 8
view.toString();  // "00 00 40 41 39 30 00 00 00 00"
```

### From JavaScript
```js
import SerialDataView from 'serial-data-view';

const buffer = Buffer.from('Hello World');
const view = new SerialDataView(buffer);

view.readUint8(); // 72
view.readUint8(); // 101
view.position; // 2
```


## Install
```shell
npm install serial-data-view --save-dev
```
