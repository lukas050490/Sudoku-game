import { MasterButton } from "./styles"

export const Button = ({children, ...props}) => {

    return(
        <MasterButton {...props}>{children}</MasterButton>
    )
}