import { useContext, useState, createContext } from "react";
const ExampleContext = createContext();

const ExampleProvider = ({ children }) => {
  const [tests, setTests] = useState("frtyh");

  return (
    <ExampleContext.Provider value={{ tests, setTests }}>
      {children}
    </ExampleContext.Provider>
  );
};

const useExample = () => useContext(ExampleContext);

export { useExample, ExampleProvider };
