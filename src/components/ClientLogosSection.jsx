const clients = [
	{ id: 2, name: "Client 2", logo: "logoipsum-216.svg" },
	{ id: 1, name: "Client 1", logo: "logoipsum-253.svg" },
	{ id: 3, name: "Client 3", logo: "logoipsum-325.svg" },
	{ id: 4, name: "Client 4", logo: "logoipsum-334.svg" },
	{ id: 5, name: "Client 5", logo: "logoipsum-358.svg" },
	{ id: 6, name: "Client 6", logo: "logoipsum-364.svg" },
];

export default function ClientLogosSection() {
	return (
		<section className="py-16 bg-muted">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Our Clients
					</div>
					<h2 className="text-3xl font-bold mb-4">
						Trusted by Industry Leaders
					</h2>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center">
					{clients.map((client) => (
						<div key={client.id} className="flex justify-center">
							<img
								src={`./assets/${client.logo}`}
								alt={client.name}
								className="h-auto w-auto max-h-16 grayscale-100 dark:invert-100 opacity-60 hover:opacity-100 transition-opacity"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
