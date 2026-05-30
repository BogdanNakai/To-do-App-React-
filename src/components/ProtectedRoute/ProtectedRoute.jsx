import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {

	const currentUser = useSelector(state => state.users.currentUser);;

	if (!currentUser) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />
};

export default ProtectedRoute