import { Knex } from 'knex'


export async function up(knex: Knex): Promise<void> {
	knex.schema.createTable('cidade', table => {
		table.bigIncrements('id').primary().index()
		table.string('nome', 150).index().notNullable()
		table.integer('quantHabitantes').index().notNullable()
		table.comment('Tabela cidade dos sistema')
	}).then(() => console.log('# Created table cidade'))
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('cidade').then(() => {
		console.log('# Droped table cidade')
	})
}

