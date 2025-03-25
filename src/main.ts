import { WebClient } from "@slack/web-api";
import { parseArgs } from "./cli";
import { getToken } from "./env";
import { updateStatus } from "./status";
import { addMinutes, getUnixTime } from "date-fns";

(async () => {
  const args = parseArgs();

  try {
    const client = new WebClient(args.token ?? getToken());

    const expirationTimestamp =
      args.expiration !== undefined
        ? getUnixTime(addMinutes(Date.now(), args.expiration))
        : undefined;

    updateStatus(client, {
      status_text: args.status,
      status_emoji: args.emoji || "",
      status_expiration: expirationTimestamp,
    });
  } catch (error) {
    process.exit(1);
  }
})();
