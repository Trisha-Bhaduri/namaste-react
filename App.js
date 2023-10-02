    
    // const heading = React.createElement("h1", {}, "Hello World from React");
    const heading = React.createElement("div", {id:"child", key:"test"},[
        React.createElement("h2", {id:"headtwo", key:"testh"},"Hello H2!!!"),
        React.createElement("h1", {id:"childheadone", key:"testh1"},"Hello H1")
    ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);