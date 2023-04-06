import React, { Suspense } from 'react'
import { routes } from './routes'
import { createBrowserRouter, createRoutesFromElements, Route, useNavigate, useLocation, useParams, useSearchParams, Navigate, Routes } from 'react-router-dom'

const MyBrowserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element>
    <Route></Route>
    <Route></Route>
  </Route>
))


function Element (props) {//权限，登录校验等
  let { element: Component } = props
  const navigate = useNavigate(), params = useParams(),
    [searchParams, setSearchParams] = useSearchParams(), location = useLocation()
  return <Component searchParams={searchParams} location={location} navigate={navigate} params={params} />
}//class component have props  above too
export function createRoute (routes) {
  return ( // createRoute(children)//{<Ele />}
    <>
      {routes.map((route, index) => {
        let { path, children } = route
        return (<Route key={index} path={path} element={<Element {...route} />} >
          {Array.isArray(children) ? createRoute(children) : null}
        </Route>)

      })}
    </>
  )
}

export function RouterView () {// Suspense for lazy
  return <Suspense fallback={<>is Loading...</>}>
    <Routes>
      {createRoute(routes)}
    </Routes>
  </Suspense>
}
export function withRouter (Component) {
  return function (props) {
    const navigate = useNavigate(), params = useParams(),
      [searchParams, setSearchParams] = useSearchParams(), location = useLocation()
    return <Component {...props} searchParams={searchParams} location={location} navigate={navigate} params={params} />
  }
}