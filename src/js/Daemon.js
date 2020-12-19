/* eslint-disable linebreak-style */

import NerfedMages from './NerfedMages';

export default class Daemon extends NerfedMages {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
