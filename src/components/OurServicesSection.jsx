import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const services = [
	{
		id: 1,
		title: "Ocean Freight Solutions",
		description:
			"Reliable and cost-effective ocean shipping for your cargo, ensuring timely delivery across global routes.",
		image: "ocean_freight.jpg",
		link: "/services/ocean-freight",
	},
	{
		id: 2,
		title: "Air Freight Services",
		description:
			"Fast and secure air transport for urgent shipments, connecting you to destinations worldwide.",
		image: "air_freight.jpg",
		link: "/services/air-freight",
	},
	{
		id: 3,
		title: "Land Transport Logistics",
		description:
			"Efficient road transport solutions to move your cargo safely across regions with precision.",
		image: "land_transport.jpg",
		link: "/services/land-transport",
	},
	{
		id: 4,
		title: "Warehousing & Storage",
		description:
			"Flexible and secure storage options to manage your cargo inventory with ease and reliability.",
		image: "warehousing.jpg",
		link: "/services/warehousing",
	},
];

export default function OurServicesSection() {
	return (
		<section className="py-16 md:py-24 bg-muted">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Real Solution, Real Fast!
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Best Global <span className="text-accent">Logistic Solutions</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-background flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-border"
						>
							<div className="flex-1 overflow-hidden flex items-center justify-center">
								<img
									src={`./assets/${service.image}`}
									alt={service.title}
									className="object-cover aspect-square transition-transform hover:scale-105 duration-300"
									onError={(e) => (e.target.src = "./assets/placeholder.svg")}
								/>
							</div>
							<div className="p-8 flex-1">
								<h3 className="text-xl font-bold mb-3">{service.title}</h3>
								<p className="text-muted-foreground mb-6">
									{service.description}
								</p>
								<Button variant={"link"}>
									Learn More <ArrowRight size={16} />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
