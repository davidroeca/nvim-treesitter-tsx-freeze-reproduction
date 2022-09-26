FROM python:3.10.7-slim-buster as base
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -yq \
      curl \
      git \
      ninja-build gettext libtool libtool-bin autoconf automake cmake g++ pkg-config unzip

# Install nvim from source
RUN mkdir -p /root
WORKDIR /root
RUN git clone https://github.com/neovim/neovim
WORKDIR /root/neovim
# Nightly 9/25/2022
RUN git checkout 63be7651829f8b77c4974d08ebe09f7775e41a8a
RUN make CMAKE_BUILD_TYPE=RelWithDebInfo
RUN make install
RUN pip install \
      pynvim \
      python-language-server

RUN useradd -u 1000 -m devuser
USER devuser
WORKDIR /home/devuser

RUN curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
RUN mkdir -p .config/nvim

COPY --chown=devuser:devuser init.vim .config/nvim
COPY --chown=devuser:devuser src ./src

RUN nvim --headless +PlugInstall +qa!

ENTRYPOINT [ "bash" ]
