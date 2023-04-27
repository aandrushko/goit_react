import Box from './Box';

const ListOfBoxes = () => {
    const stringsArray = ['My name', 'My age','My last name'];
    return (
        <ul>
            {stringsArray.map((item, index) => <Box key={item} text={item}/>)}
        </ul>
    )
}

export default ListOfBoxes;