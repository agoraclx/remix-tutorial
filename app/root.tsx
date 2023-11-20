// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { type ReactNode } from "react";

import stylesheet from "~/tailwind.css";

// export const links: LinksFunction = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Layout>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</Layout>
			</body>
		</html>
	);
}

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<nav className="pt-8 px-6 mb-6 text-2xl font-semibold">
				<Link to="/" prefetch="intent">
					KO<span className=" text-green-400">NYONG</span>
				</Link>
			</nav>
			<main>{children}</main>
			<footer className="p-6 text-center font-thin text-white bg-zinc-500">konyong</footer>
		</>
	);
}
