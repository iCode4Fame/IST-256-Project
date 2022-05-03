import React from 'react';


export default function fPage() {
  
  return (
    <main className="block col-2">

        <div style={divStyle}></div>;

        <h1 style="color:rgb(116, 113, 44)">Welcome to Our Bakery</h1>
        <p style="font-size:30px; color:rgb(116, 113, 44)">We are bakers of the StoreName. Our shop is dedicated to freshly baked and made bakery goods.</p>
     
         
        <div class="card" style="width: 20rem;">
        
          
          <div class="card-body">
            <p class="card-text">
                <ul>
                    <li style="font-size:20px; color:rgb(116, 113, 44)">Bread</li>
                    <img src="https://www.wideopeneats.com/wp-content/uploads/2019/10/bread.png" 
                     style="width:150px;height:100px;"></img>
                    <li style="font-size:20px; color:rgb(116, 113, 44)">Cookies</li>
                    <img src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" 
                     style="width:150px;height:100px;"></img>
                    <li style="font-size:20px; color:rgb(116, 113, 44)">Muffins</li>
                    <img src="https://static01.nyt.com/images/2016/05/03/dining/03COOKING-JORDANMARSHMUFFIN2/03COOKING-JORDANMARSHMUFFIN2-articleLarge-v2.jpg" 
                     style="width:150px;height:100px;"></img>
                    <li style="font-size:20px; color:rgb(116, 113, 44)">Cupcakes</li>
                    <img src="https://i.ytimg.com/vi/oP10qJrdndg/maxresdefault.jpg" 
                     style="width:150px;height:100px;"></img>
                </ul>
              </p>
            </div>
          </div> 
    </main>
  );
}