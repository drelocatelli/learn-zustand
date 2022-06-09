import useStore from "./store";

export default function Test() {

    const {name} = useStore();
    
    return(
        <>
            Ola, {name}
        </>
    );
}