import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const Key = "key";
export const ToDo = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState(() => {
		const rawData = localStorage.getItem(Key);
		if (!rawData) return [];
		return JSON.parse(rawData);
	});
	const [dateTime, setDateTime] = useState("");
	setInterval(() => {
		const now = new Date();
		const formattingDate = now.toLocaleDateString();
		const formattingTime = now.toLocaleTimeString();
		setDateTime(`${formattingDate}-${formattingTime}`);
	}, 1000);
	const handleChange = (value) => {
		setInputValue(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!inputValue) return;
		if (task.includes(inputValue)) {
			setInputValue("");
			return;
		}
		setTask((prevTask) => [...prevTask, inputValue]);

		setInputValue("");
	};
	//ADD TODO DATA ON LOCAL STORAGE
	localStorage.setItem(Key, JSON.stringify(task));
	//TODO HANDLEDELETE FUNCTION
	const handleDelete = (value) => {
		console.log(task);
		console.log(value);
		const updatedElm = task.filter((CurlElm) => CurlElm != value);
		setTask(updatedElm);
	};
	const HandleClear = () => {
		setTask([]);
	};
	return (
		<>
			<section className="Todo-container">
				<h1>To_Do List</h1>
				<h2>{dateTime}</h2>
				<section className="Form-Container">
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								className="btn-text"
								autoComplete="off"
								value={inputValue}
								onChange={(event) => handleChange(event.target.value)}
							/>
						</div>
						<span>
							<button type="submit" className="btn-submit">
								Add Task
							</button>
						</span>
					</form>
				</section>
				<section className="unorderedList">
					<ul>
						{task.map((CurlElm, index) => {
							return (
								<li key={index}>
									<span>{CurlElm}</span>
									<button>
										<MdCheck />
									</button>
									<button
										className="delete-btn"
										onClick={() => handleDelete(CurlElm)}
									>
										<MdDeleteForever />
									</button>
								</li>
							);
						})}
					</ul>
				</section>
				<section>
					<button onClick={HandleClear}>Clear All</button>
				</section>
			</section>
		</>
	);
};
