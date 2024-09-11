import { PersonBuilder } from "./example";

const BuilderPattern = () => {
  const personBuilder = new PersonBuilder();
  const hector = personBuilder
    .setName("Hector")
    .setLastName("Gonzalez")
    .setAge(20)
    .setCountry("Colombia")
    .setCity("Medellin")
    .addHobbies("Guitarra")
    .build();
  console.log("|Builder  |:", JSON.stringify(hector));
};

export default BuilderPattern;
