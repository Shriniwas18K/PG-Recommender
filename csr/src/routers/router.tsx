import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {privateRoutes}
      {publicRoutes}
    </>
  )
)