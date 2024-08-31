import { cn } from "@/lib/utils";



const ProductPrice = ({priceValue, className}: {priceValue: number, className?:string}) => {
    const stringPriceValue = priceValue.toString()
    const [intStringValue, floatStringValue] = stringPriceValue.includes('.') ? stringPriceValue.split('.') : [stringPriceValue, '']
     

  return (
    <p className={cn('text-2xl', className)}>
       <span className="text-xs align-super">$</span>
       {intStringValue}
       <span className="text-xs align-super">{floatStringValue}</span>
    </p>
  )
}


export default ProductPrice;