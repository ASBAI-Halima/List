import { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import ItemsList from "./ItemsList/ItemList";

const List = () => {
	const [productDetails, setProductDetails] = useState({
		name: "",
		price: 0,
	});
	const [unpackedItems, setUnpackedItems] = useState([]);
	const [packedItems, setPackedItems] = useState([]);

	const handleProductChange = (event) => {
		const key = event.target.name;

		setProductDetails({
			...productDetails,
			[key]: event.target.value,
		});
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();

		if (!productDetails.name || !productDetails.price)
			return;

		setUnpackedItems([
			...unpackedItems,
			productDetails,
		]);
		setProductDetails({ name: "", price: 0 });
	};

	const packItem = (product) => {
		setPackedItems([...packedItems, product]);
		setUnpackedItems([
			...unpackedItems.filter(
				(item) => product.name !== item.name
			),
		]);
	};

	const unpackItem = (product) => {
		setUnpackedItems([...unpackedItems, product]);
		setPackedItems([
			...packedItems.filter(
				(item) => product.name !== item.name
			),
		]);
	};

	const makeAllAsUnpacked = () => {
		setUnpackedItems([
			...unpackedItems,
			...packedItems,
		]);
		setPackedItems([]);
	};

	return (
		<div className="max-w-[500px] mx-auto p-4 flex flex-col gap-4 min-h-screen border-x bg-white">
			<form
				className="flex gap-2"
				onSubmit={handleSubmitForm}
			>
				<Input
					type="text"
					placeholder="Product"
					name="name"
					value={productDetails.name}
					onChange={handleProductChange}
				/>
				<Input
					type="text"
					placeholder="Price"
					name="price"
					min="0"
					value={productDetails.price}
					onChange={handleProductChange}
				/>
				<Button type="submit">Add</Button>
			</form>

			<ItemsList
				title="Unpacked Items"
				list={unpackedItems}
				setList={setUnpackedItems}
				cb={packItem}
				checked={false}
			/>

			<ItemsList
				title="Packed Items"
				list={packedItems}
				setList={setPackedItems}
				cb={unpackItem}
				checked={true}
			/>

			<Button onClick={makeAllAsUnpacked}>
				Make All As Unpacked
			</Button>
		</div>
	);
};

export default List;
