/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { NOMEM } from "dns";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const readline = require('readline')

	const Alunos = require('./classes/Alunos')



	const rl = readline.createInterface({

		input: process.stdin,
		output: process.stdout

	});
	const question = (str: string) => new Promise((resolve) => rl.question(str, resolve));

	const totalAlunos = Number(await question('Qual a quantidade de alunos ?'))

	let arrayAlunos: Alunos [] = []

	for (var i = 0;
		i < totalAlunos; i++) {

		const aluno = new Alunos()			
			aluno.Nome = await question('Qual o nome do aluno ?')

			 aluno.Nota = Number(await question('Qual a nota do aluno ?'))

			 aluno.Idade = Number(await question('Qual a idade do aluno ?'))

		arrayAlunos.push(aluno)

	}

	const sum = arrayAlunos.map(item => item.Nota).reduce((prev, curr) => prev + curr, 0);

	console.log('ALUNOS', arrayAlunos)
	console.log('Soma das notas', sum)

});