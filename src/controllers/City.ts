import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../middleware'

interface ICidade {
	nome: string,
	quantHabitantes: number
}
interface IBodyProps {
	nome?: string,
	quantHabitantes?: number
}
interface IQueryProps {
	page?: number,
    limit?: number,
    filter?: string
}
interface IParamProps {
	id?: number;
}

const createValidator = validation({
	body: yup.object().shape({
		nome: yup.string().required().min(3),
		quantHabitantes: yup.number().required().min(10000)
	})
})

const create =  async (req: Request, res: Response) => {
	const cidade: ICidade = req.body
	return res.status(200).json(cidade)
}


const getAllValidator = validation({
	query: yup.object().shape({
		page: yup.number().notRequired().moreThan(0),
		limit: yup.number().notRequired().moreThan(0),
		filter: yup.string().notRequired()
	})
})

const getAll =  async (req: Request, res: Response) => {
	const query: IQueryProps = req.query
	return res.status(200).json(query)
}

const getByIdValidator = validation({
	params: yup.object().shape({
		id: yup.number().integer().required().moreThan(0),
	})
})

const getById = async (req: Request<IParamProps>, res: Response) => {
	const params: IParamProps = req.params
	console.log(params) 
  
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}

const updateByIdValidator = validation({
	body: yup.object().shape({
		nome: yup.string().required().min(3),
	}),
	params: yup.object().shape({
		id: yup.number().integer().required().moreThan(0),
	}),
})

const updateById = async (req: Request, res: Response) => {
	const params: IParamProps = req.params
	const body: IBodyProps = req.body.IBodyProps
	
	console.log(params, body)

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}

const deleteByIdValidator = validation({
	params: yup.object().shape({
		id: yup.number().integer().required().moreThan(0),
	}),
})

const deleteById = async (req: Request, res: Response) => {
	const params: IParamProps = req.params
	console.log(params)
  
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}

export const CityController = {
	createValidator,
	create,
	getAllValidator,
	getAll,
	getByIdValidator,
	getById,
	updateByIdValidator,
	updateById,
	deleteByIdValidator,
	deleteById
}
