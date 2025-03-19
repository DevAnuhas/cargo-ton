import { Calendar, User, ArrowRight } from "lucide-react";

const newsItems = [
	{
		id: 1,
		title: "Innovative Construction Techniques for Sustainable Buildings",
		excerpt:
			"Discover the latest innovations in sustainable construction that are revolutionizing the industry.",
		image: "/assets/news.jpg",
		date: "March 15, 2023",
		author: "John Smith",
		category: "Innovation",
		slug: "innovative-construction-techniques",
	},
	{
		id: 2,
		title: "How to Choose the Right Materials for Your Construction Project",
		excerpt:
			"A comprehensive guide to selecting the best materials for different types of construction projects.",
		image: "/assets/news.jpg",
		date: "February 28, 2023",
		author: "Sarah Johnson",
		category: "Tips & Advice",
		slug: "choosing-right-materials",
	},
	{
		id: 3,
		title: "The Future of Smart Buildings: Technology in Construction",
		excerpt:
			"Exploring how smart technology is transforming modern buildings and construction practices.",
		image: "/assets/news.jpg",
		date: "January 10, 2023",
		author: "Michael Brown",
		category: "Technology",
		slug: "future-smart-buildings",
	},
	{
		id: 4,
		title: "The Future of Smart Buildings: Technology in Construction",
		excerpt:
			"Exploring how smart technology is transforming modern buildings and construction practices.",
		image: "/assets/news.jpg",
		date: "January 10, 2023",
		author: "Michael Brown",
		category: "Technology",
		slug: "future-smart-buildings",
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
						Stay Updated with Our News
					</h2>
					<p className="text-gray-600">
						Keep up with the latest trends, insights, and updates from the
						construction industry and our company's latest projects and
						achievements.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{newsItems.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
						>
							<a
								href={`/news/${item.slug}`}
								className="block relative h-48 overflow-hidden"
							>
								<img
									src={item.image || "/placeholder.svg"}
									alt={item.title}
									className="object-cover transition-transform hover:scale-105 duration-300"
								/>
								<div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
									{item.category}
								</div>
							</a>

							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3">
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

								<p className="text-gray-600 mb-4">{item.excerpt}</p>

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
					<a
						href="/news"
						className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-md transition-colors inline-block"
					>
						View All News
					</a>
				</div>
			</div>
		</section>
	);
}
