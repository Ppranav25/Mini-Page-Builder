import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../../redux/action";
import { setModalState } from "../../redux/action";
function ModalUse({ modalData }) {
  const [text, setText] = useState(modalData.text?modalData.text:"");
  const [X, setX] = useState(modalData.X);
  const [Y, setY] = useState(modalData.Y);
  const [fontSize, setFontSize] = useState(modalData.fontSize?modalData.fontSize:"");
  const [fontWeight, setFontWeight] = useState(modalData.fontWeight?modalData.fontWeight:"");
 const dispatch= useDispatch()
  const handleSubmit = () => {
    const data= {
    type:modalData.type,
    text,
    X,
    Y,
    fontSize,
    fontWeight
    }
    if(modalData.id){
     data.id=modalData.id;
    }
    dispatch(addText(data));
    dispatch(setModalState({isModalOpen:false}));
   
  };

  const handleClose = () => {
    dispatch(setModalState({isModalOpen:false}));
  };


  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute"  }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Edit {modalData.type}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Text</Form.Label>
              <Form.Control type="text" placeholder="This is a label" 
               value={text} onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>X</Form.Label>
              <Form.Control type="text" 
               value={X} onChange={(e) => setX(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Y</Form.Label>
              <Form.Control type="text" 
               value={Y} onChange={(e) => setY(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Font Size</Form.Label>
              <Form.Control type="text" 
               value={fontSize} onChange={(e) => setFontSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput5">
              <Form.Label>Font Weight</Form.Label>
              <Form.Control type="text" 
               value={fontWeight} onChange={(e) => setFontWeight(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalUse;
