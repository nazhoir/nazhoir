import Image from "next/image";

import NavItems from "./nav-items";

export default function SiteNav() {
	return (
		<>
			<div className="mb-10 flex space-x-4 px-6 md:px-0">
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
						Founder and CEO at{" "}
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

			<NavItems />
		</>
	);
}
