/*create element in react*/ 
// const heading =React.createElement("h1",
// { id: "heading", key: "h1" },
// "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



//nested  elements in html
{/* <div>
    <div>
        <h1></h1>
    </div>
</div> */}



// nested elements in ReactJs
const parent=React.createElement("div",
{ id: "parent", key: "parent" },
[
    React.createElement("div",
    { id: "child1", key: "child1" },
    [
        React.createElement("h1",
        { id: "heading1", key: "heading1" },
        "I am h1 tag inside child1 div"),
        React.createElement("h2",
        { id: "heading2", key: "heading2" },
        "I am h2 tag inside child1 div")
    ]),
    React.createElement("div",
    { id: "child2", key: "child2" },
    [
        React.createElement("h1",
        { id: "heading3", key: "heading3" },
        "I am h1 tag inside child2 div"),
        React.createElement("h2",
        { id: "heading4", key: "heading4" },
        "I am h2 tag inside child2 div")
    ])
]
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);   
