const Controller = require('egg').Controller

class HomeController extends Controller {
    async index () {
        this.ctx.body = 'hi, lxy'
    }
}

module.exports = HomeController