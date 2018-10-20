# LoL Esports Data

## Table of Contents
- [Available Regions](#available-regions)
- [About](#what-is-this)
- [The Breakdown](#the-breakdown)
- [ToDo](#todo)
- [Contributors](#contributors)
- [Legal](#legal-stuff)

## Available Regions
| Region  | Region Number | Years Available  | Teams Available | Players Available |
|---------|:-------------:|----------------- |:---------------:|:-----------------:|
| NA LCS  | 1             | 2017, 2018       | Yes             | Yes               |
| EU LCS  | 2             |                  | No              | No                |
| LCK     | 3             |                  | No              | No                |
| LPL     | 4             |                  | No              | No                |
| LMS     | 5             |                  | No              | No                |
| Worlds  | 6             |                  | No              | No                |
> Unsupported regions or tournaments include:  
> NA Academy, MSI, Rift Rivals, All-Star Event, NA Scouting Grounds  
> CBLoL (Brazil), LCL (Commonwealth of Independent States), LJL (Japan),
> LLN (Latin America North), CLS (Latin America South), OPL (Oceania),
> TCL(Turkey), SEA (Southeast Asia), VCS (Vietnam)

## What is this?
League's [Esports Site](https://lolesports.com) is great, but their API isn't public,
and it's subject to change without warning.

On top of which, it's extremely convoluted, and there's a lot of data that either
isn't available or is hard to find, or maybe it's just buried and you don't have time
to go through hundreds of lines of JSON.

So...welcome to the last League JSON file you'll need to go through.

## The Breakdown
### (with MatrixSenpai)
There's a lot of data in this repo. Here's how it's broken down.
> TL;DR  
> Master contains a `region` key with regions, and references to each  
> Each `region folder` contains a `region_master` with references to each season
> and split folder, as well as a JSON file with teams and players  
> Each `season folder` contains a `season master` with references to each split,
> week, and day files

#### Master
This contains the top-level data you'll need. Inside, you'll find the `regions` key,
with an array of regions that are available.

Each region has the following:
- Region name and acronym
- Region ID
- Region logo
- Players in region
- Teams in region
- JSON files by:
  - Matches
  - Days
  - Weeks
  - Splits
  - Seasons


## TODO
- [ ] Add remaining regions
- [ ] Add remaining teams

## Contributors
[MatrixSenpai](https://github.com/matrixsenpai) - Author

## Legal Stuff
LoL Esports Data isn’t endorsed by Riot Games and doesn’t reflect the views or
opinions of Riot Games or anyone officially involved in producing or managing
League of Legends. League of Legends and Riot Games are trademarks or registered
trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.

LoL Esports Data is open-source data compiled from League's
[Esports Website](https://lolesports.com). All data is referenced or pulled from the
official site. No third-party or derivative work was used to populate this information

LoL Esports Data is licensed under the [WTFPL](http://www.wtfpl.net) license. See the
[license](./LICENSE.md) file for more information
