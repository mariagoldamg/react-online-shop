import Clothes from './Clothes';
import Buttons from './Buttons';
import { useState } from 'react';
import { data } from './data';


function Home() {

    const [shop, setShop] = useState(data);
    const chosenClothes = (searchTerm) =>{
      const newClothes = data.filter(element=>
      element.searchTerm ===searchTerm);
      setShop (newClothes);
    } 
    return (
        <div>
        <div className='cont'> 
        <h2 className='back'>Free Standard Shipping </h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes allClothes = {shop}/>
      
    </div>
  );
}


export default Home;