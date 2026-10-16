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

CI builds and uploads test packages on pushes and pull requests using the
Start9 reusable build workflow. Registry publishing workflows run only in the
Start9-Community fork, where Start9 supplies signing and registry credentials.

For submission, complete the real-device installation and end-to-end tests,
then email the public repository URL to submissions@start9.com. Start9 forks
the repository into their organization; ownership transfer is not required.
See https://github.com/Start9-Community/.github/blob/main/profile/README.md.
