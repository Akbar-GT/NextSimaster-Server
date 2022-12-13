const model = require('../models');

async function list(request, response) {
    try {
        const datas = await model.Notification.findAll(options);

        return response.status(200).json({
            success: true,
            error: 0,
            message: 'notification successfully listed',
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
            options
        )

        return response.status(200).json({
            success: true,
            error: 0,
            message: 'notification successfully listed',
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

async function create(request, response) {
    try {
        const data = await model.Notification.create(request.body)

        const notification = await model.Notification.findByPk(data.id, options);

        request.app.socket.emit('newNotification', JSON.stringify(notification));

        return response.status(201).json({
            success: true,
            error: 0,
            message: 'notification successfully created',
            data: data.id
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

const options = {
    attributes: {
        exclude: ['courseId', 'createdAt', 'id']
    },
    include: {
        model: model.Course,
        attributes: ['code', 'name', 'day', 'time'],
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
    }
}

module.exports = { list, findOne, create };
