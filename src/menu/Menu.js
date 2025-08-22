import './Menu.scss';


function Menu({select, selectedOption}) {

  const options = [
    {name: "About Me", id: 'about'},
    {name: "Experience", id: 'xp'},
    {name: "Projects", id: 'projects'},
    {name: "Education", id: 'education'}
  ];

    return (
        <div className='menu'>
            { options.map((option) => (
                <span className={selectedOption === option.name ? 'selected' : 'default'} key={option.id} onClick={() => {select(option)}}>{option.name}</span>
            ))}
        </div>
    );
}

export default Menu;