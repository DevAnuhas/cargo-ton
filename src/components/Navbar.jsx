import { useState, useEffect, useLayoutEffect } from "react";
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
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
				{
					name: "How to Choose the Right Shipping Partner for Your Cargo",
					href: "/blog/choosing-shipping-partner",
				},
				{
					name: "The Future of Smart Logistics: Tech in Cargo Transport",
					href: "/blog/future-smart-logistics",
				},
				{
					name: "How Tech is Revolutionizing Cargo Tracking",
					href: "/blog/tech-cargo-tracking",
				},
			],
		},
	},
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = useTheme();

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isMenuOpen]);

	return (
		<header className="fixed z-50 top-0 w-full bg-background">
			{/* Main navbar */}
			<div
				className={`relative lg:max-w-screen-xl mx-auto px-4 py-12 h-12 flex gap-5 justify-between items-center transition-all md:transition-none duration-300 ${
					isMenuOpen ? "bg-popover" : "bg-background"
				}`}
			>
				<a href="/" className="min-w-36 max-w-36">
					<img
						src={
							theme === "dark"
								? "./assets/logo-dark-mode.png"
								: "./assets/logo-light-mode.png" || "/placeholder.svg"
						}
						alt="Company Logo"
					/>
				</a>

				{/* Desktop Navigation */}
				<div className="relative hidden lg:flex items-center gap-5">
					<NavigationMenu className="mx-auto">
						<span className="w-1 h-5 bg-accent -mr-1"></span>
						<NavigationMenuList className="tracking-[2px]">
							{navItems.map((item, index) => (
								<NavigationMenuItem key={index} className="relative">
									{!item.children && (
										<NavigationMenuLink
											className="font-medium h-9 px-3"
											href={item.href}
										>
											{item.name}
										</NavigationMenuLink>
									)}
									{item.children && (
										<>
											<NavigationMenuTrigger>
												<NavigationMenuLink
													href={item.href}
													className="font-medium h-9 p-0"
												>
													{item.name}
												</NavigationMenuLink>
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="grid min-w-[200px] gap-2">
													{item.children.items.map((child, index) => (
														<li key={index}>
															<NavigationMenuLink
																href={child.href}
																className="font-medium"
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
					className={`lg:hidden relative p-2 text-foreground transition-transform duration-300 ease-in-out transform ${
						isMenuOpen ? "rotate-90" : "rotate-0"
					}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed -z-1 overflow-y-auto overflow-x-hidden h-full p-8 mb-8 inset-0 bg-popover transition-all duration-300 ease-in-out ${
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-50 -translate-y-[100%] pointer-events-none"
				}`}
			>
				<nav className="flex flex-col pt-18 text-md font-medium tracking-[2px] transition-all duration-300 ease-in-out">
					<Accordion type="single" collapsible>
						{navItems.map((item, index) => (
							<AccordionItem
								key={index}
								value={item.name}
								className="py-4 transition-all duration-300 ease"
								style={{
									transitionDelay: `${index * 100}ms`,
									transform: isMenuOpen ? "translateX(0)" : "translateX(50px)",
									opacity: isMenuOpen ? 1 : 0,
								}}
							>
								{item.children ? (
									<>
										<AccordionTrigger className="justify-between text-md py-0">
											<div className="flex items-center">
												{(item.href && <a href={item.href}>{item.name}</a>) ||
													item.name}
											</div>
										</AccordionTrigger>
										<AccordionContent>
											<div className="ml-7 mt-4 flex flex-col space-y-2 text-lg">
												{item.children?.items.map((child, childIndex) => (
													<a
														key={childIndex}
														href={child.href || "/"}
														className="text-md font-medium text-accent tracking-[0.5px] py-1.5"
													>
														{child.name}
													</a>
												))}
											</div>
										</AccordionContent>
									</>
								) : (
									<a key={index} href={item.href}>
										{item.name}
									</a>
								)}
							</AccordionItem>
						))}
					</Accordion>
				</nav>

				<div
					className="grid grid-cols-2 gap-5 mt-8 transition-all duration-300 ease"
					style={{
						transitionDelay: `${navItems.length * 100}ms`,
						transform: isMenuOpen ? "translateX(0)" : "translateX(50px)",
						opacity: isMenuOpen ? 1 : 0,
					}}
				>
					<Button size={"lg"}>GET A QUOTE</Button>
					<Button variant={"secondary"} size={"lg"}>
						SIGN IN
					</Button>
				</div>
			</div>
		</header>
	);
}
