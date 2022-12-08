import { Router } from 'express'

import { CityController } from '../controllers'

const router = Router()

router.get('/', (_, res) => {
	return res.send('UP')
})

router.post('/cidades', CityController.createValidator, CityController.create)
router.get('/cidades', CityController.getAllValidator, CityController.getAll)
router.get('/cidades/:id', CityController.getByIdValidator, CityController.getById)
router.put('/cidades/:id', CityController.updateByIdValidator, CityController.updateById)
router.put('/cidades/:id', CityController.deleteByIdValidator, CityController.deleteById)

export { router }
