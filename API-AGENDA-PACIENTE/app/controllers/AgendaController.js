const { Paciente, Consulta } = require('../models');

class AgendaController {
  async listarAgenda(req, res) {
    const pacientes = await Paciente.findAll({ include: { model: Consulta, as: 'consultas' } });
    res.json(pacientes);
  }

  async cadastrarConsulta(req, res) {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  }

  async buscarConsultaPorId(req, res) {
    const paciente = await Paciente.findByPk(req.params.id, { include: { model: Consulta, as: 'consultas' } });
    if (!paciente) {
      return res.status(404).json({ error: 'Consulta não encontrada' });
    }
    res.json(paciente);
  }

  async atualizarConsulta(req, res) {
    const [updated] = await Paciente.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'Consulta não encontrada' });
    }
    const paciente = await Paciente.findByPk(req.params.id);
    res.json(paciente);
  }

  async deletarConsulta(req, res) {
    const deleted = await Paciente.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Consulta não encontrada' });
    }
    res.status(204).json();
  }
}

module.exports = AgendaController;
