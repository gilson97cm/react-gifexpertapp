import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExportApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //    //setCategories([...categories,'The Flash']);
    //     setCategories(cats => [...cats, 'The Flash']);
    // };



    return (
        <>
            <h2>GifExportApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/*<button onClick={handleAdd}>Add</button>*/}
            <ul>
                {
                    categories.map(category => (
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        )
                    )
                }
            </ul>
        </>
    )
}