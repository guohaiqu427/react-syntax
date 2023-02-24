core: 
1. JSX under the hook uses React.createElement
2. Component must always return a Markup, which is the result of React.createElement
3. One way data flow 


syntax: search for shorthand  cmd + shift + r

naming: 
    component file names: ComponentName

function component:

    shorthand: rfc

    export default function Pet(props) {
    return <div>{props.name}</div>;
    }

useState Hook: 

    shorthand: usesatesnippet

    import { useState } from "react";

    const [location, setLocation] = useState("Washington DC");

    onChange={(e) => {
         setLocation(e.target.value);
    }

    note: 
        dont mutate global state (eg: mutate state outside of component)
        state are called in the same order everytime: no conditions that changes the order such as if statement, or for loops
        useHook: everytime sees use, you are working with Hook

Map array: 
    const ANIMALS = ["dog", "cat", "bird", "fish"];

    {
        ANIMALS.map(animal => 
            ( <option key={animal}>{animal}</option> )       
        )
    }
    1. watch out the () after =>
    2. the array that does not change, are named all caps
    3. needs a key 

useEffect: 
    import {useEffect} from "react"

    const [pets, sePets] = useState([])

    useEffect(() => {
        requestApis();
    }, []); effect hook dependiences, use hook when something changes

    async function requestApis() {
        const res = await fetch(`${}`);
        const json = await res.json();
        setPets(json.pets);
    }

     onSubmit={(e) => {
          e.preventDefault();
          requestPets();
          }
     }

    1. chain awaits. 
    2. [] dep will run once, ["const1", "const2"] runs when eiter changes
    3. or call  requestApis() otherwhere 
    4. useEffect callbacks has to be sync function, to use async inside useEffect, crete async outside and call from within.

custom hooks: 
    the order of setState matters 
    object / array destructuring  
    set localCache for custom hook as global value 
    check params passedd to customHook before perform api calls
    setState before and after apiCall 
    return states as array.
    useEffect dep: param of custom hook 

passing props: 
    destructuring or not destruing
    when passing data from one to another, watchout the form of data. 
    this can cause errors
    props are read only, immmutatbel 

    case1: passing basic types without destructuring
    case2: passing basic types with destructuring
    case3: passing object types with link to a object (with or without destructuring)
    case4: passing object types inline (with or with out destructuring)

    <Welcome text={greeting} />
    case 1: 
     (props) => {
        return <h1>{props.text}</h1>;
    };
    case 2: 
    ({ text }) => {
        return <h1>{text}</h1>;
    };
    -----

     <Welcome text={{ greeting: 'Welcome to React' }} />
    
    const greetingObject = { greeting: 'Welcome to React' };
    <Welcome text={greetingObject} />

    ({ text }) => {
         return <h1>{text.greeting}</h1>;
    };  












controlled form  vs uncontrolled form 
    controlled from : react handles all the input 
    uncontrolled from: browser handles all the changes.
   








toolkits: 
    prettier setup: 
        npm install -D prettier
        create .prettierrc file to config, place an {} in there
        turn on format on save in settings
        install vscode extension : prettier code formatter
        turn on "Prettier: Require Config" in settings
        set editor: default formatter to  prettier code formatter
        
        or: package.json 
        "format": "prettier --write \"src/**/*.{js,jsx}\"",

    eslint setup: 
        npm i -D eslint eslint-config-prettier
        npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

        create .eslintrc.json file
        copy the config
        package.json: "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",

        npm i -D eslint-plugin-react-hooks   
                and update rc file 













 not so important : 
 1. call root.render()  to render the entire react app