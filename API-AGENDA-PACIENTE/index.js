// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Pedro Wilson Rodrigues de Lima
// DATA 19/05/2023

const express = require('express');
const app = express();

const PacienteController = require('./app/controllers/PacienteController');
const PacienteController = new PacienteController();

const AgendaController = require('./app/controllers/AgendaController');
const AgendaController = new AgendaController();


app.use(express.json());

app.get('/', function(req, res) {
    res.send('Welcome');
});

app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id', (req, res) => pacienteController.update(req, res));
app.delete('/paciente/:id', (req, res) => pacienteController.delete(req, res));

app.get('agenda', (req, res) => agendaController.findAll(req, res));
app.post('/agenda', (req, res) => agendaController.create(req, res));
app.get('/agenda/:id', (req, res) => agendaController.findById(req, res));
app.put('/agenda/:id', (req, res) => agendaController.update(req, res));
app.delete('/agenda/:id', (req, res) => agendaController.delete(req, res));


app.listen(3001, function() {
    console.log('Servidor rodando na porta 3001');
});

