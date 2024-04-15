const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      vehicles: [],
      characters: [],
      planets: [],
      favorites: [],
      singleCharacter: null,
      singlePlanet: null,
      singleVehicle:null,
    
    },
    actions: {
      // Use getActions to call a function within a fuction
      
      getVehicles: async () =>  { 
        try { 
          const vehicleRes = await fetch("https://www.swapi.tech/api/vehicles");
         
          const vehicleData = await vehicleRes.json();
          setStore({vehicles: [...vehicleData.results]})
        }catch (error) {
          console.log("error fetching planets", error);
        }
       }, 
       getOneVehicle: async (id) => {
        try {
          const vehicleRes = await fetch(
            "https://www.swapi.tech/api/vehicles/" + id 
          );
          const vehicleData = await vehicleRes.json();
          console.log(vehicleData)
          console.log(id)
          setStore({ singleVehicle: vehicleData.result });
        } catch (error) {
          console.log("error fetching vehicles", error);
        }
      },

      getPlanets: async () =>  { 
        try { 
          const planetRes = await fetch("https://www.swapi.tech/api/planets");
          
          const planetData = await planetRes.json();
          setStore({planets: [...planetData.results]})
        }catch (error) {
          console.log("error fetching planets", error);
        }
       }, 
       getOnePlanet: async (id) => {
        try {
          const planetRes = await fetch(
            "https://www.swapi.tech/api/planets/" + id
          );
          const planetData = await planetRes.json();
          console.log(planetData)
          console.log(id)
          setStore({ singlePlanet: planetData.result });
        } catch (error) {
          console.log("error fetching characters", error);
        }
      },
     
        

      getCharacters: async () => {
        try {
          const characterRes = await fetch("https://www.swapi.tech/api/people");

          const charactersData = await characterRes.json();

          setStore({ characters: [...charactersData.results] });
        } catch (error) {
          console.log("error fetching characters", error);
        }
      },

      getOneCharacters: async (id) => {
        try {
          const characterRes = await fetch(
            "https://www.swapi.tech/api/people/" + id
          );
          const charactersData = await characterRes.json();

          setStore({ singleCharacter: charactersData.result });
        } catch (error) {
          console.log("error fetching characters", error);
        }
      },

      addToFavorites: (favoriteItem) => {
        const { store, setStore } = getStore();
        const updatedFavorites = [...store.favorites, favoriteItem];
        console.log("updatedFavorites")
        console.log(updatedFavorites)
        setStore({ ...store, favorites: updatedFavorites });
        
      },
      
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
