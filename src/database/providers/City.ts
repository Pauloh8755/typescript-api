import { Knex } from '../knex'
import { ICidade } from '../models'

const create = async(cidade: Omit<ICidade, 'id'>) => {
	const [result] = await Knex('cidade').insert([cidade]).returning('id').catch(error => {
		console.log(error)
		throw new Error('Erro ao cadastrar cidade')
	})
    
	return result
}

export const CityProvider = {
	create
}