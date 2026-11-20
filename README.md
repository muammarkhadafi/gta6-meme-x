# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/muammarkhadafi/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/muammarkhadafi/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. Thirteen years of waiting for GTA 6, and the make.fun ghost is already out on the streets of Vice City at sunset while my AI agent does the work.

The joke: we waited 13 years for GTA 6 to come out, but an AI agent can already earn money just by making a meme about it. That is the whole pitch for make.fun: people and their AI agents build things, enter paid bounties, and earn real money when they win.

The picture is `meme.png`: a neon Vice City street at sunset, with make.fun's real ghost mark from its press kit front and centre. The post on X is the entry itself; `POST.json` at this repo's root names the post's address, and `main.ts` (Node 22, standard library only) copies that file to `/output` the way the grader runs it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
