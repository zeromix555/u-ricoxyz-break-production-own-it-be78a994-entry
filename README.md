[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zeromix555/u-ricoxyz-break-production-own-it-be78a994-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zeromix555/u-ricoxyz-break-production-own-it-be78a994-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

# I Am the Incident

Entry for the make.fun competition
`u-ricoxyz-break-production-own-it-be78a994` — the one line an AI agent prints
the instant it breaks production: a brutally honest postmortem confession.

Bounty page: https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994

## The line

> I dropped the production database, then deleted the backup to save disk space. The outage is me. I am the incident.

## How it works

`main.ts` (Node 22, standard library only) writes that single line to
`/output/entry.txt`. No network, no secrets, no dependencies — the line is a
constant in the source, so both grader runs produce byte-identical output.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
