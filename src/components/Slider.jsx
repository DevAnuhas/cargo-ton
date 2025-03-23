import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
	{
		id: 1,
		titlePrimary: "Best Shipping",
		titleSecondary: "Partner",
		subtitle: "LOGISTIC",
		description:
			"We deliver dependable and streamlined logistics solutions, coordinating the movement, storage, and delivery of your goods with precision and efficiency.",
		buttonText: "DISCOVER MORE",
		image: "slider_1.jpg",
	},
	{
		id: 2,
		titlePrimary: "Global Logistics",
		titleSecondary: "Solutions",
		subtitle: "SHIPPING",
		description:
			"We offer end-to-end shipping services across the globe, managing the transportation of your cargo to ensure timely and safe arrival at any destination.",
		buttonText: "LEARN MORE",
		image: "slider_2.jpg",
	},
	{
		id: 3,
		titlePrimary: "Fast & Secure",
		titleSecondary: "Delivery",
		subtitle: "TRANSPORT",
		description:
			"We provide rapid and secure transport services, utilizing advanced systems to guarantee your cargo is delivered on schedule and in optimal condition.",
		buttonText: "GET STARTED",
		image: "slider_3.jpg",
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
		<div className="relative h-screen w-full overflow-">
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
							<div className="h-full w-full max-w-fit flex mx-auto flex-col md:flex-row -translate-y-12 sm:-translate-y-18 md:translate-y-0">
								<div className="flex mx-auto">
									<div className="z-10 mt-24 ">
										<div className="relative top-1/2 md:left-1/2 sm:transform translate-x-0 md:-translate-x-[35%] md:-translate-y-1/2 -translate-y-[35%] mx-auto md:h-[600px] w-full md:w-[450px] lg:w-[500px] 2xl:w-[650px] py-10 md:py-20 px-8 md:px-4 bg-background">
											<div className="flex align-middle gap-3 mb-6">
												<span className="w-1 h-6 bg-accent"></span>
												<span className="font-bold tracking-[5px]">
													{slide.subtitle}
												</span>
											</div>
											<h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-3 lg:mb-5 tracking-tight">
												{slide.titlePrimary}
											</h1>
											<h1 className="text-accent text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 lg:mb-10">
												{slide.titleSecondary}
											</h1>
											<p className="text-md font-light mb-8 lg:mb-10 max-w-lg text-foreground">
												{slide.description}
											</p>
											<Button variant={"secondary"} size={"lg"}>
												{slide.buttonText}
											</Button>
										</div>
									</div>
								</div>
								<div className="hidden sm:flex md:w-auto">
									<img
										src={`./assets/${slide.image}`}
										alt={slide.title}
										className="h-full w-full aspect-[4/3] object-cover"
									/>
									<div
										className="hidden md:block h-full py-2 text-center tracking-widest text-sm font-bold transform rotate-180"
										style={{ writingMode: "vertical-rl" }}
									>
										#CARGOTON LOGISTICS
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="absolute bottom-0 left-0 z-30 flex">
				<div className="bg-accent flex items-center justify-center px-5">
					<span className="text-background text-lg font-normal tracking-widest space-x-3">
						<span>{currentSlide + 1}</span>
						<span>/</span>
						<span>{sliderData.length}</span>
					</span>
				</div>

				<Button size={"lg"} onClick={prevSlide} className="py-10">
					<ChevronLeft style={{ width: "28px", height: "28px" }} />
				</Button>
				<Button size={"lg"} onClick={nextSlide} className="py-10">
					<ChevronRight style={{ width: "28px", height: "28px" }} />
				</Button>
			</div>
		</div>
	);
};

export default Slider;
