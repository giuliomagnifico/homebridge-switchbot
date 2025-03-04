import { MacAddress, PlatformConfig } from 'homebridge';
import { IClientOptions } from 'async-mqtt';
/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'SwitchBot';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = '@switchbot/homebridge-switchbot';

/**
 * This is the main url used to access SwitchBot API
 */
export const HostDomain = 'api.switch-bot.com';

/**
 * This is the main url used to access SwitchBot API
 */
export const DevicePath = '/v1.1/devices';

//Config
export interface SwitchBotPlatformConfig extends PlatformConfig {
  credentials?: credentials;
  options?: options | Record<string, never>;
}

export type credentials = {
  token?: any;
  secret?: any;
  notice?: any;
  openToken?: any;
};

export type options = {
  refreshRate?: number;
  pushRate?: number;
  logging?: string;
  devices?: Array<devicesConfig>;
  irdevices?: Array<irDevicesConfig>;
};

export interface devicesConfig extends device {
  configDeviceType: string;
  configDeviceName?: string;
  deviceId: string;
  external?: boolean;
  refreshRate?: number;
  firmware?: string;
  logging?: string;
  connectionType?: string;
  customBLEaddress?: string;
  scanDuration?: number;
  hide_device?: boolean;
  offline?: boolean;
  mqttURL?: string;
  mqttOptions?: IClientOptions;
  mqttPubOptions?: IClientOptions;
  history?: boolean;
  bot?: bot;
  meter?: meter;
  humidifier?: humidifier;
  curtain?: curtain;
  contact?: contact;
  motion?: motion;
  colorbulb?: colorbulb;
  ceilinglight?: ceilinglight;
  plug?: Record<any, any>;
  lock?: lock;
}

export type meter = {
  hide_temperature?: boolean;
  hide_humidity?: boolean;
};

export type bot = {
  mode?: string;
  deviceType?: string;
  doublePress?: number;
  pushRatePress?: number;
  allowPush?: boolean;
  maxRetry?: number;
};

export type humidifier = {
  hide_temperature?: boolean;
  set_minStep?: number;
};

export type curtain = {
  disable_group?: boolean;
  hide_lightsensor?: boolean;
  set_minLux?: number;
  set_maxLux?: number;
  updateRate?: number;
  set_max?: number;
  set_min?: number;
  set_minStep?: number;
  setCloseMode?: string;
  setOpenMode?: string;
};

export type contact = {
  hide_lightsensor?: boolean;
  set_minLux?: number;
  set_maxLux?: number;
  hide_motionsensor?: boolean;
};

export type motion = {
  hide_lightsensor?: boolean;
  set_minLux?: number;
  set_maxLux?: number;
};

export type colorbulb = {
  set_minStep?: number;
  adaptiveLightingShift?: number;
};

export type ceilinglight = {
  set_minStep?: number;
  adaptiveLightingShift?: number;
};

export type lock = {
  hide_contactsensor?: boolean;
};

export interface irDevicesConfig extends irdevice {
  configRemoteType?: string;
  connectionType?: string;
  hide_device?: boolean;
  external?: boolean;
  firmware?: string;
  deviceId: string;
  logging?: string;
  customOn?: string;
  customOff?: string;
  customize?: boolean;
  disablePushOn?: boolean;
  disablePushOff?: boolean;
  irfan?: irfan;
  irair?: irair;
  irpur?: Record<any, any>;
  ircam?: Record<any, any>;
  irlight?: Record<any, any>;
  irvc?: Record<any, any>;
  irwh?: Record<any, any>;
  irtv?: Record<any, any>;
  other?: other;
}

export type irfan = {
  swing_mode?: boolean;
  rotation_speed?: boolean;
  set_minStep?: number; //set_minStep
  set_max?: number; //set_max
  set_min?: number; //set_min
};

export type irair = {
  hide_automode?: boolean;
};

export type other = {
  deviceType?: string;
};

export type body = {
  command: string;
  parameter: string;
  commandType: string;
}

//a list of physical devices.
export type deviceList = {
  device: Array<device>;
};

export type device = {
  //device ID.
  deviceId?: string;
  //device name.
  deviceName: string;
  //device type.
  deviceType: string;
  //determines if Cloud Service is enabled or not for the current device.
  enableCloudService: boolean;
  //device's parent Hub ID.
  hubDeviceId: string;
  //only available for Curtain devices. a list of Curtain device IDs such that the Curtain devices are being paired or grouped.
  curtainDevicesIds?: Array<string>;
  //only available for Curtain/Lock devices. determines if the open position and the close position of a device have been properly calibrated or not
  calibrate?: boolean;
  //only available for Curtain devices. determines if a Curtain is paired with or grouped with another Curtain or not.
  group?: boolean;
  //only available for Curtain devices. determines if a Curtain is the master device or not when paired with or grouped with another Curtain.
  master?: boolean;
  //only available for Curtain devices. the opening direction of a Curtain.
  openDirection?: string;
  //BLE Mac Address
  bleMac?: string;
};

//a list of virtual infrared remote devices.
export type infraredRemoteList = {
  device: Array<irdevice>;
};

export type irdevice = {
  deviceId?: string; //device ID
  deviceName: string; //device name
  remoteType: string; //device type
  hubDeviceId: string; //remote device's parent Hub ID
};

export type deviceStatus = {
  //device ID.
  deviceId: string;
  //device type.
  deviceType: string;
  //device's parent Hub ID.
  hubDeviceId?: string;
  //only available for Bot/Plug/Humidifier/Color Bulb/Strip Light/Plug Mini (US)/Plug Mini (JP) devices. ON/OFF state
  power?: string;
  //only available for Meter/Meter Plus (US)/Meter Plus (JP)/Humidifier devices. humidity percentage
  humidity?: number;
  //only available for Meter/Meter Plus (US)/Meter Plus (JP)/Humidifier devices. temperature in celsius.
  temperature?: number;
  //only available for Humidifier devices. atomization efficiency %.
  nebulizationEfficiency?: number;
  //only available for Humidifier devices. determines if a Humidifier is in Auto Mode or not.
  auto?: boolean;
  //only available for Humidifier devices. determines if a Humidifier's safety lock is on or not.
  childLock?: boolean;
  //only available for Humidifier devices. determines if a Humidifier is muted or not.
  sound?: boolean;
  //only available for Curtain/Lock devices. determines if a device has been calibrated or not
  calibrate?: boolean;
  //only available for Curtain devices. determines if a Curtain is paired with or grouped with another Curtain or not.
  group?: boolean;
  //only available for Curtain devices. determines if a Curtain is moving or not.
  moving?: boolean;
  //only available for Curtain devices. the percentage of the distance between the
  //calibrated open position and close position that a Curtain has moved to.
  slidePosition?: number;
  //available for Smart Fan devices. the fan mode.
  mode?: number;
  //available for Smart Fan devices. the fan speed.
  speed?: number;
  //available for Smart Fan devices. determines if the fan is swinging or not.
  shaking?: boolean;
  //only available for Smart Fan devices. the fan's swing direciton.
  shakeCenter?: string;
  //only available for Smart Fan devices. the fan's swing range, 0~120°.
  shakeRange?: string;
  //only available for Motion Sensor, Contact Sensor devices. determines if motion is detected
  moveDetected?: boolean;
  //only available for Motion Sensor, Contact Sensor devices. tell the ambient environment is bright or dim
  //only available for Color Bulb/Strip Light devices. the brightness value, range from 1 to 100
  brightness?: string | number;
  //only available for Contact Sensor devices. open/close/timeOutNotClose
  openState?: string;
  //only available for Color Bulb/Strip Light devices. the color value, RGB "255:255:255"
  color?: string;
  //only available for Color Bulb devices. the color temperature value, range from 2700 to 6500
  colorTemperature?: number;
  //only available for Humidifier devices. determines if the water tank empty or not
  lackWater?: boolean;
  //only available for Plug Mini (US)/Plug Mini (JP). Current voltage of the device (Unit: V).
  voltage: number;
  //only available for Plug Mini (US)/Plug Mini (JP). The power consumption of the device for the day (Unit: W/min).
  weight: number;
  //only available for Plug Mini (US)/Plug Mini (JP). How long the device has been used for the day (Unit: min).
  electricityOfDay: number;
  //only available for Plug Mini (US)/Plug Mini (JP). Current current of the device (Unit: A).
  electricCurrent: number;
  //only available for Lock devices. determines if the lock is locked or not.
  lockState: string;
  //only available for Lock devices. determines if the door is closed or not.
  doorState: string;
};

export type ad = {
  id: string;
  address: string;
  rssi: number;
  serviceData: serviceData;
};

export type serviceData = {
  //Model of BLE SwitchBot Device
  model: string;
  //Model Name of BLE SwitchBot Device
  modelName: string;
  //Mode for Bot either Press or Switch
  mode?: boolean;
  //Bot/ColorBulb State
  state?: string | boolean;
  //ColorBulb Power
  power?: boolean;
  //ColorBulb R
  red?: number;
  //ColorBulb G
  green?: number;
  //ColorBulb B
  blue?: number;
  //ColorBulb Color temperature
  color_temperature?: number;
  //Battery percentage left on Bot, Meter, Motion, Contact, PlugMini, and Curtain
  battery?: number;
  //Humidifier's humidity level percentage
  percentage?: boolean | string;
  //Humidifier's humidity level percentage
  onState?: boolean;
  //Humidifier's AutoMode
  autoMode?: boolean;
  //Meter Temperature Levels
  temperature?: temperature;
  // Fahrenheit enabled for Meter
  fahrenheit: boolean;
  // Humidity level for Meter
  humidity?: number;
  //Motion Detected for Contact or Motion Sensors
  movement?: boolean;
  //Motion ((lightLevel == 1) ? 'dark' : ((lightLevel == 2) ? 'bright' : 'unknown'))
  //Contact ((lightLevel == 0) ? 'dark' : 'bright')
  //Curtain (light sensor level (1-10))
  //Light Level
  lightLevel?: number | string;
  //Contact DoorState
  doorState?: number | string;
  //Is Curtain Calibrated
  calibration?: boolean;
  //Current Curtain Positon %
  position?: number;
  //Is Curtain Moving?
  inMotion?: boolean;
  //PlugMini - Is there a delay?
  delay?: boolean;
  //PlugMini - Is there a Timer?
  timer?: boolean;
  //PlugMini - Is the UTC time has been synchronized?
  syncUtcTime?: boolean;
  //PlugMini - The Wifi RSSI Signal
  wifiRssi?: number;
  //PlugMini - Whether the Plug Mini is overloaded, more than 15A current overload
  overload?: boolean;
  //PlugMini - Plug Mini current power value of the load
  currentPower?: number;
  //Color Bulb's brightness level
  brightness?: boolean | string;
};

export type temperature = {
  c: number;
  f: number;
};

export type switchbot = {
  discover: (arg0: { duration?: any; model: string; quick: boolean; id?: MacAddress }) => Promise<any>;
  wait: (arg0: number) => any;
};

export function rgb2hs(r: any, g: any, b: any) {
  /*
    Credit:
    https://github.com/WickyNilliams/pure-color
  */
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === 0) {
    s = 0;
  } else {
    s = (delta / max) * 100;
  }
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }
  return [Math.round(h), Math.round(s)];
}

export function hs2rgb(h: any, s: any) {
  /*
    Credit:
    https://github.com/WickyNilliams/pure-color
  */
  h = parseInt(h) / 60;
  s = parseInt(s) / 100;
  const f = h - Math.floor(h);
  const p = 255 * (1 - s);
  const q = 255 * (1 - s * f);
  const t = 255 * (1 - s * (1 - f));
  let rgb;
  switch (Math.floor(h) % 6) {
    case 0:
      rgb = [255, t, p];
      break;
    case 1:
      rgb = [q, 255, p];
      break;
    case 2:
      rgb = [p, 255, t];
      break;
    case 3:
      rgb = [p, q, 255];
      break;
    case 4:
      rgb = [t, p, 255];
      break;
    case 5:
      rgb = [255, p, q];
      break;
  }
  if (rgb[0] === 255) {
    rgb[1] *= 0.8;
    rgb[2] *= 0.8;
    if (rgb[1] <= 25 && rgb[2] <= 25) {
      rgb[1] = 0;
      rgb[2] = 0;
    }
  }
  return [Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2])];
}

export function k2rgb(k: number) {
  // Set kelvin to nearest 100, between 2000 and 7100
  k = Math.round(k / 100) * 100;
  k = Math.max(Math.min(k, 7100), 2000);

  // k should now appear in our table of kelvin to rgb
  const values = {
    2000: [255, 141, 11],
    2100: [255, 146, 29],
    2200: [255, 147, 44],
    2300: [255, 152, 54],
    2400: [255, 157, 63],
    2500: [255, 166, 69],
    2600: [255, 170, 77],
    2700: [255, 174, 84],
    2800: [255, 173, 94],
    2900: [255, 177, 101],
    3000: [255, 180, 107],
    3100: [255, 189, 111],
    3200: [255, 187, 120],
    3300: [255, 195, 124],
    3400: [255, 198, 130],
    3500: [255, 201, 135],
    3600: [255, 203, 141],
    3700: [255, 206, 146],
    3800: [255, 204, 153],
    3900: [255, 206, 159],
    4000: [255, 213, 161],
    4100: [255, 215, 166],
    4200: [255, 217, 171],
    4300: [255, 219, 175],
    4400: [255, 221, 180],
    4500: [255, 223, 184],
    4600: [255, 225, 188],
    4700: [255, 226, 192],
    4800: [255, 228, 196],
    4900: [255, 229, 200],
    5000: [255, 231, 204],
    5100: [255, 230, 210],
    5200: [255, 234, 211],
    5300: [255, 235, 215],
    5400: [255, 237, 218],
    5500: [255, 236, 224],
    5700: [255, 240, 228],
    5800: [255, 241, 231],
    5900: [255, 243, 234],
    6000: [255, 244, 237],
    6100: [255, 245, 240],
    6200: [255, 246, 243],
    6300: [255, 247, 247],
    6400: [255, 248, 251],
    6500: [255, 249, 253],
    6600: [254, 249, 255],
    6700: [252, 247, 255],
    6800: [249, 246, 255],
    6900: [247, 245, 255],
    7000: [245, 243, 255],
    7100: [243, 242, 255],
  };

  // Return the value
  return values[k];
}

export function m2hs(m) {
  /*
    Credit:
    https://github.com/homebridge/HAP-NodeJS
  */
  const table = {
    100: [19, 222.1],
    101: [18.7, 222.2],
    102: [18.4, 222.3],
    103: [18.2, 222.3],
    104: [17.9, 222.4],
    105: [17.6, 222.5],
    106: [17.3, 222.7],
    107: [17, 222.8],
    108: [16.7, 222.9],
    109: [16.4, 223],
    110: [16.1, 223.2],
    111: [15.8, 223.3],
    112: [15.4, 223.4],
    113: [15.2, 223.6],
    114: [14.9, 223.8],
    115: [14.7, 223.9],
    116: [14.3, 224.1],
    117: [14.1, 224.2],
    118: [13.8, 224.4],
    119: [13.5, 224.6],
    120: [13.2, 224.8],
    121: [12.9, 225],
    122: [12.5, 225.3],
    123: [12.2, 225.6],
    124: [11.8, 225.9],
    125: [11.4, 226.3],
    126: [11.1, 226.7],
    127: [10.7, 227.1],
    128: [10.3, 227.6],
    129: [9.9, 228],
    130: [9.6, 228.5],
    131: [9.3, 229.1],
    132: [8.9, 229.6],
    133: [8.5, 230.2],
    134: [8.2, 230.9],
    135: [7.8, 231.6],
    136: [7.5, 232.5],
    137: [7.1, 233.5],
    138: [6.7, 234.6],
    139: [6.3, 235.8],
    140: [6, 237.1],
    141: [5.6, 238.9],
    142: [5.2, 240.9],
    143: [5, 242.9],
    144: [4.8, 244.9],
    145: [4.6, 246.9],
    146: [4.4, 249.3],
    147: [4.3, 251.9],
    148: [4.1, 254.9],
    149: [3.9, 258],
    150: [3.7, 261.8],
    151: [3.4, 265.9],
    152: [3.2, 271],
    153: [3, 276.4],
    154: [2.8, 283.6],
    155: [2.6, 290.4],
    156: [2.3, 295.3],
    157: [2.1, 300],
    158: [1.9, 300],
    159: [1.6, 300],
    160: [1.4, 195.8],
    161: [1.2, 84.3],
    162: [1.3, 58.2],
    163: [1.5, 55.9],
    164: [1.7, 53.2],
    165: [1.9, 50.2],
    166: [2.1, 47.1],
    167: [2.4, 44.5],
    168: [2.6, 42.6],
    169: [2.9, 40.9],
    170: [3.1, 39.5],
    171: [3.4, 38.3],
    172: [3.7, 37.3],
    173: [3.9, 36.5],
    174: [4.2, 35.7],
    175: [4.4, 35.1],
    176: [4.6, 34.5],
    177: [4.9, 34],
    178: [5.1, 33.5],
    179: [5.3, 33],
    180: [5.6, 32.7],
    181: [5.8, 32.3],
    182: [6, 32],
    183: [6.3, 31.7],
    184: [6.5, 31.4],
    185: [6.7, 31.2],
    186: [7, 30.9],
    187: [7.2, 30.7],
    188: [7.4, 30.5],
    189: [7.6, 30.3],
    190: [7.9, 30.1],
    191: [8.1, 29.9],
    192: [8.4, 29.7],
    193: [8.6, 29.6],
    194: [8.9, 29.5],
    195: [9.1, 29.3],
    196: [9.4, 29.2],
    197: [9.6, 29.1],
    198: [9.8, 29],
    199: [10, 28.9],
    200: [10.2, 28.7],
    201: [10.5, 28.7],
    202: [10.7, 28.6],
    203: [11, 28.5],
    204: [11.2, 28.4],
    205: [11.4, 28.3],
    206: [11.6, 28.3],
    207: [11.8, 28.2],
    208: [12.1, 28.1],
    209: [12.3, 28.1],
    210: [12.5, 28],
    211: [12.7, 28],
    212: [12.9, 27.9],
    213: [13.2, 27.8],
    214: [13.4, 27.8],
    215: [13.6, 27.7],
    216: [13.8, 27.7],
    217: [14, 27.7],
    218: [14.3, 27.6],
    219: [14.5, 27.6],
    220: [14.7, 27.5],
    221: [14.9, 27.5],
    222: [15.1, 27.5],
    223: [15.3, 27.4],
    224: [15.5, 27.4],
    225: [15.8, 27.4],
    226: [16, 27.3],
    227: [16.2, 27.3],
    228: [16.4, 27.3],
    229: [16.6, 27.3],
    230: [16.8, 27.2],
    231: [17, 27.2],
    232: [17.2, 27.2],
    233: [17.4, 27.2],
    234: [17.6, 27.2],
    235: [17.8, 27.1],
    236: [18, 27.1],
    237: [18.2, 27.1],
    238: [18.4, 27.1],
    239: [18.7, 27.1],
    240: [18.8, 27],
    241: [19, 27],
    242: [19.2, 27],
    243: [19.4, 27],
    244: [19.6, 27],
    245: [19.8, 27],
    246: [20, 27],
    247: [20.3, 26.9],
    248: [20.5, 26.9],
    249: [20.6, 26.9],
    250: [20.8, 26.9],
    251: [21, 26.9],
    252: [21.3, 26.9],
    253: [21.5, 26.9],
    254: [21.6, 26.9],
    255: [21.8, 26.8],
    256: [22, 26.8],
    257: [22.2, 26.8],
    258: [22.4, 26.8],
    259: [22.6, 26.8],
    260: [22.8, 26.8],
    261: [23, 26.8],
    262: [23.2, 26.8],
    263: [23.4, 26.8],
    264: [23.6, 26.8],
    265: [23.8, 26.8],
    266: [24, 26.8],
    267: [24.1, 26.8],
    268: [24.3, 26.8],
    269: [24.5, 26.8],
    270: [24.7, 26.8],
    271: [24.8, 26.8],
    272: [25.1, 26.7],
    273: [25.3, 26.7],
    274: [25.4, 26.7],
    275: [25.6, 26.7],
    276: [25.8, 26.7],
    277: [26, 26.7],
    278: [26.1, 26.7],
    279: [26.3, 26.7],
    280: [26.5, 26.7],
    281: [26.7, 26.7],
    282: [26.9, 26.7],
    283: [27.1, 26.7],
    284: [27.3, 26.7],
    285: [27.5, 26.7],
    286: [27.7, 26.7],
    287: [27.8, 26.7],
    288: [28, 26.7],
    289: [28.2, 26.7],
    290: [28.4, 26.7],
    291: [28.6, 26.7],
    292: [28.8, 26.7],
    293: [28.9, 26.7],
    294: [29.1, 26.7],
    295: [29.3, 26.7],
    296: [29.5, 26.7],
    297: [29.6, 26.7],
    298: [29.8, 26.7],
    299: [30, 26.7],
    300: [30.2, 26.7],
    301: [30.4, 26.7],
    302: [30.5, 26.7],
    303: [30.7, 26.7],
    304: [30.9, 26.7],
    305: [31.1, 26.7],
    306: [31.2, 26.7],
    307: [31.4, 26.7],
    308: [31.6, 26.7],
    309: [31.8, 26.8],
    310: [31.9, 26.8],
    311: [32.1, 26.8],
    312: [32.3, 26.8],
    313: [32.5, 26.8],
    314: [32.6, 26.8],
    315: [32.8, 26.8],
    316: [33, 26.8],
    317: [33.2, 26.8],
    318: [33.3, 26.8],
    319: [33.5, 26.8],
    320: [33.7, 26.8],
    321: [33.8, 26.8],
    322: [34, 26.8],
    323: [34.2, 26.8],
    324: [34.4, 26.8],
    325: [34.5, 26.8],
    326: [34.7, 26.8],
    327: [34.9, 26.8],
    328: [35.1, 26.8],
    329: [35.2, 26.8],
    330: [35.4, 26.8],
    331: [35.5, 26.8],
    332: [35.7, 26.8],
    333: [35.9, 26.8],
    334: [36.1, 26.8],
    335: [36.3, 26.9],
    336: [36.5, 26.9],
    337: [36.7, 26.9],
    338: [36.9, 26.9],
    339: [37.1, 26.9],
    340: [37.2, 26.9],
    341: [37.4, 26.9],
    342: [37.5, 26.9],
    343: [37.7, 26.9],
    344: [37.9, 26.9],
    345: [38.1, 26.9],
    346: [38.3, 26.9],
    347: [38.5, 26.9],
    348: [38.7, 26.9],
    349: [38.9, 26.9],
    350: [39, 26.9],
    351: [39.2, 26.9],
    352: [39.3, 27],
    353: [39.5, 27],
    354: [39.7, 27],
    355: [39.9, 27],
    356: [40.1, 27],
    357: [40.2, 27],
    358: [40.4, 27],
    359: [40.6, 27],
    360: [40.8, 27],
    361: [40.9, 27],
    362: [41.1, 27],
    363: [41.2, 27],
    364: [41.4, 27],
    365: [41.6, 27],
    366: [41.8, 27],
    367: [42, 27],
    368: [42.1, 27.1],
    369: [42.3, 27.1],
    370: [42.4, 27.1],
    371: [42.6, 27.1],
    372: [42.8, 27.1],
    373: [43, 27.1],
    374: [43.1, 27.1],
    375: [43.2, 27.1],
    376: [43.4, 27.1],
    377: [43.6, 27.1],
    378: [43.8, 27.1],
    379: [43.9, 27.1],
    380: [44.1, 27.1],
    381: [44.3, 27.2],
    382: [44.4, 27.2],
    383: [44.6, 27.2],
    384: [44.7, 27.2],
    385: [44.9, 27.2],
    386: [45.1, 27.2],
    387: [45.3, 27.2],
    388: [45.5, 27.2],
    389: [45.6, 27.2],
    390: [45.8, 27.2],
    391: [46, 27.2],
    392: [46.2, 27.2],
    393: [46.4, 27.3],
    394: [46.5, 27.3],
    395: [46.7, 27.3],
    396: [46.9, 27.3],
    397: [47.1, 27.3],
    398: [47.2, 27.3],
    399: [47.4, 27.3],
    400: [47.6, 27.3],
    401: [47.7, 27.3],
    402: [47.9, 27.3],
    403: [48.1, 27.3],
    404: [48.3, 27.3],
    405: [48.5, 27.4],
    406: [48.7, 27.4],
    407: [48.8, 27.4],
    408: [49, 27.4],
    409: [49.2, 27.4],
    410: [49.4, 27.4],
    411: [49.6, 27.4],
    412: [49.7, 27.4],
    413: [49.9, 27.4],
    414: [50.1, 27.4],
    415: [50.2, 27.4],
    416: [50.4, 27.4],
    417: [50.6, 27.5],
    418: [50.7, 27.5],
    419: [50.9, 27.5],
    420: [51.1, 27.5],
    421: [51.2, 27.5],
    422: [51.4, 27.5],
    423: [51.6, 27.5],
    424: [51.7, 27.5],
    425: [51.9, 27.5],
    426: [52.1, 27.5],
    427: [51.2, 27.6],
    428: [52.4, 27.6],
    429: [52.5, 27.6],
    430: [52.7, 27.6],
    431: [52.9, 27.6],
    432: [53.1, 27.6],
    433: [53.2, 27.6],
    434: [53.4, 27.6],
    435: [53.6, 27.6],
    436: [53.7, 27.6],
    437: [53.9, 27.6],
    438: [54.1, 27.7],
    439: [54.2, 27.7],
    440: [54.3, 27.7],
    441: [54.5, 27.7],
    442: [54.7, 27.7],
    443: [54.8, 27.7],
    444: [55, 27.7],
    445: [55.2, 27.7],
    446: [55.3, 27.7],
    447: [55.5, 27.7],
    448: [55.7, 27.7],
    449: [55.8, 27.8],
    450: [56, 27.8],
    451: [56.2, 27.8],
    452: [56.3, 27.8],
    453: [56.5, 27.8],
    454: [56.7, 27.8],
    455: [56.8, 27.8],
    456: [57, 27.8],
    457: [57.2, 27.8],
    458: [57.3, 27.9],
    459: [57.4, 27.9],
    460: [57.6, 27.9],
    461: [57.8, 27.9],
    462: [57.9, 27.9],
    463: [58.1, 27.9],
    464: [58.3, 27.9],
    465: [58.4, 27.9],
    466: [58.6, 27.9],
    467: [58.8, 27.9],
    468: [59, 28],
    469: [59.1, 28],
    470: [59.2, 28],
    471: [59.4, 28],
    472: [59.6, 28],
    473: [59.7, 28],
    474: [60, 28],
    475: [60.1, 28],
    476: [60.2, 28],
    477: [60.4, 28],
    478: [60.6, 28.1],
    479: [60.7, 28.1],
    480: [60.9, 28.1],
    481: [60.1, 28.1],
    482: [60.3, 28.1],
    483: [61.4, 28.1],
    484: [61.5, 28.1],
    485: [61.7, 28.1],
    486: [61.9, 28.1],
    487: [62, 28.2],
    488: [62.2, 28.2],
    489: [62.3, 28.2],
    490: [62.5, 28.2],
    491: [62.7, 28.2],
    492: [62.8, 28.2],
    493: [63, 28.2],
    494: [63.2, 28.2],
    495: [63.3, 28.2],
    496: [63.4, 28.2],
    497: [63.6, 28.2],
    498: [63.8, 28.3],
    499: [63.9, 28.3],
    500: [64.1, 28.3],
  };
  const input = Math.min(Math.max(Math.round(m), 140), 500);
  const toReturn = table[input];
  return [Math.round(toReturn[1]), Math.round(toReturn[0])];
}
