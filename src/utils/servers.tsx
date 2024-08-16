// TODO: Pull server info from API

// TODO: Expand beyond NA datacenters
export enum DATA_CENTERS_ENUM {
  AETHER = "Aether",
  CRYSTAL = "Crystal",
  DYNAMIS = "Dynamis",
  PRIMAL = "Primal",
}
export const DATA_CENTERS = Object.values(DATA_CENTERS_ENUM);

export enum WORLDS_ENUM {
  ADAMANTOISE = "Adamantoise",
  CACTUAR = "Cactuar",
  FAERIE = "Faerie",
  GILGAMESH = "Gilgamesh",
  JENOVA = "Jenova",
  MIDGARDSORMR = "Midgardsormr",
  SARGATANAS = "Sargatanas",
  SIREN = "Siren",
  BALMUNG = "Balmung",
  BRYNHILDR = "Brynhildr",
  COEURL = "Coeurl",
  DIABOLOS = "Diabolos",
  GOBLIN = "Goblin",
  MALBORO = "Malboro",
  MATEUS = "Mateus",
  ZALERA = "Zalera",
  CUCHULAINN = "Cuchulainn",
  GOLEM = "Golem",
  HALICARNASSUS = "Halicarnassus",
  KRAKEN = "Kraken",
  MADUIN = "Maduin",
  MARILITH = "Marilith",
  RAFFLESIA = "Rafflesia",
  SERAPH = "Seraph",
  BEHEMOTH = "Behemoth",
  EXCALIBUR = "Excalibur",
  EXODUS = "Exodus",
  FAMFRIT = "Famfrit",
  HYPERION = "Hyperion",
  LAMIA = "Lamia",
  LEVIATHAN = "Leviathan",
  ULTROS = "Ultros",
}
export const WORLDS = Object.values(WORLDS_ENUM);

interface Server {
  dataCenter: DATA_CENTERS_ENUM;
  worlds: WORLDS_ENUM[];
}

// TODO: Expand beyond NA worlds
export const SERVERS: Server[] = [
  {
    dataCenter: DATA_CENTERS_ENUM.AETHER,
    worlds: [
      WORLDS_ENUM.ADAMANTOISE,
      WORLDS_ENUM.CACTUAR,
      WORLDS_ENUM.FAERIE,
      WORLDS_ENUM.GILGAMESH,
      WORLDS_ENUM.JENOVA,
      WORLDS_ENUM.MIDGARDSORMR,
      WORLDS_ENUM.SARGATANAS,
      WORLDS_ENUM.SIREN,
    ],
  },
  {
    dataCenter: DATA_CENTERS_ENUM.CRYSTAL,
    worlds: [
      WORLDS_ENUM.BALMUNG,
      WORLDS_ENUM.BRYNHILDR,
      WORLDS_ENUM.COEURL,
      WORLDS_ENUM.DIABOLOS,
      WORLDS_ENUM.GOBLIN,
      WORLDS_ENUM.MALBORO,
      WORLDS_ENUM.MATEUS,
      WORLDS_ENUM.ZALERA,
    ],
  },
  {
    dataCenter: DATA_CENTERS_ENUM.DYNAMIS,
    worlds: [
      WORLDS_ENUM.CUCHULAINN,
      WORLDS_ENUM.GOLEM,
      WORLDS_ENUM.HALICARNASSUS,
      WORLDS_ENUM.KRAKEN,
      WORLDS_ENUM.MADUIN,
      WORLDS_ENUM.MARILITH,
      WORLDS_ENUM.RAFFLESIA,
      WORLDS_ENUM.SERAPH,
    ],
  },
  {
    dataCenter: DATA_CENTERS_ENUM.PRIMAL,
    worlds: [
      WORLDS_ENUM.BEHEMOTH,
      WORLDS_ENUM.EXCALIBUR,
      WORLDS_ENUM.EXODUS,
      WORLDS_ENUM.FAMFRIT,
      WORLDS_ENUM.HYPERION,
      WORLDS_ENUM.LAMIA,
      WORLDS_ENUM.LEVIATHAN,
      WORLDS_ENUM.ULTROS,
    ],
  },
];
