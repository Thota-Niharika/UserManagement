import fs from 'fs';
import axios from 'axios';

axios.get('http://13.203.18.82:8090/api/employees')
    .then(r => {
        const list = r.data.data || r.data.content || r.data;
        fs.writeFileSync('emp-log.json', JSON.stringify(list[0], null, 2));
        console.log('Saved to emp-log.json');
    })
    .catch(e => console.error(e.message));
