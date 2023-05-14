import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) =>
    <div className="w-screen h-screen bg-gradient-to-b from-[#0B002A] via-[#0B002A] to-[#020202] flex justify-center items-center relative">{children}</div>

export default Container;
