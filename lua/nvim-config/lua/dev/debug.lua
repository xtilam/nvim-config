nvimConfigDebug = {}
function nvimConfigDebug.forceClose() vim.cmd("cquit! 1000") end

function nvimConfigDebug.normalClose() vim.cmd("qa!") end

vim.keymap.set({ "n", "i", "v", "s", "c" }, "<C-c>", nvimConfigDebug.forceClose, { silent = true })
