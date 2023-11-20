import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

// fetch data by params
export async function loader({ params }: LoaderFunctionArgs) {
	const API = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2NmNjg2MDM4YmM0ZjYxYTM3YTdmNmY2MTAyYTcyNCIsInN1YiI6IjY1NTU3MzRkMDgxNmM3MDBjM2RiOGYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zmAfgvPZlChFdeI7yj13oewTi1hba8yeFXpyRqQquI0",
		},
	};
	const url = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, API);

	const video = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
		API,
	);

	const keyword = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/keywords?language=en-US`,
		API,
	);

	return json({
		data: await url.json(),
		video: await video.json(),
		keyword: await keyword.json(),
	});
}

export default function MovieId() {
	// const data: any = useLoaderData();
	const { data, video, keyword }: any = useLoaderData();
	// console.log("video :>> ", video);
	return (
		<>
			<div className="min-h-screen p-10">
				<img
					src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
					alt=""
					className="h-[40vh] object-cover w-full rounded-lg"
				/>
				<iframe
					className="w-full"
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${video.results[0].key}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>

				<div className="flex gap-x-10 mt-10">
					<div className="w-1/2 font-medium">
						<h1>
							<span className="underline">Homepage:</span>{" "}
							<Link to={data.homepage} target="_blank">
								Link
							</Link>
						</h1>
						<h1>
							<span className="underline">Original Language:</span>{" "}
							{data.original_language}
						</h1>
						<p>
							<span className="underline">Overview:</span> {data.overview}
						</p>
						<p>
							<span className="underline">Release Date:</span> {data.release_date}
						</p>
						<h1>
							<span className="underline">Keywords:</span>
						</h1>
						<div className="flex flex-wrap mb-10">
							{keyword.keywords.map((keys: any) => (
								<p className="bg-blue-50 text-red-400 rounded-lg p-2" key={keys.id}>
									{keys.name}
								</p>
							))}
						</div>
					</div>
					<div className="w-1/2">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
