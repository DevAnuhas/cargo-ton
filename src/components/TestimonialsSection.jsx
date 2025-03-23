import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

const testimonials = [
	{
		id: 1,
		name: "John Smith",
		role: "Supply Chain Manager",
		avatar: "john.jpg",
		content:
			"CargoTON transformed our shipping process with their reliable ocean freight service. Deliveries are always on time, and their team’s attention to detail is outstanding.",
		rating: 5,
	},
	{
		id: 2,
		name: "Sarah Johnson",
		role: "Logistics Director",
		avatar: "sarah.jpg",
		content:
			"I’ve partnered with many logistics firms, but CargoTON’s air freight service stands out. Their professionalism and speed made our urgent shipments a breeze.",
		rating: 5,
	},
	{
		id: 3,
		name: "Michael Brown",
		role: "Small Business Owner",
		avatar: "",
		content:
			"CargoTON’s land transport service exceeded my expectations. They kept me updated throughout, and my goods arrived in perfect condition—highly recommend them!",
		rating: 4,
	},
	{
		id: 4,
		name: "Emily Davis",
		role: "Operations Lead",
		avatar: "emily.jpg",
		content:
			"CargoTON’s warehousing solutions saved us time and hassle. Their secure storage and efficient handling kept our inventory in top shape.",
		rating: 5,
	},
	{
		id: 5,
		name: "David Lee",
		role: "Export Manager",
		avatar: "david.jpg",
		content:
			"With CargoTON, our global shipments are seamless. Their tech-driven tracking and support make them a trusted partner for our business.",
		rating: 4,
	},
];

const whyChooseUs = [
	{
		id: 1,
		title: "Skilled and Dedicated Team",
		description:
			"Our professional staff brings years of expertise to every project, ensuring precision and care in handling your logistics requirements.",
	},
	{
		id: 2,
		title: "Premium Resources from Reliable Partners",
		description:
			"We source top-quality equipment and materials from trusted suppliers to guarantee the safety and security of your shipments.",
	},
	{
		id: 3,
		title: "On-Time Delivery with Clear Pricing",
		description:
			"We prioritize punctuality and transparency, completing every job on schedule while offering straightforward, competitive pricing.",
	},
	{
		id: 4,
		title: "Your Satisfaction Drives Us",
		description:
			"At CargoTON, our mission is to exceed your expectations, making customer satisfaction the cornerstone of our service.",
	},
];

export default function TestimonialsSection() {
	const [api, setApi] = useState(null);
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const autoplayPlugin = Autoplay({
		delay: 3000,
		stopOnInteraction: true,
		stopOnMouseEnter: true,
		rootNode: (emblaRoot) => emblaRoot.parentElement,
	});

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	const scrollTo = useCallback((index) => api && api.scrollTo(index), [api]);

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-18 lg:gap-12">
					{/* Testimonials */}
					<div>
						<div className="mb-10">
							<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
								Testimonials
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">
								What Our <span className="text-accent">Clients Say</span>
							</h2>
						</div>
						<Carousel
							setApi={setApi}
							className="w-full"
							opts={{
								loop: true,
								align: "center",
							}}
							plugins={[autoplayPlugin]}
						>
							<CarouselContent>
								{testimonials.map((testimonial) => (
									<CarouselItem key={testimonial.id}>
										<div className="h-full bg-card rounded-xl p-6 md:p-8 shadow-sm border flex flex-col">
											<div className="mb-6 text-primary">
												<Quote className="h-8 w-8" />
											</div>
											<p className="text-lg mb-6 flex-grow">
												{testimonial.content}
											</p>
											<div className="flex justify-between items-center">
												<div className="flex justify-between items-center">
													<div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
														<img
															src={`./assets/${testimonial.avatar}`}
															alt={testimonial.name}
															className="object-cover"
															onError={(e) =>
																(e.target.src = "./assets/user.png")
															}
														/>
													</div>
													<div>
														<h3 className="font-medium text-foreground">
															{testimonial.name}
														</h3>
														<p className="text-sm text-muted-foreground">
															{testimonial.role}
														</p>
													</div>
												</div>

												<div className="flex justify-self-end space-x-1">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`h-4 w-4 ${
																i < testimonial.rating
																	? "text-yellow-400 fill-yellow-400"
																	: "text-gray-300"
															}`}
														/>
													))}
												</div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						<div className="flex justify-between items-center mt-4">
							{/* Navigation Arrows */}
							<div className="flex justify-center gap-4">
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									onClick={() => api?.scrollPrev()}
								>
									<ChevronLeft className="h-5 w-5" />
									<span className="sr-only">Previous slide</span>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									onClick={() => api?.scrollNext()}
								>
									<ChevronRight className="h-5 w-5" />
									<span className="sr-only">Next slide</span>
								</Button>
							</div>

							{/* Dot Pagination */}
							{count > 0 && (
								<div className="flex justify-center gap-2">
									{Array.from({ length: count }).map((_, index) => (
										<Button
											key={index}
											variant="ghost"
											size="sm"
											className={cn(
												"w-4 h-4 p-0 bg-background hover:bg-background dark:hover:bg-background border rounded-full",
												current === index
													? "border-2 border-primary pointer-events-none"
													: null
											)}
											onClick={() => scrollTo(index)}
										>
											<span className="sr-only">Go to slide {index + 1}</span>
										</Button>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Why Choose Us */}
					<div>
						<div className="mb-10">
							<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
								Why Choose Us
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">
								The Right Choice for Your{" "}
								<span className="text-accent">Logistic Needs</span>
							</h2>
						</div>

						<div className="space-y-2">
							<Accordion
								type="single"
								collapsible
								defaultValue="item-1"
								className="bg-muted px-8 border border-border"
							>
								{whyChooseUs.map((item) => (
									<AccordionItem key={item.id} value={`item-${item.id}`}>
										<AccordionTrigger className="text-md">
											{item.title}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground">
											{item.description}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
