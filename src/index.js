import * as ReactDOMClient from "react-dom/client";
import { HomePage } from "./views/home-page";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<HomePage />);
