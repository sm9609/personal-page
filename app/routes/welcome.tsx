import type { Route } from "./+types/welcome";
import { Home } from "../home/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Samuel Mensah" },
    { name: "A personal Website to show off previous work", content: "Welcome to My Personal website!" },
  ];
}

export default function Welcome () {
  return(
  <div id="welcome">
    <Home/>
  </div>
);}
