import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    country: attr('string'),
    geolocalisation: attr('string'),
    city: attr('string')
});
