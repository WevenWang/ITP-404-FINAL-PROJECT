import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  // id()
  // {
  //   return
  //
  //
  // },
  name()
  {
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    return name;

  },
  motto()
  {
    return faker.lorem.paragraph();

  },
  occupation()
  {
    return faker.name.jobArea();

  },
  birthday()
  {
    return faker.date.past();

  },

  starred()
  {
    return faker.random.boolean();
  },

  userAdded()
  {
    return false;
  }


});
