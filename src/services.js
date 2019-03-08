const express = require('express')

const { Service } = require('./database')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Service.findAll({
    attributes: ['id', 'name']
  }))
})

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body
    const { id } = await Service.create({ userId: 'user', name })
    res.json({ success: true, id })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    if (await Service.destroy({ where: { id } })) {
      res.json({ success: true })
    }
  } catch (error) { }

  res.json({ success: false, error: 'Invalid ID' })
})

module.exports = router
