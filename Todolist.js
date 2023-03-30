"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    TodoItem.prototype.complete = function () {
        this.isComplete = true;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.add = function (description, dueDate) {
        var item = new TodoItem(description, dueDate);
        this.items.push(item);
        console.log("Added item: ".concat(item.description));
    };
    TodoList.prototype.remove = function (index) {
        var item = this.items[index];
        this.items.splice(index, 1);
        console.log("Removed item: ".concat(item.description));
    };
    TodoList.prototype.complete = function (index) {
        var item = this.items[index];
        item.complete();
        console.log("Completed item: ".concat(item.description));
    };
    TodoList.prototype.print = function () {
        console.log("Todo List:");
        this.items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.description, " (Due: ").concat(item.dueDate.toDateString(), ", Completed: ").concat(item.isComplete, ")"));
        });
    };
    return TodoList;
}());
function createTodoList() {
    return __awaiter(this, void 0, void 0, function () {
        var todoList, choice, rl, _a, description, dueDate, _b, indexToRemove, _c, indexToComplete, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    todoList = new TodoList();
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    _e.label = 1;
                case 1:
                    console.log("1. Add item");
                    console.log("2. Remove item");
                    console.log("3. Mark item as complete");
                    console.log("4. Print todo list");
                    console.log("5. Exit");
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question("Enter your choice (1-5): ", resolve);
                        })];
                case 2:
                    choice = _e.sent();
                    _a = choice;
                    switch (_a) {
                        case "1": return [3 /*break*/, 3];
                        case "2": return [3 /*break*/, 6];
                        case "3": return [3 /*break*/, 8];
                        case "4": return [3 /*break*/, 10];
                        case "5": return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 12];
                case 3: return [4 /*yield*/, new Promise(function (resolve) {
                        rl.question("Enter description: ", resolve);
                    })];
                case 4:
                    description = _e.sent();
                    _b = Date.bind;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question("Enter due date (YYYY-MM-DD): ", resolve);
                        })];
                case 5:
                    dueDate = new (_b.apply(Date, [void 0, _e.sent()]))();
                    todoList.add(description, dueDate);
                    return [3 /*break*/, 13];
                case 6:
                    _c = parseInt;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question("Enter index to remove: ", resolve);
                        })];
                case 7:
                    indexToRemove = _c.apply(void 0, [_e.sent()]) - 1;
                    todoList.remove(indexToRemove);
                    return [3 /*break*/, 13];
                case 8:
                    _d = parseInt;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question("Enter index to complete: ", resolve);
                        })];
                case 9:
                    indexToComplete = _d.apply(void 0, [_e.sent()]) - 1;
                    todoList.complete(indexToComplete);
                    return [3 /*break*/, 13];
                case 10:
                    todoList.print();
                    return [3 /*break*/, 13];
                case 11:
                    console.log("Goodbye!");
                    return [3 /*break*/, 13];
                case 12:
                    console.log("Invalid choice!");
                    return [3 /*break*/, 13];
                case 13:
                    if (choice !== "5") return [3 /*break*/, 1];
                    _e.label = 14;
                case 14:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
createTodoList();
