import { createContext, useRef } from "react";
import { useNavigate } from "react-router";

interface ModalContextType {
    dialog: React.RefObject<HTMLDialogElement> | null;
    close: () => void;
    navigate: (uri:string) => void;
}

export const ModalContext = createContext<ModalContextType>({
  dialog: null,
  close: () => {},
  navigate: () => {},
});

export default function ModalContextProvider({
  children,
}: React.PropsWithChildren) {
    const dialog = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    //Modal closing
    function close() {
      navigate("/");
      dialog.current?.close();
    }


  return (
    <ModalContext.Provider value={{
      dialog,
      close,
      navigate
    }}>
      {children}
    </ModalContext.Provider>
  );
}
