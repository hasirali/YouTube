# For State Management Globally
- use Redux Tool Kit
> what it solve
- help to avoid prop Drilling
- when no. of component and elemnt are large then we use or project is large , keeping differnet component in synch for example cart or youtube hamburger(click on header change on sidebar)
- make redux store , so any component can access it as it is a global store
```
npm i @reduxjs/toolkit
npm i react-redux
```
- then create a store in utils folder
- Instatt @reduxjs/tootkit ancil react-redux
- Build our store
- Connect our store to our app
- Slice (cartStice)
- dispatch(action)
- Selector
# Steps

<!-- step 1 -->
## create a Store [Configruing Store] (Store.jsx)
```
import { ConfigureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const Store = ConfigureStore({
    // REDUCER
    reducer: {
        app: AppSlice,
    }
});

export default Store;
```
<!-- step 2 -->
## Create Slice (AppSlice.jsx)
```
import { createSlice } from "@reduxjs/toolkit";
// hamburger Slice 
const AppSlice = createSlice({
    name: "app",
    intitalState:{
        isMenuOpen : true,
    },
    reducers: {

      <!  -- yeh ACtion hai which is use to communicate with Redux Store bahot saare ho sakte additem removeItem etc.. -->
      <!-- aur jab yahi Action Dispatch hota hai  like if i want to add item then i will dispatch the addItem -->
      <!-- toggleMenu is Action and yeh aapka Reducer Function hai: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
             -->
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen; //agar khula hai to band or band hai to khul jayega
        }
    }
})

export const {toggleMenu} = AppSlice.actions;
export default AppSlice.reducer;
```
<!-- Step 3 -->
## providing our store to app 

```
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Store from "./Utils/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider store={Store}>
      <Head />
      <Body />
    </Provider>
    </>
  );
}

export default App;
```
## CHecking the Store by Extension