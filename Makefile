HOMEDIR = $(shell pwd)
GITDIR = /var/repos/hail-ants-bot.git

run:
	node post-ant-tweet.js

run-snake-people:
	CONFIG="snake-people/snake-people-config" node post-ant-tweet.js

run-needless-complexity:
	CONFIG="needless-complexity/needless-complexity-config" node post-ant-tweet.js

test:
	node tests/transform-headline-tests.js

sync-worktree-to-git:
	git --work-tree=$(HOMEDIR) --git-dir=$(GITDIR) checkout -f

npm-install:
	cd $(HOMEDIR)
	npm install
	npm prune

pushall:
	git push origin master && git push server master

post-receive: sync-worktree-to-git npm-install
