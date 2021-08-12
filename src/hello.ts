import { instantiate } from "@assemblyscript/loader";

export const demoHello = async () => {
  const wasm = await instantiate(fetch("untouched.wasm"));

  const { hello, __newString, __getString } = wasm.exports as any;
  const param = __newString("Paris");
  const result = hello(param);
  console.log(__getString());
};
