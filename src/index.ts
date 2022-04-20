import { instantiate } from "../build/debug";

const init = async () => {
  
  const wasmModule = await instantiate(
    await WebAssembly.compileStreaming(globalThis.fetch("debug.wasm")),
    {
      env: {},
    }
  );

  const { add, hello } = wasmModule;
  
  console.log("[wasm] " + add(42, 36));
  console.log("[wasm] " + hello("Devoxx"));
};

init();
