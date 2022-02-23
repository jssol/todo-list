/**
 * @jest-environment jsdom
 */

import TaskList from "./taskManager";
import Task from "./task";

const taskClass = new TaskList();

// describe("testing adding and deleting", () => {
// 	test("adding", () => {
// 		expect(taskClass.addTask("Hello")).toMatch(taskClass.tasks[0]);
// 	});
// });
describe("testing adding ", () => {
	test("adding the task", () => {
		taskClass.addTask("Hello");
		expect(taskClass.tasks[0].description).toEqual("Hello");
	});
	test("adding the task", () => {
		taskClass.addTask("world");
		expect(taskClass.tasks[1].description).toEqual("world");
	});
	test("adding the task", () => {
		taskClass.addTask("Microverse");
		expect(taskClass.tasks[2].description).toEqual("Microverse");
	});
});
describe("testing deleting ", () => {
	test("deleting the task", () => {
		taskClass.removeTask(0);
		expect(taskClass.tasks.length).toBe(2);
	});
	test("deleting the task", () => {
		taskClass.removeTask(1);
		expect(taskClass.tasks.length).toBe(1);
	});
	test("deleting the task", () => {
		taskClass.removeTask(0);
		expect(taskClass.tasks.length).toBe(0);
	});
});

// addTask = (description) => {
// 	if (description.trim()) {
// 		const task = new Task(description.trim(), this.tasks);
// 		this.tasks.push(task);
// 	}
// };

// test("the shopping list has milk on it", () => {
// 	expect(shoppingList).toContain("milk");
// 	expect(new Set(shoppingList)).toContain("milk");
// });
