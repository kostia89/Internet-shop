export function OrderInput({field, ...props}){
    return(
        <div>
            <input className="orderInput" {...field} {...props} placeholder={props.label} />
        </div>
        
    )
}