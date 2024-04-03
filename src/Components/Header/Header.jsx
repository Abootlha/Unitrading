import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader.jsx';
import LogoutHeader from './LogoutHeader.jsx';

function Header() {
    const location = useLocation();

    // Check if the user is on the /courses route
    const isCoursesRoute = location.pathname === '/courses';

    // Render the appropriate header based on authentication status and route
    return (
        <>
            {isCoursesRoute ? (
                // Render the authenticated header for the /courses route
                <Route path="/courses" element={<AuthenticatedHeader />} />
            ) : (
                // Render the logout header for other routes
                <LogoutHeader />
            )}
        </>
    );
}

export default Header;
