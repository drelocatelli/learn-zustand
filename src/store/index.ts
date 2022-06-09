import create from 'zustand';

interface StoreStates {
    name: string;
    setName: (name : string) => void
}

const useStore = create<StoreStates>((set, get) : StoreStates => <StoreStates>{
    name: 'LadyBug',
    setName: (name?: string) =>  set(state => ({...state, name})),
});

export default useStore;