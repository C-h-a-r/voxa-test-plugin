
#!/usr/bin/env deno run --allow-read --allow-write

import { CLI } from "./cli.ts";

if (import.meta.main) {
  const cli = new CLI();
  await cli.run(Deno.args);
}
