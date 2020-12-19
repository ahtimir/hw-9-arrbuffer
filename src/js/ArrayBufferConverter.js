/* eslint-disable linebreak-style */

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
    return this.buffer;
  }

  toString() {
    const array16b = Array.from(new Uint16Array(this.buffer));
    const resultArray = array16b.map((item) => String.fromCharCode(item.toString()));
    const resultString = resultArray.join('');
    return resultString;
  }
}
