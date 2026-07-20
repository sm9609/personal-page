import { useEffect, useRef } from "react";

export default function Background() {
	let activeCircuit =
		"m 5.1458197,1.7626068e-6 c -0.58618,0 -1.08395,0.3949500073932 -1.2423,0.9317200073932 l -1.43547,0.006 L 9.7283857e-6,3.3669417 0.46302972,3.8320317 l 2.27632998,-2.23802 1.14452,-0.006 c 0.13278,0.57405 0.64914,1.00563 1.26194,1.00563 0.71281,0 1.29708,-0.58377 1.29708,-1.29657 0,-0.71280993 -0.58427,-1.2970699373932 -1.29708,-1.2970699373932 z m 0,0.5136600073932 c 0.43598,0 0.78548,0.34743 0.78548,0.78340993 0,0.43597 -0.3495,0.7829 -0.78548,0.7829 -0.43597,0 -0.7829,-0.34693 -0.7829,-0.7829 0,-0.43597993 0.34693,-0.78340993 0.7829,-0.78340993 z";
	let test1_path = useRef<SVGPathElement | null>(null);

	useEffect(() => {
		if (test1_path.current) {
			let pathlen = test1_path.current.getTotalLength();
			test1_path.current.setAttribute("stroke-dasharray", `${pathlen}`);
			test1_path.current.setAttribute("stroke-dashoffset", `-${pathlen}`);
		}
	}, []);
	return (
		<div style={{ background: "grey" }}>
			<svg
				width="6.4428883mm"
				height="3.8320336mm"
				viewBox="0 0 6.4428883 3.8320336"
				version="1.1"
				id="Test2"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip">
						<path id="trace" className="activeCircuit" d={activeCircuit} />
					</clipPath>
				</defs>

				<path className="activeCircuit" fill="#000000" d={activeCircuit} />

				<g clipPath="url(#clip)">
					<rect id="follow" x="0" y="0" width="10" height="10" fill="white">
						<animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
							<mpath href="#trace" />
						</animateMotion>
					</rect>
				</g>
			</svg>

			<svg
				width="31.650976mm"
				height="26.913151mm"
				viewBox="0 0 31.650976 26.913151"
				version="1.1"
				id="svg1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath clipPathUnits="userSpaceOnUse" id="clipPath88"></clipPath>
				</defs>
				<g id="layer2" transform="translate(-826.11685,-504.14849)">
					<g
						id="g77"
						transform="translate(228.24476,263.20433)"
						clipPath="url(#clipPath88)"
					>
						<g id="g1">
							<path
								style={{
									fill: "none",
									stroke: "#ffffff",
									strokeWidth: 0.656,
									strokeDasharray: "none",
									strokeOpacity: 1,
								}}
								d="m 600.78849,266.36749 h 5.61266 l 9.68182,-9.68184 11.97368,0.0468 v -13.00267"
								id="path47"
							/>
							<circle
								style={{
									fill: "none",
									fillOpacity: 1,
									stroke: "#ffffff",
									strokeWidth: 0.537778,
									strokeDasharray: "none",
									strokeOpacity: 1,
								}}
								id="path85-5-9-4-3-8-7-8-8-0-8-6-7-5-6"
								cx="599.36139"
								cy="266.36798"
								r="1.220446"
							/>
							<circle
								style={{
									fill: "none",
									fillOpacity: 1,
									stroke: "#ffffff",
									strokeWidth: 0.537778,
									strokeDasharray: "none",
									strokeOpacity: 1,
								}}
								id="path85-5-9-4-3-8-7-8-8-0-8-6-7-5-4-0-0-6-6"
								cx="628.03369"
								cy="242.43349"
								r="1.220446"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
}
