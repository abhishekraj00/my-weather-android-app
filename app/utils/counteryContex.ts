import { CountiesDataType } from './Model';
import { createContext } from "react";

interface CountryContextProp {
    country: CountiesDataType[];
    capital:string;
    setCountry: React.Dispatch<React.SetStateAction<CountiesDataType[]>>;
    setCapital: React.Dispatch<React.SetStateAction<string>>
  }
  
  export const ConuntryContext= createContext<CountryContextProp>({
    country: [],
    capital:"",
    setCountry: () => {},
    setCapital: () => {},
  });