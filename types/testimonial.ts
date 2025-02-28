export type Testimonial = {
  id: number;
  name: string;
  destination?: string;
  size?: {
    width: number;
    height: number;
  }  
  image: 
    | any  
    |{    
      light: any;
      dark: any;
    };
  content: string;
  designation: string;
};
