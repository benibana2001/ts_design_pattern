import chalk from "chalk";

abstract class Pizza {
  abstract name:string;
  abstract dough: string;
  abstract sauce: string;
  
  toppings: string[] = []

  prepare():void {
    console.log(`${chalk.blue.bold(this.name)}を下処理`)
    console.log(`生地をこねる`)
    console.log(`ソースを追加`)
    console.log(`トッピングを追加`)
    this.toppings.forEach(topping => {
      console.log(`_${topping}`)
    })
  }

  bake():void{
    console.log(`350度で25分間焼く`)
  }
  cut():void {
    console.log("ピザを丁寧に切り分ける")
  }
  box():void {
    console.log("箱にピザをぴっちりと詰め込む")
  }
}

class NYStylePizza extends Pizza{
  name= "NewYorkStyleのピザ";
  dough: string = '薄い生地'
  sauce: string = 'スパイシーソース'
  constructor(){
    super()
  }
}

class NYStyleCheesePizza extends Pizza{
  name= "NewYorkStyleのチーズピザ";
  dough: string = '薄い生地'
  sauce: string = 'スパイシーソース'
  constructor(){
    super()
    this.toppings.push('モッツァレラチーズ')
  }
}

class NYStyleVeggiePizza extends Pizza {
  name= "NewYorkStyleの野菜ピザ";
  dough: string = '厚い生地'
  sauce: string = ' BBQソース'
  constructor(){
    super()
    this.toppings.push('野菜ミックス')
  }
}

class ChicagoStylePizza extends Pizza{
  name= "ChicagoStyleのピザ";
  dough: string = '薄いシカゴ生地'
  sauce: string = 'シカゴソース'
  constructor(){
    super()
  }
}

class ChicagoStyleCheesePizza extends Pizza{
  name= "ChicagoStyleのチーズピザ";
  dough: string = '薄いシカゴ生地'
  sauce: string = 'シカゴソース'
  constructor(){
    super()
    this.toppings.push('モッツァレラチーズ')
  }
}

class ChicagoStyleVeggiePizza extends Pizza {
  name= "ChicagoStyleの野菜ピザ";
  dough: string = '厚いシカゴ生地'
  sauce: string = ' BBQシカゴソース'
  constructor(){
    super()
    this.toppings.push('野菜ミックス')
  }
}

/**
 * Factory Class
 */
abstract class PizzaStore {
  orderPizza(type: string) {
    const pizza:Pizza =  this.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  /**
   * Factory Methodに該当する
   */
  abstract createPizza(item:string): Pizza;
}

/**
 * Concrete Factory
 */
class NYPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if(item === 'cheeze') {
      return new NYStyleCheesePizza()
    } else if(item === 'veggie'){
      return new NYStyleVeggiePizza()
    } else {
      return new NYStylePizza();
    }
  }
}

class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if(item === 'cheese') {
      return new ChicagoStyleCheesePizza()
    } else if(item === 'veggie'){
      return new ChicagoStyleVeggiePizza()
    } else {
      return new ChicagoStylePizza();
    }
  }
}

export const name = "FactoryMethod"
export function main(){
  const nyStore = new NYPizzaStore()
  const chicagoStore = new ChicagoPizzaStore()

  const pizza01 = nyStore.orderPizza('cheeze')
  const pizza02 = chicagoStore.orderPizza('veggie')

  console.log(`${chalk.red.italic.bold(pizza01.name)}を注文`)
  console.log(`${chalk.red.italic.bold(pizza02.name)}を注文`)

}