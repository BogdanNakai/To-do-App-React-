import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading/Loading";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const Login = lazy(() => import("./Login"))
const Registration = lazy(() => import("./Registration"))
const ToDoList = lazy(() => import("./ToDoList"))
const NotFound = lazy(() => import("./NotFound"))
const ItemTask = lazy(() => import("../components/ItemTask/ItemTask"))


const AppComponents = () => {
	const userId = localStorage.getItem("currentUserId");

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<ToDoList />} />
					<Route path="/todo/:taskId" element={<ItemTask />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
};

export default AppComponents