import type { Route } from "./+types/welcome";
import { Home } from "../home/home";
import Navbar from '../home/components/navbar'
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Welcome () {
  return(
  <>
    <Navbar/>
    <Home/>
  </>
);}
