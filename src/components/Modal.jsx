import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // render children or self
  const elRef = useRef(null);

  //1. create a unique containier, returns the same div everytime
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  //2. get the continaer to contain the modal, and add stuff to it.
  //2. remove the stuff added to it when component unmount
  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current); //component will unmount,
    // before component unmount, the returned function will be called.
  }, []);

  // 3. render children to the domNode(container === elRef === modal)
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
