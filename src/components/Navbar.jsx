import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="w-full bg-white">
			{/* Main navbar */}
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<a href="/" className="flex gap-2 items-center">
						<img
							src="./assets/logo.png"
							alt="Company Logo"
							width={180}
							height={60}
							className="h-12 w-auto"
						/>
						<div className="text-2xl font-bold">CargoTON</div>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<div className="relative group">
							<button className="flex items-center font-bold text-gray-500 hover:text-primary">
								<div className="w-1 h-6 bg-accent mr-2"></div>
								HOME <ChevronDown size={16} className="ml-1" />
							</button>
							<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
								<div className="py-2">
									<a
										href="/services/service1"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 1
									</a>
									<a
										href="/services/service2"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 2
									</a>
									<a
										href="/services/service3"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 3
									</a>
								</div>
							</div>
						</div>
						<div className="relative group">
							<button className="flex items-center font-bold text-gray-700 hover:text-primary">
								PAGES <ChevronDown size={16} className="ml-1" />
							</button>
							<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
								<div className="py-2">
									<a
										href="/services/service1"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 1
									</a>
									<a
										href="/services/service2"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 2
									</a>
									<a
										href="/services/service3"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 3
									</a>
								</div>
							</div>
						</div>
						<a
							href="/projects"
							className="font-bold text-gray-700 hover:text-primary"
						>
							TRACKING
						</a>

						<div className="relative group">
							<button className="flex items-center font-bold text-gray-700 hover:text-primary">
								SERVICES <ChevronDown size={16} className="ml-1" />
							</button>
							<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
								<div className="py-2">
									<a
										href="/services/service1"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 1
									</a>
									<a
										href="/services/service2"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 2
									</a>
									<a
										href="/services/service3"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 3
									</a>
								</div>
							</div>
						</div>

						<div className="relative group">
							<button className="flex items-center font-bold text-gray-700 hover:text-primary">
								BLOG <ChevronDown size={16} className="ml-1" />
							</button>
							<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
								<div className="py-2">
									<a
										href="/services/service1"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 1
									</a>
									<a
										href="/services/service2"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 2
									</a>
									<a
										href="/services/service3"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										Service 3
									</a>
								</div>
							</div>
						</div>
						<div className="flex gap-4">
							<Button size={"lg"}>GET A QUOTE</Button>
							<Button variant={"secondary"} size={"lg"}>
								SIGN IN
							</Button>
						</div>
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-gray-700"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{/* {isMenuOpen && (
				<div className="md:hidden bg-white border-t">
					<div className="container mx-auto px-4 py-3">
						<nav className="flex flex-col space-y-4">
							<a
								href="/"
								className="font-medium text-primary py-2 border-b border-gray-100"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</a>
							<a
								href="/about"
								className="font-medium text-gray-700 py-2 border-b border-gray-100"
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</a>
							<div className="py-2 border-b border-gray-100">
								<button className="flex items-center font-medium text-gray-700 w-full justify-between">
									Services <ChevronDown size={16} />
								</button>
								<div className="mt-2 pl-4">
									<a
										href="/services/service1"
										className="block py-2 text-sm text-gray-700"
										onClick={() => setIsMenuOpen(false)}
									>
										Service 1
									</a>
									<a
										href="/services/service2"
										className="block py-2 text-sm text-gray-700"
										onClick={() => setIsMenuOpen(false)}
									>
										Service 2
									</a>
									<a
										href="/services/service3"
										className="block py-2 text-sm text-gray-700"
										onClick={() => setIsMenuOpen(false)}
									>
										Service 3
									</a>
								</div>
							</div>
							<a
								href="/projects"
								className="font-medium text-gray-700 py-2 border-b border-gray-100"
								onClick={() => setIsMenuOpen(false)}
							>
								Projects
							</a>
							<a
								href="/news"
								className="font-medium text-gray-700 py-2 border-b border-gray-100"
								onClick={() => setIsMenuOpen(false)}
							>
								News
							</a>
							<a
								href="/contact"
								className="font-medium text-gray-700 py-2 border-b border-gray-100"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</a>
							<a
								href="/get-quote"
								className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-center"
								onClick={() => setIsMenuOpen(false)}
							>
								Get a Quote
							</a>
						</nav>
					</div>
				</div>
			)} */}
		</header>
	);
}
