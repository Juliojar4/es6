/* eslint-disable import/no-import-module-exports */
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://172.26.0.2:27017/jara?replicaSet=rs0&readPreference=primary');
  console.log('conhectou ao mongoose');
}

main().catch((err) => console.log(err));

export default mongoose;
