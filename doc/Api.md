# 1. Api
This document describes the api powering the live-ticker-webpage. The following paragraph provides basic information about the api and rules to follow when implementing it. Suggestions on how to further improve the api are always welcome (further details [below](#114-not-complying-to-api)).

- [1. Api](#1-api)
  - [1.1. General](#11-general)
    - [1.1.1. SSE, GET(/POST) and JSON](#111-sse-getpost-and-json)
    - [1.1.2. Api Levels](#112-api-levels)
    - [1.1.3. Table headings and their meaning](#113-table-headings-and-their-meaning)
    - [1.1.4. not complying to api](#114-not-complying-to-api)
    - [1.1.5. Lifeline diagram](#115-lifeline-diagram)
  - [1.2. REST Api](#12-rest-api)
      - [1.2.0.1. Möglichkeit 1](#1201-möglichkeit-1)
      - [1.2.0.2. Möglichkeit 2](#1202-möglichkeit-2)
    - [1.2.1. The overview Request](#121-the-overview-request)

## 1.1. General

### 1.1.1. SSE, GET(/POST) and JSON


### 1.1.2. Api Levels
To cover different data sources there are different api levels, the lower the number the less is expected and supported. The levels are build to work on top of each other, meaning an element available to Level 0 is also available to Level 1 and so on. It is recommended to **implement at least level 2**, the use of level 0 is strongly discouraged. Level 1 is currently an intermediate solution and might be removed in the future. currently implemented api levels are:

| level | description                                                              |
| :---: | ------------------------------------------------------------------------ |
|   0   | least features, close to no requirements, **strongly discouraged**       |
|   1   | most functionality with low requirements, might be removed in the future |
|   2   | all functionality with strong requirements, **recommended**              |

### 1.1.3. Table headings and their meaning
To better understand the different headings in the tables below, here are their meanings:

| heading     | meaning                                                            |
| ----------- | ------------------------------------------------------------------ |
| element     | name of the element in the described JSON                          |
| value       | the data type that **must** be used with the corresponding element |
| description | describing the content of the element                              |
| available   | the minimum api Level that supports this element                   |
| required    | the minimum api Level that must implement the element              |

### 1.1.4. not complying to api
It might be the case that you can use higher level api elements even if you defined the level lower than 'available', this behavior isn't supported and might not work in future versions. Data Providers not complying with the api might be removed from the config file, if you have good reason not to comply, please create an issue describing why the way you treat the api should become part of the standard.

### 1.1.5. Lifeline diagram

## 1.2. REST Api



Anfragen werden in verschiedene Kategorien (eher Antworten) eingeteilt  welche unter verschiedenen Adressen erwartet werden (sieh config.json). Es ist noch festzulegen wie diese Anfragestruktur aussehen soll, hier einmal zwei grobe Möglichkeiten:

#### 1.2.0.1. Möglichkeit 1
``` url
.../api/?category=overview&...
.../api/?category=competition&...
```

#### 1.2.0.2. Möglichkeit 2
```
.../api
.../api/overview
.../api/competition?id=...
.../api/results?id=...
```

eventuell eine Mischung aus beidem?



### 1.2.1. The overview Request

When the user enters the Overview, a **`get`**-Request is sent to all data providers, listed in the config file.
``` json
{
    "name": "name",
    "location": "location",
    "date": "2021-11-30",
    "isLive": true,
    "areas": 3,
    "id" : 12,
    "apiLevel": "1"
}
```
| element  | value     | description                                        | available | required |
| -------- | --------- | -------------------------------------------------- | :-------: | :------: |
| name     | `string`  | Name of the Competition                            |     0     |    2     |
| location | `string`  | Name of the place the competition is taking place  |     0     |    2     |
| date     | `string`  | date in ISO 8601                                   |     0     |    2     |
| isLive   | `boolean` | decides wether the 'Live'-Labe is displayed or not |     0     |    2     |
| areas    | `integer` | The number of areas on location (`0` is allowed)   |     1     |    2     |
| id       | `integer` | the id to identify the competition on server side  |     0     |    0     |
| apiLevel | `string`  | describing the used api level                      |     0     |    0     |



