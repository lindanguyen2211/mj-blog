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
                    <input type='checkbox' name='education' id='education' value='education' />
                    <label htmlFor='education'>Education</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='implantology' id='implantology' value='implantology' />
                    <label htmlFor='implantology'>Implantology</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='Occlusodontology' id='Occlusodontology' value='Occlusodontology' />
                    <label htmlFor='Occlusodontology'>Occlusodontology & TMD</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='prosthodontic' id='prosthodontic' value='prosthodontic' />
                    <label htmlFor='prosthodontic'>Prosthodontic</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='splint' id='splint' value='splint' />
                    <label htmlFor='splint'>Splint</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='studies' id='studies' value='studies' />
                    <label htmlFor='studies'>Studies</label>
                </div>
                <div className='input-row'>
                    <input type='checkbox' name='technologies' id='technologies' value='technologies' />
                    <label htmlFor='technologies'>Technologies</label>
                </div>
            </form>
        </aside>
  );
};

export default Sidebar;
