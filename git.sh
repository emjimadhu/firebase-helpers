#!/bin/sh

RED='\033[0;31m'
ORANGE='\033[0;33m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
LIGHTCYAN='\033[1;36m'
NC='\033[0m'
echo ""
echo ""
echo -e "${ORANGE} ###### # #####  ###### #####    ##    ####  ######       #    # ###### #      #####  ###### #####   #### "
echo -e "${ORANGE} #      # #    # #      #    #  #  #  #      #            #    # #      #      #    # #      #    # #     "
echo -e "${ORANGE} #####  # #    # #####  #####  #    #  ####  #####  ##### ###### #####  #      #    # #####  #    #  #### "
echo -e "${ORANGE} #      # #####  #      #    # ######      # #            #    # #      #      #####  #      #####       #"
echo -e "${ORANGE} #      # #   #  #      #    # #    # #    # #            #    # #      #      #      #      #   #  #    #"
echo -e "${ORANGE} #      # #    # ###### #####  #    #  ####  ######       #    # ###### ###### #      ###### #    #  #### "
echo ""
echo ""
echo -e "${YELLOW}┏ Firebase-Helpers Git Control ------------"
echo -e "${LIGHTCYAN}"
echo ""
read -p "   Would you like to update NPM Version? [y/n]: " updateState
echo ""
echo ""
read -p "   Please Enter Your Commit Message: " msg
echo ""
echo ""
if [ $updateState == 'y' ];
  then
    echo "   Which version is it?"
    select yn in "Major" "Minor" "Patch"; do
        case $yn in
            Major )
              echo "   Selected Major Version."
              echo ""
              echo "   Updating NPM version to Major and pushing to git."
              echo ""
              npm version major --force -m "$msg"
              break;;
            Minor )
              echo "   Selected Minor Version."
              echo ""
              echo "   Updating NPM version to Minor and pushing to git."
              echo ""
              npm version minor --force -m "$msg"
              break;;
            Patch )
              echo "   Selected Patch Version."
              echo ""
              echo "   Updating NPM version to Patch and pushing to git."
              echo ""
              npm version patch --force -m "$msg"
              break;;
        esac
    done
  fi

#Get Npm Package Verion
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo ""
echo "   Adding Files to git"
git add .
echo ""
echo "   Commiting Files"
git commit -m "$msg"
echo ""
echo "   Tagging the Commit"
git tag v$PACKAGE_VERSION
echo ""
echo "   Pushing Files to Git"
git push origin master --tags
echo ""
echo "   Pushed Successfully."
echo ""
echo ""
echo -e "${GREEN}   All Operations are done."
echo ""
echo ""
echo -e "${YELLOW}┗ --------------------------------"
echo ""
echo -e "${NC}"
