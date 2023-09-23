import "./style.css";
import { setup } from "./setup.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setup(document.querySelector<HTMLButtonElement>("#counter")!);
