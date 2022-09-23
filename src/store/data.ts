import uuid from "react-uuid";
import { Note, Category } from "../components/molecules/active-notes/types";

export const notes: Note[] = [
    {
        id: uuid(),
        name: "Shopping list",
        created: "April 20, 2021",
        category: "task",
        content: "Tomatoes, bread",
        dates: "",
    },
    {
        id: uuid(),
        name: "The theory of evolution",
        created: "April 27, 2021",
        category: "randomThought",
        content: "The evolution of earth",
        dates: "",
    },
    {
        id: uuid(),
        name: "New Feature",
        created: "May 05, 2021",
        category: "idea",
        content: "Implement new technology in the face of resistance ",
        dates: "3/5/2021, 5/5/2021",
    },
    {
        id: uuid(),
        name: "William Gaddis",
        created: "May 07, 2021",
        category: "quote",
        content: "Power doesn't corrupt. It just exposes who leaders really are. ",
        dates: "",
    },
    {
        id: uuid(),
        name: "Books",
        created: "May 07, 2021",
        category: "task",
        content: "The Lean Startup",
        dates: "",
    },
];

export const categories: Category = {
    task: {
        icon: "bi bi-cart-fill",
        label: "Task",
    },
    randomThought: {
        icon: "bi bi-gear-fill",
        label: "random Thought",
    },
    idea: {
        icon: "bi bi-lightbulb",
        label: "Idea",
    },
    quote: {
        icon: "bi bi-info-circle",
        label: "Quote",
    },
};