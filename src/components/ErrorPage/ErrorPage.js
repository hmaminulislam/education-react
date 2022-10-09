import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError()
    return (
      <div className="h-screen">
        <Header></Header>
        <div className="flex justify-center items-center h-4/5">
          <div>
            <h1 className="text-5xl font-bold mb-8">Oops..!</h1>
            <p className="text-3xl text-red-600 mb-4">{error.status}</p>
            <p className="text-2xl text-red-600">{error.statusText}</p>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;