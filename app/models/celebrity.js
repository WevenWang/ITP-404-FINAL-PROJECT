import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  occupation: DS.attr('string'),
  motto: DS.attr('string'),
  birthday: DS.attr('string'),
  starred: DS.attr('boolean'),
  userAdded: DS.attr('boolean')

});
