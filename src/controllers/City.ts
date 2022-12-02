import { Request, Response } from 'express'
import * as yup from 'yup'

interface ICidade {
	nome: string
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
	nome: yup.string().required().min(3),
})

const create =  async (req: Request, res: Response) => {
	try {
		const data: ICidade = await bodyValidation.validate(req.body)
		return res.status(200).json(data)
	} catch (error) {
		const yupError = error as yup.ValidationError
		console.log(error)
		return res.status(400).json({
			errors: {
				default: yupError.message
			}
		})
	}
}

export const CityController = {
	create
}
