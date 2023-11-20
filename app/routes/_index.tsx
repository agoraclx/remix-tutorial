import { type MetaFunction, type LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Tutorial Remix App" },
		{ name: "description", content: "Welcome to Remix! madafaka" },
	];
};

//fetch data
/*eslint no-empty-pattern: ["error", { "allowObjectPatternsAsParameters": true }]*/
export async function loader({}: LoaderFunction) {
	const url = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2NmNjg2MDM4YmM0ZjYxYTM3YTdmNmY2MTAyYTcyNCIsInN1YiI6IjY1NTU3MzRkMDgxNmM3MDBjM2RiOGYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zmAfgvPZlChFdeI7yj13oewTi1hba8yeFXpyRqQquI0",
		},
	});
	return json(await url.json());
}

export default function Index() {
	const data: any = useLoaderData();
	return (
		<div className="py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-grey-800 md:mb-4 lg:text-3xl">
						Top Trending Movie
					</h2>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
					{data.results.map((movie: any) => (
						<div
							key={movie.id}
							className="flex flex-col overflow-hidden rounded-lg border"
						>
							<Link
								className="group relative block h-48 overflow-hidden bg-gray-200 md:h-64"
								prefetch="intent"
								to={`movie/${movie.id}/comments`}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt=""
									className="absolute inset-0 h-full w-full object-cover object-center transition duration-2ßß group-hover:scale-110"
								/>
							</Link>
							<div className="flex flex-1 flex-col p-4 sm:p-6">
								<h2 className="mb-2 text-lg font-semibold text-gray-800">
									<Link
										to={`movie/${movie.id}/comments`}
										prefetch="intent"
										className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
									>
										{movie.title}
									</Link>
								</h2>

								<p className="text-gray-500 line-clamp-3">{movie.overview}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
