import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const ourCompany = [
	{
		id: 1,
		title: "Who We Are",
		description:
			"CargoTON is a top logistics provider with years of experience, delivering innovative solutions worldwide.",
	},
	{
		id: 2,
		title: "Our Mission",
		description:
			"We simplify logistics with reliable, efficient services to get your cargo there safely and on time.",
	},
	{
		id: 3,
		title: "What Sets Us Apart",
		description:
			"Our skilled team, quality tech, and customer focus make CargoTON a standout logistics partner.",
	},
];

export default function WelcomeSection() {
	return (
		<section className="py-24 md:py-32">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 ">
					<div className="relative sm:max-w-full p-8 md:p-12 mx-auto flex justify-end order-1 lg:order-0">
						<div className="relative z-10 lg:mt-24">
							<img
								src="./assets/company_1.jpg"
								alt="Warehouse"
								className="object-cover aspect-square h-[270px] sm:h-[320px] md:h-[420px] translate-x-10 sm:translate-x-0"
							/>
						</div>
						<div className="absolute left-0 bottom-0 z-20 transform -translate-x-2 sm:-translate-x-1/4 translate-y-4">
							<img
								src="./assets/company_2.jpg"
								alt="Workers"
								className="object-cover aspect-[3/4] h-[250px] sm:h-[270px] md:h-[350px]"
							/>
						</div>
						<div
							className="absolute bottom-0 right-0 z-30 bg-accent text-accent-foreground p-6 transform translate-x-0  sm:translate-x-1/4 translate-y-0 scale-80 md:scale-100"
							style={{
								clipPath:
									"polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%, 12% 18%, 0% 0%)",
								width: "220px",
								height: "120px",
							}}
						>
							<div className="flex flex-col ml-6 items-center justify-center h-full">
								<h3 className="text-3xl font-normal tracking-tight">
									15,350 +
								</h3>
								<p className="text-sm font-medium">Clients Worldwide</p>
							</div>
						</div>
					</div>

					<div className="sm:min-w-lg">
						<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
							Welcome to Our Company
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							We Are The{" "}
							<span className="text-accent">Leader In Logistics</span>
						</h2>
						<p className="mb-6">
							At CargoTON, we excel in delivering seamless logistics solutions
							tailored to your needs. With a commitment to efficiency and
							reliability, we ensure your cargo moves smoothly from origin to
							destination, every time.
						</p>

						<div className="space-y-6 mb-8">
							{ourCompany.map((item) => (
								<div key={item.id} className="flex">
									<div className="mr-4 mt-1">
										<CheckCircle className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h4 className="font-bold text-lg mb-1">{item.title}</h4>
										<p className="text-muted-foreground">{item.description}</p>
									</div>
								</div>
							))}
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
