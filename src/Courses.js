import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () => (
    // <Query query={gql`
    //     {
    //         allCourses {
    //             id 
    //             title
    //             author
    //             description
    //             topic
    //             url
    //         }
    //     }`

    //using https://countries.trevorblades.com
    
    // <Query query={gql`
    //     {
    //         continents {
    //             code
    //             name
    //         }
    //     }`

    <Query query={gql`
        {
            allBooks {
                isn
                title
                publisher
            }
        }`
    }
    >
        {({loading, error, data}) => {
             if(loading) return <p>loading...</p>;
             if (error) return <p>Error :(</p>;

                // return data.allCourses.map(({id, title, author, desciption, url}) => ( 
                // return data.continents.map(({code, name}) => (        
                return data.allBooks.map(({isn, title, publisher}) => (                
                    <div key={isn}>
                        <p>{`${title} PUBLISHED BY ${publisher}`}</p>
                    </div>
                )); 
        }}
    </Query>
);

export default Courses;