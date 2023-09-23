import Worker from "./worker?worker";

let property = {
  sab: undefined as ArrayBuffer | undefined,
};

export function setup(element: HTMLButtonElement) {
  element.innerHTML = "create new shared array buffer";
  let worker = new Worker();

  element.onclick = () => {
    delete property.sab;

    property.sab = new SharedArrayBuffer(25_000_000);

    worker.postMessage({
      ty: "sab",
      sab: property.sab,
    });
  };
}
