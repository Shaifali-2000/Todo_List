import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const ToDo = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
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
									<button>
										<MdDeleteForever />
									</button>
								</li>
							);
						})}
					</ul>
				</section>
			</section>
		</>
	);
};
