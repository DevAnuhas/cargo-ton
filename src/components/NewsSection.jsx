import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsItems = [
	{
		id: 1,
		title: "Optimizing Cargo Logistics with Sustainable Practices",
		excerpt:
			"Learn how CargoTON is pioneering eco-friendly logistics solutions to reduce carbon footprints in shipping.",
		image: "news_1.jpg",
		date: "March 10, 2025",
		author: "John Smith",
		category: "Innovation",
		slug: "sustainable-cargo-logistics",
	},
	{
		id: 2,
		title: "How to Choose the Right Shipping Partner for Your Cargo",
		excerpt:
			"A quick guide to selecting a logistics provider that ensures timely and secure cargo delivery.",
		image: "news_2.jpg",
		date: "February 25, 2025",
		author: "Sarah Johnson",
		category: "Tips & Advice",
		slug: "choosing-shipping-partner",
	},
	{
		id: 3,
		title: "The Future of Smart Logistics: Tech in Cargo Transport",
		excerpt:
			"Discover how CargoTON uses cutting-edge technology to transform cargo tracking and delivery.",
		image: "news_3.jpg",
		date: "January 15, 2025",
		author: "Michael Brown",
		category: "Technology",
		slug: "future-smart-logistics",
	},
	{
		id: 4,
		title: "How Tech is Revolutionizing Cargo Tracking",
		excerpt:
			"Explore CargoTON’s use of real-time tech to keep your cargo secure and on track.",
		image: "news_4.jpg",
		date: "February 20, 2025",
		author: "Michael Brown",
		category: "Technology",
		slug: "tech-cargo-tracking",
	},
];

export default function NewsSection() {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Latest News
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Stay Updated with <span className="text-accent">Our News</span>
					</h2>
					<p className="text-muted-foreground">
						Keep up with the latest trends, insights, and updates from the
						logistics industry and our company's latest projects and
						achievements.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{newsItems.map((item) => (
						<div
							key={item.id}
							className="bg-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-Package"
						>
							<a
								href={`/news/${item.slug}`}
								className="relative h-48 sm:h-64 md:h-48 lg:h-72 overflow-hidden flex items-center justify-center"
							>
								<img
									src={`./assets/${item.image}`}
									alt={item.title}
									className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
									onError={(e) => (e.target.src = "./assets/placeholder.svg")}
								/>
								<div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
									{item.category}
								</div>
							</a>

							<div className="p-6">
								<div className="flex items-center text-sm text-muted-foreground mb-2">
									<div className="flex items-center mr-4">
										<Calendar size={14} className="mr-1" />
										{item.date}
									</div>
									<div className="flex items-center">
										<User size={14} className="mr-1" />
										{item.author}
									</div>
								</div>

								<h3 className="text-xl font-bold mb-3">
									<a
										href={`/news/${item.slug}`}
										className="hover:text-primary transition-colors"
									>
										{item.title}
									</a>
								</h3>

								<p className="text-muted-foreground mb-4">{item.excerpt}</p>

								<a
									href={`/news/${item.slug}`}
									className="inline-flex items-center text-primary font-medium hover:underline"
								>
									Read More <ArrowRight size={16} className="ml-2" />
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Button size={"lg"}>VIEW ALL NEWS</Button>
				</div>
			</div>
		</section>
	);
}
