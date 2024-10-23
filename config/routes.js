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

  // Client routes (previously User routes)
  'GET /api/v1/clients': 'ClientController.find',
  'GET /api/v1/clients/:id': 'ClientController.findOne',
  'POST /api/v1/clients': 'ClientController.create',
  'PUT /api/v1/clients/:id': 'ClientController.update',
  'DELETE /api/v1/clients/:id': 'ClientController.destroy',

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
  'GET /api/v1/doctors': 'DoctorController.find',
  'GET /api/v1/doctors/:id': 'DoctorController.findOne',
  'POST /api/v1/doctors': 'DoctorController.create',
  'PUT /api/v1/doctors/:id': 'DoctorController.update',
  'DELETE /api/v1/doctors/:id': 'DoctorController.destroy',

  // Booking routes
  'GET /api/v1/bookings': 'BookingController.find',
  'GET /api/v1/bookings/:id': 'BookingController.findOne',
  'POST /api/v1/bookings': 'BookingController.create',
  'PUT /api/v1/bookings/:id': 'BookingController.update',
  'DELETE /api/v1/bookings/:id': 'BookingController.destroy',

  // Forum post routes
  'GET /api/v1/forum-posts': 'ForumPostController.find',
  'GET /api/v1/forum-posts/:id': 'ForumPostController.findOne',
  'POST /api/v1/forum-posts': 'ForumPostController.create',
  'PUT /api/v1/forum-posts/:id': 'ForumPostController.update',
  'DELETE /api/v1/forum-posts/:id': 'ForumPostController.destroy',

  // Forum reply routes
  'GET /api/v1/forum-replies': 'ForumReplyController.find',
  'GET /api/v1/forum-replies/:id': 'ForumReplyController.findOne',
  'POST /api/v1/forum-replies': 'ForumReplyController.create',
  'PUT /api/v1/forum-replies/:id': 'ForumReplyController.update',
  'DELETE /api/v1/forum-replies/:id': 'ForumReplyController.destroy',

  // Article routes
  'GET /api/v1/articles': 'ArticleController.find',
  'GET /api/v1/articles/:id': 'ArticleController.findOne',
  'POST /api/v1/articles': 'ArticleController.create',
  'PUT /api/v1/articles/:id': 'ArticleController.update',
  'DELETE /api/v1/articles/:id': 'ArticleController.destroy',
};
