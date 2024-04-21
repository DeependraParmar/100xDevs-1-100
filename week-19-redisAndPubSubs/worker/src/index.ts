import { createClient } from "redis";

const client = createClient();

async function main() {
    await client.connect();

    while (1) {
        const response = await client.brPop("submissions", 0);
        const json = await JSON.parse(response);
        console.log(json);


        // actually run the user's code
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Accepted");
    }
}

main();