# +++ CHANGELOG | Banner Core version 2.1.1 +++
-----------------------

### Previous Versions:
1. 0.0.1
2. 0.0.3
3. 0.0.8
4. 0.1.1
5. 0.2.0
6. 0.3.3
7. 0.5.1
8. 0.5.3
9. 1.0.1
10. 2.0.0
11. 2.1.1
12. 2.1.9
13. 2.2.3

_Versions are listed by what is considered a stable release._

## Changes to Gulp and file structure

`BrowserSync` is now instantiated to the major tiny server for this build system and `gulp-livereload` has been stripped from `package.json` entirely.

Another package removed from the system entirely is `node-bourbon`. Without any need for using Bourbon's prefixers and Autoprefixer upgrades then Bourbon is no longer necessary for banner development in its previous use cases.

Finally, the assets parent directory has gone away. This was something that just somehow lingered around for a while. It's not necessary although it makes things look prettier in Finder it doesn't necessarily make it so pretty in an editing program or IDE. The one thing that has stuck is the dist folder. This isn't something based on beauty but based on how repositories claim directories/files in memory and how Apache servers scope directories/files needing to be parsed over the server. The MMGY stage for banners is Apache based so keeping the files inside dist is advised. Especially, considering upkeep and any configurations that have to be accounted for to Apache like URL cloaking etc.

This build system is constructed to run on any NodeJS LTS, currently 6.10.x, but will break if using NodeJS Latest (7.x). Previous versions of the build systems had struggled with any NodeJS greater than or equal to v4.x.

The Gulp tasks themselves are moved to higher order functions to quickly customize the distribution of file sets. This makes it easier to implement extra banner sizes or remove any banner sizes from the project.

There is now a helpers directory with extra directories and files to quickly customize your build. The HTML files, Sass files and additives for Gulp tasks are all included in the `_helpers` directory.

As with the more recent starter releases, this starter has been optimized through modularization and memory management to increase speed in the system. Older versions of the starter were extremely slow. This system operates in milliseconds (at most), microseconds and nanoseconds. Through memory management, leaks are plugged and Gulp will only call the tasks it needs at the moment. Because of this you may see some odd sequencing of things in the console log of task notifications. This is perfectly normal. It's a small price to pay to ensure speed and reliability. The sequencing shouldn't be too crazy and all notifications remain readable and legible.

### Breaking Changes
This system is not compatible with earlier versions of project starters. Any attempt to migrate an older project to this system will require caution. Ideally, only the distributed files and the Sass should be moved into the system. There may be necessary testing to go along with any migration. Also using BrowserSync with the older HTML files will require moving the necessary comment into those files i.e. `<!-- bs snippet -->` just before the closing body tag.

Migrating older systems that depended on `node-bourbon` will break as well. Ideally, it would be better to leave those build systems alone and just update `package.json` from `"node-bourbon": "^4.2.8"` to `"node-bourbon": "4.2.8"`. This way someone initiating a clean install will always get the right version and not get the latest version which will break those older projects.

##### About future releases
There will likely be no need for any minor releases of this current major release. Patch releases may be necessary if certain dependencies change.

Looking to the future another major release is being devised. One that will utilize a generator system like [Yeoman](http://yeoman.io/) or [Slush](http://slushjs.github.io/#/). This way even complex banner projects could be easily scaffolded and quickly implemented saving a ton of prep work.

An example of a great use case is Lee County Co-Op banners. Having a generator that can process your job number, how many partners, list the partner distributions, update the configurations for all the partners and install dependencies and packages, immediately, based on this would be extremely useful. This would reduce any critical errors with manual configurations of tasks and distributions.

This type of scaffolded solution is the ultimate goal for Project Starter 4.
