const createcsv = require('csv-writer').createObjectCsvWriter

const csvWriter = createcsv({
    path: 'ram.csv',
    header:[
        {id: 'col1', title: 'COL1'},
        {id: 'col2', title: 'COL2'},
        {id: 'col3', title: 'COL3'},
        {id: 'col4', title: 'COL4'},
        {id: 'col5', title: 'COL5'}
    ]
})

const records = [];

for (let i = 1; i <= 10; i++) {
    const result = 2 * i;
    records.push({
        col1: '2',
        col2: '*',
        col3: `${i}`,
        col4: '=',
        col5: `${result}`,


    })
  }

  
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
