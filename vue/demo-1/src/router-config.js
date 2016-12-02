
let configRouter = (router) => {
  router.map({
    // 404
    '*': {
      component: require('./views/not-found')
    },

    '/index': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },

    '/list': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/list'))
        }, 'login')
      }
    },

    '/home': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/home'))
        }, 'login')
      }
    }
  })
}

export default configRouter
