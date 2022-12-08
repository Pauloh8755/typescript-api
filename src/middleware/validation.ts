import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { SchemaOf, ValidationError } from 'yup'

type TProperty = 'body' | 'header' | 'params' | 'query'

type TAllScheamas = Record<TProperty, SchemaOf<any>>

type TValidation = (schemas: Partial<TAllScheamas>) => RequestHandler

const validation: TValidation = (schemas) => async (req, res, next) => {
	const errorsResult: Record<string, Record<string, string>> = {}
	
	Object.entries(schemas).forEach(([key, schema])=> {
		console.log(key)
		try {
			schema.validateSync(req[key as TProperty], { abortEarly: false})
		} catch (error) {
			const yupError = error as ValidationError
			const errors: Record<string, string> = {}
	
			yupError.inner.forEach(error => {
				if (!error.path) return 
				errors[error.path] = error.message
			})
			errorsResult[key] = errors
		}
	})
	console.log(errorsResult)
	if (Object.entries(errorsResult).length !== 0) {
		return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
	}
	return next()
}

export {
	validation
}