import controllers from '../controllers';

module.exports = (router) => {
  router.get('/api/v1/posts', controllers.api.v1);
};