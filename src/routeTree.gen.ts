/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as LoginImport } from './pages/login'
import { Route as AboutImport } from './pages/about'
import { Route as IndexImport } from './pages/index'
import { Route as SettingsTeamImport } from './pages/settings/team'
import { Route as SettingsGeneralImport } from './pages/settings/general'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsTeamRoute = SettingsTeamImport.update({
  id: '/settings/team',
  path: '/settings/team',
  getParentRoute: () => rootRoute,
} as any)

const SettingsGeneralRoute = SettingsGeneralImport.update({
  id: '/settings/general',
  path: '/settings/general',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/settings/general': {
      id: '/settings/general'
      path: '/settings/general'
      fullPath: '/settings/general'
      preLoaderRoute: typeof SettingsGeneralImport
      parentRoute: typeof rootRoute
    }
    '/settings/team': {
      id: '/settings/team'
      path: '/settings/team'
      fullPath: '/settings/team'
      preLoaderRoute: typeof SettingsTeamImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/settings/general': typeof SettingsGeneralRoute
  '/settings/team': typeof SettingsTeamRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/settings/general': typeof SettingsGeneralRoute
  '/settings/team': typeof SettingsTeamRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/settings/general': typeof SettingsGeneralRoute
  '/settings/team': typeof SettingsTeamRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/login' | '/settings/general' | '/settings/team'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/login' | '/settings/general' | '/settings/team'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/login'
    | '/settings/general'
    | '/settings/team'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  LoginRoute: typeof LoginRoute
  SettingsGeneralRoute: typeof SettingsGeneralRoute
  SettingsTeamRoute: typeof SettingsTeamRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  LoginRoute: LoginRoute,
  SettingsGeneralRoute: SettingsGeneralRoute,
  SettingsTeamRoute: SettingsTeamRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/login",
        "/settings/general",
        "/settings/team"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/settings/general": {
      "filePath": "settings/general.tsx"
    },
    "/settings/team": {
      "filePath": "settings/team.tsx"
    }
  }
}
ROUTE_MANIFEST_END */