import mongoose from '../db/conn.js';

const { Schema } = mongoose;

const Aluno = mongoose.model(
  'Aluno',
  new Schema(
    {
      nome: {
        type: String,
      },
      sobrenome: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      idade: {
        type: Number,
        required: true,
      },
      peso: {
        type: Number,
        required: true,
      },
      altura: {
        type: Number,
        required: true,
      },
    },
    { timeseries: true },
  ),
);
export default Aluno;
