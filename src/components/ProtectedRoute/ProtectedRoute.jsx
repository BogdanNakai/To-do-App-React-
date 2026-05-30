import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {

	const userId = localStorage.getItem('currentUser');

	if (!userId) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />
};

export default ProtectedRoute