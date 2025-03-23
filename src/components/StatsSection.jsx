import { useTheme } from "@/components/ui/theme-provider";
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
	const { theme } = useTheme();
	return (
		<section className="py-12 bg-muted text-muted-foreground">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-16">
					{stats.map((stat) => (
						<div key={stat.id} className="relative text-center mx-auto">
							<div
								className="relative overflow-hidden flex flex-col items-center justify-center p-4 h-32 w-32 lg:h-48 lg:w-48 rounded-full mb-6 bg-muted"
								style={{
									boxShadow: `20px 20px 60px ${
										theme === "dark" ? "#161616" : "#cecece"
									}, -20px -20px 60px ${
										theme === "dark" ? "#1e1e1e" : "#ffffff"
									}`,
								}}
							>
								<div className="text-2xl lg:text-4xl font-extrabold lg:mb-2 text-accent">
									{stat.value}
								</div>
								<div className="text-sm lg:text-lg">{stat.label}</div>
								<stat.icon className="absolute h-[70%] w-[70%] opacity-10 mx-auto" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
