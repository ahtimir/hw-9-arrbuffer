/* eslint-disable linebreak-style */

import NerfedMages from '../NerfedMages';

test('Check attack for distance and stoned', () => {
  const dummy = new NerfedMages();
  dummy.attack = 100;
  dummy.distance = 1;
  expect(dummy.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const dummy = new NerfedMages();
  dummy.attack = 100;
  dummy.distance = 4;
  expect(dummy.attack).toBe(70);
});

test('Check attack for distance and stoned', () => {
  const dummy = new NerfedMages();
  dummy.attack = 100;
  dummy.distance = 1;
  dummy.stoned = true;
  expect(dummy.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const dummy = new NerfedMages();
  dummy.attack = 100;
  dummy.distance = 0;
  dummy.stoned = true;
  expect(dummy.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const dummy = new NerfedMages();
  dummy.attack = 100;
  dummy.distance = 2;
  dummy.stoned = true;
  expect(dummy.attack).toBe(85);
});
