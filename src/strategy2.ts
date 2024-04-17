abstract class Character {
  abstract weaponBehavior: WeaponBehavior;
  fight(): void {
    this.weaponBehavior.useWeapon();
  }
  setWeapon(w: WeaponBehavior): void {
    this.weaponBehavior = w;
  }
}
interface WeaponBehavior {
  useWeapon: () => void;
}

class Queen extends Character {
  weaponBehavior: WeaponBehavior;
  constructor() {
    super();
    this.weaponBehavior = new KnifeBehavior();
  }
}

class King extends Character {
  weaponBehavior: WeaponBehavior;
  constructor() {
    super();
    this.weaponBehavior = new AxeBehavior();
  }
}

class Knight extends Character {
  weaponBehavior: WeaponBehavior;
  constructor() {
    super();
    this.weaponBehavior = new SwordBehavior();
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Attack With Axe 🪓");
  }
}
class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Attack With Knife 🔪");
  }
}
class BowBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Attack With Bow 🏹");
  }
}
class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Attack With Sword ⚔️");
  }
}

export const name = "Strategy2"
export function main() {
  const king = new King(),
    queen = new Queen(),
    knight = new Knight();

  king.fight();
  queen.fight();
  knight.fight();
  knight.setWeapon(new BowBehavior());
  knight.fight();
}
