import ArrayBufferConverter from '../arrayBufferConverter';

test('toString', () => {
  const obj = new ArrayBufferConverter();
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  const tobe = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = obj.toString(getBuffer());
  expect(result).toBe(tobe);
});
test('load', () => {
  const obj = new ArrayBufferConverter();
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  const tobe = {
    data: {
      user: {
        id: 1,
        name: 'Hitman',
        level: 10,
      },
    },
  };
  const result = obj.load(getBuffer());
  expect(result).toEqual(tobe);
});
