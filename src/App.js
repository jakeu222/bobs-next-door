

// Core Deliverables
// As a user, I should be able to:

// See a table of the next door store names from Bob's Burgers.
// Fill out and submit the form to add a new store. This should add the new store to the table as well as post the new store to the backend API for persistence.
// Filter stores by typing into the search bar. Only stores with a name matching the search term should be store in the table.


import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from "react"

function App() {
  const [stores, setStores] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then(r => r.json())
      .then(data => setStores(data))
  }, [])

  function addNewStore(store) {
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(store)

    })

    fetch("http://localhost:8085/stores")
      .then(r => r.json())
      .then(data => setStores(data))

  }

  function handleSearch(searchText) {
    setSearchText(searchText)

  }

  const storesToDisplay = stores.filter(store => {
    return store.name.toLowerCase().includes(searchText.toLowerCase())
  })


  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search onSearch={handleSearch} />
      <NewStoreForm addNewStore={addNewStore} />
      <StoreList storeData={storesToDisplay} />
    </div>
  );
}

export default App;
