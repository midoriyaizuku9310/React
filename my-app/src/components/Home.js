const Home = () => {
    const employee = {
        eid: 101,
        enmae: 'danish',
        salary: 10000
    }

    const friends = [
        { firstName: 'sonu', lastName: 'a' },
        { firstName: 'monu', lastName: 'b' },
        { firstName: 'tonu', lastName: 'c' },
    ]

    return (
        <>
            <h1>this is Home Component</h1>
            {/* <h1>Home components</h1> */}
            <p>{employee.eid}</p>
            {/* <p>{friends}</p> */}
            {friends.map(friend => {
                return (
                     <div key={friend.firstName}>
                        <p>firstname: {friend.firstName}</p>
                        <p>lastname: {friend.lastName}</p>
                    </div>
                )
            })}
        </>
        // <div>
        //     <h1>this is Home Component which wont be rendered</h1>
        // </div>

    )
    // return <h1>this is Home Component</h1>
}

export default Home;