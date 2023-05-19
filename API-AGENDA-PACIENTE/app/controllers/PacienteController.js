// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Pedro Wilson Rodrigues de Lima
// DATA 19/05/2023

const { Paciente, Consulta } = require('../models');

class PacienteController {
async findAll(req, res) {
const pacientes = await Paciente.findAll({ include: { model: Consulta, as: 'consultas' } });
res.json(pacientes);
}

async create(req, res) {
const paciente = await Paciente.create(req.body);
res.status(201).json(paciente);
}

async findById(req, res) {
const paciente = await Paciente.findByPk(req.params.id, { include: { model: Consulta, as: 'consultas' } });
if (!paciente) {
return res.status(404).json({ error: 'Paciente não encontrado' });
}
res.json(paciente);
}

async update(req, res) {
const [updated] = await Paciente.update(req.body, { where: { id: req.params.id } });
if (!updated) {
return res.status(404).json({ error: 'Paciente não encontrado' });
}
const paciente = await Paciente.findByPk(req.params.id);
res.json(paciente);
}

async delete(req, res) {
const deleted = await Paciente.destroy({ where: { id: req.params.id } });
if (!deleted) {
return res.status(404).json({ error: 'Paciente não encontrado' });
}
res.status(204).json();
}
}

module.exports = PacienteController;