
let configRouter = (router) => {
  router.map({
    // 404
    '*': {
      component: require('./views/not-found')
    },

    '/login': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/login'))
        }, 'login')
      }
    },

    '/index': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },

    '/user': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/user'))
        }, 'login')
      }
    },

    '/site': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },
    '/team': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },
    '/bookteam': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },
    '/booksite': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },

    '/signup': {
      component (resolve) {
        require.ensure([], (require) => {
          resolve(require('./views/index'))
        }, 'login')
      }
    },

    '/admin': {
      component: {
        template: '<div>admin</div>'
      }
    }
  })
}

export default configRouter
