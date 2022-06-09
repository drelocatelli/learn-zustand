import { FormEvent } from "react";
import useStore from "./store";

export default function App() {

  const {name, setName} = useStore();

  function changeName(e : FormEvent) {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const formName = form.get('nome')?.toString() || name;

    setName(formName)
    
  }
  
  return (
    <>
      Ola {name}! <br />

      <form onSubmit={e => changeName(e)}>
        <input type="text" name='nome' />
        <button type="submit">Mudar nome</button>
      </form>
    </>
  );
}