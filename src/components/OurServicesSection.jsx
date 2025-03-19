import { Button } from "./ui/button";
import { Plane, Orbit, ArrowRight } from "lucide-react";

const services = [
	{
		id: 1,
		title: "Air Freight Services",
		description:
			"Professional oversight of planning, design, and construction from project inception to completion.",
		icon: Plane,
		link: "/services/construction-management",
	},
	{
		id: 2,
		title: "Drone Services",
		description:
			"Transform existing structures with our comprehensive renovation and remodeling services.",
		icon: Orbit,
		link: "/services/renovation",
	},
];

export default function OurServicesSection() {
	return (
		<section className="py-16 md:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Real Solution, Real Fast!
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Best Global Logistic Solutions
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
						>
							<div className="bg-primary/10 p-4 rounded-lg inline-block mb-6">
								<service.icon className="text-primary h-6 w-6" />
							</div>
							<h3 className="text-xl font-bold mb-3">{service.title}</h3>
							<p className="text-gray-600 mb-6">{service.description}</p>
							<Button variant={"link"} size={"lg"}>
								Learn More <ArrowRight size={16} className="ml-2" />
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
