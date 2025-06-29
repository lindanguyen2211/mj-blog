import React from "react";

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <form action=''>
                <div className='search'>
                    <label htmlFor='searchbar'>SEARCH HERE</label>
                    <input type='text' name='searchbar' id='searchbar' />
                </div>
                <hr />
                <div className='input-row'>
                    <input type='checkbox' name='prosthodontics' id='prosthodontics' value='prosthodontics' />
                    <label htmlFor='prosthodontics'>Prosthodontics</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='orthodontics' id='orthodontics' value='orthodontics' />
                    <label htmlFor='orthodontics'>Orthodontics</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='tmdtmj' id='tmdtmj' value='tmdtmj' />
                    <label htmlFor='tmdtmj'>TMD/TMJ</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='periodontics' id='periodontics' value='periodontics' />
                    <label htmlFor='periodontics'>Periodontics</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='oral' id='oral' value='oral' />
                    <label htmlFor='oral'>Oral and Maxillofacial</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='implantology' id='implantology' value='implantology' />
                    <label htmlFor='implantology'>Implantology</label>
                </div>
            </form>
        </aside>
  );
};

export default Sidebar;
