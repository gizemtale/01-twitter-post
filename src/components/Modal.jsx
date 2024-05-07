import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    // div will be used to render a background, a backdrop
    // dialog element will hold the actual modal content
    // children always refers to the content that's passed between the opening and closing tags of your custom component (yani PostsList'in icindeki <Modal></Modal> tagleri arasindaki content)
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
    // open prop is required by the default dialog element to make sure it's visible. default olarak open={true}
  );
}

export default Modal;
