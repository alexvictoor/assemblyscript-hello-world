import { instantiate } from "../build/debug";

const init = async () => {
    const { add } = await instantiate(await WebAssembly.compileStreaming(globalThis.fetch("debug.wasm")), {});
    console.log(add(42, 36));
}

init();


