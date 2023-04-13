import * as ReactDOMClient from "react-dom/client";
import { HomePage } from "./views/home-page";
import './index.scss';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<HomePage />);
