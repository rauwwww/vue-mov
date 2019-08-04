import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import mkdirp from 'mkdirp';

// mkdirp(resolve(__dirname, '../../live'));
mkdirp('../../live', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('success');
});

const adapter = new FileSync('../../live/db.json');
export const db = Lowdb(adapter);

// Seed an empty DB
db.defaults({
  messages: [],
  uploads: []
}).write();
