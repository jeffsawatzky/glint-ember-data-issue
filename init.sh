#!/bin/zsh

##
## Packages
##
mkdir packages
cd packages
    mkdir my-addon
    cd my-addon
        EMBER_CLI_PNPM=true ember addon my-addon -b @embroider/addon-blueprint --typescript --addon-only --skip-git --pnpm --skip-npm
        mv my-addon addon
        cd addon
            # peer deps
            pnpm add ember-data --save-peer
            # dev deps
            pnpm add @types/ember-data -D
            pnpm add @types/ember-data__store -D
            pnpm add @types/ember-data__adapter -D
            pnpm add @types/ember-data__model -D
        cd ..
        EMBER_CLI_PNPM=true ember new test-app-for-my-addon --lang en --embroider --typescript --skip-git --pnpm --skip-npm --no-welcome
        mv test-app-for-my-addon test-app
        cd test-app
            # cleanup
            rm -rf .github
            # dev deps
            pnpm add my-addon@workspace:^ -D
            #
            # Generate stuff here, move addon code to addon
            #
            # services
            ember g service store
            cp -i -r app/services ../addon/src
            rm -rf app/services
            # adapters
            ember g adapter common
            cp -i -r app/adapters ../addon/src
            rm -rf app/adapters
            # models
            ember g model common/user
            cp -i -r app/models ../addon/src
            rm -rf app/models
        cd ..
    cd ..
cd ..

##
## Cleanup
##
find . -type f -name ".gitkeep" -exec rm -rf {} \;
find . -type d -empty -delete
pnpm install