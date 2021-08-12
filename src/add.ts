export const demoAdd = async () => {
  const wasm = await WebAssembly.instantiateStreaming(fetch("untouched.wasm"), {
    env: {
      abort() {},
    },
  });

  const { add } = wasm.instance.exports as any;
  console.log(add(2, 2));
};
