import React from "react";
import Cards from "./utils/cards";
import banner from "../src/assets/banner.png"
import banner2 from "../src/assets/banner2.png"

function App() {
  return (
    <div className="min-h-full	 min-w-full">
      
     
     <div className="grid grid-cols-3 grid-rows-8  min-h-screen gap-2">
    
      <div className="bg-white p-3  row-span-4 ">
        <Cards />
        
        <button  class="w-2/3 h-12 bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
            </div>
            <div>
              
          <h3>Home</h3>

            </div>

          </div>
      </button>


        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
</div>
          
          <div>
          <h3>myBook</h3>

          </div>
          </div>
         

        </button>
        <button  class="w-2/3 h-12 bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>

            </div>
            <div>
            <h3>myVid</h3>

            </div>

          </div>
          
        </button>


        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>

            </div>
            <div>
            <h3>myIdea</h3>

            </div>

          </div>
         
        </button>


        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

            </div>
            <div>
            <h3>myJob</h3>
              </div>
          </div>
    </button>

        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div  class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
</svg>

            </div>
            <div>
            <h3>myPodcast</h3>

            </div>
          </div>

        
        </button>

        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div  class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>

            </div>
            <div>
            <h3>myReuse</h3>
              </div>          
              </div>
        
        </button>


        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
</svg>

            </div>
            <div>
            <h3>mySlowfood</h3>

            </div>
          </div>
         
        </button>
        <button  class="w-2/3 h-12  bg-slate-200 text-black rounded text shadow-xl ml-20 rounded-lg m-3">
          <div class="flex justify-center align-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
              </div>
              <div>
              <h3>myCM</h3>
                </div>
                </div>

        </button>

        <div class=" ml-20 h-10 w-20">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>

        
        
        <div class="w-3/5 h-full ml-20 bg-slate-600 rounded-3xl"  style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>

        </div>

        <div class="w-3/5 h-1/4 mt-10 ml-20 bg-slate-600 rounded-3xl"  style={{backgroundImage: `url(${banner2})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>

        </div>

  
    







        
      </div> 
     {/* <div className="bg-slate-400 p-3 rounded ">
     
     2
      

    
      </div> 
      <div className="bg-white p-3 rounded ">
        4
        
      </div> 
      <div className="bg-white p-3 rounded ">
        4
        
      </div> 
      <div className="bg-white p-3 rounded ">
        4
        
      </div>  */}
      {/* <div className="bg-blue-400 h-8 w-10">
      </div>  */}
     </div>
     </div>

    

);
  
}

export default App;
