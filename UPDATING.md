# Updating the upstream version

Blisspoint's upstream is the prebuilt multi-arch image `ghcr.io/heatpunk/blisspoint`,
pinned in `startos/manifest/index.ts` (`images.blisspoint.source.dockerTag`) by tag and
digest. The tag tracks the app's GitHub release; the digest is what actually ships, so a
tag overwritten on GHCR cannot change the package.

## Determining the upstream version

```bash
gh release view -R heatpunk/blisspoint --json tagName -q .tagName
```

## Applying the bump

1. Confirm the release's image carries both architectures and read its index digest:

   ```bash
   docker buildx imagetools inspect ghcr.io/heatpunk/blisspoint:<X.Y.Z>
   ```

   It must list `linux/amd64` and `linux/arm64`. Stop if either is missing.

2. Set `dockerTag` to `ghcr.io/heatpunk/blisspoint:<X.Y.Z>@sha256:<index digest>`.
3. Check the image's `Cmd` (`--format '{{json .Image}}'`) still runs `proxy-rs` and
   `node server/serve.cjs` from `/app`; `startos/main.ts` runs them as separate daemons
   and must follow any change.
4. Bump `startos/versions/current.ts` per `versions.md`, with release notes in every
   locale.
