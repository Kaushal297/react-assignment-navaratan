import { useState } from "react";
import PopupModal from "../components/PopUpModal";
function Order() {
	const [ordersData, setordersData] = useState([
		{
			order_number: 22543,
			order_due_data: "2022-04-15",
			customer_name: "Raju Shrivastav",
			customer_address: "#114, central park, new delhi",
			customer_phone: "9898989898",
			order_total: "457856",
		},
		{
			order_number: 32543,
			order_due_data: "2022-04-12",
			customer_name: "Ramesh sharma",
			customer_address: "#114, central park, new delhi",
			customer_phone: "9898989898",
			order_total: "457856",
		},
		{
			order_number: 42543,
			order_due_data: "2022-04-18",
			customer_name: "Shivani ranjan",
			customer_address: "#114, central park, new delhi",
			customer_phone: "9898989898",
			order_total: "71556",
		},
		{
			order_number: 52543,
			order_due_data: "2022-04-20",
			customer_name: "Jayanth mandal",
			customer_address: "#114, central park, new delhi",
			customer_phone: "9898989898",
			order_total: "4556",
		},
		{
			order_number: 62543,
			order_due_data: "2022-04-25",
			customer_name: "james bond",
			customer_address: "#114, central park, new delhi",
			customer_phone: "9898989898",
			order_total: "4565",
		},
	]);

	const [orderNo, setOrderNo] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [total, setTotal] = useState("");
	const [date, setDate] = useState("");

	const [errorMessage, setErrorMessage] = useState([]);

	const handleNewOrder = (e) => {
		// show the popupmodal
		if (
			name === "" ||
			phone === "" ||
			address === "" ||
			total === "" ||
			date === ""
		) {
			const errors = [];
			if (name === "") {
				errors.push("Name cannot be empty");
			}
			if (phone === "") {
				errors.push("Phone cannot be empty");
			}
			if (address === "") {
				errors.push("Address cannot be empty");
			}
			if (total === "") {
				errors.push("Total cannot be empty");
			}
			if (date === "") {
				errors.push("Date cannot be empty");
			}
			console.log(errors);
			setErrorMessage(errors);
		} else {
			let orderNumber;
			if (orderNo === "") {
				orderNumber = generateOrderNumber();
				setordersData((prevData) => [
					...prevData,
					{
						order_number: orderNumber,
						order_due_data: date,
						customer_name: name,
						customer_address: address,
						customer_phone: phone,
						order_total: total,
					},
				]);
				console.log(ordersData);
			} else {
				orderNumber = orderNo;
				console.log(orderNo, orderNumber);
				const orders = ordersData;
				let currentIndex;
				const curretOrder = orders.filter((item, index) => {
					if (item.order_number === orderNo) {
						currentIndex = index;
						console.log(index);
					}
					return item.order_number === orderNo;
				});
				console.log(curretOrder);
				const newItem = {
					order_number: orderNo,
					order_due_data: date,
					order_total: total,
					customer_phone: phone,
					customer_address: address,
					customer_name: name,
				};
				orders[currentIndex] = newItem;
				console.log(orders);
				setordersData(orders);
			}
		}
	};

	const handleDelete = (orderNumber) => {
		console.log(orderNumber);
		const filteredArray = ordersData.filter((item) =>
			item.order_number !== orderNumber ? item : ""
		);
		setordersData(filteredArray);
	};

	const generateOrderNumber = () => {
		const lastDigits = Math.floor(
			Math.random() * (99999 - 10000 + 1) + 10000
		);
		console.log(lastDigits);
		return lastDigits;
	};

	const disablePastDate = () => {
		const today = new Date();
		const dd = String(today.getDate() + 1).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		const yyyy = today.getFullYear();
		return yyyy + "-" + mm + "-" + dd;
	};

	const subHeadingForCreate = (
		<div className='flex flex-col gap-2'>
			<h5>Personal Details</h5>
			<div className='flex gap-2'>
				<input
					type='text'
					placeholder='Full Name'
					className='grow'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='Phone Number'
					className='grow'
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
				/>
			</div>
			<input
				type='text'
				placeholder='Address'
				value={address}
				onChange={(e) => {
					setAddress(e.target.value);
				}}
			/>
			<h5>Order Details</h5>
			<div className='flex gap-2'>
				{/*  */}
				<input
					type='date'
					placeholder='Select a date'
					className='grow'
					min={disablePastDate()}
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='Order Total'
					className='grow'
					value={total}
					onChange={(e) => {
						setTotal(e.target.value);
					}}
				/>
			</div>
		</div>
	);
	return (
		<div className='w-inherit h-inherit flex flex-col justify-center items-center'>
			<div className='w-inherit flex justify-between'>
				<h1>All Orders</h1>
				<PopupModal
					btnHeading={`New Order`}
					handleFn={() => {
						handleNewOrder();
					}}
					modalSubHeading={subHeadingForCreate}
					setErrorMessage={setErrorMessage}
					errorMessage={errorMessage}
					sendingUseState={() => {
						setOrderNo("");
						setName("");
						setPhone("");
						setAddress("");
						setTotal("");
						setDate("");
					}}
				/>
			</div>
			<table>
				<thead>
					<tr>
						<th>Order number</th>
						<th>Order Due Date</th>
						<th>Customer buyer name</th>
						<th>Customer Address</th>
						<th>Customer Phone</th>
						<th>Order Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ordersData.length !== 0
						? ordersData.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.order_number}</td>
										<td>{item.order_due_data}</td>
										<td>{item.customer_name}</td>
										<td>{item.customer_address}</td>
										<td>{item.customer_phone}</td>
										<td>{item.order_total}</td>
										<td>
											<div className='flex justify-evenly gap-2'>
												<PopupModal
													btnHeading={`Edit`}
													handleFn={() => {
														handleNewOrder();
													}}
													sendingUseState={() => {
														setOrderNo(
															item.order_number
														);
														setName(
															item.customer_name
														);
														setPhone(
															item.customer_phone
														);
														setAddress(
															item.customer_address
														);
														setTotal(
															item.order_total
														);
														setDate(
															item.order_due_data
														);
													}}
													modalHeading={`Edit your Order`}
													modalSubHeading={
														subHeadingForCreate
													}
													setordersData={
														setordersData
													}
													ordersData={ordersData}
												/>
												<PopupModal
													btnHeading={`Delete`}
													handleFn={() => {
														handleDelete(
															item.order_number
														);
													}}
													modalHeading={
														"Are you sure you want to delete this ?"
													}
													modalSubHeading={`You won't be able to undo the changes`}
												/>
											</div>
										</td>
									</tr>
								);
						  })
						: ""}
				</tbody>
			</table>
		</div>
	);
}

export default Order;
