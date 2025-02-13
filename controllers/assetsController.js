const db = require("../db/queries")
exports.getAssets = async (req, res) => {
    const assets = await db.getAllAssets();
    res.render('assets', {assets: assets});
}