import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
			</div>
			<h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full m-4">
				Beautiful, fast and modern React UI library.
			</h2>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
