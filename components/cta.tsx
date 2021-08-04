import Button from "react-bootstrap/Button";
import {CTAModel} from "../lib/model";


export default function CTA(cta:CTAModel){
   return (
       <Button href={cta.url} variant={cta.isSecondary ? 'secondary' : 'primary'} >
           <span>{cta.text}</span>
       </Button>
   )
}