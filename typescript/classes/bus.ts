
class Bus {
  constructor(public brand: string, public year: number) {
    this.brand = brand;
    this.year = year;
  }

  getBusInfo(): string {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }

  static compareBus(bus1: Bus, bus2: Bus): string {
    if (bus1.year > bus2.year) {
      return `${bus1.brand} is newer than ${bus2.brand}`;
    } else if (bus1.year < bus2.year) {
      return `${bus2.brand} is newer than ${bus1.brand}`;
    } else {
      return `${bus1.brand} and ${bus2.brand} are the same year`;
    }
  }

}

const bus1 = new Bus("Hyundai", 2020);
console.log(bus1.getBusInfo());

const bus2 = new Bus("Kia", 2023);
console.log(Bus.compareBus(bus1, bus2));
