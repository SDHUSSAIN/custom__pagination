import React from 'react'


const Page = ({posts,postPerPage,paginate}) => {
    
    const pageNumbers = [];

    for( let i = 1; i < Math.ceil(posts/postPerPage)+1; i++){
        pageNumbers.push(i);
    }
    
    return (
        <div>
            <ul style ={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}} >
            {
                pageNumbers.map((number)=>{
                    return <li style={{listStyle:'none'}} >
                        <a key={number} onClick={()=>paginate(number)} style={{padding:10,borderRadius:5,borderWidth:1,borderStyle:'solid',margin:10}} href="!#">{number}</a>
                    </li>
                })        
            }
            </ul>
        </div>
    )
}


export default Page ;