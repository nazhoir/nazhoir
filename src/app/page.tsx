import Image from "next/image";

export default function Home() {
	return (
		<main className="px-6 pb-20 pt-10 md:px-0">
			<div className="mb-10 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
				<div>
					<Image
						src={"/nazhoir.png"}
						alt=""
						width={64}
						height={64}
						className="h-16 w-16 overflow-hidden rounded-full bg-white grayscale"
					/>
				</div>
				<div>
					<h1 className="text-4xl font-bold">
						Nazhoir
					</h1>
					<p>
						Writer, Proggrammer and Founder and CEO at{" "}
						<span>
							<a
								className="group font-semibold text-sky-600 transition-all duration-300 ease-in-out"
								href="https://diskresi.com"
							>
								<span className="bg-gradient-to-r from-sky-600 to-sky-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
									{" "}
									Diskresi{" "}
								</span>
							</a>
						</span>
					</p>
				</div>
			</div>
			<p>
				Driven programmer and writers taking on every
				challenge with gusto. Firmly believes that
				success is not just about the end result, but
				the journey itself. Ready for anything.
			</p>
		</main>
	);
}
