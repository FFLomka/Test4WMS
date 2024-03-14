import "_styles/globals.css"
import "_styles/font.css"

import Head from "next/head"

function MyApp({Component, pageProps, router, isMobileView}) {
	return (
		<div>
			<Head>
				<title>{Component.title ? `${Component.title} | ` : ""}App</title>
			</Head>
			<Component {...pageProps} isMobileView={isMobileView} />
		</div>
	)
}

MyApp.getInitialProps = ({ctx}) => {
	let isMobileView = (ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent).match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
	)
	return {
		isMobileView: Boolean(isMobileView),
	}
}

export default MyApp
