import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useTheme } from "@/components/ui/theme-provider";

const navItems = [
	{ name: "HOME", href: "/" },
	{
		name: "PAGES",
		children: {
			items: [
				{ name: "About", href: "/about" },
				{ name: "Projects", href: "/projects" },
				{ name: "News", href: "/news" },
				{ name: "Careers", href: "/careers" },
				{ name: "Contact", href: "/contact" },
			],
		},
	},
	{ name: "TRACKING", href: "/tracking" },
	{
		name: "SERVICES",
		href: "/services",
		children: {
			items: [
				{
					name: "Air Freight Services",
					href: "/services/freight-services",
				},
				{ name: "Drone Services", href: "/services/drone-services" },
			],
		},
	},
	{
		name: "BLOG",
		href: "/blog",
		children: {
			items: [
				{ name: "Blog 1", href: "/blog/blog-post-1" },
				{ name: "Blog 2", href: "/blog/blog-post-2" },
				{ name: "Blog 3", href: "/blog/blog-post-3" },
			],
		},
	},
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = useTheme();

	return (
		<header className="w-full bg-background">
			{/* Main navbar */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex justify-between items-center">
					<a href="/" className="flex gap-2 items-center">
						<img
							src={
								theme === "dark"
									? "./assets/logo-dark-mode.png"
									: "./assets/logo-light-mode.png"
							}
							alt="Company Logo"
							className="h-12 w-auto"
						/>
					</a>

					{/* Desktop Navigation */}
					<div className="relative flex items-center gap-5">
						<NavigationMenu className="max-w-screen-xl mx-auto">
							<span className="w-1 h-5 bg-accent -mr-1"></span>
							<NavigationMenuList className=" tracking-[2px]">
								{navItems.map((item) => (
									<NavigationMenuItem key={item.name} className="relative">
										{!item.children && (
											<NavigationMenuLink
												className="text-md font-medium h-9 px-4"
												href={item.href}
											>
												{item.name}
											</NavigationMenuLink>
										)}
										{item.children && (
											<>
												<NavigationMenuTrigger className="text-md font-bold">
													<NavigationMenuLink
														href={item.href}
														className="text-md font-medium h-9 p-0"
													>
														{item.name}
													</NavigationMenuLink>
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className="grid min-w-[200px] gap-2">
														{item.children.items.map((child) => (
															<li key={child.name}>
																<NavigationMenuLink
																	href={child.href}
																	className="text-md font-medium"
																>
																	{child.name}
																</NavigationMenuLink>
															</li>
														))}
													</ul>
												</NavigationMenuContent>
											</>
										)}
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
						<ModeToggle />
						<div className="flex gap-5 items-center">
							<Button size={"lg"}>GET A QUOTE</Button>
							<Button variant={"secondary"} size={"lg"}>
								SIGN IN
							</Button>
						</div>
					</div>

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
