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

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="flex flex-col gap-4">
						<a href="/" className="flex gap-2 items-center">
							<img
								src="./assets/logo.png"
								alt="Company Logo"
								width={180}
								height={60}
								className="h-12 w-auto"
							/>
							<div className="text-white text-2xl font-bold">CargoTON</div>
						</a>
						<p className="text-gray-400 mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
							modi similique, mollitia corporis incidunt quo vero consequuntur
							at quisquam! Animi.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Facebook size={18} />
							</a>
							<a
								href="#"
								className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Twitter size={18} />
							</a>
							<a
								href="#"
								className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
							>
								<Instagram size={18} />
							</a>
						</div>
					</div>

					{/* Quick as */}
					<div>
						<h3 className="text-xl font-bold mb-6">Quick as</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/about"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> About Us
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Our Services
								</a>
							</li>
							<li>
								<a
									href="/projects"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Projects
								</a>
							</li>
							<li>
								<a
									href="/news"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Latest News
								</a>
							</li>
							<li>
								<a
									href="/careers"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Careers
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-gray-400 hover:text-white transition-colors flex items-center"
								>
									<ArrowRight size={14} className="mr-2" /> Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-6">Contact Info</h3>
						<ul className="space-y-4">
							<li className="flex">
								<MapPin className="text-primary mr-3 flex-shrink-0 mt-1" />
								<span className="text-gray-400">
									123 Construction Street, Building City, Country 12345
								</span>
							</li>
							<li className="flex">
								<Phone className="text-primary mr-3 flex-shrink-0" />
								<a
									href="tel:+1234567890"
									className="text-gray-400 hover:text-white transition-colors"
								>
									+1 234 567 890
								</a>
							</li>
							<li className="flex">
								<Mail className="text-primary mr-3 flex-shrink-0" />
								<a
									href="mailto:info@company.com"
									className="text-gray-400 hover:text-white transition-colors"
								>
									info@company.com
								</a>
							</li>
							<li className="flex">
								<Clock className="text-primary mr-3 flex-shrink-0" />
								<span className="text-gray-400">
									Monday - Friday: 9:00 AM - 5:00 PM
								</span>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-xl font-bold mb-6">Newsletter</h3>
						<p className="text-gray-400 mb-4">
							Subscribe to our newsletter to receive the latest updates and
							news.
						</p>
						<form className="mb-4">
							<div className="flex flex-col space-y-3">
								<input
									type="email"
									placeholder="Your Email Address"
									className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									required
								/>
								<button
									type="submit"
									className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-3 rounded-md transition-colors"
								>
									Subscribe Now
								</button>
							</div>
						</form>
						<p className="text-gray-500 text-sm">
							By subscribing, you agree to our Privacy Policy and consent to
							receive updates from our company.
						</p>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
							© {new Date().getFullYear()} Your Company Name. All Rights
							Reserved.
						</p>
						<div className="flex space-x-6">
							<a
								href="/privacy-policy"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Privacy Policy
							</a>
							<a
								href="/terms-of-service"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Terms of Service
							</a>
							<a
								href="/sitemap"
								className="text-gray-400 hover:text-white transition-colors text-sm"
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
