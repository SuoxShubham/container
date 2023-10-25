import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const Externals = ({ children }) => 
{
    return (
        <Suspense 
            fallback="loading...."
        >
            <ErrorBoundary>
                { children }
            </ErrorBoundary>
        </Suspense>
    )
}