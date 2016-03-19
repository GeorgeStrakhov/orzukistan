## Info
* Our image is of fixed size 8192x8192 px
* Background is white
* Sound depends on zoom and lat-long position

## How to run

1. Install python 2.7
2. Install gdal (`brew install gdal`)
3. Make tiles like this: `gdal2tiles.py -p raster -z 0-5 -w none src/orzukistan.png` (More info here: http://build-failed.blogspot.ru/2012/11/zoomable-image-with-leaflet.html)
4. `bower install`
5. `python -m SimpleHTTPServer 8000`

## Useful links

* https://developers.google.com/maps/documentation/javascript/examples/maptype-image
* http://blog.mikecouturier.com/2011/07/create-zoomable-images-using-google.html#maps_reading
* http://www.thunderforest.com/tutorials/tile-format/

# DONE
* scaffold
* make tiles
* use gmaps
* add sounds test

# TODO
* write a project description and welcome note (handwriting) and set default lat long and zoom to it
* get a domain name and push to gh-pages
* add a copyright and fork me on github thingy to the bottom of the page
* get started with the actual picture
