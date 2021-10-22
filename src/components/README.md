<!-- please preview in as md view -->

## But Why Atomic Design?

When I first started using this methodology, it was with a large React Single Page Application (SPA). We had a lot of custom components to create and this wasn’t a solution we could find when looking at present CSS frameworks and libraries. So the result was having to create these components by building them with HTML elements and using custom CSS. The concept of having one location with all the components was actually quite interesting and it actually led to faster development times.

By borrowing this terminology from Chemistry, Brad Frost introducing the Atomic Design concept and utilizing it with UI components makes sense. As the building blocks of websites are HTML elements and just like atoms these elements are combined together to form the complex pages. Each page designed by developers can be broken down into it’s smaller constituent components, similar to what is taught in Chemistry with molecules and organisms.

![](https://andelav4prod.wpengine.com/wp-content/uploads/2019/10/Screenshot-2019-10-25-at-2.31.27-PM.png)

Atomic design is atoms, molecules, organisms, templates, and pages concurrently working together to create effective interface design systems.

Atoms are the smallest possible components, such as buttons, titles, inputs, text. Atoms of our interfaces serve as the foundational building blocks of our components and can’t be broken down any further without ceasing to be functional. Molecules as they are named consist of two or more atoms, molecules are relatively simple groups of UI elements functioning together as a unit. Examples are A Textfield comprising of an HTML textInput, a label, and an error message or a search Box comprising of an HTML TextInput and a Button. Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

![](https://andelav4prod.wpengine.com/wp-content/uploads/2019/10/gif.gif)

Templates place components within a layout and demonstrate the design’s underlying content structure. They are basically a skeletal structure of what the page would look like without the components of the page. Pages are specific instances of templates that show what a UI looks like with real representative content in place. Templates and Pages (pages are just instances of templates) also contain organisms, molecules, and atoms. The joining together of these smaller components makes up our user interfaces in our applications.

![](https://andelav4prod.wpengine.com/wp-content/uploads/2019/10/Screenshot-2019-10-25-at-2.33.30-PM.png)

Folder structure

So using the components discussed earlier, we can flesh out a starting folder structure for an imaginary codebase. Remember the folder positions could vary across codebases but it is vital to discuss this with your team before implementing. In the screenshot above, I have a Components folder to house all our components used on the frontend, I have a UI folder to separate my smaller design components from the page-level structures.

I guess one of the recurring questions I got from other members of my team was what to do with components that use an internal state since this state could be reliant on the value of business logic supplied to it. It is important to distinguish this internal state from the business logic of your React application. A good example is the open and closed state of a dropdown button, this is a good example of an internal state of a component. With this approach, our components are basically like [dummy components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43) which are only updated depending on the props you update the components with.

## Benefits

Components can be developed separately from the application, tested and viewed on tools like a style guide before importing them into your application. This also means there is no over-reliance on back-end application logic for starting front-end development.

Once a set of patterns has been established, we can have a faster build process, with more flexibility in case a change needs to be made to the designs. Designs can be more consistent since we are re-using a lot of existing components.

This pattern also helps us manage our CSS a lot better since our CSS is tied to specific components. So depending on the architecture of your application you should only render the CSS utilized by the components rendered.

## Cons

Media queries do become a bit harder as when components in isolation you have no way to determine the size of parent containers. Components have no knowledge of their width so resizes happen in response to changes to the actual page sizes.

This solution can be remedied by introducing layout components that would surround your components and resize them accordingly. These layout components would implement CSS layout properties like flex, grid, etc.
