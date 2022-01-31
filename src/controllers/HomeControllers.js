import Aluno from '../model/alunos.js';

export default class alunoControllers {
  static async register(req, res) {
    const {
      nome,
      sobrenome,
      email,
      idade,
      peso,
      altura,
    } = req.body;

    const aluno = new Aluno({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      idade: idade,
      peso: peso,
      altura: altura,
    });
    try {
      aluno.save();
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
