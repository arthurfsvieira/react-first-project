export const Person = () => {
    const data = {
        name: "Franz Kafka",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/800px-Franz_Kafka%2C_1923.jpg",
        role: ["Writer", "Poet"]
    }
    
    
    return (
        <>
            <h1>{data.name}</h1>
            <img 
            src={data.avatar} 
            alt={data.name}
            className="w-56 border rounded-lg"
            />
        </>
    );
}