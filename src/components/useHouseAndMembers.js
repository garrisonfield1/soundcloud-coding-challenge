import useFetch from "./useFetch"
// import { useState } from 'react';
// import { useEffect, useState } from 'react';

const useHouseAndMembersArray = (data) => {
  // const {status, data} = useFetch(url)
  
  // if(status === '200 fetched' && data){

    // create an array of objects of house name
    const houseAndMembersWithURLArray = data.map( (house) => {
      return { 
        house: house.name, 
        swornMembers: house.swornMembers.length ? house.swornMembers : null 
      };
    })
    return houseAndMembersWithURLArray;
  // }
}

export default useHouseAndMembersArray;