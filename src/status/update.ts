import { WebClient } from "@slack/web-api";

export function updateStatus(
  client: WebClient,
  status: {
    status_text: string;
    status_emoji: string;
    status_expiration?: number;
  }
) {
  client.users.profile.set({
    profile: {
      ...status,
    },
  });
}
