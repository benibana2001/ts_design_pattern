import chalk from "chalk";

interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObserver: () => void;
}
interface Observer {
  update: (updateData: UpdateData) => void;
}
interface DisplayElement {
  display: () => void;
}
type UpdateData = {
  temperture: number;
  humidity: number;
  pressure: number;
};
const DEFAULT_DATA = (): UpdateData => {
  return {
    temperture: 0,
    humidity: 0,
    pressure: 0,
  };
};

class WeatherData implements Subject {
  observers: Observer[];
  updateData: UpdateData;
  constructor() {
    this.observers = [];
    this.updateData = {
      temperture: 0,
      humidity: 0,
      pressure: 0,
    };
  }
  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {}
  notifyObserver() {
    this.observers.forEach((o) => o.update(this.updateData));
  }
  setData(newData: UpdateData) {
    this.updateData = newData;
  }
  measurementsChaged() {
    this.notifyObserver();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  updataData: UpdateData;
  weatherData: Subject;
  constructor(weatherData: Subject /** 参照渡し */) {
    this.updataData = DEFAULT_DATA();
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(updateData: UpdateData) {
    this.updataData = updateData;
    this.display();
  }
  display() {
    console.group(`${chalk.blue.bold(`今日の天気`)}`);
    console.log(`温度: ${this.updataData.temperture}`);
    console.log(`湿度: ${this.updataData.humidity}`);
    console.log(`気圧: ${this.updataData.temperture}`);
    console.groupEnd();
  }
}

class ForecastDisplay implements Observer, DisplayElement {
  updataData: UpdateData;
  wetherData: Subject;
  constructor(weatherData: Subject) {
    this.updataData = DEFAULT_DATA();
    this.wetherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(updateData: UpdateData) {
    this.updataData = updateData;
    this.display();
  }
  display() {
    console.group(`${chalk.red(`明日の予報`)}`);
    console.log(`明日の温度: ${this.updataData.temperture + 10.0}`);
    console.log(`明日の湿度: ${this.updataData.humidity - 20.0}`);
    console.log(`明日の気圧: ${this.updataData.temperture * 2}`);
    console.groupEnd();
  }
}

export const name = 'Observer' 
export function main() {
  const w = new WeatherData();
  const display1 = new CurrentConditionsDisplay(w);
  const display2 = new ForecastDisplay(w);
  w.setData({
    temperture: 18.2,
    humidity: 58,
    pressure: 0.8,
  });
  w.measurementsChaged();

  w.setData({
    temperture: 24.6,
    humidity: 39,
    pressure: 1.0,
  });
  w.measurementsChaged();
}
