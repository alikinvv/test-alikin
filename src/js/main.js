
fetch('./js/senators.json')
    .then(response => response.json())
    .then(json => init(json))

let init = senators => {
    let path = d3.geo.path();
    let d3_map = d3.select('.map').append('svg:svg');
    let states = d3_map.append('svg:g').attr('class', 'states');

    d3.json('./js/us-states.json', collection => {
        states.selectAll('path')
            .data(collection.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('class', state => state.id)
            .on('click', state => {
                $('.info').html('');
                $('.map path').removeClass('active');

                $(`.map .${state.id}`).addClass('active');

                senators.objects.forEach(senator => {
                    if (codes[state.id] === senator.state) {
                        $('.info').append(`
                            <ul>
                                <li><strong>Name:</strong> ${senator.person.name}</li>
                                <li><strong>Description:</strong> ${senator.description}</li>
                                <li><strong>Party:</strong> ${senator.party}</li>
                                <li><strong>Description:</strong> ${senator.description}</li>
                                <li><strong>Senator Rank:</strong> ${senator.senator_rank_label}</li>
                                <li><strong>Website:</strong> <a href='${senator.website}' target='_blank'>${senator.website}</a></li>
                            </ul>
                        `)
                    }
                });
            })
    });
}

const codes = {
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