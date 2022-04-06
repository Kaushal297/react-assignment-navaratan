import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function PopupModal({
	btnHeading,
	handleFn,
	modalHeading,
	modalSubHeading,
	sendingUseState,
	setordersData,
	ordersData,
}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		setShow(true);
		const typeOfBtn = e.target.innerHTML;
		if (typeOfBtn === "Edit") {
			sendingUseState();
		} else {
			sendingUseState();
		}
	};

	let typeOfButton, customFunction, modalBtnColor, modalBtnText;

	if (btnHeading === "Delete") {
		modalBtnColor = typeOfButton = "danger";
		customFunction = () => {
			handleFn();
			handleClose();
		};
		modalBtnText = "Confirm Delete";
	} else if (btnHeading === "Edit") {
		modalBtnColor = typeOfButton = "success";
		modalBtnText = "Save Changes";
		customFunction = () => {
			handleFn();
		};
	} else {
		typeOfButton = "primary";
		modalBtnColor = "success";
		modalBtnText = "Add Order";
		customFunction = () => {
			if (handleFn()) {
				handleClose();
			}
		};
		modalHeading = "Fill in the below Details";
	}

	return (
		<>
			<Button variant={typeOfButton} onClick={handleShow}>
				{btnHeading}
			</Button>

			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>{modalHeading}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalSubHeading}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant={modalBtnColor} onClick={customFunction}>
						{modalBtnText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default PopupModal;
