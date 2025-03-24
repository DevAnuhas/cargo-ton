import { useLocation, Link } from "react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center p-8">
				<h1 className="text-6xl font-bold mb-4 ">404</h1>
				<p className="text-xl mb-6">Oops! Page not found</p>
				<p className=" mb-8">
					The page you are looking for doesn't exist or has been moved.
				</p>
				<Link to="/">
					<Button>Return to Home</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
