import { Note, Category } from "../components/molecules/active-notes/types";

export const notes: Note[] = [
  {
    id: 1,
    name: "Shopping list",
    created: "April 20, 2021",
    category: "task",
    content: "Tomatoes, bread",
    dates: "",
    archived: false,
  },
  {
    id: 2,
    name: "The theory of evolution",
    created: "April 27, 2021",
    category: "randomThought",
    content: "The evolution of earth",
    dates: "",
    archived: false,
  },
  {
    id: 3,
    name: "New Feature",
    created: "May 05, 2021",
    category: "idea",
    content: "Implement new technology in the face of resistance ",
    dates: "3/5/2021, 5/5/2021",
    archived: false,
  },
  {
    id: 4,
    name: "William Gaddis",
    created: "May 07, 2021",
    category: "quote",
    content: "Power doesn't corrupt. It just exposes who leaders really are. ",
    dates: "",
    archived: false,
  },
  {
    id: 5,
    name: "Books",
    created: "May 07, 2021",
    category: "task",
    content: "The Lean Startup",
    dates: "",
    archived: false,
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

// export let notesStatistic: Archive[] = [
//   {
//     id: 1,
//     category: "task",
//     archived: [],
//     active: 2,
//   },
//   {
//     id: 2,
//     category: "randomThought",
//     archived: [],
//     active: 1,
//   },
//   {
//     id: 3,
//     category: "idea",
//     archived: [],
//     active: 1,
//   },
//   {
//     id: 4,
//     category: "quote",
//     archived: [],
//     active: 1,
//   },
// ];