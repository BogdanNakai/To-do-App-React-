import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading/Loading";

const Login = lazy(() => import("./Login"))
const Registration = lazy(() => import("./Registration"))
const ToDoList = lazy(() => import("./ToDoList"))
const NotFound = lazy(() => import("./NotFound"))
const ItemTask = lazy(() => import("../components/ItemTask/ItemTask"))

const AppComponents = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Registration to="/registration" replace />} />
				<Route path="/registration" element={<Registration/>} /> 
				<Route path="/login" element={<Login />} />
				<Route path="/todolist/:id" element={<ToDoList />} />
				<Route path="/todolist/:userId/task/:taskId" element={< ItemTask />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
};

export default AppComponents