filetype plugin indent on
" Vim-Plug {{{
call plug#begin()
Plug 'nvim-treesitter/nvim-treesitter', { 'do': 'TSUpdate' }
call plug#end()
" }}}
" Tree-sitter {{{
function! HandleVimEnter()
lua <<EOF
require('nvim-treesitter.configs').setup({
  highlight = { enable = true },
  ensure_installed = {
    'javascript',
    'tsx',
    'jsdoc',
    'typescript',
  },
})
EOF
endfunction
augroup vimenter
  autocmd! VimEnter * call HandleVimEnter()
augroup END
" }}}
" tab settings {{{
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
" }}}
