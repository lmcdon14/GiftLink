#Make sure to clone your repository into the same directory as your
#web directory. Place this script in your web directory, run it, 
#and it will copy all of the files from the GiftLink repo into your 
#webhome (or other similar page) so that the state of your webpage is 
#the same as the one that is whatever is in the GiftLink repo. 

REPO="./GiftLink"
IMG="$REPO/web/img/*"
JS="$REPO/web/js/*"
CSS="$REPO/web/css/*"
INDEX="$REPO/web/index.html"
WEBHOME="."

cd GiftLink
git pull
cd ..

mkdir $WEBHOME/js
mkdir $WEBHOME/img
mkdir $WEBHOME/css
cp $JS $WEBHOME/js
cp $IMG $WEBHOME/img
cp $CSS $WEBHOME/css
cp $INDEX $WEBHOME
