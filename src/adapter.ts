import chalk from "chalk";

interface Duck {
  quack: () => void;
  fly: () => void;
}
interface Turkey {
  gobble: () => void;
  fly: () => void;
}

class MallardDuck implements Duck {
  constructor() {}
  quack() {
    console.log('ガーガー')
  }
  fly() {
    console.log('飛んでいます')
  }
}

class WildTurkey implements Turkey {
  gobble(){
    console.log('ゴロゴロ')
  } ;
  fly(){
    console.log('短い距離を飛んでいます')
  }
}

/** Turkey を Duckとして動かすためのクラス */
class TurkeyAdapter implements Duck{
  private turkey: Turkey
  constructor(turkey: Turkey){
    this.turkey = turkey
  }
  quack(){
    this.turkey.gobble()
  } ;
  fly(){
    this.turkey.fly()
  }
}

export const name = "Adapter"
export function main(){
  const mallarDuck = new MallardDuck()
  const wildTurkey = new WildTurkey()
  // const turkeyAdapter = new TurkeyAdapter()
  mallarDuck.quack()
  mallarDuck.fly()

  wildTurkey.gobble()
  wildTurkey.fly()

  const turkeyAdapter =  new TurkeyAdapter(wildTurkey)
  // TurkeyをDuckの振る舞いで呼び出せる
  turkeyAdapter.quack()
  turkeyAdapter.fly()
}
