import { useEffect} from "react";
import useWindowSize from "../hooks/useWindowSize"
import CircuitTile from "./circuitTile";
import "../css/background.css";
export default function Background() {
	const tileHeight = 349.339;
	const tileWidth = 341.770;
	const {pageWidth,pageHeight} = useWindowSize()
	const yTiles = Math.ceil(pageHeight / tileHeight);
	const xTiles = 1 + Math.ceil(pageWidth / tileWidth);
	const totalTiles = yTiles * xTiles;

	const tiles = Array.from({ length: totalTiles }, (_, i) => (
		<CircuitTile key={`${i}`} />
	));

	const gridStyle = {
		gridTemplateColumns: `repeat(${xTiles},${tileWidth}px`,
		gridTemplateRows: `repeat(${yTiles},${tileHeight}px`,
		justifyContent: "start",
		alignContent: "start",
	};

	useEffect(() => {}, []);
	return (
		<div id="background" style={gridStyle}>
			{tiles}
		</div>
	);
}
