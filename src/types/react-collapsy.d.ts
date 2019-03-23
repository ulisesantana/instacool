declare module 'react-collapsy'{
    import {FunctionComponent, ReactNode, ReactNodeArray} from "react";
    export const Accordion: FunctionComponent<{
        headerClass?: string,
        title: string,
        className?: string,
        children: string | ReactNode | ReactNodeArray,
        contentWrapperClass?: string,
        isOpen?: boolean,
        onToggle?: () => void,
        headerChildren?: () => void
    }>;
    export default Accordion
}

