import SiteNav from "@/components/site-hav";
import "./globals.css";
import SiteFooter from "@/components/site-footer";

export const metadata = {
	title:
		"Nazhoir | Writer, Proggrammer and Founder and CEO at Diskresi",
	description:
		"Driven programmer and writers taking on every challenge with gusto. Firmly believes that success is not just about the end result, but the journey itself. Ready for anything.",
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
			<body className="mx-auto max-w-xl pt-10 md:pt-40">
				<SiteNav />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
