import {Button,Modal} from "react-bootstrap";

function ModalComp({show,setShow}) {

  const handleClose = () => setShow(false);

  return (
    <>    

      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Delete Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete..?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;