import "./style.css";
import {Checkbox as RadixCheckbox} from "@radix-ui/themes";

export default function (props: any){
    return <RadixCheckbox className="Checkbox" {...props}/>
}