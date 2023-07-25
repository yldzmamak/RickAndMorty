import React from "react";
import { useLocation } from "react-router-dom";

const usePath = () => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = React.useState<string>("");
	React.useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location]);
	return currentPath;
};

export default usePath;