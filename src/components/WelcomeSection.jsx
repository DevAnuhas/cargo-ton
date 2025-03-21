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
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center mb-16">
					<div className="relative h-full w-full">
						<div className="absolute top-15 right-10 h-[250px] md:h-[400px] overflow-hidden shadow-lg">
							<img
								src="./assets/company_1.jpg"
								alt="About our company"
								className="object-cover w-full h-full  aspect-square"
							/>
						</div>
						<div className="absolute bottom-0 left-0 h-[250px] md:h-[400px] overflow-hidden shadow-lg">
							<img
								src="./assets/company_2.jpg"
								alt="About our company"
								className="object-cover w-full h-full aspect-[3/4]"
							/>
						</div>
						<div
							className="absolute bottom-10 -right-6 bg-primary text-accent-foreground p-6 pl-[8%]"
							style={{
								clipPath:
									"polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%, 12% 18%, 0% 0%)",
							}}
						>
							<div className="text-center">
								<p className="text-3xl font-medium">15,350+</p>
								<p className="text-sm mt-1">Clients Worldwide</p>
							</div>
						</div>
					</div>

					<div>
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
