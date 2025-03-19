import { Check } from "lucide-react";
import { Button } from "./ui/button";

export default function WelcomeSection() {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
							<img
								src="./assets/company.jpg"
								alt="About our company"
								className="object-cover aspect-[4/3]"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
							<div className="text-center">
								<p className="text-4xl font-bold">25+</p>
								<p className="text-sm mt-1">Years of Experience</p>
							</div>
						</div>
					</div>

					<div>
						<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
							Welcome to Our Company
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							TransMax Logistics
							<br /> Around
							<span className="text-accent"> the World</span>
						</h2>
						<p className="text-gray-600 mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className="space-y-3 mb-8">
							<div className="flex items-start">
								<Check className="text-primary mr-2 mt-1 flex-shrink-0" />
								<p className="text-gray-600">
									Professional and experienced team members
								</p>
							</div>
							<div className="flex items-start">
								<Check className="text-primary mr-2 mt-1 flex-shrink-0" />
								<p className="text-gray-600">
									We use quality materials from trusted suppliers
								</p>
							</div>
							<div className="flex items-start">
								<Check className="text-primary mr-2 mt-1 flex-shrink-0" />
								<p className="text-gray-600">
									Timely project completion and transparent pricing
								</p>
							</div>
							<div className="flex items-start">
								<Check className="text-primary mr-2 mt-1 flex-shrink-0" />
								<p className="text-gray-600">
									Customer satisfaction is our top priority
								</p>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button variant={"outline"} size={"lg"}>
								MORE ABOUT US
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
