const { Sequelize } = require('../models');
const model = require('../models');

async function list(request, response) {
    try {
        console.log('hello')
        const datas = await model.Course.findAll({
            include: [
                {
                    model: model.Class,
                    attributes: ['name'],
                },
                {
                    model: model.Lecturer,
                    attributes: ['name'],
                },
                {
                    model: model.Room,
                    attributes: ['name'],
                },
            ]
        });

        return response.status(200).json({
            success: true,
            error: 0,
            message: 'course successfully listed',
            data: datas
        });

    } catch (error) {
        return response.status(500).json({
            success: false,
            error: error.code,
            message: error,
            data: null,
        });
    }
}

async function findOne(request, response) {
    try {
        const data = await model.Notification.findByPk(
            request.params.id,
        )

        return response.status(200).json({
            success: true,
            error: 0,
            message: 'course successfully listed',
            data: data
        });

    } catch (error) {
        return response.status(500).json({
            success: false,
            error: error.code,
            message: error,
            data: null,
        });
    }
}

module.exports = { list, findOne };