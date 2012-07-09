{
  "_rev": "6-10fd23723bb98a4712f3be9099aad652",
  "resources": {
    "prod": {
      "hallway-shard": [
        "10.108.86.218",
        "10.47.66.255",
        "10.108.197.73",
        "10.73.65.143"
      ],
      "hallway-config": [
        "10.32.61.136"
      ],
      "saviors": [

      ],
      "mongo-search-slave": [
        "10.72.18.191"
      ],
      "mongo-search-master": [
        "10.111.14.251"
      ],
      "masters": [

      ],
      "slaves": [

      ]
    }
  },
  "id": "dba",
  "defaults": {
    "instanceType": "m1.large",
    "ami": "ami-b0c638d9"
  },
  "data_bag": "prod",
  "roles": {
    "mysql-slaves": {
      "max": 10,
      "min": 1
    },
    "hallway-shard": {
      "max": 4,
      "instanceType": "c1.xlarge",
      "ports": [
        "mongodb-internal"
      ],
      "min": 1
    },
    "hallway-config": {
      "max": 1,
      "instanceType": "m1.large",
      "ports": [
        "mongodb-internal"
      ],
      "min": 1
    },
    "mongo-search-slave": {
      "max": 1,
      "ports": [
        "mongodb-internal"
      ],
      "min": 1
    },
    "mongo-search-master": {
      "max": 1,
      "ports": [
        "mongodb-internal"
      ],
      "min": 1
    },
    "mysql-saviors": {
      "max": 10,
      "min": 1
    },
    "mysql-masters": {
      "max": 10,
      "min": 1
    }
  },
  "chef_type": "data_bag_item"
}
