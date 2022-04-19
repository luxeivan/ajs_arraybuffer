export default class ArrayBufferConverter {
  load(buffer) {
    const text = this.toString(buffer);
    return JSON.parse(text);
  }

  toString(buffer) {
    const bufferView = new Uint16Array(buffer);
    let text = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      text += String.fromCharCode(bufferView[i]);
    }
    return text;
  }
}
