import * as readline from 'readline';

class TodoItem {
  description: string;
  dueDate: Date;
  isComplete: boolean;

  constructor(description: string, dueDate: Date) {
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = false;
  }

  complete(): void {
    this.isComplete = true;
  }
}

class TodoList {
  items: TodoItem[];

  constructor() {
    this.items = [];
  }

  add(description: string, dueDate: Date): void {
    const item = new TodoItem(description, dueDate);
    this.items.push(item);
    console.log(`Added item: ${item.description}`);
  }

  remove(index: number): void {
    const item = this.items[index];
    this.items.splice(index, 1);
    console.log(`Removed item: ${item.description}`);
  }

  complete(index: number): void {
    const item = this.items[index];
    item.complete();
    console.log(`Completed item: ${item.description}`);
  }

  print(): void {
    console.log("Todo List:");
    this.items.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.description} (Due: ${item.dueDate.toDateString()}, Completed: ${item.isComplete})`
      );
    });
  }
}

async function createTodoList(): Promise<void> {
  const todoList = new TodoList();
  let choice: string;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  do {
    console.log("1. Add item");
    console.log("2. Remove item");
    console.log("3. Mark item as complete");
    console.log("4. Print todo list");
    console.log("5. Exit");

    choice = await new Promise<string>((resolve) => {
      rl.question("Enter your choice (1-5): ", resolve);
    });

    switch (choice) {
      case "1":
        const description = await new Promise<string>((resolve) => {
          rl.question("Enter description: ", resolve);
        });
        const dueDate = new Date(
          await new Promise<string>((resolve) => {
            rl.question("Enter due date (YYYY-MM-DD): ", resolve);
          })
        );
        todoList.add(description, dueDate);
        break;
      case "2":
        const indexToRemove = parseInt(
          await new Promise<string>((resolve) => {
            rl.question("Enter index to remove: ", resolve);
          })
        ) - 1;
        todoList.remove(indexToRemove);
        break;
      case "3":
        const indexToComplete = parseInt(
          await new Promise<string>((resolve) => {
            rl.question("Enter index to complete: ", resolve);
          })
        ) - 1;
        todoList.complete(indexToComplete);
        break;
      case "4":
        todoList.print();
        break;
      case "5":
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid choice!");
        break;
    }
  } while (choice !== "5");

  rl.close();
}

createTodoList();
