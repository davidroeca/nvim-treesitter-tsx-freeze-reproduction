IMAGE_NAME = tree-sitter-repro-issue

.PHONY: build
build:
	docker build -t $(IMAGE_NAME):latest .

.PHONY: run
run:
	docker run --rm -it \
		-e "TERM=xterm-256color" \
		-v $(shell pwd)/init.vim:/home/devuser/.config/nvim/init.vim \
		-v $(shell pwd)/src:/home/devuser/src \
		$(IMAGE_NAME):latest

.PHONY: clean
clean:
	@-docker rmi $(IMAGE_NAME):latest 2>/dev/null ||:
	@-docker volume prune
