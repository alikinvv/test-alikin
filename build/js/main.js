"use strict";

fetch('./js/senators.json').then(function (response) {
  return response.json();
}).then(function (json) {
  return init(json);
});

var init = function init(senators) {
  var path = d3.geo.path();
  var d3_map = d3.select('.map').append('svg:svg');
  var states = d3_map.append('svg:g').attr('class', 'states');
  d3.json('./js/us-states.json', function (collection) {
    states.selectAll('path').data(collection.features).enter().append('path').attr('d', path).attr('class', function (state) {
      return state.id;
    }).on('click', function (state) {
      $('.info').html('');
      $('.map path').removeClass('active');
      $(".map .".concat(state.id)).addClass('active');
      senators.objects.forEach(function (senator) {
        if (codes[state.id] === senator.state) {
          $('.info').append("\n                            <ul>\n                                <li><strong>Name:</strong> ".concat(senator.person.name, "</li>\n                                <li><strong>Description:</strong> ").concat(senator.description, "</li>\n                                <li><strong>Party:</strong> ").concat(senator.party, "</li>\n                                <li><strong>Description:</strong> ").concat(senator.description, "</li>\n                                <li><strong>Senator Rank:</strong> ").concat(senator.senator_rank_label, "</li>\n                                <li><strong>Website:</strong> <a href='").concat(senator.website, "' target='_blank'>").concat(senator.website, "</a></li>\n                            </ul>\n                        "));
        }
      });
    });
  });
};

var codes = {
  '01': 'AL',
  '02': 'AK',
  '04': 'AZ',
  '05': 'AR',
  '06': 'CA',
  '08': 'CO',
  '09': 'CT',
  '10': 'DE',
  '11': 'DC',
  '12': 'FL',
  '13': 'GA',
  '15': 'HI',
  '16': 'ID',
  '17': 'IL',
  '18': 'IN',
  '19': 'IA',
  '20': 'KS',
  '21': 'KY',
  '22': 'LA',
  '23': 'ME',
  '24': 'MD',
  '25': 'MA',
  '26': 'MI',
  '27': 'MN',
  '28': 'MS',
  '29': 'MO',
  '30': 'MT',
  '31': 'NE',
  '32': 'NV',
  '33': 'NH',
  '34': 'NJ',
  '35': 'NM',
  '36': 'NY',
  '37': 'NC',
  '38': 'ND',
  '39': 'OH',
  '40': 'OK',
  '41': 'OR',
  '42': 'PA',
  '44': 'RI',
  '45': 'SC',
  '46': 'SD',
  '47': 'TN',
  '48': 'TX',
  '49': 'UT',
  '50': 'VT',
  '51': 'VA',
  '53': 'WA',
  '54': 'WV',
  '55': 'WI',
  '56': 'WY'
};