let property = {
  sab: undefined as SharedArrayBuffer | undefined,
};

self.onmessage = (e) => {
  if (e.data.ty == "sab") {
    delete property.sab;
    property.sab = e.data.sab;
  }
};
