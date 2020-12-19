/* eslint-disable linebreak-style */

import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

const testArrayBuffer = [
  "{'data: {'user: {'id: 1,'name:' Hitman, 'level': 10}}}",
  "{'data: {'user: {'id: 22,'name:' Kickman, 'level': 99}}}",
  "{'data: {'user: {'id: 000,'name:' Neatman, 'level': 999}}}",
];

test.each(testArrayBuffer)(('ArrayBuffer test each'),
  (data) => {
    const buffer = getBuffer(data);
    ArrayBufferConverter.load(buffer);
    expect(ArrayBufferConverter.toString()).toBe(data);
  });
