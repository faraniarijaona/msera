import DS from 'ember-data';
import attr from 'ember-data/attr';

var _self = DS.Store;

export default DS.Model.extend({
    mvt: attr('string'),//recherche, j'aime, contacte via fb,mailing, calling
    keyword: attr('string'),
    user: attr('user', {
        defaultValue: function () {
            let anonym = _self.create('user');
            anonym.set('firstname', 'anonymous');
            anonym.set('lastname', 'anonymous');
            anonym.set('buisinessname', 'anonymous');
            //TO DO STUFF FOR Enriching anonymous information
            return anonym;
        }
    }),
    category: attr('string'),
    prix: attr('number'),
    daty: attr('string', {
        defaultValue: function () {
            return (new Date()).getUTCMilliseconds;
        }
    }),
});
