import { Truck, Earth, Package, ThumbsUp } from "lucide-react";

const stats = [
	{
		id: 1,
		value: "8,000+",
		label: "Packages Delivered",
		icon: Truck,
	},
	{
		id: 2,
		value: "137",
		label: "Countries Covered",
		icon: Earth,
	},
	{
		id: 3,
		value: "700+",
		label: "Tons of Goods",
		icon: Package,
	},
	{
		id: 4,
		value: "100%",
		label: "Client Satisfaction",
		icon: ThumbsUp,
	},
];

export default function StatsSection() {
	return (
		<section className="py-12 bg-accent text-accent-foreground">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat) => (
						<div key={stat.id} className="text-center">
							<div className="inline-flex items-center justify-center bg-accent-foreground/10 p-4 rounded-full mb-4">
								<stat.icon className="h-8 w-8" />
							</div>
							<div className="text-4xl font-extrabold mb-2">{stat.value}</div>
							<div className="text-lg">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
