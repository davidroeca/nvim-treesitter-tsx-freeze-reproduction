# nvim-treesitter TSX syntax bug

This repository reproduces an issue with syntax highlighting in nvim-treesitter that causes neovim to freeze.

## Reproduction

Reproduction should be as simple as:

```bash
# might take a few minutes; builds from source
make build
make run
# once within the container
nvim src/test.tsx
```

If the parsers get installed when `src/test.tsx` is opened, wait for all of them to be installed, and open the file again to ensure that they're running.

Now delete "loading" from `<ThisComponentCannotBeEdited subtext="loading" />` and try to add it back.

Neovim will freeze.

You can stop the container by running `docker ps`, finding the container name, and then running `docker container stop <name-of-container>`.

## Simpler

After further investigation, a simpler reproduction can be found at `src/simplified.tsx`.

Similar modifications to `className="this will freeze"` lead to the same behavior.

## Context

This is a reproduction done by pruning down a real-world example that caused a freeze.

## Cleanup

If you want to clear up the containers/images:

```bash
make clean
```

## Dependencies
* [make](https://www.gnu.org/software/make/)
* [docker](https://docs.docker.com/install/) (tested on `20.10.18`, but should work on older versions too)
