import { createContext } from "react";

const messageContext = createContext({messages: [], setMessages:() => {}})

export {messageContext}