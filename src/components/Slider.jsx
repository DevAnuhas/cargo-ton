import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

const sliderData = [
	{
		id: 1,
		titlePrimary: "Best Shipping",
		titleSecondary: "Partner",
		subtitle: "LOGISTIC",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cupiditate laboriosam corporis nemo molestias sequi.",
		buttonText: "DISCOVER MORE",
		image: "slider_img_1.jpg",
	},
	{
		id: 2,
		titlePrimary: "Global Logistics",
		titleSecondary: "Solutions",
		subtitle: "SHIPPING",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cupiditate laboriosam corporis nemo molestias sequi.",
		buttonText: "LEARN MORE",
		image: "slider_img_2.jpg",
	},
	{
		id: 3,
		titlePrimary: "Fast & Secure",
		titleSecondary: "Delivery",
		subtitle: "TRANSPORT",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cupiditate laboriosam corporis nemo molestias sequi.",
		buttonText: "GET STARTED",
		image: "slider_img_3.jpg",
	},
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div className="relative h-[80vh] w-full overflow-hidden">
			<div className="relative mx-auto h-full">
				{sliderData.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide
								? "opacity-100"
								: "opacity-0 pointer-events-none"
						}`}
					>
						<div className="h-full">
							<div className="h-full w-full flex align items-center">
								<div className=" flex justify-center">
									<div className="relative w-[600px] z-20">
										<div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 mx-auto py-8 md:px-6 lg:px-8 w-full bg-white">
											<div className="flex align-middle gap-3 px-3 py-1 mb-4">
												<div className="w-1 h-6 bg-accent"></div>
												<span className="font-medium tracking-widest">
													{slide.subtitle}
												</span>
											</div>
											<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
												{slide.titlePrimary}
											</h1>
											<h1 className="text-accent text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
												{slide.titleSecondary}
											</h1>
											<p className="text-lg mb-8 max-w-lg opacity-90">
												{slide.description}
											</p>
											<Button variant={"secondary"} size={"lg"}>
												{slide.buttonText}
											</Button>
										</div>
									</div>
								</div>
								<div className="relative w-[2/3] h-full">
									<img
										src={`./assets/${slide.image}`}
										alt={slide.title}
										className="aspect-[4/3] h-full w-full object-cover"
									/>
								</div>
								<div className="relative w-[2/3] h-full">
									<span className="tracking-widest text-white text-2xl font-bold"></span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="absolute bottom-0 left-0 z-30 flex">
				<div className="bg-accent flex items-center justify-center px-4">
					<span className="text-white text-sm font-extralight tracking-widest">
						{currentSlide + 1} / {sliderData.length}
					</span>
				</div>

				<Button size={"lg"} onClick={prevSlide} className="py-8">
					<MoveLeft className="h-6 w-6" />
				</Button>
				<Button size={"lg"} onClick={nextSlide} className="py-8">
					<MoveRight className="h-6 w-6" />
				</Button>
			</div>
		</div>
	);
};

export default Slider;
