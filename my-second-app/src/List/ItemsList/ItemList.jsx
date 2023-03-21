import React, { useState } from "react";
import Item from "../Item/Item";
import Input from "../Input/Input";

const ItemsList = ({
	title,
	list,
	setList,
	cb,
	checked,
}) => {
	const [searchValue, setSearchValue] = useState("");

	const filteredList = list.filter((product) =>
		product.name.includes(searchValue)
	);

	const handleSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-semibold text-lg mb-4 text-green-500">
				{title} ( {list.length} )
			</h2>

			<Input
				type="text"
				placeholder={`Filter inside the ${title.toLowerCase()}`}
				value={searchValue}
				onChange={handleSearchValueChange}
			/>

			{filteredList.map((item, index) => (
				<Item
					key={index}
					product={item}
					list={list}
					setList={setList}
					cb={cb}
					checked={checked}
				/>
			))}
		</div>
	);
};

export default ItemsList;
