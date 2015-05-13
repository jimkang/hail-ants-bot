HOMEDIR = $(shell pwd)
GITDIR = /var/repos/hail-ants-bot.git

run:
	node post-ant-tweet.js

test:
	node tests/basictests.js

sync-worktree-to-git:
	git --work-tree=$(HOMEDIR) --git-dir=$(GITDIR) checkout -f

npm-install:
	cd $(HOMEDIR)
	npm install
	npm prune

pushall:
	git push origin master && git push server master

post-receive: sync-worktree-to-git npm-install
