import 'dotenv/config';

type Token = string & { __brand: "Slack_OAuth_Token" };

function asToken(token?: string): Token {
  if (!token) {
    throw new Error('SLACK_TOKEN environment variable is not set');
  }
  return Object.assign(token, { __brand: "Slack_OAuth_Token" as const });
}

export function getToken(): Token {
  return asToken(process.env.SLACK_TOKEN);
}
