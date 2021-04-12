import animals from './animals.js';

const PetList = () => {
    return(
        <div>
            {
                animals.map((animal) => {
                    return (
                        <div>
                            <h2>{animal.name}</h2>
                            <p>Type: {animal.type}</p>
                            <p>Size: {animal.size}</p>
                            <img src={animal.picture} alt={`An adorable ${animal.type}`} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PetList;