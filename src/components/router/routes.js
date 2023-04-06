import React, { Suspense, lazy } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Navigate } from 'react-router-dom'

//import TodoList from '../TodoList/TodoList'
const testRouts = [{
  path: '/test/route', element: lazy(() => import('../testRouter/TestRoute')), name: 'test-route',
}, {
  path: '/test/route2', element: lazy(() => import('../testRouter/TestRoute2')), name: 'test-route2',
}, {
  path: '/test/:id?/:name?', element: lazy(() => import('../testRouter/TestID')), name: 'test-id',
}]
export const routes = [
  {
    path: '/',
    element: () => <Navigate to='/dashboard' /> //!!fn
  }, {
    path: '/dashboard',
    element: Dashboard, //no < />
    name: 'dashboard'
  }, {
    path: '/todolist',
    element: lazy(() => import('../TodoList/TodoList')), //lazy(fn, return import())
    name: 'todolist',
    meta: {}
  }, {
    path: '/test',
    element: lazy(() => import('../testRouter/test')),
    name: 'test',
    meta: {},
    children: testRouts,
  },
  {
    path: '*', //new way
    element: () => {
      return <Navigate to={{
        pathname: '/dashboard',
        search: '?from=404'
      }} />
    },
    meta: {},
  }
]
