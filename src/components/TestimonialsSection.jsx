import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
	{
		id: 1,
		name: "John Smith",
		position: "CEO, ABC Corporation",
		image: "",
		content:
			"Working with this construction company was a fantastic experience. Their attention to detail and commitment to quality is unmatched. The project was completed on time and within budget.",
		rating: 5,
	},
	{
		id: 2,
		name: "Sarah Johnson",
		position: "Property Developer",
		image: "user.png",
		content:
			"I've worked with many construction firms over the years, but none have impressed me as much as this team. Their professionalism and expertise made our complex project seem effortless.",
		rating: 5,
	},
	{
		id: 3,
		name: "Michael Brown",
		position: "Homeowner",
		image: "user.png",
		content:
			"The renovation of our home exceeded all expectations. The team was courteous, skilled, and kept us informed throughout the entire process. I highly recommend their services.",
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
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1
		);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1
		);
	};

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

						<div className="relative bg-muted rounded-lg shadow-md p-8 border min-h-[320px]">
							{testimonials.map((testimonial, index) => (
								<div
									key={testimonial.id}
									className={`transition-opacity duration-500 ${
										index === currentTestimonial
											? "opacity-100"
											: "opacity-0 absolute inset-0 pointer-events-none"
									}`}
								>
									<div className="flex items-center mb-6">
										<div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
											<img
												src={`./assets/${testimonial.image}`}
												alt={testimonial.name}
												className="object-cover"
												onError={(e) => (e.target.src = "./assets/user.png")}
											/>
										</div>
										<div>
											<h4 className="font-bold text-lg">{testimonial.name}</h4>
											<p className="text-muted-foreground text-sm">
												{testimonial.position}
											</p>
										</div>
									</div>

									<div className="flex mb-4 space-x-1">
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

									<p className="text-muted-foreground italic mb-6">
										"{testimonial.content}"
									</p>
								</div>
							))}

							<div className="flex justify-between mt-6">
								<button
									onClick={prevTestimonial}
									className="p-2 rounded-full border hover:bg-background transition-colors"
									aria-label="Previous testimonial"
								>
									<ChevronLeft size={20} />
								</button>
								<div className="flex space-x-2">
									{testimonials.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentTestimonial(index)}
											className={`w-3 h-3 rounded-full transition-colors ${
												index === currentTestimonial
													? "bg-primary"
													: "bg-background"
											}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>
								<button
									onClick={nextTestimonial}
									className="p-2 rounded-full border hover:bg-background transition-colors"
									aria-label="Next testimonial"
								>
									<ChevronRight size={20} />
								</button>
							</div>
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
							{whyChooseUs.map((item) => (
								<Accordion
									type="single"
									key={item.id}
									collapsible
									className="w-full bg-muted px-8 border border-border"
								>
									<AccordionItem value={`item-${item.id}`}>
										<AccordionTrigger className="text-md">
											{item.title}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground">
											{item.description}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
