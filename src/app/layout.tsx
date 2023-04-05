import SiteNav from "@/components/site-hav";
import "./globals.css";
import SiteFooter from "@/components/site-footer";

const title =
	"Nazhoir | Writer, Proggrammer, Founder and CEO at Diskresi";
const description =
	"Driven programmer and writers taking on every challenge with gusto. Firmly believes that success is not just about the end result, but the journey itself. Ready for anything.";

export const metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		type: "profile",
	},
	twitter: {
		card: "summary",
		title,
		description,
		siteId: "1072023881769136128",
		creator: "@nazhoir",
		creatorId: "1072023881769136128",
		images: [
			"https://avatars.githubusercontent.com/u/74437335?v=4?s=400",
		],
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="bg-stone-950 text-stone-300"
		>
			<body className="mx-auto max-w-xl py-10 md:pt-40">
				<SiteNav />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
