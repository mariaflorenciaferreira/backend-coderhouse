'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/',()=>'welcome')
// .middleware('auth')

const Cupcake=use('App/Models/Cupcake')

Route.get('/cupcake', async({view})=>{

    const result= await Cupcake.all()

    const cupcakes=result.toJSON()

    return view.render('ListaCupcakes', {cupcakes})
    // return cupcakes
})

Route.get('/cupcake2', 'GetCupcakesController.index')
