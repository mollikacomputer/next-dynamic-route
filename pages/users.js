import React from 'react';

const usersList = ({users}) => {
    return (
        <div>
            <h2 className="text-3xl">List of Users Total Users is: {users.length} </h2>
            <hr/>
            <hr/>
            {
                users.map(user =>{
                    return(
                        <div key={user.id}>
                            <p> user Name :{ user.name} </p>
                            <p> user email :{ user.email} </p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default usersList;

export const getStaticProps = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return{
        props:{
            users:data,
        }
    }
}