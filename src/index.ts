import { instantiate } from "../build/debug";

const init = async () => {
    const { add, hello } = await instantiate(await WebAssembly.compileStreaming(globalThis.fetch("debug.wasm")), {
        env: {}
    });
    console.log(add(42, 36));
    console.log(hello('Devoxx'));
}

init();


