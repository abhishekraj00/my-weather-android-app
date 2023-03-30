export interface CaptitalDataType {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    precip_in: number;
  }


export interface CountiesDataType {
    name: {
      common: string;
    };
    capital: string[];
    latlng: number[];
    flags: {
      png: string;
      alt: string;
    };
    population: number;
  }