// third party
import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRotes from './AuthenticationRoutes';
// import ErrorRoutes from './ErrorRoutes';
import { AdminRoutes, StaffRoutes } from './MainRoutes';

export default function ThemeRoutes() {
    return useRoutes([AuthenticationRotes, AdminRoutes, StaffRoutes]);
    // return useRoutes([AuthenticationRotes, ErrorRoutes, SuperAdminRoutes, AdminRoutes]);
}
