import { Person } from "./Person";

export class PersonBuilder {
  private name: string = "";
  private lastName: string = "";
  private age: number = 0;
  private country: string = "";
  private city: string = "";
  private hobbies: string[] = [];

  constructor() {
    this.reset();
  }

  reset() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  addHobbies(hobbie: string): PersonBuilder {
    this.hobbies.push(hobbie);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );

    this.reset();

    return person;
  }
}
