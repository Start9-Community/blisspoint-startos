<p align="center">
  <img src="icon.png" alt="Blisspoint" width="20%">
</p>

# Blisspoint on StartOS

[Blisspoint](https://github.com/heatpunk/blisspoint) turns a Bitcoin ASIC miner
into an ordinary household appliance: open it on your phone, see how much heat
it is making, and slide the power up or down. This repository is the StartOS
service package (SDK 3) that runs it on [StartOS](https://start9.com).

- **Upstream repo (the app):** <https://github.com/heatpunk/blisspoint>
- **This repo:** StartOS packaging only. The app is consumed as the published,
  multi-arch image pinned in `startos/manifest/index.ts`.

## How it runs

| Property | Value |
|---|---|
| Image | `ghcr.io/heatpunk/blisspoint` (multi-arch: x86_64 + aarch64) |
| Volume | `main` mounted at `/data` |
| Runtime | `proxy-rs` (Rust, [asic-rs](https://github.com/256foundation/asic-rs)) on :8081 behind the Node server on :80 |
| Interface | Web UI, HTTP, port 80 |
| Backups | Volume `main` |
| Network | The StartOS server must be on the same LAN as the miners (asic-rs speaks to them directly, e.g. port 4028) |

## Building and updating

See `UPDATING.md` (per-release checklist and image verification) and
`AGENTS.md` (repo mechanics). Quick form:

```bash
make universal          # -> blisspoint.s9pk
start-cli s9pk inspect blisspoint.s9pk manifest
```

CI delegates to the Start9 reusable workflows (`build`, `pr-retarget`,
`tagAndRelease`, `release`, `syncNext`). Until this repo is transferred to the
Start9-Community org, those workflows cannot publish — the Start9 side
configures `DEV_KEY` and the registry/S3 secrets after transfer.
