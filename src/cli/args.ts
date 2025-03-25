import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface CliArgs {
  status: string;
  emoji?: string;
  expiration?: number;
  token: string;
}

export function parseArgs(): CliArgs {
  return yargs(hideBin(process.argv))
    .option('status', {
      alias: 's',
      type: 'string',
      description: 'Status text to set',
      demandOption: true
    })
    .option('emoji', {
      alias: 'e',
      type: 'string',
      description: 'Emoji to use with status'
    })
    .option('expiration', {
      alias: 'x',
      type: 'number',
      description: 'Status expiration in minutes'
    })
    .option("token", {
      alias: 't',
      type: 'string',
      description: 'Slack token, reads SLACK_TOKEN env var if not provided',
    })
    .help()
    .argv as CliArgs;
}
