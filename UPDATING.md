# Upstream image tracking

Blisspoint is packaged from a single upstream source: the prebuilt Docker image
`ghcr.io/heatpunk/blisspoint`, pinned by tag in `startos/manifest/index.ts`
(`images.blisspoint.source.dockerTag`). The app's GitHub release is the source of
truth for the version number; confirm the matching multi-arch image exists on
GHCR before bumping.

## Verifying the image (required before every bump)

```bash
curl -s 'https://ghcr.io/token?scope=repository:heatpunk/blisspoint:pull' | jq -r .token > /tmp/ghcr.token
curl -s -H "Authorization: Bearer $(cat /tmp/ghcr.token)" \
  "https://ghcr.io/v2/heatpunk/blisspoint/manifests/<tag>" \
  -H 'Accept: application/vnd.oci.image.index.v1+json' | jq -r '[.manifests[]?.platform.architecture] | join(", ")'
# Must print: amd64, arm64 (plus 'unknown' attestation entries)
```

`docker buildx imagetools inspect` works too where Docker is available.

## The 0.6.0 tag incident (why this file exists)

The `0.6.0` tag on GHCR was overwritten after the CI release by a manual,
single-arch (`amd64`-only) `docker push` from a machine. The genuine CI build of
v0.6.0 — built from commit `bb73d04`, multi-arch — survived under the semver-minor
tag `0.6`, so this package pins `dockerTag: 'ghcr.io/heatpunk/blisspoint:0.6'`.
When the app's release pipeline is made the sole writer of version tags (tracked
in heatpunk/blisspoint#77), switch the pin back to the exact `X.Y.Z` tag.

## Applying a bump

1. Verify the new image is multi-arch (command above). Stop if it is not.
2. `startos/manifest/index.ts`: set `images.blisspoint.source.dockerTag`.
3. `startos/versions/current.ts`: bump `version` to `'X.Y.Z:0'` and update
   `releaseNotes.en_US` (user-facing changelog shown in StartOS).
4. If the release needs a data migration, add a `VersionInfo` for the outgoing
   version and wire it into `startos/versions/index.ts` (all migrations so far
   are no-ops).
5. PR to `master`. `build.yml` compiles and packs; merging triggers
   `tagAndRelease.yml` (version check → tag → release → publish on Start9's
   infrastructure).
