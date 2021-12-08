const db = require('../models/index');
const Asset = db.Asset;
const helpers = require('../helpers/response');

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Asset.findAll({
                order: [
                    ['id', 'DESC'],
                ],
            });

            return helpers.response(res, 200, 'Success get all assets', result);

        } catch (error) {
            console.log(error);
            helpers.response(res, 400, error);
        }
    },
    getById: async (req, res) => {
        try {
            const result = await Asset.findOne({ where: {id: req.params.id} });
            console.log(result);
            // res.send(result);
            if (result) {
                return helpers.response(res, 200, 'Success get asset by id', result);
            } else {
                return helpers.response(res, 404, 'Data not found');
            }
        } catch (error) {
            console.log(error);
            helpers.response(res, 400, error);
        }
    },
    create: async (req, res) => {
        try {
            const result = await Asset.create(req.body);

            if (result) {
                return helpers.response(res, 200, 'Success create asset', result);
            } else {
                return helpers.response(res, 400, 'Something wrong, please check your input');
            }
        } catch (error) {
            helpers.response(res, 400, error);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;

            const { name, type, branch, bulan, tahun, query } = req.body;

            const result = await Asset.update({
                name,
                type,
                branch,
                bulan,
                tahun,
                query
            }, {
                where: { id }
            });

            if (result > 0) {
                const response = await Asset.findOne({ where: {id: id}});
                return helpers.response(res, 200, 'Success update asset', response);
            } else {
                return helpers.response(res, 400, `Something wrong, asset with id ${id} not found`);
            }
        } catch (error) {
            helpers.response(res, 400, error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const getAsset = await Asset.findOne({ where: {id: id} });

            if (!getAsset) {
                return helpers.response(res, 400, `Asset with id ${id} not found`);
            }

            const result = await Asset.destroy({where: {id: id}});
        
            console.log(result);

            return helpers.response(res, 200, 'Success delete asset');
        } catch (error) {
            helpers.response(res, 400, error);
        }
    }
}