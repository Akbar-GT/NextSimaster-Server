const model = require('../models');

async function list(request, response) {
    try {
        const datas = await model.CourseResult.findAll(options);

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

const options = {
    attributes: ['mark', 'value'],
    include: [
        {
            model: model.Course,
            attributes: ['name', 'credit'],
        },
        {
            model: model.Class,
            attributes: ['name']
        }
    ]
}

module.exports = { list };