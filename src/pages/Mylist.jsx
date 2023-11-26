
import AliceImage from './public/img/avators/alice.jpg';
import Header from '../components/Header';

export function Mylist() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />   
            <div className="flex flex-col justify-top items-center flex-col w-full h-full overflow-auto">
                <div className="flex flex-row bg-white bg-opacity-80 w-10/12 h-64 shadow-md shadow-slate-900 rounded-md shrink mb-2">
                    <div className="flex flex-col justify-center items-center w-2/12 py-2">
                        <img className="w-8/12 rounded-sm" src={AliceImage} alt="Alice in Wonderland" />
                        <button id="addToListBtn" className="text-sky-100 text-center bg-sky-600 w-28 h-5 m-1 shadow-inner shadow-white">Add to List</button>
                        <select id="listSelect" className="hidden">
                            <option value="readingList">Reading List</option>
                            <option value="wishlist">Wishlist</option>
                            <option value="favorites">Favorites</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-10/12 mr-8">
                        <p className="text-orange-950 text-left text-2xl justify-self-center font-bold antialiased mt-2">Alice in Wonderland <span className="text-blue-600 text-sm">(2019)</span></p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased my-2">by Carroll</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-serif antialiased">ISBN:</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased">The story tells of a young girl who falls down a rabbit hole into a hallucinogenic world populated by talking packs of cards, and animals who look at pocket watches, smoke pipes and have tea parties.</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased">Reviews: ?</p>
                    </div>
                </div>
            </div>
    </div>
  ); 
}
