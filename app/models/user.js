import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    firstname: attr('string'),
    lastname: attr('string'),
    buisinessname: attr('string'),
    category: attr('string'),// automoto, hightech, agriculture, Matiere premiere...
    type: attr('string'), //particulier / entreprise
    identification: attr('string'), //nif pour mada
    idstatistique: attr('string'), //numero statistique
    datejoin: attr('number', {
        defaultValue: function () {
            return (new Date()).getUTCMilliseconds;
        }
    }),

    currency: attr('string', {
        defaultValue: 'MGA'//USD,EUR...
    }),

    pdp: attr('string'),

    adresse: attr('address'),

    mail: attr('string'),
    phone: attr('string'),
    facebook: attr('string'),
    google: attr('string'),
});
