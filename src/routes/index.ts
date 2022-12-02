import { Request, Response, Router } from 'express'

import { CityController } from '../controllers/City'

const router = Router()

router.get('/', (_, res) => {
	return res.send('UP')
})

router.post('/cidades', CityController.create)

export { router }
