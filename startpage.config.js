const defaultConfig = {
	username: "MadobyWeb",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_blank",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_blank",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Portfolio",
						url: "https://cancellek.com",
						target: "_blank",
						icon: "mdi:web"
					},
					{
						name: "Keybase",
						url: "https://keybase.io/",
						target: "_blank",
						icon: "fa-brands:keybase"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						target: "_blank",
						icon: "simple-icons:openai"
					},
					{
						name: "OCI",
						url: "https://www.oracle.com/cloud/",
						target: "_blank",
						icon: "simple-icons:oracle"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						target: "_blank",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Verge",
						url: "https://www.theverge.com/",
						target: "_blank",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						target: "_blank",
						icon: "ri:mastodon-fill"
					},
					{
						name: "9To5 Linux",
						url: "https://9to5linux.com/",
						target: "_blank",
						icon: "uil:linux"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						target: "_blank",
						icon: "mdi:twitter"
					},
					{
						name: "Mastodon",
						url: "https://mastodon.social/",
						target: "_blank",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						target: "_blank",
						icon: "mdi:reddit"
					},
					{
						name: "Polywork",
						url: "https://polywork.com",
						target: "_blank",
						icon: "simple-icons:polywork"
					}
				]
			},
			{
				title: "Talks",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "TED",
						url: "https://www.ted.com/talks",
						target: "_blank",
						icon: "mdi:movie-star-outline"
					},
					{
						name: "TED-Ed",
						url: "https://ed.ted.com/lessons?direction=desc&sort=featured-position",
						target: "_blank",
						icon: "mdi:movie-open-settings"
					},
					{
						name: "TEDx",
						url: "https://Ted.com/tedx",
						target: "_blank",
						icon: "mdi:movie-settings-outline"
					},
					{
						name: "TED YTB",
						url: "https://www.youtube.com/results?search_query=TED+Talks",
						target: "_blank",
						icon: "mdi:movie-star"
					}
				]
			},
			{
				title: "Podcast",
				color: "blue",
				align: "left",
				links: [
					{
						name: "G-Podcasts",
						url: "https://podcasts.google.com/",
						target: "_blank",
						icon: "material-symbols:science"
					},
					{
						name: "Spotify",
						url: "https://open.spotify.com/genre/podcasts-page",
						target: "_blank",
						icon: "mdi:spotify"
					},
					{
						name: "NASA",
						url: "https://blogs.nasa.gov/",
						target: "_blank",
						icon: "simple-icons:nasa"
					},
					{
						name: "ESA",
						url: "https://blogs.esa.int/",
						target: "_blank",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Gaming",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "Twitch",
						url: "https://twitch.com",
						target: "_blank",
						icon: "mdi:github"
					},
					{
						name: "Youtube",
						url: "https://youtube.com",
						target: "_blank",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Polygon",
						url: "https://polygon.com",
						target: "_blank",
						icon: "uil:polygon"
					},
					{
						name: "IGN",
						url: "https://ign.com",
						target: "_blank",
						icon: "mdi:currency-sign"
					}
				]
			},
			{
				title: "Chess",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Chess",
						url: "https://chess.com",
						target: "_blank",
						icon: "mdi:chess-pawn"
					},
					{
						name: "Lichess",
						url: "https://lichess.com",
						target: "_blank",
						icon: "mdi:chess-rook"
					},
					{
						name: "ChessTale",
						url: "https://madobychesstale.github.io",
						target: "_blank",
						icon: "mdi:chess-knight"
					},
					{
						name: "ChessCompass",
						url: "https://chesscompass.com",
						target: "_blank",
						icon: "mdi:chess-bishop"
					}
				]
			},
			{
				title: "ScienceMags",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Nature",
						url: "https://www.nature.com/ncomms/",
						target: "_blank",
						icon: "material-symbols:science"
					},
					{
						name: "PopSci",
						url: "https://popsci.com/",
						target: "_blank",
						icon: "mdi:black-mesa"
					},
					{
						name: "Cell",
						url: "https://www.cell.com/",
						target: "_blank",
						icon: "material-symbols:science"
					},
					{
						name: "Sience",
						url: "https://science.org",
						target: "_blank",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						target: "_blank",
						icon: "mdi:github"
					},
					{
						name: "GitLab",
						url: "https://gitlab.com",
						target: "_blank",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						target: "_blank",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						target: "_blank",
						icon: "mdi:stack-overflow"
					}
				]
			},
		]
	}
}

export default defaultConfig
