/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.pokemon.com",
				port: "",
				pathname: "/assets/**",
			},
		],
	},
};

module.exports = nextConfig;
