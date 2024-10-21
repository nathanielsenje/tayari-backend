/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  // User routes
  'GET /api/users': 'UserController.find',
  'GET /api/users/:id': 'UserController.findOne',
  'POST /api/users': 'UserController.create',
  'PUT /api/users/:id': 'UserController.update',
  'DELETE /api/users/:id': 'UserController.destroy',

  // Appointment routes
  'GET /api/appointments': 'AppointmentController.find',
  'GET /api/appointments/:id': 'AppointmentController.findOne',
  'POST /api/appointments': 'AppointmentController.create',
  'PUT /api/appointments/:id': 'AppointmentController.update',
  'DELETE /api/appointments/:id': 'AppointmentController.destroy',

  // Forum routes
  'GET /api/forums': 'ForumController.find',
  'GET /api/forums/:id': 'ForumController.findOne',
  'POST /api/forums': 'ForumController.create',
  'PUT /api/forums/:id': 'ForumController.update',
  'DELETE /api/forums/:id': 'ForumController.destroy',

  // Doctor routes
  'GET /api/doctors': 'DoctorController.find',
  'GET /api/doctors/:id': 'DoctorController.findOne',
  'POST /api/doctors': 'DoctorController.create',
  'PUT /api/doctors/:id': 'DoctorController.update',
  'DELETE /api/doctors/:id': 'DoctorController.destroy',
  'GET /api/doctors/:id/appointments': 'DoctorController.findAppointments',
};
