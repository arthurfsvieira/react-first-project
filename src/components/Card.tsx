import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card = ({children}: Props) => {
    return (
        <div className="w-96 border-2 border-blue-300 p-3">
            {children}
        </div>
    );
}