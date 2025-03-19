import { Building, Users, Award, CheckCircle } from "lucide-react";

const stats = [
	{
		id: 1,
		value: "500+",
		label: "Projects Completed",
		icon: Building,
	},
	{
		id: 2,
		value: "250+",
		label: "Happy Clients",
		icon: Users,
	},
	{
		id: 3,
		value: "25+",
		label: "Years of Experience",
		icon: Award,
	},
	{
		id: 4,
		value: "100%",
		label: "Client Satisfaction",
		icon: CheckCircle,
	},
];

export default function StatsSection() {
	return (
		<section className="py-16 bg-accent text-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat) => (
						<div key={stat.id} className="text-center">
							<div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-4">
								<stat.icon className="h-8 w-8" />
							</div>
							<div className="text-4xl font-bold mb-2">{stat.value}</div>
							<div className="text-lg">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
