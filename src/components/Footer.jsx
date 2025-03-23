import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Facebook,
	Twitter,
	Instagram,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
	return (
		<footer className="bg-neutral-950 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="flex flex-col gap-4">
						<a href="/" className="flex gap-2 items-center">
							<img
								src="./assets/logo-dark-mode.png"
								alt="CargoTON Logo"
								className="h-12 w-auto"
							/>
						</a>
						<p className="text-gra mb-6">
							CargoTON is your trusted logistics partner, delivering efficient
							and reliable solutions worldwide since 2010. We move your world.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com/cargoton"
								className="bg-neutral-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Facebook size={18} />
							</a>
							<a
								href="https://twitter.com/cargoton"
								className="bg-neutral-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Twitter size={18} />
							</a>
							<a
								href="https://instagram.com/cargoton"
								className="bg-neutral-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Instagram size={18} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-6">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/about"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> About Us
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Logistics Services
								</a>
							</li>
							<li>
								<a
									href="/tracking"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Track Your Cargo
								</a>
							</li>
							<li>
								<a
									href="/news"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Industry Updates
								</a>
							</li>
							<li>
								<a
									href="/careers"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Join Our Team
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-muted-foreground hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Get in Touch
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-6">Contact Us</h3>
						<ul className="space-y-4">
							<li className="flex">
								<MapPin className="text-primary mr-3 flex-shrink-0 mt-1" />
								<span className="text-muted-foreground">
									456 Logistics Hub, Transport City, USA 54321
								</span>
							</li>
							<li className="flex">
								<Phone className="text-primary mr-3 flex-shrink-0" />
								<a
									href="tel:+18005551234"
									className="text-muted-foreground hover:text-white transition-colors"
								>
									+1 800 555 1234
								</a>
							</li>
							<li className="flex">
								<Mail className="text-primary mr-3 flex-shrink-0" />
								<a
									href="mailto:support@cargoton.com"
									className="text-muted-foreground hover:text-white transition-colors"
								>
									support@cargoton.com
								</a>
							</li>
							<li className="flex">
								<Clock className="text-primary mr-3 flex-shrink-0" />
								<span className="text-muted-foreground">
									Mon - Sat: 8:00 AM - 6:00 PM
								</span>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-xl font-bold mb-6">Stay Updated</h3>
						<p className="text-muted-foreground mb-4">
							Join our newsletter for the latest logistics insights and offers.
						</p>
						<form className="mb-4">
							<div className="flex flex-col space-y-3">
								<input
									type="email"
									placeholder="Enter Your Email"
									className="bg-neutral-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									required
								/>
								<Button size={"lg"}>SUBSCRIBE TODAY</Button>
							</div>
						</form>
						<p className="text-muted-foreground text-sm">
							We respect your privacy. Unsubscribe anytime.
						</p>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-border-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-muted-foreground text-center md:text-left mb-4 md:mb-0">
							© {new Date().getFullYear()} CargoTON. All Rights Reserved.
						</p>
						<div className="flex space-x-6">
							<a
								href="/privacy-policy"
								className="text-muted-foreground hover:text-white transition-colors text-sm"
							>
								Privacy Policy
							</a>
							<a
								href="/terms-of-service"
								className="text-muted-foreground hover:text-white transition-colors text-sm"
							>
								Terms & Conditions
							</a>
							<a
								href="/sitemap"
								className="text-muted-foreground hover:text-white transition-colors text-sm"
							>
								Sitemap
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
