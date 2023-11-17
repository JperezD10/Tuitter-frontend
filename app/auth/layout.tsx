export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <section className="dark">
            {children}
        </section>
	);
}