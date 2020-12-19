/* eslint-disable linebreak-style */

import Character from './Character';

export default class NerfedMages extends Character {
  constructor(name) {
    super(name);
    this.damage = 100;
  }

  set distanceAttack(distance) {
    if (distance < 1 || distance > 5) {
      throw new Error('Distance should be in 1-5 range');
    }
    let adjustedAttack = this.damage - ((this.damage / 10) * (distance - 1));

    if (this.stoned === true) {
      adjustedAttack -= Math.log2(distance) * 5;
    }
    this.attack = Math.floor(adjustedAttack);
  }

  get distanceAttack() {
    return this.attack;
  }

  set stonedState(value) {
    if (value === true) {
      this.stoned = true;
    } else {
      this.stoned = false;
    }
  }
  /*
  set stonedEffect(boolean) {
    this.stoned = boolean;
  }
  */

  get stonedEffect() {
    return this.stoned;
  }
}
