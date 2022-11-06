import React from 'react'
import AppRoutes from './routes.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './pages/error-fallback.jsx'

function App() {

    const myErrorHandler = (error, info) => {
    // Do something with the error
    // E.g. log to an error logging client here
      console.log({error, info})
  }

  
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
        onError={myErrorHandler}
      >
      <AppRoutes />
    </ErrorBoundary>

    </>
  )
}

export default App
