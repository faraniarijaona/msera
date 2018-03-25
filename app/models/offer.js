import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    action: attr('string'),
    category: attr('string'),
    description: attr('string'),
    prix: attr('number'),
    datepub: attr('number', {
        defaultValue: function () {
            return (new Date()).getUTCMilliseconds();
        }
    }),
    photo: attr('string'),
    user: attr('user')
});
