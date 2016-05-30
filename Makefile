HOMEDIR = $(shell pwd)
USER = bot
SERVER = smidgeo
SSHCMD = ssh $(USER)@$(SERVER)
PROJECTNAME = hail-ants-bot
APPDIR = /opt/$(PROJECTNAME)

pushall: sync
	git push origin master

sync:
	rsync -a $(HOMEDIR) $(USER)@$(SERVER):/opt --exclude node_modules/
	$(SSHCMD) "cd $(APPDIR) && npm install"

run:
	node post-ant-tweet.js

run-snake-people:
	CONFIG="snake-people/snake-people-config" node post-ant-tweet.js

run-needless-complexity:
	CONFIG="needless-complexity/needless-complexity-config" node post-ant-tweet.js

test:
	node tests/transform-headline-tests.js
