import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => { 

	const userId = localStorage.getItem('currentUserId');

	if (!userId) { 
		return <Navigate to="/login" replace />;
	}

	return <Outlet />
};

export default ProtectedRoute