# Repository Guidelines (`ezra31448.github.io`)

## 1. Repository & Deployment Context
- **Static GitHub Pages site**: Single-file portfolio in `index.html` deployed directly from the repository root (`with-ezra.com` via `CNAME`).
- **Design system**: Dark / Light Tech-Noir Voxel theme (`Manrope` + `DM Mono`, `32×32` `shape-rendering="crispEdges"` pixel icons in `#pixel-sprite`, matching dark `#080b14` and light `#f5f4ef` palettes). Keep all UI copy in English to match the rest of `index.html`.
- **`tools/` is gitignored**: SoundCraft `.scraft` sessions, composition Python scripts, and intermediate `.wav` / `.mp3` renders under `tools/` are excluded by `.gitignore` and **not** published to GitHub Pages. Production audio (`.mp3`) and cover images must be placed at the repository root (or another tracked directory).

## 2. Music Player (`SOUND // DECK`) Rules
- **Architecture**: Controlled via `#music-toggle` and `#music-popover` inside `.nav-shell` in `index.html`, powered by Web Audio API and configured by the `MUSIC_TRACKS` array.
- **Strict Single-Track Loop (`LOOP 1`)**: Visitors select one track at a time and loop that single track seamlessly (`AudioBufferSourceNode.loop = true` with silent encoder padding trimmed via `loopStart` / `loopEnd`). **Do not** add playlist-loop, auto-advance to the next track, next/previous track buttons, or shuffle.
- **Autoplay & Gesture Fallback**: On page load (when `music !== 'off'` and Data Saver is off), the player immediately attempts unmuted autoplay and pre-decodes the selected track buffer; if the browser's Autoplay Policy suspends `AudioContext` until user interaction, the pre-decoded loop unlocks with zero latency on the first gesture (`pointerdown`, `pointerup`, `touchend`, `keydown`, `click`).
- **Persistence**: Preserve state in `localStorage` under keys `music` (`'on'` / `'off'`), `musicTrack` (track `id`), and `musicVolume` (`0`–`1`).

## 3. Adding New Tracks & Cover Art
When adding a new track (for example, after rendering an `.mp3` in `tools/`):

1. **Publish the audio file**: Copy or render the final `.mp3` to the repository root as `music-<slug>.mp3` (e.g., `music-late-night-soul.mp3`).
2. **Prepare cover art (optional)**:
   - Place a square cover image (`.webp`, `.jpg`, or `.png`) at the repository root (e.g., `cover-<slug>.webp`) and set `cover: 'cover-<slug>.webp'`.
   - Leave `cover: ''` to use the built-in `32×32` `crispEdges` pixel-art SVG from `buildCoverArtSvg(track)` (which also serves as an automatic fallback if a `cover` image fails to load).
   - For bespoke pixel cover art, add a custom `track.art === '<key>'` branch inside `buildCoverArtSvg(track)`; otherwise the deterministic voxel generator creates an on-theme cover from `track.id`.
3. **Register the track in `MUSIC_TRACKS`** inside `index.html`:
   ```js
   { album: '<album-id>', id: '<slug>', num: '03', title: 'Track Title', meta: 'STYLE · 80 BPM', src: 'music-<slug>.mp3', cover: '', art: '<optional>' }
   ```
   Keep `meta` concise in uppercase monospace format (`GENRE · XX BPM`).
4. **Albums are list sections only**: every track's `album` must match an `id` in `MUSIC_ALBUMS` (`prelude` = the first three tracks, `night-build` = the 12-track late-night tech-noir set); a track with no matching album is not listed. `num` restarts at `01` inside each album, and the deck shows `<ALBUM> · <num>`. To add an album, add one `{ id, title, note }` row to `MUSIC_ALBUMS`. Albums never change playback: still one track on loop.
