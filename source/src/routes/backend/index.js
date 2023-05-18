const express = require('express')
const router = express.Router()
const loginMiddleware = require('../../middleware/login')
const loginManagerMiddleware = require('../../middleware/check_login_manage')


router.use((req, res, next) => {
    req.app.set('layout', 'backend/index.ejs');
    next();
});

router.use('/authen',require('./authen'))
router.use('/no-permission',require('./no_permission'))

router.use('/',loginMiddleware ,require('./dashboard'))
// router.use('/',require('./dashboard'))

router.use('/rss',require('./rss'))
router.use('/setting',require('./setting'))
router.use('/phiVanChuyen',require('./phiVanChuyen'))
router.use('/maGiamGia',require('./maGiamGia'))
router.use('/donHang',require('./donHang'))
router.use('/menu',require('./menu'))
router.use('/category',require('./category'))
router.use('/category_product',require('./category_product'))
router.use('/article',require('./article'))
router.use('/product',require('./product'))
router.use('/slider',require('./slider'))
router.use('/contact',require('./contact'))

router.use('/category_account',loginManagerMiddleware,require('./category_account'))
router.use('/account',loginManagerMiddleware,require('./account'))

module.exports = router
