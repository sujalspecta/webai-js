import { lazy } from 'react';
const HomePage = lazy(() => import('@/app/(home)/page'));

//pages
const Index1 = lazy(() => import('@/app/pages/index-1/page'));
const Index2 = lazy(() => import('@/app/pages/index-2/page'));
const Index3 = lazy(() => import('@/app/pages/index-3/page'));
const Index4 = lazy(() => import('@/app/pages/index-4/page'));
const Index5 = lazy(() => import('@/app/pages/index-5/page'));

//auth pages
const Login = lazy(() => import('@/app/auth/login/page'));
const LoginWithQr = lazy(() => import('@/app/auth/qr-login/page'));
const LockScreen = lazy(() => import('@/app/auth/lock-screen/page'));
const Register = lazy(() => import('@/app/auth/register/page'));
const ForgotPassword = lazy(() => import('@/app/auth/forgot-pw/page'));
const Logout = lazy(() => import('@/app/auth/logout/page'));
const demoPages = [{
  path: '/',
  name: 'root',
  element: <HomePage />
}, {
  path: '/pages/index-1',
  name: 'Index 1',
  element: <Index1 />
}, {
  path: '/pages/index-2',
  name: 'Index 2',
  element: <Index2 />
}, {
  path: '/pages/index-3',
  name: 'Index 3',
  element: <Index3 />
}, {
  path: '/pages/index-4',
  name: 'Index 4',
  element: <Index4 />
}, {
  path: '/pages/index-5',
  name: 'Index 5',
  element: <Index5 />
}];
const AuthPages = [{
  path: '/auth/login',
  name: 'Login',
  element: <Login />
}, {
  path: '/auth/qr-login',
  name: 'Login with Qr',
  element: <LoginWithQr />
}, {
  path: '/auth/lock-screen',
  name: 'LockScreen',
  element: <LockScreen />
}, {
  path: '/auth/register',
  name: 'Register',
  element: <Register />
}, {
  path: '/auth/forgot-pw',
  name: 'ForgotPassword',
  element: <ForgotPassword />
}, {
  path: '/auth/logout',
  name: 'Logout',
  element: <Logout />
}];
export const appRoutes = [...demoPages, ...AuthPages];